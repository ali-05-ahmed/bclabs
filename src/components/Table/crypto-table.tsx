import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '../ui/button';
import BTC from '/public/Icons/btc.png';
import ETH from '/public/Icons/eth.png';
import DODGE from '/public/Icons/dodge.png';
import ALGO from '/public/Icons/algo.png';
import DOT from '/public/Icons/dot.png';
import UNI from '/public/Icons/uni.png';
import COMP from '/public/Icons/comp.png';
import Image from 'next/image';

const data = [
  {
    name: 'BTC',
    lastTrade: '63,000.00',
    last24: '0.00',
    Change24: '0.00',
    img: BTC,
  },
  {
    name: 'ETH',
    lastTrade: '3,408.90',
    last24: '0.00',
    Change24: '0.00',
    img: ETH,
  },
  {
    name: 'DOGDE',
    lastTrade: '0.15',
    last24: '0.00',
    Change24: '0.00',
    img: DODGE,
  },
  {
    name: 'ALGO',
    lastTrade: '0.15',
    last24: '0.00',
    Change24: '0.00',
    img: ALGO,
  },
  {
    name: 'DOT',
    lastTrade: '5.64',
    last24: '0.00',
    Change24: '0.00',
    img: DOT,
  },
  {
    name: 'UNI',
    lastTrade: '9.79',
    last24: '0.00',
    Change24: '0.00',
    img: UNI,
  },
  {
    name: 'COMP',
    lastTrade: '45.67',
    last24: '0.00',
    Change24: '0.00',
    img: COMP,
  },
];
export default function CryptoTable() {
  return (
    <section className="rounded-xl border border-[#464646] bg-black/60 p-5 backdrop-blur-lg backdrop-filter">
      <Table className="w-[800px]">
        <TableHeader>
          <TableRow className="border-[#464646] hover:bg-transparent">
            <TableHead className="w-[200px] text-white">ASSETS</TableHead>
            <TableHead className="text-white">LAST TRADE</TableHead>
            <TableHead className="text-white">24H%</TableHead>
            <TableHead className="text-white">24H CHANGE</TableHead>
            <TableHead className="pr-6 text-right text-blue-600">MORE {'>'}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((name) => (
            <TableRow key={name.name} className="border-none hover:bg-transparent">
              <TableCell className="flex items-center gap-1 font-medium">
                <Image
                  src={name.img}
                  placeholder="blur"
                  alt={name.name}
                  height={1000}
                  width={1000}
                  className="h-16 w-16"
                />
                <div>
                  <span className="text-white">{name.name}/</span>USD
                </div>
              </TableCell>
              <TableCell className="text-white">${name.lastTrade}</TableCell>
              <TableCell>{name.last24}%</TableCell>
              <TableCell>{name.Change24}%</TableCell>
              <TableCell className="flex justify-end">
                <Button className="w-1/2 rounded-none bg-green-500 text-gray-900 hover:bg-green-500/80">TRADE</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
