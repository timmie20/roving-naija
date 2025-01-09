import MainLayout from "@/components/app/MainLayout"
import LatestNews from "@/components/latestNews"
import Trending from "@/components/trending"
import LeaderBoard from "@/components/leaderBoard"
import Image from "next/image"
import { MiniNewsCards } from "@/components/miniNewsCards"
import TopVideos from "@/components/topVideos"

export default function Home() {
	return (
		<>
			<MainLayout>
				<section className="mx-auto px-3 py-10 xl:max-w-[1080px] 2xl:max-w-screen-xl">
					<div className="flex gap-4">
						<LatestNews />
						<Trending />
					</div>

					<div className="mx-auto mt-10 flex gap-4">
						<div className="w-[710px] flex-1 space-y-6">
							<div className="relative h-[168px]">
								<Image
									src="/assets/images/banner.jpg"
									alt="Martad get to know banner"
									fill
									priority
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<MiniNewsCards />
								<MiniNewsCards />
								<MiniNewsCards />
								<MiniNewsCards />
							</div>
						</div>

						<LeaderBoard />
					</div>

					<TopVideos />

					<div className="mt-10 w-full">
						<div className="h-16 rounded-sm bg-[#E7E7E7]">
							<div className="flex h-full w-[20%] items-center justify-center bg-primary-dark">
								<p className="text-center font-Cormorant text-3xl font-bold text-app-white">
									Political News
								</p>
							</div>
						</div>

						<div className="mt-10 flex w-full gap-4">
							<div className="w-[710px] flex-1">
								<div>
									<div className="relative h-[360px] w-full">
										<Image
											src="/assets/images/frame4.png"
											alt="Latest news image"
											fill
											priority
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
									<div className="flex h-[132px] flex-col justify-between p-4 shadow-md">
										<h3 className="text-wrap text-3xl font-bold text-app-dark">
											Malcolm Wins Edo state Governorship election.
										</h3>
										<div className="lex items-center justify-between">
											<aside className="inline-flex items-center gap-3">
												<i>
													<small>By Mark Obidiegwu</small>
												</i>
												<span className="inline-flex items-center gap-1">
													<img src="/assets/icons/clock.svg" alt="Clock icon" />
													<i>
														<small>20 November 2024 .</small>
													</i>
												</span>
											</aside>
										</div>
									</div>
								</div>

								<div className="mt-8 flex gap-4">
									<div className="flex-1 overflow-hidden rounded-lg bg-white shadow-md">
										<img
											src="https://placehold.co/600x400"
											alt="Portrait of a woman smiling"
											className="w-full"
										/>
										<div className="p-4">
											<h2 className="mb-2 text-lg font-bold">
												Lagos state governor’s wife seen jumping danfo.
											</h2>
											<p className="mb-4 text-gray-700">
												Lagos state governor’s wife seen jumping danfo after being called out for...
											</p>
											<div className="flex items-center text-sm text-gray-500">
												<i className="far fa-clock mr-2"></i>
												<span>20 November 2024.</span>
											</div>
										</div>
									</div>
									<div className="flex-1 overflow-hidden rounded-lg bg-white shadow-md">
										<img
											src="https://placehold.co/600x400"
											alt="Portrait of a woman smiling"
											className="w-full"
										/>
										<div className="p-4">
											<h2 className="mb-2 text-lg font-bold">
												Lagos state governor’s wife seen jumping danfo.
											</h2>
											<p className="mb-4 text-gray-700">
												Lagos state governor’s wife seen jumping danfo after being called out for...
											</p>
											<div className="flex items-center text-sm text-gray-500">
												<i className="far fa-clock mr-2"></i>
												<span>20 November 2024.</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="flex w-[347px] flex-col">
								<div className="grid flex-1 place-items-center bg-neutral-50">
									<p className="text-center font-Cormorant text-3xl font-bold text-primary-dark">
										Advertise Here{" "}
									</p>{" "}
								</div>

								<div className="flex-1">
									<p className="font-Poppins">cartoon of the day</p>

									<div className="w-full"></div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</MainLayout>
		</>
	)
}
