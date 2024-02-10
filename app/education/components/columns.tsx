"use client";

import { PieChartType } from "@/lib/data";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<PieChartType>[] = [
  {
    accessorKey: "year",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center cursor-pointer hover:bg-accent hover:text-accent-foreground"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Year
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      return <p>{row.getValue("year")}</p>;
    },
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        {row.original.data.map((item, index) => (
          <p key={index}>{item.gender}</p>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "percentage",
    header: "Percentage",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        {row.original.data.map((item, index) => (
          <p key={index}>{item.percentage}%</p>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        {row.original.data.map((item, index) => (
          <p key={index}>{item.value.toLocaleString()}</p>
        ))}
      </div>
    ),
  },
];
