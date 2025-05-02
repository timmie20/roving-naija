/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dashboard.rovingnaija.com",
				port: "",
				pathname: "/storage/posts/**",
			},
			{
				protocol: "http",
				hostname: "34.29.221.229",
				port: "",
				pathname: "/storage/posts/**",
			},
			{
				protocol: "https",
				hostname: "dummyimage.com",
				port: "",
				pathname: "/**",
			},
		],
	},
}

export default nextConfig
