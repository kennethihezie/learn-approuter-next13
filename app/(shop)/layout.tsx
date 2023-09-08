import { ReactNode } from "react";

/*
Opting specific segments into a layout
To opt specific routes into a layout, create a new route group 
(e.g. (shop)) and move the routes that share the same layout 
into the group (e.g. product and cart). The routes outside 
of the group will not share the layout (e.g. dashboard).
*/

export default function Layout({children}: {children: ReactNode}){
    return (
        <>{ children }</>
    )
}