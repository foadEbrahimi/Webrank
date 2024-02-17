import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Hero from "./Components/Header/Hero/Hero";
import "./index.css";
function App() {
  return (
    <div className="font-Tanha">
      <div className="App md:h-[100vb]  flex flex-col gap-y-32 pb-4">
        <Header />
        <Hero />
      </div>
      <About />
    </div>
  );
}

export default App;
