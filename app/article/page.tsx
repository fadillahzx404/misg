import { DataTable } from "../../components/data-table";

import { columns } from "./columns";

import {
  Dialog,
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
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";

const Article = async () => {
  const baseurl = "https://app-devuat.msig.co.id/sample-api/api/v1/posts";
  const response = await fetch(baseurl);
  const articles = await response.json();

  const addPost = async (formData: any) => {
    "use server";
    const res = await fetch(baseurl);

    const titleI = formData.get("title") as string;
    const shortText = formData.get("short_title") as string;

    const posted = await fetch(baseurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: randomUUID,
        user_id: randomUUID,
        title: titleI,
        short_text: shortText,
        content:
          "<h1>The three soldiers wandered about for them, but.</h1><p>Vel fuga et magni et consequatur sed. Vero mollitia est et consequatur beatae et non.</p>",
        image: "https://source.unsplash.com/random/800x600",
        created_at: Date.now.toString,
      }),
    });

    return redirect("/article");
  };

  return (
    <div className="flex flex-col bg-slate-200 min-w-full min-h-screen login relative">
      <section className="grid my-6 mx-20 gap-5 z-20">
        <p className="text-black text-4xl text-center underline">All Posts</p>
        <Card>
          <CardContent className="grid">
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="float-right my-4">Add article</Button>
                </DialogTrigger>
                <DialogContent className="sm:min-w-lg">
                  <DialogHeader>
                    <DialogTitle>Add Article</DialogTitle>
                    <DialogDescription>
                      Please fill the form to add article !!
                    </DialogDescription>
                  </DialogHeader>
                  <form className="grid gap-4 py-4" action="">
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
                      />
                    </div>
                    <DialogFooter>
                      <Button type="submit">Add</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <DataTable columns={columns} data={articles.posts} />
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Article;
