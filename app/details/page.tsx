import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
                  <TableCaption>Article</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">id</TableHead>
                      <TableHead>userid</TableHead>
                      <TableHead>title</TableHead>
                      <TableHead>short_text</TableHead>
                      <TableHead>image</TableHead>
                      <TableHead>external_image</TableHead>
                      <TableHead>action</TableHead>
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
                        {articles.post.image}
                      </TableCell>
                      <TableCell className="text-right">
                        {articles.post.external_image}
                      </TableCell>
                      <TableCell className="text-right">
                        <a href="/article">Back</a>
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
