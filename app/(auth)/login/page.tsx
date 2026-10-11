import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { GitBranchPlus } from "lucide-react";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Welcome back!</h1>
      </CardHeader>
      <CardDescription>Login with your Github account Email</CardDescription>
      <CardContent className="grid flex-col gap-4">
        <Button className="w-full" variant="outline">
          <GitBranchPlus className="size-4" />
          Sign in with Github
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
