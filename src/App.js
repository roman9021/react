import './App.scss';
import Header from "./header";
import Home from './Components/Home/Home';
import Sidebar from "./Components/sidebar/sidebar";
import {useState} from "react";
import Features from "./Components/Features/Features";
import About from "./Components/about/about";

function App() {
    let [activeMenu,setActiveMenu] = useState(false);
  return (
    <div className="App">
        <Header MenuActive={activeMenu} SetMenuActive = {setActiveMenu}/>
        <Home/>
        <Sidebar active={activeMenu}/>
        <Features/>
        <About/>
    </div>
  );
}

export default App;
