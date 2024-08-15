import ChooseUifry from "./components/ChooseUifry";
import FullyCustomizable from "./components/FullyCustomizable";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UifryPremium from "./components/UifryPremium";

function App() {
  return (
    <div className="capitalize">
      <Header />
      <Hero />
      <UifryPremium />
      <ChooseUifry />
      <FullyCustomizable />
    </div>
  );
}

export default App;
