"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";

import "@/app/ckEditor.css";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { editEd } from "../../article-provider";

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

const ArticleEdit = ({ params }: { params: { articleId: number } }) => {
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

  const [texteditor, SetTextEditor] = useState("");

  useEffect(() => {
    document.title = `Edit Article | User Id ${postId}`;
    fecthPost();
    SetTextEditor;
  }, []);

  return (
    <div className="flex flex-col bg-slate-200 min-w-full min-h-screen login relative">
      <div className="absolute -top-10 left-96 bg-blue-300 h-96 w-2 rounded-md"></div>
      <div className="absolute bottom-0 right-96 bg-blue-300 h-96 w-2 rounded-md"></div>
      <div className="absolute top-10 left-36 bg-blue-300 h-4/5 w-2 rounded-md z-10"></div>
      <div className="absolute top-10 right-36 bg-blue-300 h-4/5 w-2 rounded-md z-10"></div>
      <div className="absolute top-36 right-0 bg-blue-300 h-2 w-3/5 rounded-md z-10"></div>
      <div className="absolute bottom-44 left-0 bg-blue-300 h-2 w-3/5 rounded-md z-10"></div>

      {!loading ? (
        <p className="font-bold text-blue-500 text-5xl text-center underline underline-offset-8 decoration-2 my-5">
          Edit Post {postId}
        </p>
      ) : (
        <div className="my-5 self-center">
          <Button disabled>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please Wait Data Still Process !
          </Button>
        </div>
      )}
      <div className="flex z-20 mx-20 justify-center">
        <Card className="px-4 drop-shadow-[0_20px_20px_rgba(2,132,199,0.25)]">
          <CardContent className="p-8">
            <form action={editEd}>
              <div className="flex gap-4">
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="user_id" className="text-right">
                      User Id
                    </Label>
                    {!loading ? (
                      <Input
                        id="user_id"
                        name="user_id"
                        readOnly={false}
                        defaultValue={postData?.user_id}
                        className="col-span-3"
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
                        name="title"
                        id="title"
                        defaultValue={postData?.title}
                        className="col-span-3"
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
                        name="short_text"
                        id="short_text"
                        defaultValue={postData?.short_text}
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
                      <>
                        <CKEditor
                          editor={ClassicEditor}
                          data={postData?.content}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            SetTextEditor(data);
                          }}
                        />
                        <input
                          type="hidden"
                          name="content"
                          value={texteditor ? texteditor : postData?.content}
                        />
                      </>
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
                        name="external_image"
                        defaultValue={postData?.external_image}
                        className="col-span-3"
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
              {!loading ? (
                <div className="flex float-right my-4 gap-3">
                  <Link
                    href="/article"
                    className="py-1.5 px-2 font-medium bg-yellow-400 rounded-md transition-all duration-300 hover:scale-90"
                  >
                    Back
                  </Link>
                  <Button
                    type="submit"
                    className="transition-all duration-300 hover:scale-90"
                    variant="default"
                  >
                    Edit
                  </Button>
                </div>
              ) : (
                ""
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArticleEdit;
