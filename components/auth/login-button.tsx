"use client";

import { useRouter } from "next/navigation";

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: "redirect" | "modal";
  asChild?: boolean;
};

export default function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) {
  const router = useRouter();

  const onclick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>Modal implementation</span>;
  }

  return (
    <span onClick={onclick} className="cursor-pointer">
      {children}
    </span>
  );
}
