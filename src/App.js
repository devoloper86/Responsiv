import "./App.css";
import Main_6 from "./Components/Mail_6/Main_6";
import Main_7 from "./Components/Main_7/Main_7";
import Main_4 from "./Components/Main_4/Main_4";
import Main_5 from "./Components/Main_5/Main_5";
import Main1 from "./Components/Main_one/Main1";
import Maintree from "./Components/Main_tree/Maintree";
import Maintwo from "./Components/Main_two/Maintwo";
import Navbar from "./Components/Navbar/Navbar";
import Media from "./Components/Comp/Navbar/Media";
import Meinone from "./Components/Comp/Mainone/Mainone";
import Footer from "./Components/Comp/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="max-[375px]:hidden max-[1440px]:block">
        <Navbar />
        <Main1 />
        <Maintwo />
        <Maintree />
        <Main_4 />
        <Main_5 />
        <Main_6 />
        <Main_7 />
      </div>
      <div className="max-[375px]:block max-[1440px]:hidden">
        <Media />
        <Meinone />
        <Footer />
      </div>
    </div>
  );
}

export default App;
