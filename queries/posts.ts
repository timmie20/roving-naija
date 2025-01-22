import axios from "axios"

export interface Post {
	id: number
	title: string
	content: string
	category_id: number
	image: string
	created_at: string
	updated_at: string
	priority: number
}

export interface VideoType extends Omit<Post, "priority" | "image" | "content"> {
	description: string
	video_link: string
	is_priority: number
}

const getPosts = async (): Promise<Post[]> => {
	return axios.get("http://34.69.218.184/api/get-posts").then((res) => res.data)
}

const getVideos = async (): Promise<VideoType[]> => {
	return axios.get("http://34.69.218.184/api/get-videos").then((res) => res.data)
}

const getTopVideos = async (): Promise<VideoType[]> => {
	return axios.get("http://34.69.218.184/api/prioritized-videos").then((res) => res.data)
}

const getPostByCategory = async (id: number): Promise<Post[]> => {
	return axios.get(`http://34.69.218.184/api/posts/category/${id}`).then((res) => res.data)
}

const fetchAllData = async () => {
	const [posts, videos] = await Promise.all([getPosts(), getTopVideos()])

	return { posts, videos }
}

export { getPosts, getVideos, getPostByCategory, fetchAllData }
