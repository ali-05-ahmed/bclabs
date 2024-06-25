import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

const data = [
  {
    invoice: "BTC",
    paymentStatus: "63,000.00",
    totalAmount: "0.00",
    paymentMethod: "0.00",
  },
  {
    invoice: "ETH",
    paymentStatus: "3,408.90",
    totalAmount: "0.00",
    paymentMethod: "0.00",
  },
  {
    invoice: "DOGDE",
    paymentStatus: "0.15",
    totalAmount: "0.00",
    paymentMethod: "0.00",
  },
  {
    invoice: "ALGO",
    paymentStatus: "0.15",
    totalAmount: "0.00",
    paymentMethod: "0.00",
  },
  {
    invoice: "DOT",
    paymentStatus: "5.64",
    totalAmount: "0.00",
    paymentMethod: "0.00",
  },
  {
    invoice: "UNI",
    paymentStatus: "9.79",
    totalAmount: "0.00",
    paymentMethod: "0.00",
  },
  {
    invoice: "COMP",
    paymentStatus: "45.67",
    totalAmount: "0.00",
    paymentMethod: "0.00",
  },
];
export default function CryptoTable() {
  return (
    <section className="border border-[#464646] rounded-xl p-5 bg-black/60 backdrop-filter backdrop-blur-lg">
      <Table className="w-[800px]">
        <TableHeader>
          <TableRow className="hover:bg-transparent border-[#464646]">
            <TableHead className="w-[200px] text-white">ASSETS</TableHead>
            <TableHead className="text-white">LAST TRADE</TableHead>
            <TableHead className="text-white">24H%</TableHead>
            <TableHead className="text-white">24H CHANGE</TableHead>
            <TableHead className="text-right pr-6 text-blue-600">
              MORE {">"}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((invoice) => (
            <TableRow
              key={invoice.invoice}
              className="border-none hover:bg-transparent"
            >
              <TableCell className="font-medium ">
                <span className="text-white">{invoice.invoice}/</span>USD
              </TableCell>
              <TableCell className="text-white">
                ${invoice.paymentStatus}
              </TableCell>
              <TableCell>{invoice.totalAmount}%</TableCell>
              <TableCell>{invoice.paymentMethod}%</TableCell>

              <TableCell className="flex justify-end ">
                <Button className="w-1/2 rounded-none bg-green-500 hover:bg-green-500/80 text-gray-900">
                  TRADE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
