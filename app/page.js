import Image from "next/image";
import Link from "next/link";

export default function Home() {
  

  return (
    <>
      <div className="flex justify-center items-center flex-col text-white h-[38vh] gap-3 px-5 md:px-0 text-xs md:text-base  ">
        <div className="font-bold text-3xl md:text-5xl flex gap-2 md:gap-4 justify-center items-center">
          <span className="chai-text bg-linear-to-br from-pink-600 to-blue-500 bg-clip-text text-transparent">
            Get Me a Chai
          </span>
          <span className="chai-img w-12 md:w-20">
            <img
              className="invertImg"
              src="/tea.gif"
              alt="Tea"
            />
          </span>
        </div>
        <p className="text-center md:text-left">
          A crowd funding platform for creators to get funded by their fans and supporters. Start now!
        </p>
        <p className="text-center md:text-left">A place for creators to connect with their audience and receive support. </p>
        <div className="gap-4 flex ">
          <Link href={"/login"}>
            <button type="button" className="rounded-lg text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm px-4 py-2.5 text-center leading-5 ">Start Here</button>
          </Link>
          <Link href={"/about"}>
            <button type="button" className="rounded-lg text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-4 py-2.5 text-center leading-5">Read More</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 ">
      </div>
      <div className="text-white container mx-auto py-4 px-10 ">
        <h2 className="text-2xl font-bold text-center mb-4">Your fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={78} src="/man.gif" alt="" />
            <p className="font-bold text-center ">Fans want to help</p>
            <p className=" text-center">Your fans are availble for you to help </p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={78} src="/coin.gif" alt="" />
            <p className="font-bold text-center ">Fans want to help</p>
            <p className=" text-center">Your fans are availble for you to help </p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={78} src="/group.gif" alt="" />
            <p className="font-bold text-center ">Fans want to help</p>
            <p className=" text-center">Your fans are availble for you to help </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>
      <div className="text-white container mx-auto py-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-center my-4">Learn more about us</h2>
        <iframe className="md:w-xl md:h-60 w-72 h-32 "  src="https://www.youtube.com/embed/NMsvr4txH_g?si=rw1HUlPYLFIThiz_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}
