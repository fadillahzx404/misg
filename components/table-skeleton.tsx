import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Skeleton } from "@/components/ui/skeleton";

const TableSkleton = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {[...Array(4)].map((x, i) => (
              <TableHead>
                <Skeleton className="w-[100px] h-[20px] rounded-full" />
              </TableHead>
            ))}
            <TableHead className="float-right place-content-center">
              <Skeleton className="w-[50px] h-[20px] rounded-full" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(5)].map((x, i) => (
            <TableRow>
              {[...Array(4)].map((x, i) => (
                <TableCell>
                  <Skeleton className="w-[100px] h-[40px] rounded-full" />
                </TableCell>
              ))}
              <TableCell className="float-right">
                <Skeleton className="w-[50px] h-[40px] rounded-full" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableSkleton;
