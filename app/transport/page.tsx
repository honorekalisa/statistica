import RegisteredVehicles from "@/components/charts/vehicles";
import supabase from "@/supabaseClient";
import React from "react";

const TransportPage = async () => {
  const { data: registeredVehicles, error: registered_vehicles_error } =
    await supabase.from("registered_vehicles").select("*");
  return (
    <div className="py-2 px-4 bg-slate-50 min-h-screen">
      <div className="w-1/2">
        <RegisteredVehicles
          data={registeredVehicles}
          error={registered_vehicles_error}
        />
      </div>
    </div>
  );
};

export default TransportPage;
