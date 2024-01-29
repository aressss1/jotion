'use client'

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="mx-auto py-10 w-fit " >
            <div className="flex gap-5" >
                <div className="flex flex-col gap-6" >
                    <div className=" text-zinc-950 text-5xl font-bold ">
                        Tired of Notion?<br />Say hi to Jotion
                    </div>
                    <div className=" text-black text-opacity-60 text-lg font-medium leading-7">
                        Jotion is the connected workspace where<br />better, faster work happens
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
                            <Button variant="ghost" size="lg" asChild>
                                <Link href="/documents">
                                    Enter Jotion
                                    <ArrowRight />
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-center" >
                    <Image
                        src="/hero.png"
                        alt="Hero Image"
                    />
                </div>
            </div>

        </div>
    );
}

export default Hero;