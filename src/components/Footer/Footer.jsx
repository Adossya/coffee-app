import Divider from '../Divider/Divider';
import Nav from '../Nav/Nav';
import './index.scss'
const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <Nav color="black" pos="center"/>
                <Divider/>
            </div>

        </footer>
    );
}
 
export default Footer;