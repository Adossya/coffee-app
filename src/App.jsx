import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SecondPage from "./components/pages/SecondPage";
import Pleasure from "./components/Pleasure/Pleasure";


import MainPage from "./components/pages/mainPage";
import CardInfo from "./components/CardInfo/CardInfo";
import './styles/App.css'

function App() {


  return (
    <Router>
      <Routes basename="/coffe-app">
        <Route path="/" element={<MainPage/>} />
        <Route path="/ourcoffee" element={<SecondPage />}>

           <Route path=":id" element={<CardInfo />} />
        </Route>
        <Route path="/pleasure" element={<Pleasure />} />
      </Routes>
    </Router>

  )
}

export default App
