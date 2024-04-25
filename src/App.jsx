import About from "./components/About";
import First from "./components/First";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Member from "./components/Member";

function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header />
      <First />
      <About />
      <Member />
      <Footer />
    </div>
  );
}

export default App;
