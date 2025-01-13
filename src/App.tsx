
import CaseStudies from "./components/case-studies/case-studies";
import { Header } from "./components/common/common";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Hero } from "./components/hero/hero";
import { Nav } from "./components/nav/nav";
import { RecentWork } from "./components/recent-work/recent-work";
import { Testimonials } from "./components/testimonials/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function App() {
  return (
    <div>
      <Header>
        <Nav />
        <Hero />
      </Header>
      <CaseStudies />
      <Testimonials />
      <RecentWork />
      <Contact />
      <Footer />
    </div>
  )
}
