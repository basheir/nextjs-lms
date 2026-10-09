import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-bold">Welcome back!</h1>
      </CardHeader>
      <CardDescription>
        Login with your Github account Email
      </CardDescription>
    </Card>
  );
}
