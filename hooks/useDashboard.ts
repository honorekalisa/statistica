import supabase from "@/supabaseClient";

const useDashboard = async () => {
  const { data: pieChartData, error: pieChartDataError } = await supabase
    .from("school_gender_stats")
    .select("*");

  const { data: registeredVehicles, error: registered_vehicles_error } =
    await supabase.from("registered_vehicles").select("*");

  const { data: roads_classification, error: roads_classification_error } =
    await supabase.from("roads_classification").select("*");

  const { data: internet_subscribers, error: internet_subscribers_error } =
    await supabase
      .from("internet_subscribers")
      .select("*")
      .order("subscribers", { ascending: false })

  return {
    pieChartData,
    pieChartDataError,
    registeredVehicles,
    registered_vehicles_error,
    roads_classification,
    roads_classification_error,
    internet_subscribers,
    internet_subscribers_error,
  };
};

export default useDashboard;
