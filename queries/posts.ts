import axios from "axios"
import { Posts, Post, Videos, Categories } from "@/types/types"
import { ApiResponse, ApiError } from "@/types/types"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const getPosts = async (): Promise<Posts> => {
	return axios.get(`${BASE_URL}/get-posts`).then((res) => res.data)
}

const getVideos = async (): Promise<Videos> => {
	return axios.get(`${BASE_URL}/get-videos`).then((res) => res.data)
}

const getTopVideos = async (): Promise<Videos> => {
	return axios.get(`${BASE_URL}/prioritized-videos`).then((res) => res.data)
}

const getCategories = async (): Promise<Categories> => {
	return axios.get(`${BASE_URL}/categories`).then((res) => res.data)
}
const getPostByCategory = async (id: string): Promise<ApiResponse<Post[]> | ApiError> => {
	return axios.get(`${BASE_URL}/posts/category/${id}`).then((res) => res.data)
}
const getPost = async (id: number): Promise<{ data: Post }> => {
	return axios.get(`${BASE_URL}/posts/${id}`).then((res) => res.data)
}
const fetchAllData = async () => {
	const [posts, videos, categories] = await Promise.all([
		getPosts(),
		getTopVideos(),
		getCategories(),
	])

	return { posts, videos, categories }
}

export { getPosts, getVideos, getCategories, getPostByCategory, fetchAllData, getPost }
