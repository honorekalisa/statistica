import KeyFigures from "@/components/ui/key-figures";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 py-2 px-8 bg-slate-50 min-h-screen">
      <p className="text-sm">Key Figures</p>
      <KeyFigures />
    </div>
  );
}
