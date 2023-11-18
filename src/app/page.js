import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center min-h-screen">
      <div className="w-full bg-white h-18 lg:px-20 lg:h-20  flex flex-col justify-center">
        <text className="font-bold text-6xl lg:text-8xl text-black">？WhyGame</text>
      </div>
      {/* <div className='w-full bg-purple-800 h-20 px-20 flex flex-col justify-center'>
        <text className='font-bold text-6xl'>Blog</text>
      </div> */}
      <div className="lg:h-20 px-5  lg:px-20 flex flex-col justify-start w-full mt-5">
        <text className="bg-violet-400">11.18 英雄传奇正在开发</text>
        <text className="">正在学习基础游戏架构</text>
        <text className="">单一状态机...了解中</text>
      </div>
    </main>
  );
}
