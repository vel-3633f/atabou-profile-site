import { useEffect, useState } from "react";
import About from "./components/About";
import First from "./components/First";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Member from "./components/Member";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <First />
          <About />
          <Member />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
