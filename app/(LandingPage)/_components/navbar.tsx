'use client'

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {
    const { isAuthenticated , isLoading } = useConvexAuth()

    return ( 
        <div>
            {isLoading && (
                <Spinner />
            )}
            {!isAuthenticated && !isLoading && (
                <>
                    <SignInButton mode="modal" >
                        <Button variant="ghost" size="sm">
                            Log in
                        </Button>
                    </SignInButton>
                    <SignInButton mode="modal" >
                        <Button variant="ghost" size="sm">
                            Get Jotion Free
                        </Button>
                    </SignInButton>
                </>
            )}
            {isAuthenticated && !isLoading && (
                <>
                    <Button variant="ghost"  asChild>
                        <Link href="/documents" >
                            Enter Jotion
                        </Link>
                    </Button>
                    <UserButton 
                        afterSignOutUrl="/"
                    />
                </>
            )}
        </div>
     );
}
 
export default Navbar;