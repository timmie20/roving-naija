import MainLayout from "@/components/app/MainLayout"
import React from "react"
import styles from "./instructions.module.css"

export default function page() {
	return (
		<MainLayout>
			<section
				className={`${styles.instructions_bg} flex h-[347px] w-full items-center justify-center`}>
				<h1 className="font-Cormorant text-5xl text-white">INSTRUCTIONS</h1>
			</section>{" "}
			<div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 py-8">
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
