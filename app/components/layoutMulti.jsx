import SystemsCard from "@components/chunks/SystemsCard";
import RoutineLayout from "@components/RoutineLayout";

export default function LayoutMulti(props) {
  return (
    <div className="flex h-screen overflow-hidden bg-white font-custom-sans">
      <div className="lg:hidden">
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          <div
            className="relative flex flex-col flex-1 w-full max-w-xs bg-white focus:outline-none"
            tabIndex="0"
          >
            <div className="absolute top-0 right-0 pt-2 -mr-12">
              <button
                className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                type="button"
              >
                <span className="sr-only">Close sidebar</span>
                {/* prettier-ignore */}
                <svg className="w-6 h-6 text-white"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <nav className="mt-5" aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  <a
                    className="flex items-center px-2 py-2 text-base font-medium text-gray-900 bg-gray-100 rounded-md group"
                    href="#"
                  >
                    <span>Dashboard</span>
                  </a>
                  <a
                    className="flex items-center px-2 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
                    href="#"
                  >
                    <span>Calendar</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-1 h-0 bg-gray-100 border-r border-gray-200">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <nav className="flex-1 mt-5" aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  <a
                    className="flex items-center px-2 py-2 font-medium text-gray-900 bg-gray-200 rounded-md group text-md"
                    href="#"
                  >
                    <span>Dashboard</span>
                  </a>
                  <a
                    className="flex items-center px-2 py-2 font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group text-md"
                    href="#"
                  >
                    <span>Calendar</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <div className="lg:hidden">
          <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
            <div>
              <img
                className="w-auto h-8"
                src="https://example.com"
                alt="Workflow"
              />
            </div>
            <div>
              <button
                className="inline-flex items-center justify-center w-12 h-12 -mr-3 text-gray-500 rounded-md hover:text-gray-900"
                type="button"
              >
                <span className="sr-only">Open sidebar</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative z-0 flex flex-1 overflow-hidden">
          <main
            className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last"
            tabIndex="0"
          >
            <div className="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
              <RoutineLayout />
            </div>
          </main>
          <aside className="relative flex-shrink-0 hidden border-r border-gray-200 xl:order-first xl:flex xl:flex-col w-96">
            <div className="absolute inset-0 py-6">
              <h1 className="px-2 mb-5 text-3xl font-bold text-gray-800">
                Systems
              </h1>
              <SystemsCard />
              <SystemsCard />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
