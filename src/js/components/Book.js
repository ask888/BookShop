import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {addNotify, futureBook, addBasket, sideBarHide} from '../actions';


const mapDispatchToProps = dispatch => ( bindActionCreators({ addNotify, futureBook, addBasket, sideBarHide }, dispatch) );

const mapStateToProps = (state, ownProps) => {
    return {books: state.books, futured: state.futured, code: state.code, visible: state.sidebar}
}


@connect (mapStateToProps, mapDispatchToProps)
export default class Book extends React.Component {

    state = {
        flag: 0,

    }

    handleBasket =(e) => {
        e.preventDefault();
        this.props.addBasket(this.props.item)
        this.props.addNotify("В корзину добавлен новый товар!")
    }
    handleClick = () => {
        this.props.futureBook(this.props.item.code)  
    }
    scrolling = () => {
        window.scrollTo(0,420);
    }
    
    star(x){
        let stars = [];


        for(let i = 5; i>0; i--){
            if(i<x){
                stars.push(<div className="star" style={{backgroundImage: 'url('+ require("../../icon/bookstar_fill.png")+')'}} key={i}></div>)
            } else{
                stars.push(<div className="star_empty" style={{backgroundImage: 'url('+ require("../../icon/bookstar_zero.png")+')'}} key={i}></div>)
            }
        }

       
        return stars;
    
    }

    render() {

            return (
            <div className="book">
                <p className="book_price">{this.props.item.price + " грн."}</p>
                <a id="book_buy" onClick={this.handleBasket} href="#btn">Купить</a>
                <div className="book-inner">

                     <div className="future" ref="futures" style={this.props.item.futured?{backgroundImage: 'url('+ require("../../icon/heart-fill.png")+')'}:{backgroundImage: 'url('+ require("../../icon/heart-empty1.png")+')'} } onClick={this.handleClick}></div> 

                    <Link onClick={this.scrolling} to={"/page"+this.props.item.code}><img src={this.props.item.img? this.props.item.img: require('../../image/no-image.png')}/></Link>
                    <div className="book_stars">
                        
                        {this.star(this.props.item.rating)}
                    </div>
                    <div className="clear"></div>
                    <p className="book_text"><Link onClick={this.scrolling} className="book_link" to={"/page"+this.props.item.code}>{this.props.item.name}</Link></p>
                    <p className="book_author">{this.props.item.author}</p>
                    {this.props.item.seria? <p className="book_seria">{"Серия: " +this.props.item.seria}</p>: null}
                    
                    
                    
                </div>
            </div>
        )
    }
}