import ClientBanner from "./_components/client-banner";
import Footer  from "./_components/footer";
import Hero from "./_components/hero";
import NewTools from "./_components/new-tools";
import TryToday from "./_components/try-today";

const LandingPage = () => {
    return (  
        <div className="h-full mt-20 " >
            <Hero />
            <ClientBanner />
            <NewTools />
            <TryToday />
            <Footer />
        </div>
    );
}
 
export default LandingPage;