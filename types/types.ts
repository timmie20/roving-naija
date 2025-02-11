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

export type HttpResponse<T> = {
	code: number
	message: string
	status: string
	data: T
}

export type HttpError = {
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
