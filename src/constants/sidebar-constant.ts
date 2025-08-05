import { LayoutDashboard, Album, SquareMenu, Armchair, Users } from "lucide-react";

interface SidebarMenuItem {
    title: string;
    url: string;
    icon: React.ComponentType<any>;
}

export const SIDEBAR_MENU_LIST: {
    admin: SidebarMenuItem[];
    cashier: SidebarMenuItem[];
    kitchen: SidebarMenuItem[];
} = {
    admin: [
        {
            title: "Dashboard",
            url: "/admin",
            icon: LayoutDashboard,
        },
        {
            title: "Order",
            url: "/order",
            icon: Album,
        },
        {
            title: "Menu",
            url: "/admin/menu",
            icon: SquareMenu,
        },
        {
            title: "Table",
            url: "/admin/table",
            icon: Armchair,
        },
        {
            title: "User",
            url: "/admin/user",
            icon: Users,
        },
    ],

    cashier: [],
    kitchen: [],
};

export type SidebarMenuKey = keyof  typeof SIDEBAR_MENU_LIST;