import "./index.scss"

const CoffeeItem = ({data , onClick}) => {

    const {title, country, price, img} = data
    

    return ( 
            <div onClick={onClick}   className="coffee__item">
                <img src={img} alt="Coffee-type" className="coffee__item-img" />
                <div className="coffee__item-name">{title}</div>
                <div className="coffee__item-country">{country}</div>
                <div className="coffee__item-price">{price}</div>
            </div>
     );
}
 
export default CoffeeItem;