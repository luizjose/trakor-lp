import Companies from "./components/Companies/Companies";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import InteractiveCall from "./components/InteractiveCall/InteractiveCall";
import ReinforcementPhrase from "./components/ReinforcementPhrase/ReinforcementPhrase";
import ToolsSession from "./components/ToolsSession/ToolsSession";
import VisualHighlight from "./components/VisualHighliht/VisualHighlight";
import TeamManagement from "./components/TeamManagement/TeamManagement";
import Graphics from "./components/Graphics/Graphics";
import ControlTheFlow from "./components/ControlTheFlow/ControlTheFlow";
import Testimonials from "./components/Testimonials/Testimonial";
import CallToActions from "./components/CallToActions/CallToActions";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
        <Hero />
        <Companies />
        <ReinforcementPhrase />
        <VisualHighlight />
      </div>
      <InteractiveCall />
      <div className="mx-auto px-1 md:px-12">
        <ToolsSession />
        <TeamManagement />
        <Graphics />
      </div>
      <ControlTheFlow />
      <Testimonials />
      <CallToActions />
      <footer className="mt-12">
        <Footer />
      </footer>
    </>
  );
}

export default App;
