"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

const ArticleDetails = async ({
  params,
}: {
  params: { articleId: number };
}) => {
  const postId = params.articleId;

  const baseurl = `https://app-devuat.msig.co.id/sample-api/api/v1/posts/${postId}`;
  const response = await fetch(baseurl);
  const articles = await response.json();

  return (
    <div className="flex flex-col bg-slate-200 min-w-full min-h-screen login relative">
      <p className="text-black text-4xl text-center underline my-5">
        Detail Post {postId}
      </p>
      <section className="flex z-20 mx-20 justify-center">
        <Card className="px-4 drop-shadow-[0_20px_20px_rgba(2,132,199,0.25)]">
          <CardContent className="p-8">
            <form action="">
              <div className="flex gap-4">
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="user_id" className="text-right">
                      User Id
                    </Label>
                    <Input
                      id="user_id"
                      value={articles.post.user_id}
                      className="col-span-3"
                      readOnly={true}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                      Title
                    </Label>
                    <Input
                      id="title"
                      value={articles.post.title}
                      className="col-span-3"
                      readOnly={true}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="short_text" className="text-right">
                      Short Text
                    </Label>
                    <Textarea
                      className="col-span-3"
                      id="short_text"
                      readOnly={true}
                    >
                      {articles.post.short_text}
                    </Textarea>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="external_image" className="text-right">
                      External Image
                    </Label>
                    <Input
                      id="external_image"
                      value={articles.post.external_image}
                      className="col-span-3"
                      readOnly={true}
                    />
                  </div>
                </div>
                <img
                  src={articles.post.image}
                  width={400}
                  className="rounded-md"
                  alt=""
                />
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
