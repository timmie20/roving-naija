"use client"
import MainLayout from "@/components/app/MainLayout"

const data = {
	title: "Breaking News: Major Event",
	content:
		"In a stunning turn of events, major changes have occurred that are set to impact the global landscape significantly. Analysts are scrambling to make sense of the sudden developments...\n\nExperts suggest that this could lead to massive shifts in policy and economicstrategies worldwide. As the situation unfolds, more details are expected to emerge....\n\nMore updates coming in as we gather information.",
	images: ["https://placehold.co/600x300", "https://placehold.co/600x300"],
}

export const NewsArticle = () => {
	const paragraphs = data.content.split("\n\n") // Split paragraphs

	const { images } = data

	return (
		<MainLayout>
			<main className="mx-auto mt-6 flex max-w-screen-xl flex-col lg:flex-row">
				<article className="lg:w-2/3 lg:pr-8">
					<h2 className="mb-2 text-3xl font-bold">
						Breaking News: Major Event Shakes the World
					</h2>
					<p className="mb-4 text-gray-600">By Jane Smith on October 15, 2023</p>

					{paragraphs.map((para, index) => (
						<div key={index}>
							<p className="my-4 text-base/relaxed font-normal">{para}</p>

							{/* Insert images between paragraphs, ensuring all images are used */}
							{images[index] && (
								<img
									src={images[index]}
									alt="Related News"
									style={{ width: "100%", borderRadius: "8px" }}
								/>
							)}
						</div>
					))}

					<div className="mb-4 flex space-x-2">
						<button className="rounded bg-green-600 px-4 py-2 text-white">
							Share on Facebook
						</button>
						<button className="rounded bg-blue-400 px-4 py-2 text-white">
							Share on Twitter
						</button>
						<button className="rounded bg-blue-700 px-4 py-2 text-white">
							Share on LinkedIn
						</button>
					</div>

					<p className="text-[15px] italic text-slate-500">
						All rights reserved. This material, and other digital content on this website, may
						not be reproduced, published, broadcast, rewritten or redistributed in whole or in
						part without prior express written permission from ROVING NAIJA.
					</p>
					{/* <section>
						<h3 className="mb-2 text-xl font-bold">Comments</h3>
						<div className="mb-2">
							<p>
								<strong>Alex Johnson:</strong> Incredible article! Very informative and well
								written.
							</p>
						</div>
						<div className="mb-2">
							<p>
								<strong>Emily Clark:</strong> I agree with the points made here. This is a
								game-changer.
							</p>
						</div>
						<input
							type="text"
							placeholder="Add a comment..."
							className="w-full rounded border p-2"
						/>
					</section> */}
				</article>
				<aside className="mt-6 lg:mt-0 lg:w-1/3">
					<section className="mb-6">
						<h3 className="mb-2 text-xl font-bold">Related Articles</h3>
						<ul>
							<li className="mb-2">
								<a href="#" className="text-blue-600 hover:underline">
									Economic Shifts Expected in the Wake of Recent Events
								</a>
								<p className="text-sm text-gray-600">By Mark Lee on October 14, 2023</p>
							</li>
							<li className="mb-2">
								<a href="#" className="text-blue-600 hover:underline">
									World Leaders Respond to Global Changes
								</a>
								<p className="text-sm text-gray-600">By Sarah Brown on October 14, 2023</p>
							</li>
							<li className="mb-2">
								<a href="#" className="text-blue-600 hover:underline">
									How Technology is Adapting to New Challenges
								</a>
								<p className="text-sm text-gray-600">By Mike Davis on October 13, 2023</p>
							</li>
						</ul>
					</section>
					<section>
						<h3 className="mb-2 text-xl font-bold">Advertisements</h3>
						<div className="mb-4 flex h-32 items-center justify-center bg-gray-300">
							Advertise here
						</div>
						<div className="flex h-32 items-center justify-center bg-gray-300">
							Advertise here
						</div>
					</section>
				</aside>
			</main>
		</MainLayout>
	)
}
