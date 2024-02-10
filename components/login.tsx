"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { supabaseClient } from "@/supabaseClient";
import { LogIn } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export function LoginDialog() {
  async function signInWithGoogle() {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 text-white">
          <LogIn size={15} />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Sign in to <span className="text-primary">Statistica</span>
          </DialogTitle>
          <DialogDescription>to continue to our platform</DialogDescription>
        </DialogHeader>
        <Button
          onClick={signInWithGoogle}
          className="flex my-4 items-center text-gray-600 justify-center gap-2"
          variant={"outline"}
        >
          <FcGoogle size={20} />
          Continue with Google
        </Button>
        <DialogFooter>
          <div className="text-xs">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
