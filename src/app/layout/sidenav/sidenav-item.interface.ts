
export interface SidenavItem {
    route: string;
    label: string;
    routerLinkActive?: { exact: boolean };
    badge?: {
        value: string;
        background: string;
        color: string;
    };
}