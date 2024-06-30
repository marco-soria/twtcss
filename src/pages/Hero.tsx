

export const Hero = () => {
  return (
    <div
    
    className="flex h-[calc(100vh-200px)] min-h-[400px] flex-col items-center justify-center bg-cover bg-fixed bg-center bg-hero text-zinc-200"
  >
    <div
      className="rounded-xl bg-white/30 px-4 py-2 text-center backdrop-blur-md"
    >
      <div className="relative">
        <img src="/images/logo.png" width="175" />
        <div className="mb-5 mt-[-70px] flex items-center justify-center">
          <div
            className="flex h-14 w-14 items-center justify-center gap-1 rounded-full bg-pink-500"
          >
            <div
              className="h-2 w-1 animate-wavey rounded-full bg-pink-300"
            ></div>
            <div
              className="h-3 w-1 animate-wavey rounded-full bg-pink-200 animation-delay-200"
            ></div>
            <div
              className="h-4 w-1 animate-wavey rounded-full bg-pink-100 animation-delay-[150ms]"
            ></div>
            <div
              className="h-3 w-1 animate-wavey rounded-full bg-pink-200 animation-delay-300"
            ></div>
            <div
              className="h-2 w-1 animate-wavey rounded-full bg-pink-300 animation-delay-[75ms]"
            ></div>
          </div>
        </div>
      </div>
      <div className="text-5xl font-bold">
        tw:<span className="text-sky-900">mf</span>
      </div>
    </div>
    <div className="mt-3 text-sm font-bold">
      Keep me updated with news and promotions
    </div>
    <form className="mt-3 flex gap-2">
      <input
        type="email"
        placeholder="Email"
        className="rounded-sm border border-white/40 bg-white/30 p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-1 outline-pink-500 backdrop-blur-md focus:outline-2 focus:outline-solid"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-sm bg-pink-500 px-4 py-2 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20"
      >
        Subscribe
      </button>
    </form>
  </div>
  )
}
