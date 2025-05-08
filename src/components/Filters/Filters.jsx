
import { Component } from "react";

import { useNavigate} from "react-router-dom";
import CoffeeItem from "../CoffeeItem/CoffeeItem";
import cardsData from "../../data/data.json";

import "./index.scss";



function withhNavigate(WrappedComponent) {
    return (props) => {
      const navigate = useNavigate();
      return <WrappedComponent {...props} navigate={navigate} />;
    };
  }


class Filters extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: cardsData.map(item => item),
            term : '',
            btnFilter: '',
            showData: true,

        }
    }

    onChangeValue = (items, term, btnFilter, showData) => {
        if (!showData){
            return [];
        }
        
        if(btnFilter){

            return items.filter(item =>{
                return item.country.includes(btnFilter);
            })
        }


        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.title.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
    }




    onFilter = (e) => {
        const buttonText = e.target.textContent;
        
        if (buttonText === "Brazil"){
            
            this.setState((prevState) => ({
                colorBtn: !prevState.colorBtn,
                btnFilter: prevState.btnFilter === buttonText ? "" : buttonText
            }));
        }
        if (buttonText === "Kenya"){
            this.setState((prevState) => ({
                colorBtn: !prevState.colorBtn,
                btnFilter: prevState.btnFilter === buttonText ? "" : buttonText
            }));
        }
        if (buttonText === "Columbia"){

            this.setState((prevState) => ({
                colorBtn: !prevState.colorBtn,
                btnFilter: prevState.btnFilter === buttonText ? "" : buttonText
            }));
        }
    }

    onCardClick = (title) =>{

        this.props.setShow(false);
        this.props.navigate(`/ourcoffee/${title}`);

        
    }


    render(){
 
        const {data, term, btnFilter, showData} = this.state;
        const visibleData = this.onChangeValue(data, term, btnFilter, showData);
        const clazzFilter = showData ? "" : "none";

        return ( 
            <section className={`filter ${clazzFilter}`}>
                <div className="container">
                    <div className={`filter-wrapper ${clazzFilter}`}>
                        <form className="filter-form__item">
                            <label className="filter-form__label" >Looking for 
                                <input 
                                    type="text"
                                    id="search"
                                    value={term}
                                    onChange={this.onUpdateSearch}
                                    className="filter-form__input" 
                                    placeholder="start typing here..." 

                                    />
                            </label>
                        </form>
    
                        <div  className={`filter__btns ${clazzFilter}`}>
                            <div className="filter__btns-subtitle">Or filter</div>
                            <div className="filter__btns-wrapper">
                            {["Brazil", "Kenya", "Columbia"].map((country) => (
                                <button
                                    key={country}
                                    onClick={this.onFilter}
                                    className={`filter__btns-button ${btnFilter === country ? "active" : ""}`}
                                >
                                    {country}
                                </button>
                            ))}
                            </div>
                        </div>
    
                    </div>
                    <div className="filter__items">
                        {visibleData.map((item, index) => {
                            return <CoffeeItem data={item} key={index} onClick={() => {this.onCardClick(item.id)}} />
                        })}
                    </div>
                </div>
            </section>
    
        );
    };

}
 
export default withhNavigate(Filters);