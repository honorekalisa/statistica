import Learners from "@/components/charts/learners";
import RegisteredVehicles from "@/components/charts/vehicles";
import TopFigures from "@/components/dashboard/top-figures";
import KeyFigures from "@/components/ui/key-figures";
import supabase from "@/supabaseClient";

export default async function Home() {
  const { data: pieChartData, error } = await supabase
    .from("school_gender_stats")
    .select("*");

  const { data: registeredVehicles, error: registered_vehicles_error } =
    await supabase.from("registered_vehicles").select("*");

  return (
    <div className="flex flex-col gap-2 py-2 px-4 lg:px-8 bg-slate-50 min-h-screen">
      <KeyFigures />
      {/* <div className="flex flex-col lg:flex-row items-start gap-4 lg:justify-between bg-red-50"> */}
      <div className="grid lg:grid-cols-2 place-items-start gap-4 lg:place-content-between">
        <TopFigures />
        <Learners data={pieChartData} error={error} />
        <RegisteredVehicles
          data={registeredVehicles}
          error={registered_vehicles_error}
        />
      </div>
    </div>
  );
}
