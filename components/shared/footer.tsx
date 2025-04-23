import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import Image from "next/image"

export default function Footer() {
	return (
		<footer className="w-full bg-neutral-400 px-4 pb-10 pt-20 text-white">
			<div className="mx-auto w-full max-w-screen-xl">
				<Link href="/">
					<Image
						src="/assets/images/roving-naija-logo.svg"
						alt="Roving naija logo"
						width={0}
						height={0}
						sizes="auto"
						style={{ height: "auto", width: "auto" }}
					/>{" "}
				</Link>
				<div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:gap-0">
					<div className="flex w-full flex-col sm:gap-5 lg:w-[30%]">
						<div className="mb-4 inline-flex items-center gap-3">
							<Image
								src="/assets/icons/location.svg"
								alt="location icon"
								width={24}
								height={24}
							/>

							<p className="text-sm sm:text-base">
								3b Alegbe Close Mende, Maryland Lagos, Nigeria.
							</p>
						</div>
						<div className="mb-4 inline-flex items-center gap-3">
							<Image
								src="/assets/icons/phone.svg"
								alt="Phone call icon"
								width={24}
								height={24}
							/>
							<p className="text-sm sm:text-base">081234568900</p>
						</div>
						<div className="inline-flex items-center gap-3">
							<Image src="/assets/icons/mail.svg" alt="mail icon" width={24} height={24} />
							<p className="text-sm sm:text-base">rovingnaija@gmail.com</p>
						</div>
					</div>

					<div className="flex w-full justify-between lg:w-[60%]">
						<div className="flex flex-col gap-5">
							<p className="mb-4 text-balance text-sm sm:text-base">Play Educative Games</p>
							<p className="mb-4 text-balance text-sm sm:text-base">Advert rates</p>
							<p className="mb-4 text-balance text-sm sm:text-base">Subscription</p>
							<p className="text-sm sm:text-base">Instructions</p>
						</div>
						<div className="flex flex-col gap-5">
							<p className="mb-4 text-balance text-sm sm:text-base">Collaborate with Us</p>
							<p className="mb-4 text-balance text-sm sm:text-base">Write to Us</p>
							<p className="mb-4 text-balance text-sm sm:text-base">About Us</p>
						</div>
						<div className="flex flex-col gap-5">
							<p className="mb-4 text-balance text-sm sm:text-base">Terms & Conditions</p>
							<p className="mb-4 text-balance text-sm sm:text-base">Privacy Policy</p>
							<p>FAQ</p>
						</div>
					</div>
				</div>

				<div className="mt-16 flex flex-col-reverse items-center justify-between md:flex-row lg:items-end">
					<p className="mt-6 text-center md:mt-0">
						© 2025 RovingNaija Limited - All Rights Reserved
					</p>

					<div className="flex w-full flex-col space-y-5 md:w-[30%]">
						<p>Subscribe to our Newsletter</p>
						<Input
							type="email"
							placeholder="Email..."
							className="h-14 w-full rounded-full border border-gray-400 bg-transparent px-4 py-2 text-white"
						/>
						<Button className="h-14 rounded-full bg-primary-normal py-2">Subscribe</Button>
					</div>
				</div>
			</div>
		</footer>
	)
}
