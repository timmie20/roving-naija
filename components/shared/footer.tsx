import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function Footer() {
	return (
		<footer className="w-full bg-neutral-400 pb-10 pt-20 text-white">
			<div className="mx-auto w-full max-w-screen-xl">
				<Link href="/">
					<img src="/assets/images/roving-naija-logo.svg" alt="Roving naija logo" />
				</Link>
				<div className="mt-10 flex justify-between">
					<div className="flex w-[30%] flex-col gap-5">
						<div className="mb-4 inline-flex items-center gap-3">
							<img src="/assets/icons/location.svg" alt="location icon" />
							<p>3b Alegbe Close Mende, Maryland Lagos, Nigeria.</p>
						</div>
						<div className="mb-4 inline-flex items-center gap-3">
							<img src="/assets/icons/phone.svg" alt="Phone call icon" />
							<p>081234568900</p>
						</div>
						<div className="inline-flex items-center gap-3">
							<img src="/assets/icons/mail.svg" alt="mail icon" />
							<p>rovingnaija@gmail.com</p>
						</div>
					</div>
					<div className="flex flex-col gap-5">
						<p className="mb-4">Play Educative Games</p>
						<p className="mb-4">Advert rates</p>
						<p className="mb-4">Subscription</p>
						<p>Instructions</p>
					</div>
					<div className="flex flex-col gap-5">
						<p className="mb-4">Collaborate with Us</p>
						<p className="mb-4">Write to Us</p>
						<p className="mb-4">About Us</p>
					</div>
					<div className="flex flex-col gap-5">
						<p className="mb-4">Terms & Conditions</p>
						<p className="mb-4">Privacy Policy</p>
						<p>FAQ</p>
					</div>
				</div>

				<div className="mt-16 flex items-end justify-between">
					<p className="">© 2024 RovingNaija Limited - All Rights Reserved</p>

					<div className="flex w-[30%] flex-col space-y-5">
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
