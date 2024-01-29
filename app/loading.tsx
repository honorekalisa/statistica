import { AreaChart } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <AreaChart className="text-primary animate-bounce" size={60}/>
    </div>
  );
};

export default PageLoader;
