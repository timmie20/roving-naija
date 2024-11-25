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

const navigation = [
	{ name: "Home", path: "/" },
	{ name: "News", path: "/news" },
	{ name: "Politics", path: "/Politics" },
	{ name: "Play game", path: "/play-game", icon: "" },
	{ name: "Business", path: "/business" },
	{ name: "Entertaiment", path: "/entertainment" },
	{ name: "Health", path: "/health" },
	{ name: "Contact us", path: "/contact-us" },
	{ name: "Adverise with us", path: "/advert" },
	{ name: "Pricing", path: "/pricing" },
]

export default function Appbar() {
	return (
		<>
			<header className="relative w-full bg-white">
				<div className="flex items-center justify-between px-6 py-2">
					<div className="w-fit">
						<p className="font-Cormorant text-sm font-bold">Wednesday, November 20th 2024</p>
						<div className="mt-3 inline-flex items-center gap-3">
							<img src="/assets/icons/facebook.svg" alt="Facebook icon" />
							<img src="/assets/icons/instagram.svg" alt="Instagram icon" />
							<img src="/assets/icons/linkedin.svg" alt="Linkedin icon" />
							<img src="/assets/icons/tiktok.svg" alt="Tiktok icon" />
							<img src="/assets/icons/whatsapp.svg" alt="whatsapp icon" />
							<img src="/assets/icons/x_logo.svg" alt="X icon" />
							<img src="/assets/icons/youtube.svg" alt="Youtube icon" />
						</div>
					</div>

					<img src="/assets/images/roving-naija-logo.svg" alt="Roving naija logo" />

					<div className="w-fit font-Cormorant">
						<Button className="mr-3 w-[165px] bg-app-dark text-white" size="lg">
							REGISTER
						</Button>
						<Button variant="custom" size="lg">
							LOGIN
						</Button>
					</div>
				</div>
			</header>

			<div className="sticky top-0 z-20 max-h-fit w-full border-[1px] border-primary-light bg-white py-7 shadow-lg">
				<NavigationMenu className="mx-auto w-full max-w-[1300px] text-base">
					<NavigationMenuList>
						{navigation.map((navItem) =>
							navItem.name === "News" ? (
								<NavigationMenuItem key={navItem.name}>
									<NavigationMenuTrigger>{navItem.name}</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className="w-36 p-3">
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
				</NavigationMenu>
			</div>
		</>
	)
}
