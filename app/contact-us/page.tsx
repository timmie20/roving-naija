import React from "react"
import Image from "next/image"
import MainLayout from "@/components/app/MainLayout"

export default function page() {
	return (
		<>
			<MainLayout>
				<section className="container h-full pb-10">
					<div className="mx-auto flex h-screen w-full max-w-screen-xl flex-col-reverse items-center justify-center lg:flex-row">
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
										className="w-full rounded-lg border p-3 shadow-custom focus:outline-none focus:ring-2 focus:ring-green-600"
									/>
								</div>
								<div className="mb-4">
									<input
										type="tel"
										placeholder="Phone Number"
										className="w-full rounded-lg border p-3 shadow-custom focus:outline-none focus:ring-2 focus:ring-green-600"
									/>
								</div>
								<div className="mb-4">
									<textarea
										placeholder="Enter you text here"
										className="w-full rounded-lg border p-3 shadow-custom focus:outline-none focus:ring-2 focus:ring-green-600"
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
									Submit
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
			</MainLayout>
		</>
	)
}
