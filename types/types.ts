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

export type ApiResponse<T> = {
	code: number
	message: string
	status: string
	data: T
}

export type ApiError = {
	response: {
		data: {
			code: number
			data: null
			message: string
			status: string
		}
		status: number
		statusText: string
	}
	stack: string
}

export type Node = {
	_id: number
	created_at: Date | string
	id: string
	updated_at: Date | string
}

export type UserProps = {
	token: string
	msisdn: string
}

export type SubscriptionObj = {
	isValid: boolean
	date: Date | null
}

export interface Post {
	id: number
	title: string
	content: string
	category_id: number
	category_name: string
	image: string[]
	created_at: string
	updated_at: string
	priority: number
	date: string
}

export interface Posts {
	data: Post[] | []
}

export interface Video extends Omit<Post, "priority" | "image" | "content"> {
	description: string
	video_link: string
	is_priority: number
}

export interface Videos {
	data: Video[] | []
}

export interface Category {
	id: number
	name: string
	description: string
	priority: number
}

export interface Categories {
	data: Category[] | []
}
