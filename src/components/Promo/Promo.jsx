import Divider from "../Divider/Divider";
import Nav from "../Nav/Nav";
import "./index.scss"

const Promo = () => {
    return (  
        <main className="promo">
            <div className="container">
                <Nav color="white"/>
                <h1 className="promo__title">Everything You Love About Coffe</h1>
                <Divider color="white"/>
                <h3 className="promo__description">We makes every day full of energy and taste Want to try our beans?</h3>
                <div className="promo__button">
                    <a href="#">More</a>
                </div>
            </div>

        </main>
    );
}
 
export default Promo;