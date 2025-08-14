"use client"

import ListItem from "@/components/ui/list-item";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { fetchInternalImage } from "next/dist/server/image-optimizer";

function HomePopup() {
	return (
		<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
			<li className="row-span-3">
				<NavigationMenuLink asChild>
					<Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md
													bg-[url(/portfolio/images/scotland.jpg)] bg-cover bg-center bg-gray-300 bg-blend-multiply"
						href="/"
					>
						<div className="mt-4 mb-2 text-lg font-medium text-white text-shadow-lg">
							About Myself
						</div>
						<p className="text-white text-sm leading-tight text-shadow-lg">
							CompSci Graduate
						</p>
					</Link>
				</NavigationMenuLink>
			</li>
			<ListItem href="/#experience" title="Experience">
				Experienced graduate developer
			</ListItem>
			<ListItem href="/#interests" title="Interests">
				Keen volunteer and traveller
			</ListItem>
			<ListItem href="/#contacts" title="Contact Details">
				Contact me on various platforms
			</ListItem>
		</ul>
	)
}

function ProjectsPopup() {
	return (
		<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
			<li className="row-span-3">
				<NavigationMenuLink asChild>
					<Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md
													bg-[url(/portfolio/images/barcelona.jpg)] bg-cover bg-center bg-gray-300 bg-blend-multiply"
						href="/projects"
					>
						<div className="mt-4 mb-2 text-lg font-medium text-white text-shadow-lg">
							Things I Have Made
						</div>
						<p className="text-white text-sm leading-tight text-shadow-lg">
							A wide selection
						</p>
					</Link>
				</NavigationMenuLink>
			</li>
			<ListItem href="/projects#frontend" title="Frontend Development">
				Websites & Unity3D Projects
			</ListItem>
			<ListItem href="/projects#arts" title="Artistic Creations">
				3D Modeling & Graphic Designs
			</ListItem>
			<ListItem href="/projects#embedded" title="Embedded Development">
				FPGA & Embedded Experiments
			</ListItem>
		</ul>
	)
}

function BlogsPopup() {
	return (
		<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
			<li className="row-span-3">
				<NavigationMenuLink asChild>
					<Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md
													bg-[url(/portfolio/images/london.jpg)] bg-cover bg-center bg-gray-300 bg-blend-multiply"
						href="/blogs"
					>
						<div className="mt-4 mb-2 text-lg font-medium text-white text-shadow-lg">
							Intersting Things
						</div>
						<p className="text-white text-sm leading-tight text-shadow-lg">
							It's not that interesting
						</p>
					</Link>
				</NavigationMenuLink>
			</li>
			<ListItem href="/blogs#featured" title="Featured Blogs">
				A few blogs I am particularly proud of
			</ListItem>
			<ListItem href="/blogs#all" title="Blog Glossary">
				All the blogs I have ever written
			</ListItem>
			<ListItem href="/blogs#medium" title="Medium Links">
				Find my blogs directly on medium
			</ListItem>
		</ul>
	)
}

export default function BaseLayout({
	title,
	children,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	return (
		<div className="w-full min-h-screen">
			<div className="fixed flex flex-row justify-center w-full z-10">
				<div className="bg-popover shadow md:rounded-xl
												border-b md:border
												w-full md:w-2xl
												p-1 md:m-1
												flex flex-row
												content-between justify-center">

					<svg className="ml-4 max-sm:ml-2 mr-2 size-9 fill-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.867 33.867">
						<path d="M30.067 68.121v28.182h19.777a14.06 14.06 0 0 0 14.09-14.09 14.06 14.06 0 0 0-14.09-14.092Zm6.77 4.481h13.007v19.192H36.831V85.03h7.89V80.52h-7.89z" transform="translate(-30 -65)" />
					</svg>

					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Home</NavigationMenuTrigger>
								<NavigationMenuContent>
									<HomePopup></HomePopup>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Projects</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ProjectsPopup></ProjectsPopup>
								</NavigationMenuContent>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Blogs</NavigationMenuTrigger>
								<NavigationMenuContent>
									<BlogsPopup></BlogsPopup>
								</NavigationMenuContent>
							</NavigationMenuItem>

						</NavigationMenuList>
					</NavigationMenu>

					<div className="md:grow"></div>

					<ModeToggle></ModeToggle>

				</div>
			</div>
			{children}
		</div>
	);
}