
export default function Loading() {
  return (
    <div className="px-5 py-4 border w-fit rounded-3xl">
      <div className="w-60 animate-pulse bg-slate-300 h-6 rounded-3xl my-1"></div>
      <div className="w-64 animate-pulse bg-slate-300 h-28 rounded-3xl my-2"></div>
      <div className="w-32 animate-pulse bg-slate-300 h-6 rounded-3xl my-2"></div>
      <div className="flex w-auto justify-between my-2">
        <div className="w-32 animate-pulse bg-slate-300 h-6 rounded-3xl"></div>
        <div className="w-12 animate-pulse bg-slate-300 h-6 rounded-3xl"></div>
      </div>
    </div>
  );
}
