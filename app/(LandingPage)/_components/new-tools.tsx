import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const NewToolsSection = () => {
    const toolsContent = [
        {
            imgSrc: "/tools/t-1.png",
            toolName: "Infinite hierarchy",
            toolDesc: "No limits on nesting pages inside pages for better organization."
        },
        {
            imgSrc: "/tools/t-2.png",
            toolName: "Tables & databases",
            toolDesc: "Keep simple or sophisticated records with views, filters, tags, and more."
        },
        {
            imgSrc: "/tools/t-3.png",
            toolName: "#Markdown & /slash commands ",
            toolDesc: "Access all of Notion's tools without touching your mouse to stay in flow."
        },
        {
            imgSrc: "/tools/t-4.png",
            toolName: "Drag & drop",
            toolDesc: "Get your ideas on the page, then rearrange. Our editor helps you structure your thoughts and plans."
        },
    ]

    return (
        <div className="flex justify-center items-center flex-col gap-6 py-10 w-full " >
            <div className="flex flex-col gap-2 text-center " >
                <div className=" text-zinc-950 px-3 md:px-0 text-4xl md:text-5xl font-bold">
                    New tools, new ways to work
                </div>
                <div className=" text-black px-5 md:px-0 text-opacity-60 text-base md:text-lg font-medium leading-7">
                    We also built in some advanced features for you.
                </div>
            </div>
            <div className="mx-auto grid md:grid-cols-2 grid-cols-1 gap-6 " >
                {toolsContent.map((tool) => (
                    <Card key={tool.toolName} className="text-left shadow-lg md:max-w-[367px] w-[297px] "  >
                        <CardHeader>
                            <div>
                                <Image
                                    src={tool.imgSrc}
                                    alt={tool.toolName}
                                />
                            </div>
                            <CardTitle className="text-zinc-950 pt-3 text-lg font-bold" >
                                {tool.toolName}
                            </CardTitle>
                            <CardContent className="text-black text-opacity-60 text-base font-normal leading-normal pl-0 pb-3 " >
                                {tool.toolDesc}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>

        </div>
    );
}

export default NewToolsSection;