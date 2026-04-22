export const GridLines = () => {
  return (
    <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-6 md:px-10 xl:px-12 w-full h-full">
      <div className="h-full w-[1px] bg-zinc-950/5"></div>
      <div className="h-full w-[1px] bg-zinc-950/5 hidden md:block"></div>
      <div className="h-full w-[1px] bg-zinc-950/5 hidden lg:block"></div>
      <div className="h-full w-[1px] bg-zinc-950/5 hidden xl:block"></div>
      <div className="h-full w-[1px] bg-zinc-950/5"></div>
    </div>
  );
};
