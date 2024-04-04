"use client";
import { Button } from "@/components/ui/button";
import { PiExportBold } from "react-icons/pi";
import { CSVLink } from "react-csv";

const Export = ({ data, filename }: { data: any; filename: string }) => {
  return (
    <div>
      <CSVLink data={data} filename={filename}>
        <Button variant={"outline"} size={"sm"} className="text-sm">
          Export
          <PiExportBold className="pl-2 h-6 w-6" />
        </Button>
      </CSVLink>
    </div>
  );
};

export default Export;
