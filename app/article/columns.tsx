"use client";

import {
  CaretSortIcon,
  EyeOpenIcon,
  Pencil2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Iposts } from "./model";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Iposts>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const id: number = row.getValue("id");
      return <div className="text-center">{id}</div>;
    },
  },
  {
    accessorKey: "user_id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User Id
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const userId: number = row.getValue("user_id");
      return <div className="text-center">{userId}</div>;
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const title: string = row.getValue("title");
      return <div className=" w-44">{title}</div>;
    },
  },
  {
    accessorKey: "short_text",
    header: ({ column }) => {
      return (
        <div>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Short Text
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const shortText: string = row.getValue("short_text");
      return <div className=" w-56">{shortText}</div>;
    },
  },

  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image: string = row.getValue("image");

      return (
        <div className="text-right font-medium">
          <img src={image} className="rounded-md w-52" />
        </div>
      );
    },
  },
  {
    accessorKey: "external_image",
    header: "External Image",

    cell: ({ row }) => {
      const external_image: number = row.getValue("external_image");
      return <div className="text-center">{external_image}</div>;
    },
  },
  {
    accessorKey: "action",
    header: ({ column }) => {
      return <p className="text-center">Action</p>;
    },
    cell: ({ row }) => {
      const posts = row.original;
      const router = useRouter();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="p-2 bg-white shadow-md border-none focus-visible:ring-white text-black hover:scale-90 transition-all duration-300 hover:bg-blue-300 place-items-center">
              <span className="pr-2">Action</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="text-center">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => router.push(`/article/detail/${posts.id}`)}
              className="focus:bg-blue-300 hover:font-bold"
            >
              <EyeOpenIcon className="mr-2 h-4 w-4" />
              Detail
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push(`/article/edit/${posts.id}`)}
              className="focus:bg-yellow-300 hover:font-bold"
            >
              <Pencil2Icon className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="py-4 h-2 w-full pl-2 hover:font-bold hover:bg-red-300 border-none shadow-none justify-start text-sm bg-white text-black font-normal">
                  <TrashIcon className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the post !!.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-800 hover:bg-red-600 hover:sclae-90 transition-all duration-300"
                    onClick={() => {
                      toast("Data Has Been Deleted.", {
                        description: `${Date()}`,
                        action: {
                          label: "Oke",
                          onClick: () => {},
                        },
                      });
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
