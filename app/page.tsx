import MainLayout from "@/components/app/MainLayout"
import LatestNews from "@/components/latestNews"
import Trending from "@/components/trending"
import LeaderBoard from "@/components/leaderBoard"

export default function Home() {
	return (
		<>
			<MainLayout>
				<section className="container px-4 py-10">
					<div className="mx-auto grid w-full max-w-screen-xl grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
						<div className="col-span-2 row-span-3">
							<LatestNews />
						</div>
						<div>
							<Trending />
						</div>
						<div className="mt-8">
							<LeaderBoard />
						</div>
					</div>
				</section>
				<section></section>
			</MainLayout>
		</>
	)
}
