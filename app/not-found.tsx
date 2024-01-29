import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-2">
      <h2 className="text-5xl font-bold text-primary text-center">
        404 - Not Found
      </h2>
      <p>Could not find requested the resource</p>
      <Link href="/">
        <Button className="text-white">Return Home</Button>
      </Link>
    </div>
  );
}
