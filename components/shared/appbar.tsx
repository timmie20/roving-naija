import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "../ui/input"

const navigation = [
	{ name: "Home", path: "/" },
	{ name: "News", path: "/topics/news" },
	{ name: "Politics", path: "/topics/politics" },
	{ name: "Sports", path: "/topics/sports" },
	{ name: "Play game", path: "/play-game", icon: "" },
	{ name: "Business", path: "/topics/business" },
	{ name: "Entertaiment", path: "/topics/entertainment" },
	{ name: "More", path: "/more" },
	{ name: "Contact us", path: "/contact-us" },
	{ name: "Adverise with us", path: "/advert" },
]

export default function Appbar() {
	return (
		<>
			<header className="sticky top-0 z-20 bg-white">
				<div className="container mx-auto flex items-center justify-between px-3 py-2">
					<div className="w-[30%]">
						<span className="text-balance font-Cormorant text-[12px] font-bold leading-none sm:text-sm">
							Wednesday, November 20th 2024
						</span>
						<div className="mt-3 hidden items-center gap-3 md:flex">
							<img src="/assets/icons/facebook.svg" alt="Facebook icon" />
							<img src="/assets/icons/instagram.svg" alt="Instagram icon" />
							<img src="/assets/icons/linkedin.svg" alt="Linkedin icon" />
							<img src="/assets/icons/tiktok.svg" alt="Tiktok icon" />
							<img src="/assets/icons/whatsapp.svg" alt="whatsapp icon" />
							<img src="/assets/icons/x_logo.svg" alt="X icon" />
							<img src="/assets/icons/youtube.svg" alt="Youtube icon" />
						</div>
					</div>
					<Link href="/">
						<img
							src="/assets/images/roving-naija-logo.svg"
							alt="Roving naija logo"
							className="w-full shrink-0"
						/>
					</Link>

					<div className="flex w-fit flex-col gap-2 font-Cormorant lg:flex-row">
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
					</div>
				</div>

				<div className="max-h-fit border-[1px] border-primary-light py-7 shadow-lg">
					<div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 overflow-x-auto px-6 lg:gap-0 xl:px-0">
						{navigation.map((navItem) => (
							<Link key={navItem.name} href={navItem.path} className="links text-nowrap">
								{navItem.name}
							</Link>
						))}
						<div>
							<Input type="text" placeholder="Search" className="h-10 w-[140px] rounded-full" />
						</div>
					</div>
				</div>
			</header>

			{/* <div className="max-h-fit border-[1px] border-primary-light bg-white py-7 shadow-lg">
				<div className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 overflow-x-auto px-6 lg:gap-0">
					{navigation.map((navItem) => (
						<Link key={navItem.name} href={navItem.path} className="links text-nowrap">
							{navItem.name}
						</Link>
					))}
					<div>
						<Input type="text" placeholder="Search" className="h-10 w-[140px] rounded-full" />
					</div>
				</div>

				<NavigationMenu className="flex w-full justify-between text-base">
					<NavigationMenuList>
						{navigation.map((navItem) =>
							navItem.name === "News" ? (
								<NavigationMenuItem key={navItem.name}>
									<NavigationMenuTrigger>{navItem.name}</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="p-3">
											<li>
												<Link href="/">some link</Link>
											</li>
											<li>
												<Link href="/">some link</Link>
											</li>
											<li>
												<Link href="/">some link</Link>
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>
							) : (
								<NavigationMenuItem key={navItem.name}>
									<Link href={navItem.path} legacyBehavior passHref>
										<NavigationMenuLink className={navigationMenuTriggerStyle()}>
											{navItem.name}
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							)
						)}
					</NavigationMenuList>
					<div>
						<Input
							type="text"
							placeholder="Search"
							className="h-10 max-w-[140px] rounded-full"
						/>
					</div>
				</NavigationMenu>
			</div> */}
		</>
	)
}
