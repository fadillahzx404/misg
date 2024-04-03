"use client";

import { DataTable } from "../../components/data-table";
import { columns } from "./columns";

import { useSearchParams } from "next/navigation";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import "@/app/ckEditor.css";
import TableSkleton from "@/components/table-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { addPost } from "./article-provider";
import { Iposts } from "./model";

const Article = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const router = useRouter();

  const [postsData, SetPostsData] = useState<Array<Iposts>>();
  const [loading, SetLoading] = useState(false);

  const fecthPosts = async () => {
    try {
      SetLoading(true);
      const baseurl = "https://app-devuat.msig.co.id/sample-api/api/v1/posts";

      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(baseurl);
      const articles = await response.json().then((value) => value.posts);

      SetPostsData(articles);
    } catch (error) {
      console.log("Error Fecth:", error);
    } finally {
      SetLoading(false);
    }
  };

  useEffect(() => {
    fecthPosts();
    if (message !== null) {
      toast(`${message}`, {
        description: `${Date()}`,
        action: {
          label: "Oke",
          onClick: () => router.replace("/article"),
        },
      });
    }
  }, [message]);

  return (
    <div className="flex flex-col bg-slate-200 min-w-full min-h-screen login relative">
      <div className="absolute -top-10 left-96 bg-blue-300 h-96 w-2 rounded-md"></div>
      <div className="absolute bottom-0 right-96 bg-blue-300 h-96 w-2 rounded-md"></div>
      <div className="absolute top-10 left-36 bg-blue-300 h-4/5 w-2 rounded-md z-10"></div>
      <div className="absolute top-10 right-36 bg-blue-300 h-4/5 w-2 rounded-md z-10"></div>
      <div className="absolute top-36 right-0 bg-blue-300 h-2 w-3/5 rounded-md z-10"></div>
      <div className="absolute bottom-44 left-0 bg-blue-300 h-2 w-3/5 rounded-md z-10"></div>

      <section className="grid my-6 mx-20 gap-5 z-20">
        <p className="font-bold text-blue-500 text-5xl text-center underline underline-offset-8 decoration-2">
          All Posts
        </p>
        <Card>
          <CardContent className="grid">
            {!loading && postsData ? (
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="float-right my-4">Add article</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:min-w-lg">
                    <form className="grid gap-4 py-4" action={addPost}>
                      <DialogHeader>
                        <DialogTitle>Add Article</DialogTitle>
                        <DialogDescription>
                          Please fill the form to add article !!
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Title" className="text-right">
                          Title
                        </Label>
                        <Input
                          id="title"
                          name="title"
                          placeholder=""
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="short_text" className="text-right">
                          Short Text
                        </Label>
                        <Textarea
                          placeholder="Type your text."
                          className="col-span-3"
                          name="short_text"
                        />
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="submit">Add</Button>
                        </DialogClose>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            ) : (
              <div className="justify-self-end my-4">
                <Skeleton className=" w-[100px] h-[20px] rounded-full" />
              </div>
            )}
            {loading && <TableSkleton />}
            {!loading && postsData && (
              <DataTable columns={columns} data={postsData} />
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Article;
