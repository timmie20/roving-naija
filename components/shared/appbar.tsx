import React from "react"

export default function Appbar() {
	const navigation = [
		{ name: "home", href: "/" },
		{ name: "n", href: "/about" },
		{ name: "services", href: "" },
		{ name: "patrons & partners", href: "/patrons-and-partners" },
		{ name: "blog", href: "/blog" },
		{ name: "contact", href: "/contact" },
		{ name: "contact", href: "/contact" },
		{ name: "contact", href: "/contact" },
	]
	return (
		<>
			<div className="w-full">
				<header className="border-b border-gray-200 bg-white py-4">
					<div className="container mx-auto flex items-center justify-between">
						<div className="text-sm text-gray-600">Wednesday, November 20th 2024</div>
						<div className="flex space-x-4"></div>
						<div className="flex items-center space-x-4">
							<img src="https://placehold.co/100x50" alt="Roving Naija Logo" className="h-10" />
							<div className="flex space-x-2">
								<button className="bg-black px-4 py-2 text-white">REGISTER</button>
								<button className="border border-black px-4 py-2 text-black">LOGIN</button>
							</div>
						</div>
					</div>
				</header>
				<nav className="border-t border-gray-200 bg-white py-2">
					<div className="container mx-auto flex items-center justify-between">
						<div className="flex space-x-6">
							<a href="#" className="text-black">
								Home
							</a>
							<div className="relative">
								<a href="#" className="text-black">
									News <i className="fas fa-chevron-down"></i>
								</a>
							</div>
							<a href="#" className="text-black">
								Politics
							</a>
							<a href="#" className="text-black">
								Sports
							</a>
							<a href="#" className="text-black">
								Play game <i className="fas fa-gamepad"></i>
							</a>
							<a href="#" className="text-black">
								Business
							</a>
							<a href="#" className="text-black">
								Entertainment
							</a>
							<div className="relative">
								<a href="#" className="text-black">
									More <i className="fas fa-chevron-down"></i>
								</a>
							</div>
							<a href="#" className="text-black">
								Contact us
							</a>
							<a href="#" className="text-black">
								Advertise with us
							</a>
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}
