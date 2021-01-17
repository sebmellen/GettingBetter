import Image from "next/image";

export default function SystemsCard() {
  return (
    <div className="px-2 py-1 my-4 text-gray-800 border border-gray-200 rounded-lg shadow cursor-pointer hover:text-gray-900 hover:bg-gray-100 hover:shadow-inner">
      <div className="grid grid-cols-6 py-2 gap-x-1">
        <div className="col-start-1 col-end-2 px-2 align-top">
          <div className="pt-2 my-auto align-top">
            <Image
              src="/assettest.svg"
              alt="me"
              width="64"
              height="64"
              className="w-full"
            />
          </div>
        </div>
        <div className="col-start-2 col-end-7">
          <h2 className="text-xl font-medium">Morning and Evening</h2>
          <p className="text-sm">
            This system is for doing a bunch of stuff regarding etc etc.
          </p>
        </div>
      </div>
    </div>
  );
}
