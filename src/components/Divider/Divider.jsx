import "./index.scss"
import blackk from "../../img/black.svg"
import whitee from "../../img/white.svg"

const Divider = ({color}) => {

    let clazz = color === 'white' ? '--white' : '--black';
    return ( 
        <div className="divider">
            <div className={"divider__wrapper" + clazz}>
                <img  src={color === 'white' ? whitee : blackk} alt="divider" />
            </div>

        </div>

     );
}
 
export default Divider;