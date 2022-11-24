import { Icon } from "@visurel/iconify-angular";

export interface SidenavItem {
    route: string;
    label: string;
    routerLinkActive?: { exact: boolean };
    icon: Icon;
    badge?: {
        value: string;
        background: string;
        color: string;
    };
}