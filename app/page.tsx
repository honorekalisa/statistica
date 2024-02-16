import Learners from "@/components/charts/learners";
import RegisteredVehicles from "@/components/charts/vehicles";
import TopFigures from "@/components/dashboard/top-figures";
import RoadsClassification from "@/components/charts/roads-classification";
import KeyFigures from "@/components/ui/key-figures";
import useDashboard from "@/hooks/useDashboard";
import TopSubscribers from "@/app/communication/components/top-subscribers";

export default async function Home() {
  const {
    pieChartData,
    pieChartDataError,
    registeredVehicles,
    registered_vehicles_error,
    roads_classification,
    roads_classification_error,
    internet_subscribers,
    internet_subscribers_error,
  } = await useDashboard();

  return (
    <div className="flex flex-col gap-2 py-2 px-4 lg:px-8 bg-slate-50 min-h-screen">
      <KeyFigures />
      {/* <div className="flex flex-col lg:flex-row items-start gap-4 lg:justify-between bg-red-50"> */}
      <div className="grid xl:grid-cols-2 place-items-start gap-4 lg:place-content-between w-full">
        {/* <TopFigures /> */}
        <Learners data={pieChartData} error={pieChartDataError} />
        <RegisteredVehicles
          data={registeredVehicles}
          error={registered_vehicles_error}
        />
        <RoadsClassification
          data={roads_classification}
          error={roads_classification_error}
        />
        <TopSubscribers
          data={internet_subscribers}
          error={internet_subscribers_error}
        />
      </div>
    </div>
  );
}
