"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


import "@/app/ckEditor.css";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Iposts {
  id: number;
  user_id: number;
  title: string;
  short_text: string;
  image: string;
  content: string;
  external_image: number;
  view_post: any;
}

const ArticleDetails = ({ params }: { params: { articleId: number } }) => {
  const postId = params.articleId;

  const [postData, SetPostData] = useState<Iposts>();
  const [loading, SetLoading] = useState(false);

  const fecthPost = async () => {
    try {
      SetLoading(true);
      const baseurl = `https://app-devuat.msig.co.id/sample-api/api/v1/posts/${postId}`;

      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await fetch(baseurl);
      const article = await response.json().then((val) => val.post);

      SetPostData(article);
    } catch (error) {
      console.log("Error Fecth:", error);
    } finally {
      SetLoading(false);
    }
  };

  useEffect(() => {
    fecthPost();
  }, []);

  return (
    <div className="flex flex-col bg-slate-200 min-w-full min-h-screen login relative">
      <p className="text-black text-4xl text-center underline my-5">
        Detail Post {postId}
      </p>
      <section className="flex z-20 mx-20 justify-center">
        <Card className="px-4 drop-shadow-[0_20px_20px_rgba(2,132,199,0.25)]">
          <CardContent className="p-8">
            {!loading ? (
              ""
            ) : (
              <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please Wait Data Still Process !
              </Button>
            )}
            <form action="">
              <div className="flex gap-4">
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="user_id" className="text-right">
                      User Id
                    </Label>
                    {!loading ? (
                      <Input
                        id="user_id"
                        value={postData?.user_id}
                        className="col-span-3"
                        readOnly={true}
                      />
                    ) : (
                      <Skeleton className="w-full col-span-3 h-8 rounded-lg" />
                    )}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                      Title
                    </Label>
                    {!loading ? (
                      <Input
                        id="title"
                        value={postData?.title}
                        className="col-span-3"
                        readOnly={true}
                      />
                    ) : (
                      <Skeleton className="w-full col-span-3 h-8 rounded-lg" />
                    )}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="short_text" className="text-right">
                      Short Text
                    </Label>
                    {!loading ? (
                      <Textarea
                        className="col-span-3"
                        id="short_text"
                        readOnly={true}
                        value={postData?.short_text}
                      />
                    ) : (
                      <Skeleton className="w-full col-span-3 h-14 rounded-lg" />
                    )}
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <Label
                      htmlFor="short_text"
                      className="col-span-1 text-right"
                    >
                      Content
                    </Label>
                    {!loading ? (
                      <CKEditor
                        editor={ClassicEditor}
                        disabled={true}
                        data={postData?.content}
                      />
                    ) : (
                      <Skeleton className="w-full col-span-3 h-20 rounded-lg" />
                    )}
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="external_image" className="text-right">
                      External Image
                    </Label>
                    {!loading ? (
                      <Input
                        id="external_image"
                        value={postData?.external_image}
                        className="col-span-3"
                        readOnly={true}
                      />
                    ) : (
                      <Skeleton className="w-full col-span-3 h-8 rounded-lg" />
                    )}
                  </div>
                </div>
                {!loading ? (
                  <img
                    src={postData?.image}
                    width={400}
                    className="rounded-md"
                    alt=""
                  />
                ) : (
                  <Skeleton className="w-56 h-12/12 rounded-lg" />
                )}
              </div>
            </form>
            <Link href="/article" className="float-right my-4">
              <Button variant="default">Back</Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ArticleDetails;
