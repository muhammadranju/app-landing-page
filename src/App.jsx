import ChooseUifry from "./components/ChooseUifry";
import FAQSection from "./components/FAQSection";
import FullyCustomizable from "./components/FullyCustomizable";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurUsers from "./components/OurUsers";
import UifryPremium from "./components/UifryPremium";

function App() {
  return (
    <div className="capitalize">
      <Header />
      <Hero />
      <UifryPremium />
      <ChooseUifry />
      <FullyCustomizable />
      <OurUsers />
      <FAQSection />
    </div>
  );
}

export default App;
