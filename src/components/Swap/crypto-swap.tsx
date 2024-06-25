import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Bolt } from "lucide-react";
import { FaBtc } from "react-icons/fa6";
import { RiBnbFill } from "react-icons/ri";

export default function CryptoSwap() {
  return (
    <Card className="w-[800px] border-[#464646] my-16 bg-transparent">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white text-xl">SWAP TOKENS</CardTitle>
          <Bolt className="text-white w-6 h-6" />
        </div>
      </CardHeader>
      <CardContent className="">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex gap-0.5">
            <div className="flex items-center gap-4 relative">
              <Input
                type="number"
                placeholder="0.00"
                className="bg-[#1E1E1E] h-28 text-white font-bold text-4xl rounded-md pl-5 border-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
              />
              <p className="text-gray-400 absolute left-5 top-[5rem] mt-0.5 text-sm">
                $0
              </p>
              <Button className="flex items-center gap-2 font-bold absolute right-5 rounded-none bg-black">
                BNB {">"}
              </Button>
              <p className="text-white absolute right-5 top-[5rem] mt-0.5 text-sm">
                Balance <span className="text-blue-600">24,240</span>
              </p>
            </div>
            <div className="flex items-center gap-4 relative">
              <Input
                type="number"
                placeholder="0.00"
                className="bg-[#1E1E1E] h-28 text-white text-4xl rounded-md pl-5 border-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
              />
              <p className="text-gray-400 absolute left-5 top-[5rem] mt-0.5 text-sm">
                $0
              </p>
              <Button className="flex items-center gap-2 font-bold absolute right-5 rounded-none bg-black">
                BTC {">"}
              </Button>
              <p className="text-white absolute right-5 top-[5rem] mt-0.5 text-sm">
                Balance <span className="text-blue-600">24,240</span>
              </p>
            </div>
          </div>
          <Button className="w-1/4 bg-purple-600 text-white rounded-lg rounded-tr-none rounded-bl-none hover:bg-purple-600/80">
            SWAP TOKENS
          </Button>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white">1 BTC = 32.4039 ETH</p>
            <p className="text-sm  text-blue-600">Free exchange</p>
          </div>
          <p className="text-sm  text-gray-400">Updated 4s</p>
        </div>
      </CardContent>
    </Card>
  );
}
