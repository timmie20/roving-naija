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
				<h1 className="font-Cormorant text-5xl text-white">FREQUENTLY ASKED QUESTIONS</h1>
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
			Content: "shey me i know ni",
		},
		{
			id: "two",
			head: "why roving naija",
			Content: "you fit ask the designer",
		},
		{
			id: "three",
			head: "why roving naija",
			Content: "no they question me this guy",
		},
	]
	return (
		<Accordion type="single" collapsible className="w-full space-y-4">
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
