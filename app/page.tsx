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
				<section className="container mx-auto px-3 py-10">
					<div className="mx-auto grid w-full max-w-screen-xl grid-cols-[2fr_1fr] gap-4">
						<LatestNews />
						<Trending />
					</div>

					<div className="mx-auto mt-10 grid max-w-screen-xl grid-cols-[2fr_1fr] items-stretch gap-4">
						<div className="space-y-6">
							<div className="relative h-[160px]">
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

					<div className="mx-auto max-w-screen-xl">
						<TopVideos />
					</div>
				</section>
			</MainLayout>
		</>
	)
}
