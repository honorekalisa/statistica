import Learners from "@/components/charts/learners";
import TopFigures from "@/components/dashboard/top-figures";
import KeyFigures from "@/components/ui/key-figures";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 py-2 px-4 lg:px-8 bg-slate-50 min-h-screen">
      <KeyFigures />
      <div className="flex flex-col lg:flex-row items-start gap-4 lg:justify-between">
        <TopFigures />
        <Learners />
      </div>
    </div>
  );
}
