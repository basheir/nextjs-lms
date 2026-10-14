
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { GitBranchPlus, Loader } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useTransition } from "react";

export default function LoginPage() {
  const [isGitHubPending, startGitHubTransition] = useTransition()


  async function signInWithGithub() {
    startGitHubTransition(async () => {
      await authClient.signIn.social(
        {
          provider: "github",
          callbackURL: "/",
          fetchOptions: {
            onSuccess: () => {
              toast.success("Successfully signed in with Github");
            },
            onError: (error) => {
              toast.error("Internal server error, please try again later");
            }
          },
        }
      );
    });
  }

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Welcome back!</h1>
      </CardHeader>
      <CardDescription>Login with your Github account Email</CardDescription>
      <CardContent className="grid flex-col gap-4">
        <Button disabled={isGitHubPending} onClick={signInWithGithub} className="w-full" variant="outline">

          {
            isGitHubPending ? (
              <>
                <Loader className="size-4 animate-spin" />
                <span>Loading...</span></>
            ) : (
              <>
                <GitBranchPlus className="size-4" />
                Sign in with Github</>
            )
          }
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">Or continue with</span>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <Button>Continue with Email</Button>
        </div>
      </CardContent>
    </Card>
  );
}
