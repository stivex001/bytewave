"use client";

import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { useHeader } from "@/contexts/HeaderContext";
import { TbMenu2 } from "react-icons/tb";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
	{ id: 1, name: "Home", href: "/" },
	{ id: 2, name: "Services", href: "/#services" },
	{ id: 3, name: "About Us", href: "/#about" },
	{ id: 4, name: "Portfolio", href: "/#portfolio" },
	{ id: 5, name: "Blog", href: "/blog" },
	{ id: 6, name: "Contact", href: "/#contact" },
];

type Props = {};

const Navbar = (props: Props) => {
	const pathname = usePathname();
	const headerControl = useHeader()!;
	const [activeLink, setActiveLink] = useState<number | null>();
	const [refreshDropdown, setRefreshDropdown] = useState<boolean>(false);
	const [hoverIndex, setHoverIndex] = useState<number | null>(null);
	const [nav, setNav] = useState(false);

	const handleLinkClick = (id: number) => {
		setActiveLink(id);
	};

	const popoverRef = useRef<any>(null);

	useEffect(() => {
		if (refreshDropdown) {
			setTimeout(() => {
				setRefreshDropdown(false);
			}, 500);
		}
	}, [refreshDropdown]);

	const getNavbarBackgroundColor = () => {
		if (pathname.startsWith("/")) {
			return "bg-[#E9F1FF]";
		} else if (pathname.startsWith("/blog")) {
			return "bg-red-500";
		} else {
			return "bg-white"; // Replace with the default color for other pages
		}
	};

	useEffect(() => {
		const handleWindowResize = () => {
			if (window.innerWidth > 768) {
				setNav(false);
			}
		};
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	const navbarBackgroundColor = getNavbarBackgroundColor();

	return (
		<header className={clsx(`w-full  ${navbarBackgroundColor}`)}>
			<nav className="flex items-center justify-between max-w-[1440px] px-5 md:px-16  mx-auto">
				<div className="flex items-center gap-4">
					<Image src={Logo} width={66} height={58} alt="logo" />
					<div className="flex flex-col -ml-3 mt-3 gap-[2px] lg:mt-1">
						<span className={clsx("text-[#272d4e]  text-base lg:text-xl font-bold leading-5")}>
							Bytewave
							{/* <br /> */}
						</span>
						<span
							className={clsx(
								"text-[#272d4e] text-opacity-70 text-xs lg:text-[15px]  leading-4 -mt-1 "
							)}
						>
							Technologies
						</span>
					</div>
				</div>
				{/* links */}
				<Popover className="lg:hidden" ref={popoverRef}>
					{({ open }) => (
						<>
							<Popover.Button
								className="relative z-10 my-4 inline-flex items-center rounded-lg text-[#272D4E] p-2  hover:stroke-purple-600 active:stroke-purple-600 [&:not(:focus-visible)]:focus-outline-none outline-none"
								aria-label="Toggle site navigation"
							>
								{({ open }) => (open ? <TbMenu2 size={30} /> : <TbMenu2 size={30} />)}
							</Popover.Button>
							<AnimatePresence>
								{open && (
									<>
										<Popover.Overlay
											static
											as={motion.div}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											className="fixed inset-0 bg-gray-300/60 z-0 backdrop:blur "
										/>
										<Popover.Panel
											static
											as={motion.div}
											initial={{ opacity: 0, y: -32 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{
												opacity: 0,
												y: -32,
												transition: { duration: 0.2 },
											}}
											className="absolute w-[212px] p-[24px] top-[60px] right-[10px] z-[999] origin-top rounded-b-2xl bg-gray-50  shadow-2xl shadow-gray-900/20"
										>
											<div className="flex flex-col gap-[13px]">
												{links.map(({ id, name, href }, index) => (
													<section
														key={id}
														className={clsx(
															"block text-base leading-7 tracking-tight text-gray-700",
															index < links.length - 1 && "border-b-2 border-black pb-3 "
														)}
													>
														<Popover.Button>
															<Link
																href={`${href}`}
																className="uppercase text-black text-xs font-bold leading-[15px] transition-all hover:text-purple-600 rounded-lg"
																onClick={() => popoverRef.current?.close()}
															>
																{name}
															</Link>
														</Popover.Button>
													</section>
												))}
											</div>
										</Popover.Panel>
									</>
								)}
							</AnimatePresence>
						</>
					)}
				</Popover>
				<div className="hidden lg:flex items-center gap-6 ">
					{links.map((link) => (
						<Link
							href={link.href}
							key={link.id}
							onClick={() => {
								if (link.name === "Contact") {
									setTimeout(() => {
										headerControl?.setOpenContactModal(true);
									}, 700);
								}
							}}
						>
							<div
								className={`relative h-24 text-base text-[#272d4e] cursor-pointer group flex items-center justify-center`}
								onMouseEnter={() => {
									setHoverIndex(link.id);
								}}
								onMouseLeave={() => setHoverIndex(null)}
								onClick={() => handleLinkClick(link.id)}
							>
								<h1 className={`relative z-10 capitalize text-[#272d4e] text-base font-bold mt-1`}>
									{link.name}
								</h1>
								<div
									className={`absolute w-full bottom-5 h-1 transition-all ease-in-out duration-500 group-hover:bg-purple-600 ${
										activeLink === link.id && "bg-purple-600"
									}`}
								></div>
							</div>
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
