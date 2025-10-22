import React from "react"
import Link from "next/link"
import Image from "next/image"
import { TbDeviceGamepad3 } from "react-icons/tb"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getCurrentDate } from "@/helpers/getDate"

const navigation = [
	{ name: "Home", path: "/" },
	{ name: "News", path: "/topics/news" },
	{ name: "Politics", path: "/topics/politics" },
	{ name: "Sports", path: "/topics/sports" },
	{ name: "Play game", path: "/play-game", icon: <TbDeviceGamepad3 size={20} /> },
	{ name: "Business", path: "/topics/business" },
	{ name: "Entertaiment", path: "/topics/entertainment" },
	{ name: "More", path: "/more" },
	{ name: "Contact us", path: "/contact-us" },
	{ name: "Advertise with us", path: "#" },
]

const dropdownNav = [
	{ name: "Subscriptions", path: "/pricing" },
	{ name: "FAQs", path: "/faqs" },
	{ name: "Instructions", path: "/instructions" },
]

export default function Appbar() {
	return (
		<>
			<header className="sticky top-0 z-20 bg-white">
				<div className="container mx-auto flex items-center justify-between px-3 py-2">
					<div className="w-[30%]">
						<span className="text-balance font-Cormorant text-[12px] font-bold leading-none sm:text-sm">
							{getCurrentDate()}
						</span>
					</div>
					<Link href="/">
						<Image
							src="/assets/images/roving-naija-logo.svg"
							alt="Roving naija logo"
							className="w-full shrink-0"
							priority
							width={100}
							height={100}
						/>
					</Link>

					<div className="mt-3 hidden items-center gap-3 md:flex">
						<Image
							src="/assets/icons/facebook.svg"
							alt="Facebook icon"
							width={24}
							height={24}
						/>
						<Image
							src="/assets/icons/instagram.svg"
							alt="Instagram icon"
							width={24}
							height={24}
						/>
						<Image
							src="/assets/icons/linkedin.svg"
							alt="LinkedIn icon"
							width={24}
							height={24}
						/>
						<Image src="/assets/icons/tiktok.svg" alt="Tiktok icon" width={24} height={24} />
						<Image
							src="/assets/icons/whatsapp.svg"
							alt="Whatsapp icon"
							width={24}
							height={24}
						/>
						<Image src="/assets/icons/x_logo.svg" alt="X icon" width={24} height={24} />
						<Image src="/assets/icons/youtube.svg" alt="YouTube icon" width={24} height={24} />
					</div>

					{/* <div className="flex w-fit flex-col gap-2 font-Cormorant lg:flex-row">
						<Link href="/auth/login">
							<Button className="h-fit w-[80px] rounded-sm bg-app-dark font-Cormorant text-[10px] text-white sm:w-[165px] sm:text-base lg:mr-3">
								REGISTER
							</Button>
						</Link>
						<Button
							variant="custom"
							size="lg"
							className="h-fit w-[80px] rounded-sm font-Cormorant text-[10px] sm:w-[165px] sm:text-base">
							LOGIN
						</Button>
					</div> */}
				</div>

				<div className="max-h-fit border-[1px] border-primary-light py-7 shadow-lg">
					<div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 overflow-x-auto px-6 lg:gap-0 xl:px-0">
						{navigation.map((navItem) => {
							if (navItem.name === "More") {
								return <MenuDropdown label={navItem.name} key={navItem.name} />
							} else {
								return (
									<Link key={navItem.name} href={navItem.path} className="links text-nowrap">
										{navItem.name} <span className="inline-flex align-middle">{navItem.icon}</span>
									</Link>
								)
							}
						})}
						{/* <div>
							<Input type="text" placeholder="Search" className="h-10 w-[140px] rounded-full" />
						</div> */}
					</div>
				</div>
			</header>
		</>
	)
}

export const MenuDropdown = ({ label }: { label: string }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<span className="cursor-pointer">{label}</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
				{/* <DropdownMenuSeparator /> */}

				{dropdownNav.map((item) => (
					<DropdownMenuItem key={item.name} asChild>
						<Link href={item.path}>{item.name}</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
