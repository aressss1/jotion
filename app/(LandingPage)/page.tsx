import ClientBanner from "./_components/client-banner";
import Hero from "./_components/hero";

const LandingPage = () => {
    return (  
        <div className="h-full mt-20 " >
            <Hero />
            <ClientBanner />
        </div>
    );
}
 
export default LandingPage;