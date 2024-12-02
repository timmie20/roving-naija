export interface TrendingNews {
	id: number
	imgUrl: string
	headline: string
	time: string
}

export interface LatestNews extends TrendingNews {
	priority: "high" | "normal"
}

export interface NewsDataInterface {
	trending: TrendingNews[]
	latest: LatestNews[]
}
