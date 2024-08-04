import React from "react";
import DashCard from "./DashCard";

const cardsData = [
  {
    amount: 2312.23,
    ordersNumber: 12,
    title: "Next payout",
    bottom: true,
    orders: true,
  },
  {
    amount: 92312.2,
    ordersNumber: 13,
    title: "Amount Pending",
    bottom: false,
    orders: true,
  },
  {
    amount: 2392312.19,
    ordersNumber: 12,
    title: "Amount Processed",
    bottom: false,
    orders: false,
  },
];

const DashCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-zinc-100">
      {cardsData.map((card) => (
        <DashCard
          amount={card.amount}
          bottom={card.bottom}
          orders={card.orders}
          ordersNumber={card.ordersNumber}
          title={card.title}
        />
      ))}
    </div>
  );
};

export default DashCards;
