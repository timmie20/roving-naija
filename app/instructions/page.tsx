import MainLayout from "@/components/app/MainLayout"
import React from "react"
import styles from "./instructions.module.css"

export default function page() {
	return (
		<MainLayout>
			<section
				className={`${styles.instructions_bg} flex h-[347px] w-full items-center justify-center`}>
				<h1 className="font-Cormorant text-xl font-bold text-white md:text-5xl">
					INSTRUCTIONS
				</h1>
			</section>{" "}
			<div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 px-3 py-8 md:grid-cols-2">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed praesentium quam ipsam
					molestiae reprehenderit vitae excepturi atque tenetur. Nam quaerat ipsa commodi
					cupiditate similique, sapiente numquam quasi voluptatum perferendis necessitatibus.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed praesentium quam ipsam
					molestiae reprehenderit vitae excepturi atque tenetur. Nam quaerat ipsa commodi
					cupiditate similique, sapiente numquam quasi voluptatum perferendis necessitatibus.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed praesentium quam ipsam
					molestiae reprehenderit vitae excepturi atque tenetur. Nam quaerat ipsa commodi
					cupiditate similique, sapiente numquam quasi voluptatum perferendis necessitatibus.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed praesentium quam ipsam
					molestiae reprehenderit vitae excepturi atque tenetur. Nam quaerat ipsa commodi
					cupiditate similique, sapiente numquam quasi voluptatum perferendis necessitatibus.
				</p>
			</div>
		</MainLayout>
	)
}
