import { Outlet } from "react-router-dom";
import { useState } from "react";

import AboutSecond from "../AboutSecond/AboutSecond";
import Filters from "../Filters/Filters";
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav";
import Subtitle from "../Subtitle/Subtitle";
import { createContext } from "react";
import { useContext } from "react";
import { ShowContext } from "../showContext/showContext";

const SecondPage = () => {
    const [show, setShow] = useState(true);

    return ( 

        <ShowContext.Provider value={{show, setShow}}>
            <div className="coffee">
                <header className="coffee__header" style={{width: "100%", height: "26rem", background: "url('./img/bg_second.png') center center/cover no-repeat"}}>
                    <div className="container">
                        <Nav color='white' />
                        <Subtitle subtitle="Our Coffee"/>
                    </div>
                </header>
                {show? (
                    <>
                    <section className="coffee__about">
                        <div className="container">
                        <AboutSecond 
                        src="/img/girl.png"
                        title="About our beans"
                        first="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
                        rest="Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face"
                        />

                        </div>
                    </section>
                    <Filters setShow={setShow} />
                    </>
                ) : (
                    <Outlet />
                )}

                <Footer/>
            </div>
        </ShowContext.Provider>

     );
}
 
export default SecondPage;