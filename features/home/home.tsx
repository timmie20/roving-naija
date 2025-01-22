"use client"
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
import { useQuery } from "@tanstack/react-query"
import { fetchAllData } from "@/queries/posts"

export const Home = () => {
	const { data, error, isFetching, isError } = useQuery({
		queryKey: ["allData"],
		queryFn: fetchAllData,
	})

	const { posts, videos } = data || { posts: [], videos: [] }

	if (isFetching) return <div>Loading...</div>
	if (isError) return <div>Error: {error?.message}</div>

	return (
		<>
			<MainLayout>
				<div className="mx-auto space-y-12 py-10 xl:max-w-[1080px] 2xl:max-w-screen-xl">
					<div className="flex h-fit flex-col items-center gap-4 px-3 lg:flex-row xl:px-0">
						<LatestNews posts={posts} />
						<Trending posts={posts} />
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
								{posts
									?.filter((post) => post.priority === 0) // Filter posts with priority === 0
									.slice(0, 4) // Limit to the first 4 posts
									.map((post) => <NewsCardBase key={post.id} post={post} />)}
							</div>
						</div>

						<LeaderBoard />
					</div>

					<TopVideos videos={videos} />

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
