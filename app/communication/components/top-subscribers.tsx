"use client";

import { useState } from "react";
import { PostgrestError } from "@supabase/supabase-js";
import ErrorAlert from "@/components/ui/error";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check } from "lucide-react";
import { FaAngleDown } from "react-icons/fa6";

const TopSubscribers = ({
  data,
  error,
}: {
  data: InternetSubscribersData | null;
  error: PostgrestError | null;
}) => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const uniqueYears = Array.from(
    new Set(data?.map((dataItem) => dataItem.year))
  ).sort();

  const filteredData = data?.filter(
    (dataItem) =>
      dataItem.year === selectedYear && dataItem.subscribers !== null
  );

  if (error) {
    return <ErrorAlert message={error.message} />;
  }
  return (
    <div className="rounded-md p-4 w-full bg-white">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium">
          Top operators by internet subscribers
        </h4>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-lg flex items-center gap-2"
            >
              {selectedYear}
              <FaAngleDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by year</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {uniqueYears.map((year) => (
              <DropdownMenuItem
                onClick={() => setSelectedYear(year)}
                key={year}
              >
                {year}
                {selectedYear === year && <Check className="ml-auto h-4 w-4" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader className="bg-slate-50">
          <TableRow className="w-full">
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Operator</TableHead>
            <TableHead className="">Subscribers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData?.slice(0, 4)?.map((subscriber, index) => (
            <TableRow key={subscriber.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">
                {subscriber.operator}
              </TableCell>
              <TableCell>{subscriber.subscribers?.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-xs mt-4 text-center">Source: RURA</p>
    </div>
  );
};

export default TopSubscribers;
