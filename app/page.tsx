import MainLayout from "@/components/app/MainLayout"
import LatestNews from "@/components/latestNews"
import Trending from "@/components/trending"
import LeaderBoard from "@/components/leaderBoard"
import Image from "next/image"
import { NewsCardBase } from "@/components/NewsCardBase"
import TopVideos from "@/components/topVideos"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/sectionHeader"
import SectionBody from "@/components/SectionBody"
import Ads from "@/components/Ads"
import NewsCardSmall from "@/components/NewsCardSmall"
import NewsSectionExtras from "@/components/NewsSectionExtras"

export default function Home() {
	return (
		<>
			<MainLayout>
				<div className="mx-auto space-y-12 px-3 py-10 xl:max-w-[1080px] 2xl:max-w-screen-xl">
					<div className="flex gap-4">
						<LatestNews />
						<Trending />
					</div>

					<div className="mx-auto flex gap-4">
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
								<NewsCardBase />
								<NewsCardBase />
								<NewsCardBase />
								<NewsCardBase />
							</div>
						</div>

						<LeaderBoard />
					</div>

					<TopVideos />

					<section className="w-full">
						<SectionHeader type="Political" />
						<SectionBody hasAdvert />

						<div className="flex w-full items-center justify-center">
							<Button
								className="mt-8 h-16 w-full max-w-[560px] border border-primary-dark text-base text-primary-dark"
								variant="outline">
								More
							</Button>
						</div>
					</section>

					<section className="w-full">
						<SectionHeader type="Sport" />
						<SectionBody hasAdvert={false} />

						<div className="flex w-full items-center justify-center">
							<Button
								className="mt-8 h-16 w-full max-w-[560px] border border-primary-dark text-base text-primary-dark"
								variant="outline">
								More
							</Button>
						</div>
					</section>

					<section className="w-full">
						<SectionHeader type="Business" />
						<SectionBody hasAdvert={false} />

						<div className="flex w-full items-center justify-center">
							<Button
								className="mt-8 h-16 w-full max-w-[560px] border border-primary-dark text-base text-primary-dark"
								variant="outline">
								More
							</Button>
						</div>
					</section>

					<div className="h-[183px]">
						<Ads />
					</div>

					<div className="">
						<h2 className="font-Cormorant text-[32px] font-bold">Gossip of the Town</h2>

						<div className="grid w-full grid-cols-3 place-items-center gap-3">
							<NewsCardSmall />
							<NewsCardSmall />
							<NewsCardSmall />
							<NewsCardSmall />
							<NewsCardSmall />
							<NewsCardSmall />
						</div>
					</div>

					<section className="w-full">
						<SectionHeader type="Entertainment" />
						<SectionBody hasAdvert={false} />

						<div className="flex w-full items-center justify-center">
							<Button
								className="mt-8 h-16 w-full max-w-[560px] border border-primary-dark text-base text-primary-dark"
								variant="outline">
								More
							</Button>
						</div>
					</section>

					<div className="flex justify-between">
						<NewsSectionExtras title="Entertainment" />
						<NewsSectionExtras title="Health" />
						<NewsSectionExtras title="Education" />
					</div>
				</div>
			</MainLayout>
		</>
	)
}
