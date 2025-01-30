import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Share from "@/components/Share";
import { IKImage } from "imagekitio-next";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className=''>
      <div className={'flex justify-between px-4 pt-4 text-textGray font-bold border-b-[1px] border-borderGray'}>
        <Link className={'pb-3 flex items-center border-b-4 border-iconBlue'} href={'/'}>For you</Link>
        <Link className={'pb-3 flex items-center'} href={'/'}>Following</Link>
        <Link className={'pb-3 flex items-center'} href={'/'}>React.js</Link>
        <Link className={'pb-3 flex items-center'} href={'/'}>Javascript</Link>
        <Link className={'pb-3 flex items-center'} href={'/'}>CSS</Link>
      </div>
      <Share />
      <Feed />
    </div>
  )
};