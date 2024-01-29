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
        <div className="mx-auto py-10 " >
            <div className="flex gap-2" >
                <div className="flex flex-col space-y-2" >
                    <div className=" text-zinc-950 text-5xl font-bold leading-10">
                        Tired of Notion?<br />Say hi to Jotion
                    </div>
                    <div className=" text-black text-opacity-60 text-lg font-medium leading-7">
                        Stop switching between apps to get work done. Keep info flowing in and out of Notion and reduce overhead with our connections.
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
                <Image
                    src="/hero.png"
                    alt="Hero Image"
                />
            </div>

        </div>
    );
}

export default Hero;