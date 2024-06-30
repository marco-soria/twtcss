

export const Tickets = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-900 pb-10 ">
        <div className=" mx-auto pt-20 max-w-screen-lg text-zinc-900 dark:text-zinc-200">
        <h2 className="">Tickets</h2>
        <table className="mt-5 table w-full border-collapse border border-zinc-500">
          <thead className="text-lg font-bold">
            <td className="border border-zinc-500 p-3">Tickets</td>
            <td className="border border-zinc-500 p-3">Price</td>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-500 px-3 py-2">
                Single day ticket
              </td>
              <td className="border border-zinc-500 px-3 py-2">£30</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 px-3 py-2">7 day ticket</td>
              <td className="border border-zinc-500 px-3 py-2">£100</td>
            </tr>
          </tbody>
          <caption className="caption-bottom">
            Once they're gone, they're gone!
          </caption>
        </table>
        </div>
    </div>
  )
}
