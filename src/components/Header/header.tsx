import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

//
export function SiteHeader() {
  return (
    <header className="backdrop-blur sticky top-0 z-40 w-full h-[60px] flex justify-center items-center text-white">
      <div className="container flex justify-between items-center w-full max-w-6xl px-4">
        <div className="hidden sm:flex sm:flex-1 justify-start">Blockchain</div>
        <MainNav />
        <div className="flex flex-1 justify-end">
          <nav className="flex items-center space-x-4">
            <Link
              href=""
              className={cn(
                buttonVariants({ size: "default" }),
                " bg-black hover:bg-black/80 text-white rounded-lg rounded-tr-none rounded-bl-none border-2 border-purple-600"
              )}
            >
              Log IN
            </Link>
            <Link
              href=""
              className={cn(
                buttonVariants({ size: "default" }),
                "bg-purple-600 text-white rounded-lg rounded-tr-none rounded-bl-none hover:bg-purple-600/80"
              )}
            >
              SIGN UP
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function MainNav() {
  return (
    <nav className="flex justify-center items-center gap-6 text-">
      <Link href="/" className="">
        Exchange
      </Link>
      <Link href="/" className="hover:underline">
        Last Transactions
      </Link>
      <Link href="/" className="hover:underline">
        Invite Friend
      </Link>
      <Link href="" className="hover:underline">
        Notifications
      </Link>
    </nav>
  );
}
