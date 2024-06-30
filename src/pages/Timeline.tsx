

export const Timeline = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-900 ">
        <div className=" mx-auto pt-20 max-w-screen-lg text-zinc-900 dark:text-zinc-200">
        <h2 className="">Lineup</h2>
        <p>
          Follow the timetable and stage to ensure you don't miss your favourite
          artists
        </p>
        <div
          className="relative mt-5 rounded-lg bg-slate-800 px-2 py-4 text-zinc-200"
        >
          <div
            className="absolute left-1/2 top-0 -ml-[8px] h-full w-4 rounded-full bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900"
          >
            <div className="sticky top-1/2">
              <div className="relative size-4">
                <div
                  className="absolute size-4 animate-ping rounded-full bg-pink-500 opacity-75"
                ></div>
                <div className="relative size-4 rounded-full bg-rose-500"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="my-4 rounded-lg bg-slate-900 p-2">1st July</h4>
            </div>
            <div></div>
            <div className="text-right">
              <div className="font-bold">Jackie Chaston</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
            <div></div>
            <div></div>
            <div>
              <div className="font-bold">Jackie Chaston</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
            <div>
              <h4 className="my-4 rounded-lg bg-slate-900 p-2">1st July</h4>
            </div>
            <div></div>
            <div className="text-right">
              <div className="font-bold">Jackie Chaston</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
            <div></div>
            <div></div>
            <div>
              <div className="font-bold">Jackie Chaston</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
