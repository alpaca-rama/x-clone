import Link from "next/link";
import Image from "next/image";
import { menuList } from "@/data/menuItems";

export default function LeftBar() {
	return (
		<div className={'min-h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'}>
			{/* LOGO MENU BUTTON */}
			<div className={' flex flex-col items-center xxl:items-start gap-4 text-lg'}>
				{/* LOGGO */}
				<Link href={'/'} className={'p-2 rounded-full hover:bg-[#181818]'}>
					<Image
						src={'icons/logo.svg'}
						alt={'Logo'}
						width={24}
						height={24}
					/>
				</Link>

				{/* MENU LIST */}
				<div className={'flex flex-col gap-4'}>
					{menuList.map((item) => (
						<Link href={item.link} className={'flex items-center gap-4 p-2 rounded-full hover:bg-[#181818]'} key={item.id}>
							<Image src={`icons/${item.icon}`} alt={item.name} width={24} height={24} />
							<span className={'hidden xxl:inline'}>{item.name}</span>
						</Link>
					))}
				</div>

				{/* BUTTON */}
				<Link href={'/'} className={'xxl:hidden flex items-center justify-center bg-white text-black rounded-full font-bold w-12 h-12'}>
					<Image src={'icons/post.svg'} alt={'new post'} width={24} height={24} />
				</Link>

				<Link href={'/'} className={'hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20'}>
					Post
				</Link>
			</div>

			{/* USER */}
			<div className={'flex items-center justify-between'}>
				<div className={'flex items-center gap-2'}>
					<div className={'w-10 h-10 relative rounded-full overflow-hidden'}>
						<Image src={'/general/avatar.png'} alt={'lama dev'} fill />
					</div>
					<div className={'hidden xxl:flex flex-col'}>
						<span className={'font-bold'}>Lama Dev</span>
						<span className={'text-sm text-textGray'}>@lamaWebDev</span>
					</div>
				</div>
				<div className={'hidden xxl:block cursor-pointer font-bold'}>...</div>
			</div>
		</div>
	)
}