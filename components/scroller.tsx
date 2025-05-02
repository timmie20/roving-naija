import * as React from "react"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	// CarouselNext,
	// CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel"
import { TopNewsPreview } from "./topNews"
import { Post } from "@/types/types"
import Autoplay from "embla-carousel-autoplay"

export function CarouselApiDemo({ posts }: { posts: Post[] }) {
	const [, setApi] = React.useState<CarouselApi>()
	// const [current, setCurrent] = React.useState(0)
	// const [count, setCount] = React.useState(0)

	// React.useEffect(() => {
	// 	if (!api) {
	// 		return
	// 	}

	// 	setCount(api.scrollSnapList().length)
	// 	setCurrent(api.selectedScrollSnap() + 1)

	// 	api.on("select", () => {
	// 		setCurrent(api.selectedScrollSnap() + 1)
	// 	})
	// }, [api])

	return (
		<div className="flex-1">
			<span className="font-base pl-2 font-Poppins font-medium">Top News</span>
			<div className="mt-6">
				<Carousel
					setApi={setApi}
					className="w-screen px-2 sm:px-4 md:px-6 lg:w-full lg:px-0"
					plugins={[
						Autoplay({
							delay: 3000,
						}),
					]}>
					<CarouselContent className="">
						{posts.slice(0, 4).map((post, index) => (
							<CarouselItem key={index}>
								<TopNewsPreview post={post} />
							</CarouselItem>
						))}
					</CarouselContent>
					{/* <CarouselPrevious />
					<CarouselNext /> */}
				</Carousel>
			</div>

			{/* <div className="py-2 text-center text-sm text-muted-foreground">
				Slide {current} of {count}
			</div> */}
		</div>
	)
}
