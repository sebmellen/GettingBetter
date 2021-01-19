export default function RoutineLayout() {
  return (
    <div className="my-4">
      <div class="border-b-4 border-gray-100 pb-4 mb-4">
        <h1 className="text-3xl font-bold text-gray-900 ">Routines</h1>
        <h2 className="text-2xl italic font-semibold text-gray-600 ">
          <span class="not-italic text-gray-400">➔</span> Morning And Evening
        </h2>
      </div>
      <div className="flex flex-col my-2 lg:-mx-2">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full pt-2 pb-10 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-lg sm:rounded-lg">
              <div className="">
                <h2 className="px-6 py-2 text-lg font-semibold text-white uppercase bg-gray-600 ">
                  Early Morning
                </h2>

                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-sm font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        Task
                      </th>
                      <th className="px-6 py-3 text-sm font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        Description
                      </th>

                      <th className="px-6 py-3 text-sm font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                        Role
                      </th>
                      <th className="px-6 py-3 bg-gray-50" />
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 leading-5 text-gray-700 whitespace-no-wrap text-md">
                        Jane Cooper adfasd asd asdfasdf
                      </td>
                      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                        Regional Paradigm Technician
                      </td>

                      <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap">
                        Admin
                      </td>
                      <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap">
                        <a
                          href="#"
                          className="text-green-600 hover:text-green-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
