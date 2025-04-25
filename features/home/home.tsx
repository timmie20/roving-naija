"use client"
import { useRef, useEffect } from "react"
import MainLayout from "@/components/app/MainLayout"
import Trending from "@/components/trending"
// import LeaderBoard from "@/components/leaderBoard"
import Image from "next/image"
// import { NewsCardBase } from "@/components/NewsCardBase"
import TopVideos from "@/components/topVideos"
import Ads from "@/components/Ads"
import NewsCardSmall from "@/components/NewsCardSmall"
import NewsSectionExtras from "@/components/NewsSectionExtras"
import NewsSectionContainer from "@/components/NewsSectionContainer"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { useCategorizedData } from "@/hooks/useCategorizedData"
import { CarouselApiDemo } from "@/components/scroller"
import { useSubscribed } from "@/hooks/useCheckSubscription"
import { useRouter } from "next/navigation"
import SubscribeDialog from "@/components/SubscribeDialog"
import Spinner from "@/components/shared/spinner"
import LatestNews from "@/components/LatestNews"

export const Home = () => {
	const {
		isLoading,
		isError,
		prioritized,
		nonPrioritized,
		postsByCategory,
		gossip,
		regulars,
		prioritizedPost,
		videos,
		error,
	} = useCategorizedData()

	const router = useRouter()

	const { isValid } = useSubscribed()
	const dialogRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (isValid === false && dialogRef.current) {
			dialogRef.current.showModal()

			setTimeout(() => {
				dialogRef.current?.close()
				router.push("/pricing")
			}, 2500)
		}
	}, [isValid, router])

	if (isLoading) return <Spinner />
	if (isError) return <p>Error: {(error as Error).message}</p>

	if (isValid === false) {
		return <SubscribeDialog dialogRef={dialogRef} />
	}
	return (
		<>
			<MainLayout>
				<div className="mx-auto space-y-12 py-10 xl:max-w-[1080px] 2xl:max-w-screen-xl">
					<div className="flex h-fit w-full flex-col items-center gap-4 px-3 lg:flex-row xl:px-0">
						<CarouselApiDemo posts={prioritizedPost} />
						<Trending posts={prioritizedPost} />
					</div>

					<div className="flex flex-col-reverse items-center gap-3 px-3 lg:flex-row xl:px-0">
						<div className="flex-1 space-y-6">
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="relative h-[108px] w-full sm:h-[168px]">
											<Image
												src="/assets/images/word_search_banner.jpg"
												alt="Martad get to know banner"
												fill
												priority
												className="cursor-pointer transition-all duration-150 hover:scale-105"
											/>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>Click to play game</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>

							<LatestNews posts={regulars} />
						</div>

						{/* <LeaderBoard /> */}
					</div>

					<TopVideos videos={videos} />

					{/* News Section Container based on categories data*/}

					{prioritized.map((category) => (
						<NewsSectionContainer
							key={category.id}
							type={category.name}
							hasAdvert={category.id % 2 === 0}
							id={category.name.toLowerCase()}
							posts={postsByCategory[category.name]}
						/>
					))}

					<div className="h-[183px]">
						<Ads />
					</div>

					<section className="px-3 pt-10 lg:pt-0 xl:px-0">
						<h2 className="font-Cormorant text-[32px] font-bold">{gossip?.name}</h2>

						<div className="grid w-full grid-cols-1 place-items-center gap-3 lg:grid-cols-3">
							{gossip &&
								postsByCategory[gossip.name]?.map((post) => (
									<NewsCardSmall key={post.id} post={post} />
								))}
						</div>
					</section>

					<div className="flex flex-wrap justify-start gap-4 px-3">
						{nonPrioritized.map((cat) => (
							<div
								key={cat.id}
								className="flex w-full flex-col items-start sm:w-[48%] md:w-[32%]">
								<h1 className="mb-5 text-center font-Poppins text-3xl font-semibold">
									{cat.name}
								</h1>
								<NewsSectionExtras posts={postsByCategory[cat.name]} />
							</div>
						))}
					</div>
				</div>
			</MainLayout>
		</>
	)
}
