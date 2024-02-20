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
import Image from "next/image";

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
    <div className="rounded-lg p-4 w-full bg-white">
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
            <TableHead className="w-[80px]">#</TableHead>
            <TableHead>Operator</TableHead>
            <TableHead>Subscribers</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData?.slice(0, 3)?.map((subscriber, index) => (
            <TableRow key={subscriber.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium flex items-center gap-6">
                <Image
                  src={subscriber.profile_picture || "/assets/operator.png"}
                  alt={subscriber.operator}
                  width={40}
                  height={40}
                  unoptimized
                  className="hidden sm:block rounded-full object-contain object-center"
                />
                <p>{subscriber.operator}</p>
              </TableCell>
              <TableCell>{subscriber.subscribers?.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-xs mt-2 text-center">Source: RURA</p>
    </div>
  );
};

export default TopSubscribers;
