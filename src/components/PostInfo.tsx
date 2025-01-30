import Image from "./Image";

export default function PostInfo() {
  return (
    <div className={'cursor-pointer'}>
      <Image
        path={'x-clone/icons/infoMore.svg'}
        alt={'more info'}
        w={16}
        h={16}
      />
    </div>
  )
}