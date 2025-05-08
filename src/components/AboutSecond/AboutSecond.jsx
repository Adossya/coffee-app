import Divider from "../Divider/Divider";

import './index.scss'

const AboutSecond = ({src, title, first, rest}) => {
    return ( 
        <section className="about-second">
            <div className="container">
                <div className="about-second__wrapper">
                    <div className="about-second__img">
                        <img src={src} alt="About_img" />
                    </div>
                    <div className="about-second__item">
                    <h3 className="about-second__title">{title}</h3>
                        <Divider color="black"/>
                        <div className="about-second__description">
                            <p>{first}</p>
                            <p>{rest}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-second__divider"></div>
            </div>
        </section>
     );
}
 
export default AboutSecond;