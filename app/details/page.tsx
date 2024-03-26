import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const postId = 1;

const baseurl = `https://app-devuat.msig.co.id/sample-api/api/v1/posts/${postId}`;

const ArticleDetails = async () => {
  const response = await fetch(baseurl);
  const articles = await response.json();

  return (
    <div className="flex flex-col bg-slate-200 min-w-full min-h-screen login relative">
      <section className="flex flex-1 justify-center items-center z-20 mx-20">
        <Card className="px-4 drop-shadow-[0_20px_20px_rgba(2,132,199,0.25)] flex justify-center items-center">
          <CardContent>
            <div className="flex gap-5 divide-x pt-4 ">
              <div className="grid px-8">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">id</TableHead>
                      <TableHead>userid</TableHead>
                      <TableHead>title</TableHead>
                      <TableHead>short_text</TableHead>
                      <TableHead>image</TableHead>
                      <TableHead>external_image</TableHead>
                      <TableHead className="text-end">action</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        {articles.post.id}
                      </TableCell>
                      <TableCell>{articles.post.user_id}</TableCell>
                      <TableCell>{articles.post.title}</TableCell>
                      <TableCell>{articles.post.short_text}</TableCell>
                      <TableCell className="text-right">
                        <img
                          src={articles.post.image}
                          className="rounded-md"
                          alt=""
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        {articles.post.external_image}
                      </TableCell>
                      <TableCell className="text-end">
                        <Link
                          href="/article"
                          className="hover:bg-yellow-100 hover:text-black transition-all duration-300 hover:scale-90"
                        >
                          <div className="flex gap-2 justify-center items-center bg-yellow-300 p-2 rounded-md">
                            <ArrowLeft size={14} fill="black" />
                            <p>Back</p>
                          </div>
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ArticleDetails;
