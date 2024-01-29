import Image from "next/image";

const ClientBanner = () => {
    const clientRow1 = [
        {
            src: "/clients/c-1.png",
            alt: "c-1"
        },
        {
            src: "/clients/c-2.png",
            alt: "c-2"
        },
        {
            src: "/clients/c-3.png",
            alt: "c-3"
        },
        {
            src: "/clients/c-4.png",
            alt: "c-4"
        },
        {
            src: "/clients/c-5.png",
            alt: "c-5"
        },
        {
            src: "/clients/c-6.png",
            alt: "c-6"
        },
    ];

    const clientRow2 = [
        {
            src: "/clients/c-7.png",
            alt: "c-7"
        },
        {
            src: "/clients/c-8.png",
            alt: "c-8"
        },
        {
            src: "/clients/c-9.png",
            alt: "c-9"
        },
        {
            src: "/clients/c-10.png",
            alt: "c-10"
        },
        {
            src: "/clients/c-11.png",
            alt: "c-11"
        },
        {
            src: "/clients/c-12.png",
            alt: "c-12"
        },
    ];

    const clientRow3 = [
        {
            src: "/clients/c-13.png",
            alt: "c-13"
        },
        {
            src: "/clients/c-14.png",
            alt: "c-14"
        },

    ]

    return (
        <div className="flex justify-center items-center w-full flex-col py-20 gap-8" >
            <div className="flex flex-col gap-4" >
                <div className="text-center text-zinc-950 text-4xl lg:text-5xl font-bold leading-10">
                    Millions run on Notion every day
                </div>
                <div className="text-center text-zinc-950 text-base font-normal leading-snug tracking-tight">
                    Powering the world&apos;s best teams, from next-generation startups to established enterprises.
                </div>
            </div>
            <div className="flex flex-col gap-8" >
                <div className="flex flex-row justify-center items-center gap-10 " >
                    {clientRow1.map((c) => (
                        <Image
                            key={c.alt}
                            src={c.src}
                            alt={c.alt}
                            className="h-7 w-24"
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-center items-center gap-7 " >
                    {clientRow2.map((c) => (
                        <Image
                            key={c.alt}
                            src={c.src}
                            alt={c.alt}
                            className="h-6 w-20"
                        />
                    ))}
                </div>
                <div className="flex flex-row justify-center items-center gap-7 " >
                    {clientRow3.map((c) => (
                        <Image
                            key={c.alt}
                            src={c.src}
                            alt={c.alt}
                            className="w-28 h-6"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ClientBanner;