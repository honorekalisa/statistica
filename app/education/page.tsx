import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import supabase from "@/supabaseClient";
import { formatData } from "@/lib/utils";

const EducationPage = async () => {
  const { data: pieChartData, error } = await supabase
    .from("school_gender_stats")
    .select("*");

  if (!pieChartData) {
    return null; // or handle the null case accordingly
  }

  return (
    <div className="px-4 py-2 bg-slate-50 min-h-screen">
      <h1 className="font-semibold text-sm">
        Total learners in Rwanda education system
      </h1>
      <DataTable columns={columns} data={formatData(pieChartData)} />
    </div>
  );
};

export default EducationPage;
