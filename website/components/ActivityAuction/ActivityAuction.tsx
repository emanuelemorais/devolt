import { ClipboardList } from "lucide-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  
]

export default function ActivityAuction() {
    return (
        <div className="w-[63%] max-w-full bg-[#080908] rounded-md border-2 border-[#161d15] min-h-[100%] px-6 py-10">
            <div className="flex gap-2">
                <ClipboardList className="text-[#7FEA52]" size={24} />
                <p className="text-xl pb-6">Activity</p>
            </div>

            <div className="h-[calc(100vh-200px)] max-h-[600px] overflow-y-auto custom-scrollbar">
              <Table className="min-w-full">
                  <TableCaption>A list of bids made so far.</TableCaption>
                  <TableHeader>
                      <TableRow>
                          <TableHead>Bidder</TableHead>
                          <TableHead>Price per token</TableHead>
                          <TableHead>Amount</TableHead>
                      </TableRow>
                  </TableHeader>
                  <TableBody>
                      {invoices.map((invoice) => (
                          <TableRow key={invoice.invoice}>
                              <TableCell className="font-medium">{invoice.invoice}</TableCell>
                              <TableCell>{invoice.paymentStatus}</TableCell>
                              <TableCell>{invoice.paymentMethod}</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
            </div>


        </div>
    );
}