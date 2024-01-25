import Footer from "./Footer";
export default function SavedSection() {
  return (
    <>
      <div className="flex justify-between w-[65vw] mx-auto mt-10">
        <p className="text-[#A8A8A8] text-[12px]">
          Only you can see what you've saved
        </p>
        <button className="text-[#0095F6] hover:text-[white] text-[14px]">
          + New Collection
        </button>
      </div>
      <div className="grid grid-cols-2 w-[300px] mx-auto border border-gray-500 rounded-md hover:brightness-150 transitionCs cursor-pointer">
        <div className="bg-gray-800 border border-gray-500 w-full h-[150px]"></div>
        <div className="bg-gray-800 border border-gray-500 w-full h-[150px]"></div>
        <div className="bg-gray-800 border border-gray-500 w-full h-[150px]"></div>
        <div className="bg-gray-800 border border-gray-500 w-full h-[150px]"></div>
      </div>
      <Footer/>
    </>
  );
}
