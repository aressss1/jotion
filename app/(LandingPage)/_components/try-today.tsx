'use client'

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight, Link } from "lucide-react";
import Image from "next/image";


const TryTodaySection = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="flex relative flex-col justify-center items-center  py-10 w-full" >
            <Image
                src="/logo.svg"
                height="40"
                width="40"
                alt="Logo"
            />
            <div className=" text-center text-zinc-950 text-4xl font-bold leading-10">
                Try Jotion today
            </div>
            <div className="text-center text-black text-opacity-60 text-lg font-normal  leading-normal">
                Get started for free.<br />Add your whole team as your needs grow.
            </div>
            <div>
                {isLoading && (
                    <Spinner />
                )}
                {!isAuthenticated && !isLoading && (
                    <SignInButton mode="modal">
                        <Button size="lg"  >
                            Get Jotion free
                        </Button>
                    </SignInButton>
                )}
                {isAuthenticated && !isLoading && (
                    <Button size="lg" asChild>
                        <Link href="/documents">
                            Enter Jotion
                            <ArrowRight className="pl-1" />
                        </Link>
                    </Button>
                )}
            </div>

            <div className="absolute bottom-0 left-[20%]" >
                <Image
                    src="/try-today.png"
                    alt="try-today"
                />
            </div>
        </div>
    );
}

export default TryTodaySection;