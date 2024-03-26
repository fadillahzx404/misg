"use client";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { useState } from "react";

export default function Register() {
  //FORM
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = async () => {
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "Password with Confirm Password not same ! Please try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } else {
    }
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
                <p>Logo</p>
              </div>

              <div className="grid px-8">
                <CardTitle className="flex justify-center pt-10">
                  <p>Logo</p>
                </CardTitle>
                <CardDescription className="text-center pt-4">
                  Please filling the form to created your new account.
                </CardDescription>

                <form action={signUp}>
                  <div className="grid space-y-4 pt-6">
                    {/* Name Input */}
                    <div className="form-control space-y-1">
                      <Label>Name</Label>
                      <Input
                        required
                        type="name"
                        name="name"
                        placeholder="your name"
                        className="focus-visible:ring-blue-500"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                    {/* Email Input */}

                    <div className="form-control space-y-1">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="focus-visible:ring-blue-500"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                      />
                    </div>

                    {/*Confirm Password Input */}
                    <div className="form-control space-y-1">
                      <Label>Confirm Password</Label>
                      <Input
                        className=" focus-visible:ring-blue-500"
                        type="password"
                        name="confirm_password"
                        placeholder="••••••••"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-5 mt-10 items-center justify-end">
                    <div className="underline text-sm text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-90">
                      <Link href="/login">
                        Already have account? Login Now.
                      </Link>
                    </div>
                    <Button
                      className="bg-blue-500 hover:bg-blue-300 hover:text-black transition-all duration-300 hover:scale-90"
                      // onClick={handleChange}
                    >
                      Register
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
