import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <p className="text-lg font-bold">Menu</p>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </main>
  );
}
