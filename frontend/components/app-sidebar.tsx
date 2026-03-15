import {
  LayoutDashboard,
  Megaphone,
  Briefcase,
  Newspaper,
  Settings,
  LogOut,
  ChevronUp,
  User2,
  Users,
  Image as ImageIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

// Menu items for different roles.
const userItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Aspirasi Saya",
    url: "/dashboard/aspirasi",
    icon: Megaphone,
  },
  {
    title: "Program Saya",
    url: "/dashboard/program",
    icon: Briefcase,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
]

const adminItems = [
  {
    title: "Admin Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Kelola Aspirasi",
    url: "/dashboard/admin/aspirasi",
    icon: Megaphone,
  },
  {
    title: "Kelola Program",
    url: "/dashboard/admin/program",
    icon: Briefcase,
  },
  {
    title: "Relawan & User",
    url: "/dashboard/admin/users",
    icon: Users,
  },
  {
    title: "Konten Berita",
    url: "/dashboard/admin/berita",
    icon: Newspaper,
  },
  {
    title: "Kelola Media",
    url: "/dashboard/admin/media",
    icon: ImageIcon,
  },
  {
    title: "System Settings",
    url: "/dashboard/admin/settings",
    icon: Settings,
  },
]

export function AppSidebar({ user }: { user: any }) {
  const role = user?.user_metadata?.role || "user";
  const items = role === "admin" ? adminItems : userItems;

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
           <Image
              src="/logo-livi.png"
              alt="Logo"
              width={140}
              height={35}
              className="h-8 w-auto object-contain dark:brightness-0 dark:invert"
            />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{role === "admin" ? "Panel Administrator" : "Menu Pengguna"}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  />
                }
              >
                <User2 className="h-5 w-5" />
                <div className="flex flex-col gap-0.5 text-left leading-none">
                  <span className="font-semibold text-xs truncate max-w-[120px]">
                    {user?.email}
                  </span>
                  <Badge
                    variant="outline"
                    className="w-fit text-[10px] py-0 px-1 capitalize"
                  >
                    {role}
                  </Badge>
                </div>
                <ChevronUp className="ml-auto" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <form action="/auth/signout" method="post" className="w-full">
                  <DropdownMenuItem className="p-0">
                    <button type="submit" className="flex w-full items-center gap-2 px-2 py-1.5 text-sm">
                      <LogOut className="h-4 w-4" />
                      <span>Sign out</span>
                    </button>
                  </DropdownMenuItem>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
