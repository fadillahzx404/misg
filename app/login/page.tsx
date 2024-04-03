"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

import ErrorParam from "@/components/ErrorParam";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const signIn = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (email == "user@gmail.com" && password == "12345678") {
      return redirect("/article");
    }
    return redirect("/login?message=Check your email or password input.");
  };

  return (
    <div className="flex flex-col bg-slate-200 min-w-full min-h-screen login relative">
      <div className="absolute -top-10 left-96 bg-blue-300 h-96 w-2 rounded-md"></div>
      <div className="absolute bottom-0 right-96 bg-blue-300 h-96 w-2 rounded-md"></div>
      <div className="absolute top-10 left-36 bg-blue-300 h-4/5 w-2 rounded-md z-10"></div>
      <div className="absolute top-10 right-36 bg-blue-300 h-4/5 w-2 rounded-md z-10"></div>
      <div className="absolute top-36 right-0 bg-blue-300 h-2 w-3/5 rounded-md z-10"></div>
      <div className="absolute bottom-44 left-0 bg-blue-300 h-2 w-3/5 rounded-md z-10"></div>

      <section className="flex flex-1 justify-center items-center z-20">
        <Card className="px-4 drop-shadow-[0_20px_20px_rgba(2,132,199,0.25)] flex justify-center items-center">
          <CardContent>
            <div className="flex gap-5 divide-x pt-4">
              <div className="grid justify-center items-center">
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150268421.jpg?w=740&t=st=1706560593~exp=1706561193~hmac=f3333f0ba82f3b7e69cd22dde4817169a1d70e5dcb5044601cc40062b822a92d"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>

              <div className="grid px-8">
                <form action={signIn}>
                  <CardTitle className="flex justify-center pt-10">
                    Logo
                  </CardTitle>
                  <CardDescription className="text-center pt-4">
                    Please input your email and password to continue.
                  </CardDescription>
                  <div className="text-sm pt-2">
                    <ErrorParam />
                  </div>
                  <div className="grid space-y-4 pt-4">
                    {/* Email Input */}

                    <div className="form-control space-y-1">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="focus-visible:ring-blue-500"
                        required
                      />
                    </div>
                    {/* Password Input */}
                    <div className="form-control space-y-1">
                      <Label>Password</Label>
                      <Input
                        className=" focus-visible:ring-blue-500"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-5 mt-10 items-center justify-end">
                    <div className="underline text-sm text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-90">
                      <Link href="/register">
                        Don't Have Account? Register Here.
                      </Link>
                    </div>

                    <Button
                      className="bg-blue-500 hover:bg-blue-300 hover:text-black transition-all duration-300 hover:scale-90"
                      type="submit"
                    >
                      Login
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
