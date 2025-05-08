import coffe1 from "../../img/coffe/1.jpg"
import coffe2 from "../../img/coffe/2.jpg"
import coffe3 from "../../img/coffe/3.jpg"

import './index.scss'
const Best = () => {
    return ( 
        <section className="best">
            <div className="container">
                <h3 className="best__title">
                        Our best
                </h3>
                <div className="best__wrapper">
                    <div className="best__item">
                        <img src={coffe1} alt="" className="best__img" />
                        <div className="best__item-name">Solimo Coffe Beans 2 kg</div>
                        <div className="best__item-price">10.73$</div>
                    </div>
                    <div className="best__item">
                        <img src={coffe2} alt="" className="best__img" />
                        <div className="best__item-name">Solimo Coffe Beans 2 kg</div>
                        <div className="best__item-price">10.73$</div>
                    </div>
                    <div className="best__item">
                        <img src={coffe3} alt="" className="best__img" />
                        <div className="best__item-name">Solimo Coffe Beans 2 kg</div>
                        <div className="best__item-price">10.73$</div>
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default Best;