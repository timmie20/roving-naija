import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import styles from "./faq.module.css"
import MainLayout from "@/components/app/MainLayout"

export default function page() {
	return (
		<MainLayout>
			<section
				className={`${styles.faq_bg} flex h-[347px] w-full items-center justify-center`}>
				<h1 className="font-Cormorant text-xl font-bold text-white md:text-5xl">
					FREQUENTLY ASKED QUESTIONS
				</h1>
			</section>{" "}
			<div className="mx-auto max-w-screen-xl py-8">
				<AccordionDemo />
			</div>
		</MainLayout>
	)
}

function AccordionDemo() {
	const accordionContent = [
		{
			id: "one",
			head: "why roving naija",
			Content:
				"	Lorem ipsum dolor sit amet: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
		},
		{
			id: "two",
			head: "why roving naija",
			Content:
				"	Lorem ipsum dolor sit amet: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
		},
		{
			id: "three",
			head: "why roving naija",
			Content:
				"	Lorem ipsum dolor sit amet: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
		},
	]
	return (
		<Accordion type="multiple" className="w-full space-y-4 px-3">
			{accordionContent.map((accordion) => (
				<AccordionItem
					value={accordion.id}
					key={accordion.id}
					className="rounded-sm border-[1px] border-app-dark px-4">
					<AccordionTrigger className="text-base capitalize text-secondary-darker">
						{accordion.head}
					</AccordionTrigger>
					<AccordionContent className="capitalize">{accordion.Content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
