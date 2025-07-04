import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import SideBar from "./Components/SideBar";

import { MovieContext } from "./Components/Utils/MovieContext";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
