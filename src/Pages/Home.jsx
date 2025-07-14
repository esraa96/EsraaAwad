import Hero from "../components/Hero";
import AboutSection  from "../components/AboutSection";

const Home = () => {
    return (
        <main className="container mx-auto px-8 pt-20">
            <Hero />
             <AboutSection /> 
        </main>
    );
};

export default Home;