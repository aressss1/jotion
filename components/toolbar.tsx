'use client'

import { Doc } from "@/convex/_generated/dataModel";

interface ToolbarProps {
    document : Doc<"documents">
}

const Toolbar = ({
    document
}: ToolbarProps) => {
    return ( 
        <div>
            Toolbar
        </div>
     );
}
 
export default Toolbar;