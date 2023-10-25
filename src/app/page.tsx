import Image from 'next/image'
import AdviceContainer from './_components/AdviceContainer';

export default function Home() {
  return <main className=" bg-dark-blue w-[375px] lg:w-[1440px] lg:h-[810px] h-[668px] flex justify-center  ">
    <AdviceContainer />
  </main>;
}
