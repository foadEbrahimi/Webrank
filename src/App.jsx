import Header from "./Components/Header/Header";
import Hero from "./Components/Header/Hero/Hero";
import "./index.css";
function App() {
  return (
    <div className="App md:h-[100vb] font-Tanha flex flex-col gap-y-32">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
