"use client";

import * as Ui from "@/lib/components/ui/";
import * as Icons from "lucide-react";
import Link from "next/link";
import React from "react";
import { SidebarItem } from "@/lib/types/ui";
import { SidebarItem } from "@/lib/types";

const websites: SidebarItem = {
	title: "Websites",
	icon: Icons.Earth,
	urlPrefix: "/websites",
	subItems: [
		{ title: "My Website", url: "/my-website" },
	],
};
const projects: SidebarItem = {
	title: "Projects",
	icon: Icons.Folder,
	urlPrefix: "/projects",
	subItems: [
		{ title: "LUtils", url: "/lutils" },
		{ title: "Bytecode Manipulation", url: "/bytecode-manipulation" },
		{ title: "Windows Utility", url: "/windows-utility" },
		{ title: "Raspberry Sensor", url: "/raspberry-sensor" },
		{ title: "LNetCore", url: "/xbackpack" },
		{ title: "FxUtils", url: "/xores" },
		{ title: "LGames", url: "/xsurvive" },
		{ title: "Wiki-Builder", url: "/xsurvive" },
	],
};
const mods: SidebarItem = {
	title: "Mods",
	icon: Icons.Settings,
	urlPrefix: "/mods",
	subItems: [
		{ title: "XBackpack", url: "/xbackpack" },
		{ title: "XOres", url: "/xores" },
		{ title: "XSurvive", url: "/xsurvive" },
		{ title: "XGeneration", url: "/xgeneration" },
		{ title: "XChallenges", url: "/xchallenges" },
	],
};
const services: SidebarItem = {
	title: "Services",
	icon: Icons.Server,
	urlPrefix: "/services",
	subItems: [
		{ title: "Artifactory", url: "/artifactory" },
		{ title: "BitWarden", url: "/bitwarden" },
		{ title: "Database", url: "/database" },
		{ title: "Docker", url: "/docker" },
		{ title: "Mail Server", url: "/mail-server" },
		{ title: "Mail Web Ui", url: "/mail-web-ui" },
	],
};

export default function Sidebar() {
	const { open, toggleSidebar } = Ui.useSidebar();
	
	return <Ui.Sidebar collapsible="icon">
		<Ui.SidebarHeader onClick={toggleSidebar} className={open ? "cursor-pointer" : "flex items-center justify-center cursor-pointer"}>
			<SidebarHeaderContent open={open}/>
		</Ui.SidebarHeader>
		
		<Ui.SidebarContent>
			<SidebarGroup title="Programing">
				<Ui.SidebarMenu>
					<CollapsibleSidebarMenuItem item={websites}/>
					<CollapsibleSidebarMenuItem item={projects}/>
					<CollapsibleSidebarMenuItem item={mods}/>
					<CollapsibleSidebarMenuItem item={services}/>
				</Ui.SidebarMenu>
			</SidebarGroup>
		</Ui.SidebarContent>
		
		<Ui.SidebarFooter className={open ? "" : "flex items-center justify-center"}>
			<SidebarFooterContent open={open}/>
		</Ui.SidebarFooter>
	</Ui.Sidebar>;
}

function SidebarHeaderContent(
	{ open }: { open: boolean },
) {
	if (!open) {
		return <SidebarHeaderAvatar open={open}/>;
	}
	return <div className="flex items-center bg-gray-200 rounded-md p-1 pt-0 pb-0">
		<SidebarHeaderAvatar open={open}/>
		<div className="ml-3.5 mt-1 mb-1">
			<p className="text-lg font-bold text-nowrap">Luis Staudt</p>
			<p className="text-sm text-nowrap">Hobby Developer</p>
		</div>
	</div>;
}

function SidebarHeaderAvatar(
	{ open }: { open: boolean },
) {
	return <Ui.Avatar className={open ? "w-10 h-10" : "w-7 h-7"}>
		<Ui.AvatarImage src="https://avatars.githubusercontent.com/u/76595940?v=4"/>
		<Ui.AvatarFallback>LS</Ui.AvatarFallback>
	</Ui.Avatar>;
}

function SidebarGroup(
	{ title, children }: { title?: string, children: React.ReactNode },
) {
	return <Ui.SidebarGroup>
		{title && <Ui.SidebarGroupLabel>{title}</Ui.SidebarGroupLabel>}
		<Ui.SidebarGroupContent>
			{children}
		</Ui.SidebarGroupContent>
	</Ui.SidebarGroup>;
}

function CollapsibleSidebarMenuItem(
	{ item }: { item: SidebarItem },
) {
	return <Ui.Collapsible className="group/collapsible">
		<Ui.SidebarMenuItem>
			<Ui.CollapsibleTrigger asChild>
				<Ui.SidebarMenuButton>
					<item.icon/>
					<span>{item.title}</span>
					<Icons.ChevronRight className="ml-auto duration-400 ease group-data-[state=open]/collapsible:rotate-90"/>
				</Ui.SidebarMenuButton>
			</Ui.CollapsibleTrigger>
			<Ui.CollapsibleContent>
				<Ui.SidebarMenuSub>
					{item.subItems.map(subItem => (
						<Ui.SidebarMenuSubItem key={subItem.title} className="block">
							<Ui.SidebarMenuSubButton asChild>
								<Link href={item.urlPrefix + subItem.url}>
									<span>{subItem.title}</span>
								</Link>
							</Ui.SidebarMenuSubButton>
						</Ui.SidebarMenuSubItem>
					))}
				</Ui.SidebarMenuSub>
			</Ui.CollapsibleContent>
		</Ui.SidebarMenuItem>
	</Ui.Collapsible>;
}

function SidebarFooterContent(
	{ open }: { open: boolean },
) {
	if (!open) {
		return <Icons.SettingsIcon className={open ? "ml-auto cursor-pointer" : "cursor-pointer"}/>;
	}
	return <div className="flex items-center bg-gray-200 rounded-md p-2">
		<div>
			<p className="text-base text-nowrap">
				© {new Date().getFullYear()} Luis Staudt
			</p>
		</div>
		<Icons.SettingsIcon className={open ? "ml-auto cursor-pointer" : "cursor-pointer"}/>
	</div>;
}
