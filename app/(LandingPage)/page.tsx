import ClientBanner from "./_components/client-banner";
import Hero from "./_components/hero";
import NewToolsSection from "./_components/new-tools";
import TryTodaySection from "./_components/try-today";

const LandingPage = () => {
    return (  
        <div className="h-full mt-20 " >
            <Hero />
            <ClientBanner />
            <NewToolsSection />
            <TryTodaySection />
        </div>
    );
}
 
export default LandingPage;