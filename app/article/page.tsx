import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Edit2Icon, Trash2Icon } from "lucide-react";
import Link from "next/link";

interface Iposts {
  id: number;
  user_id: number;
  title: string;
  short_text: string;
  image: string;
  external_image: number;
}

const baseurl = "https://app-devuat.msig.co.id/sample-api/api/v1/posts";

const Article = async () => {
  const response = await fetch(baseurl);
  const articles = await response.json();

  return (
    <div className="flex flex-col bg-slate-200 min-w-full min-h-screen login relative">
      <section className="flex flex-1 justify-center items-center z-20">
        <div className="grid mx-20 my-6">
          <Link href="/tambah">
            <Button className="w-24 mb-4">Tambah</Button>
          </Link>

          <Card className="px-4 drop-shadow-[0_20px_20px_rgba(2,132,199,0.25)]    flex justify-center items-center">
            <CardContent>
              <div className="flex gap-5 divide-x pt-4">
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
                    {articles.posts.map((post: Iposts) => {
                      return (
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              {post.id}
                            </TableCell>
                            <TableCell>{post.user_id}</TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.short_text}</TableCell>
                            <TableCell>
                              <img src={post.image} className="rounded-md" />
                            </TableCell>
                            <TableCell>{post.external_image}</TableCell>
                            <TableCell className="text-end">
                              <div className="grid gap-2">
                                <a href="/details">
                                  <div className="flex gap-2 justify-center items-center bg-gray-400 p-2 rounded-md">
                                    <p>Details</p>
                                    <ArrowRight size={14} fill="black" />
                                  </div>
                                </a>
                                <a href="/details">
                                  <div className="flex gap-2 justify-center items-center  bg-yellow-400 p-2 rounded-md">
                                    <p>Edit </p>
                                    <Edit2Icon size={12} fill="black" />
                                  </div>
                                </a>
                                <a href="/details">
                                  <div className="flex gap-2 justify-center items-center  bg-red-400 p-2 rounded-md">
                                    <p>Delete </p>
                                    <Trash2Icon size={12} fill="black" />
                                  </div>
                                </a>
                              </div>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      );
                    })}
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Article;
