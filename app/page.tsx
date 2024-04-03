import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <p className="text-lg font-bold mb-2">Menu</p>
      <div className="flex gap-3">
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
    </main>
  );
}
