import React from "react"
import Image from "next/image"

export default function page() {
	return (
		<>
			<section className="container h-screen">
				<div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-center">
					<div className="w-full max-w-[570px] px-3">
						<h1 className="mb-4 text-5xl font-bold">CONTACT US</h1>
						<p className="mb-4">
							Do you have details of a story? be the first to report breaking news, releases,
							photos or videos? Please e-mail us.
						</p>
						<p className="mb-4 text-[32px] text-secondary-darker">info@rovingnaija.com</p>
						<p className="mb-4 text-center">OR</p>
						<form>
							<div className="mb-4">
								<input
									type="text"
									placeholder="Name"
									className="shadow-custom w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
								/>
							</div>
							<div className="mb-4">
								<input
									type="tel"
									placeholder="Phone Number"
									className="shadow-custom w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
								/>
							</div>
							<div className="mb-4">
								<textarea
									placeholder="Enter you text here"
									className="shadow-custom w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
									rows={4}></textarea>
							</div>
							<div className="mb-4 inline-flex items-center">
								<input type="checkbox" id="terms" className="checked:bg-secondary-dark" />
								<label htmlFor="terms" className="ml-2 text-xs">
									I agree to the{" "}
									<a href="#" className="text-secondary-dark">
										Terms and Conditions
									</a>{" "}
									as set out by the user agreement
								</label>
							</div>
							<button
								type="submit"
								className="w-full rounded-lg bg-secondary-darker p-3 text-white shadow-sm">
								Submit Form
							</button>
						</form>
					</div>

					<Image
						src="/assets/images/about-us-img.png"
						alt="About us image"
						width={550}
						height={406}
					/>
				</div>
			</section>
		</>
	)
}