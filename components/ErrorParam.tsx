"use client";

import { useSearchParams } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
const ErrorParam = () => {
  const searchParams = useSearchParams();

  const message = searchParams.get("message");

  return message ? (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="text-xs">{message}</AlertDescription>
    </Alert>
  ) : (
    ""
  );
};

export default ErrorParam;
