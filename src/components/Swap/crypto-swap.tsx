import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '../ui/input';
import { Bolt } from 'lucide-react';
import { FaBtc } from 'react-icons/fa6';
import { RiBnbFill } from 'react-icons/ri';

export default function CryptoSwap() {
  return (
    <Card className="my-16 w-[800px] border-[#464646] bg-transparent">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">SWAP TOKENS</CardTitle>
          <Bolt className="h-6 w-6 text-white" />
        </div>
      </CardHeader>
      <CardContent className="">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex gap-0.5">
            <div className="relative flex items-center gap-4">
              <Input
                type="number"
                placeholder="0.00"
                className="h-28 rounded-md border-none bg-[#1E1E1E] pl-5 text-4xl font-bold text-white focus-visible:border-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
              />
              <p className="absolute left-5 top-[5rem] mt-0.5 text-sm text-gray-400">$0</p>
              <Button className="absolute right-5 flex items-center gap-2 rounded-none bg-black font-bold text-gray-400 hover:bg-black/80">
                <FaBtc className="h-6 w-6 text-white" /> BTC {'>'}
              </Button>
              <p className="absolute right-5 top-[5rem] mt-0.5 text-sm text-white">
                Balance <span className="text-blue-600">24,240</span>
              </p>
            </div>
            <div className="relative flex items-center gap-4">
              <Input
                type="number"
                placeholder="0.00"
                className="h-28 rounded-md border-none bg-[#1E1E1E] pl-5 text-4xl text-white focus-visible:border-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
              />
              <p className="absolute left-5 top-[5rem] mt-0.5 text-sm text-gray-400">$0</p>
              <Button className="absolute right-5 flex items-center gap-2 rounded-none bg-black font-bold text-gray-400 hover:bg-black/80">
                <RiBnbFill className="h-6 w-6 text-white" /> BNB {'>'}
              </Button>
              <p className="absolute right-5 top-[5rem] mt-0.5 text-sm text-white">
                Balance <span className="text-blue-600">24,240</span>
              </p>
            </div>
          </div>
          <Button className="w-1/4 rounded-lg rounded-bl-none rounded-tr-none bg-purple-600 text-white hover:bg-purple-600/80">
            SWAP TOKENS
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white">1 BTC = 32.4039 ETH</p>
            <p className="text-sm text-blue-600">Free exchange</p>
          </div>
          <p className="text-sm text-gray-400">Updated 4s</p>
        </div>
      </CardContent>
    </Card>
  );
}
