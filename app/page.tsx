import MainLayout from "@/components/app/MainLayout"
import LatestNews from "@/components/latestNews"
import Trending from "@/components/trending"
import LeaderBoard from "@/components/leaderBoard"
import Image from "next/image"
import { NewsCardBase } from "@/components/NewsCardBase"
import TopVideos from "@/components/topVideos"
import Ads from "@/components/Ads"
import NewsCardSmall from "@/components/NewsCardSmall"
import NewsSectionExtras from "@/components/NewsSectionExtras"
import NewsSectionContainer from "@/components/NewsSectionContainer"

export default function Home() {
	return (
		<>
			<MainLayout>
				<div className="mx-auto space-y-12 py-10 xl:max-w-[1080px] 2xl:max-w-screen-xl">
					<div className="flex flex-col items-center gap-4 px-3 lg:flex-row xl:px-0">
						<LatestNews />
						<Trending />
					</div>

					<div className="flex flex-col-reverse items-center gap-3 px-3 lg:flex-row xl:px-0">
						<div className="flex-1 space-y-6">
							<div className="relative h-[108px] w-full sm:h-[168px]">
								<Image
									src="/assets/images/banner.jpg"
									alt="Martad get to know banner"
									fill
									priority
								/>
							</div>
							<div className="grid grid-cols-2 gap-2 px-3 lg:px-0">
								<NewsCardBase />
								<NewsCardBase />
								<NewsCardBase />
								<NewsCardBase />
							</div>
						</div>

						<LeaderBoard />
					</div>

					<TopVideos />

					<NewsSectionContainer type="Political" hasAdvert id="politics" />

					<NewsSectionContainer type="Sport" hasAdvert={false} id="sports" />

					<NewsSectionContainer type="Business" hasAdvert={false} id="business" />

					<div className="h-[183px]">
						<Ads />
					</div>

					<div className="px-3 pt-10 lg:pt-0 xl:px-0">
						<h2 className="font-Cormorant text-[32px] font-bold">Gossip of the Town</h2>

						<div className="grid w-full grid-cols-1 place-items-center gap-3 lg:grid-cols-3">
							<NewsCardSmall />
							<NewsCardSmall />
							<NewsCardSmall />
							<NewsCardSmall />
							<NewsCardSmall />
							<NewsCardSmall />
						</div>
					</div>

					<NewsSectionContainer type="Entertainment" hasAdvert={false} id="entertainment" />

					<div className="flex flex-col items-center gap-4 px-3 md:flex-row md:justify-between">
						<NewsSectionExtras title="Entertainment" />
						<NewsSectionExtras title="Health" />
						<NewsSectionExtras title="Education" />
					</div>
				</div>
			</MainLayout>
		</>
	)
}
