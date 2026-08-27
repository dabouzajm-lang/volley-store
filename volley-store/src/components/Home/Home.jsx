import Hero from "../Hero/Hero";

import CategorySection from "../CategorySection/CategorySection";

import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

import AboutSection from "../AboutSection/AboutSection";

import Benefits from "../Benefits/Benefits";

import Newsletter from "../Newsletter/Newsletter";

import CTA from "../CTA/CTA";


function Home() {

    return (

        <main>

            <Hero />

            <CategorySection />

            <FeaturedProducts />

            <AboutSection />

            <Benefits />

            <Newsletter />

            <CTA />

        </main>

    );

}


export default Home;