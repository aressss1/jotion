import ClientBanner from "./_components/client-banner";
import Hero from "./_components/hero";
import NewToolsSection from "./_components/new-tools";

const LandingPage = () => {
    return (  
        <div className="h-full mt-20 " >
            <Hero />
            <ClientBanner />
            <NewToolsSection />
        </div>
    );
}
 
export default LandingPage;