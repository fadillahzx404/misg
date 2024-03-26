import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { randomUUID } from "crypto";

import Link from "next/link";
import { redirect } from "next/navigation";

const baseurl = "https://app-devuat.msig.co.id/sample-api/api/v1/posts";

const AddArticle = async () => {
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
    console.log(posted);
    return redirect("/article");
  };

  return (
    <div className="grid  bg-slate-200 min-w-full min-h-screen relative">
      <section className="grid   justify-center items-center z-20">
        <Card className="px-4 drop-shadow-[0_20px_20px_rgba(2,132,199,0.25)]">
          <CardContent>
            <div className="grid gap-5 pt-4 w-96">
              <p className="text-lg font-bold text-center mb-3">
                Tambah Article
              </p>
              <form action={addPost}>
                <div className="grid w-full gap-1.5 mb-4">
                  <Label>Title</Label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    className="focus-visible:ring-blue-500 w-full"
                    required
                  />
                </div>
                <div className="grid w-full gap-1.5 mb-3">
                  <Label>Short Text</Label>
                  <Textarea
                    name="short_title"
                    className="focus-visible:ring-blue-500 w-full"
                    placeholder="Type your message here."
                  />
                </div>

                <div className="flex float-right gap-3">
                  <Link
                    href="/article"
                    className="p-2 bg-yellow-300 rounded-md hover:bg-yellow-100 hover:text-black transition-all duration-300 hover:scale-90"
                  >
                    Cancel
                  </Link>
                  <Button className=" hover:bg-blue-300 hover:text-black transition-all duration-300 hover:scale-90">
                    Tambah
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default AddArticle;
