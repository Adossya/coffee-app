import "./index.scss"
import Nav from "../Nav/Nav"
import Subtitle from "../Subtitle/Subtitle"
import Footer from "../Footer/Footer"
import AboutSecond from "../AboutSecond/AboutSecond"

import CoffeeItem from "../CoffeeItem/CoffeeItem";
import cardsData from "../../data/data.json"

const Pleasure = () => {
    return ( 
        <div className="pleasure">
            <header className="pleasure__header">
                <div className="container">
                    <Nav color='white' />
                    <Subtitle subtitle="For your pleasure"/>
                </div>
            </header>
            <section className="pleasure-about">
            <div className="container">
                <AboutSecond 
                    src="/img/coffee.png"
                    title="About our goods"
                    first="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
                    rest="Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face"
                    />
                </div>
                <div className="filter__items">
                    {/* {cardsData.map((item, index) => {
                        return <CoffeeItem data={item} key={index} />
                    })} */}

                    {cardsData.filter((item) => item.country === "Brazil")
                               .map((item, index) => (<CoffeeItem data={item} key={index} />))}



                </div>
            </section>
            <Footer />
        </div>
        
     );
}
 
export default Pleasure;