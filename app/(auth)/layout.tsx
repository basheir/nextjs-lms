import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import Login from "@/public/logo.svg";
import Image from "next/image";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex  min-h-svh flex-col items-center  justify-center">
      <div className="flex w-full max-w-sm  flex-col gap-6">
        <Link href="/" className={buttonVariants({ variant: "outline", className: "absolute left-4 top-4" })}>
          <ArrowLeft className="size-4" />
          Back
        </Link>

        <div className="flex w-full max-w-sm flex-col gap-6">
          <Link className="flex items-center justify-center gap-2 font-mediums" href="/">
            <Image src={Login} alt="HageSkills Logo" width={30} height={30} />
            HageSkills
          </Link>
        </div>
        {children}

        <div className="text-balance text-center text-xs text-muted-foreground">
          By clicking continue, you agree our {" "}
          <span className="hover:text-primary hover:underline">Terms  of service </span> {" "}
          and <span className="hover:text-primary hover:underline">Privacy Policy</span>.
        </div>
      </div>
    </div>
  );
}
