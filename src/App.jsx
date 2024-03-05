import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Hero from "./Components/Header/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import Servant from "./Components/Servant/Servant";
import "./index.css";
const titleSections = [
  { ID: 1, subTitle: "خدمات", Title: "خدمات ما را بررسی کنید" },
  { ID: 2, subTitle: "نمونه کارها", Title: "نمونه کارها ما را بررسی کنید" },
  { ID: 3, subTitle: "تیم", Title: "تیم ما را بررسی کنید" },
  { ID: 4, subTitle: "تماس با ما", Title: "با ما تماس بگیرید" },
];
function App() {
  return (
    <div className="font-Tanha">
      <div className="App md:h-[100vb] flex flex-col gap-y-32 pb-4">
        <Header />
        <Hero />
      </div>
      <main className="space-y-32">
        <About />
        <Servant {...titleSections[0]} />
        <Portfolio {...titleSections[1]} />
      </main>
    </div>
  );
}

export default App;
