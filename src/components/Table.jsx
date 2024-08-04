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
import { Button } from "@/components/ui/button";

const invoices = [
  {
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Processing",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Failed",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Processing",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Failed",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Processing",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Failed",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Processing",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Failed",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Processing",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Failed",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Processing",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Failed",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Processing",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Failed",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Processing",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Failed",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Processing",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
  {
    orderId: "#281209",
    status: "Failed",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: 1125.0,
  },
];

const TableDemo = () => {
  return (
    <div className="">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="text-[14px] text-gray-600">
              ORDER ID
            </TableHead>
            <TableHead className="text-[14px] text-gray-600">STATUS</TableHead>
            <TableHead className="text-[14px] text-gray-600">
              TRANSACTION ID
            </TableHead>
            <TableHead className="text-[14px] text-gray-600">
              REFUND DATE
            </TableHead>
            <TableHead className="text-right text-[14px] text-gray-600">
              ORDER AMOUNT
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium text-sky-600">
                {invoice.orderId}
              </TableCell>
              <TableCell className="flex items-center">
                {invoice.status.startsWith("S") ? (
                  <>
                    <div className="rounded-full w-3 h-3 bg-green-500"></div>
                    <p className="ml-[4px] text-[14px]"> {invoice.status}</p>
                  </>
                ) : invoice.status.startsWith("P") ? (
                  <>
                    <div className="rounded-full w-3 h-3 bg-gray-500"></div>
                    <p className="ml-[4px] text-[14px]"> {invoice.status}</p>
                  </>
                ) : (
                  <>
                    <div className="rounded-full w-3 h-3 bg-red-500"></div>
                    <p className="ml-[4px] text-[14px]"> {invoice.status}</p>
                  </>
                )}
              </TableCell>
              <TableCell className="text-[14px]">
                {invoice.transactionId}
              </TableCell>
              <TableCell className="text-[14px]">
                {invoice.refundDate}
              </TableCell>
              <TableCell className="text-right text-[14px]">
                ₹ {invoice.orderAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
};

export default TableDemo;
