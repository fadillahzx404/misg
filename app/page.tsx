import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 relative">
      <div className="absolute -top-10 left-96 bg-blue-300 h-96 w-2 rounded-md"></div>
      <div className="absolute bottom-0 right-96 bg-blue-300 h-96 w-2 rounded-md"></div>
      <div className="absolute top-10 left-36 bg-blue-300 h-4/5 w-2 rounded-md z-10"></div>
      <div className="absolute top-10 right-36 bg-blue-300 h-4/5 w-2 rounded-md z-10"></div>
      <div className="absolute top-36 right-0 bg-blue-300 h-2 w-3/5 rounded-md z-10"></div>
      <div className="absolute bottom-44 left-0 bg-blue-300 h-2 w-3/5 rounded-md z-10"></div>

      <div className="z-20 bg-white p-14 rounded-md shadow-lg shadow-blue-300 flex flex-col">
        <p className="text-2xl font-bold">Hello Welcome.</p>
        <p className="mb-2">Select menu one bellow.</p>

        <div className="flex gap-3 place-content-center">
          <Link href="/login">
            <Button className="bg-blue-500 hover:bg-blue-300 hover:text-black transition-all duration-300 hover:scale-90">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-blue-500 hover:bg-blue-300 hover:text-black transition-all duration-300 hover:scale-90">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
