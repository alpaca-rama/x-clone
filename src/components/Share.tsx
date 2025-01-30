import Image from "./Image";

export default function Share() {
  return (
    <div className={'p-4 flex gap-4'}>
      {/* AVATAR */}
      <div className={'relative w-10 h-10 rounded-full overflow-hidden'}>
        <Image
          path={'x-clone/general/avatar.png'}
          alt={'avatar'}
          w={100}
          h={100}
          tr={true}
        />
      </div>

      {/* OTHERS */}
      <div className={'flex flex-col flex-1 gap-4'}>
        <input type={'text'} placeholder={'What is happening?!'} className={'bg-transparent outline-none placeholder:text-textGray text-xl'} />
        <div className={'flex items-center justify-between gap-4 flex-wrap'}>
          <div className={'flex gap-4 flex-wrap'}>
            <Image path={'x-clone/icons/image.svg'} alt={''} w={20} h={20} className={'cursor-pointer'} />
            <Image path={'x-clone/icons/gif.svg'} alt={''} w={20} h={20} className={'cursor-pointer'} />
            <Image path={'x-clone/icons/poll.svg'} alt={''} w={20} h={20} className={'cursor-pointer'} />
            <Image path={'x-clone/icons/emoji.svg'} alt={''} w={20} h={20} className={'cursor-pointer'} />
            <Image path={'x-clone/icons/schedule.svg'} alt={''} w={20} h={20} className={'cursor-pointer'} />
            <Image path={'x-clone/icons/location.svg'} alt={''} w={20} h={20} className={'cursor-pointer'} />
          </div>
          <button className={'bg-white text-black font-bold rounded-full py-2 px-4'}>Post</button>
        </div>
      </div>
    </div>
  )
}