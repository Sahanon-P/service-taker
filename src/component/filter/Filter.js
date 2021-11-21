import React from "react";
import './Filter.css';

// the temporary parameter date list so, I will change it after get the end point
const date = ['All', '11/11/2021','12/11/2021', '13/11/2021', '14/11/2021', '15/11/2021'];

// Filter combobox to filter the date of vaccination in that day or all
class Filter extends React.Component {
    // constructor to get the data list
    constructor(props) {
        super(props)
        // the state to set the combobox open and close and activate the different function in the different state.
        // isOpen : the state for checking the combobox is open or not.
        // haveText : the state to set the first box of combobox as desiring text. 
        this.state = {
            isOpen: false,
            haveText: ""
        }
    }

    // main function that will render when class Filter was called
    render() {
        const {isOpen, haveText} = this.state;
        return (
            // the div will change the className from clicking then, change isOpen state and className.
            <div className={isOpen ? "dropdown active" : "dropdown"} onClick={this.handleClick} >
                {/* the div that contain all text and list of date */}
                <div className="dropdown__text">
                    {/* the initial text when combobox do not have anything or chnage it as desiring text. */}
                    {!haveText ? "Select Date" : haveText}
                </div>
    
                {this.itemList(date)}
            </div>
        )
    }

    // function for changing isOpen state when click
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    // function for setting the text as the current one.
    handleText = (ev) => {
        this.setState({
            haveText: ev.currentTarget.textContent
        })
    }

    // bring the date list map with combobox
    itemList = (props) => {
        // for loop to map each element in list with each box
        const list = props.map((item) => (
            <div onClick={this.handleText} className="dropdown__item" key={item.toString()}>
                {item}
            </div>
        ));

        // return the combobox items so, have the element of list in each box
        return (
            <div className="dropdown__items"> { list } </div>
        )
    }

}

export default Filter;