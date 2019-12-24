import React from 'react';
import './AddTaskPopUp.scss';
import {connect} from 'react-redux';
import {addTodo} from '../../actions'


const AddTaskPopUp = ({dispatch}) => {
    let input;

    return(
    <div className="todo__popup">
        <spav className="todo__popupClose"> x </spav>
        <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            dispatch(addTodo(input.value)
            )
        }}>
        <input type="text" value="enter task"/>
        <div className="todo__choose-color">
            
            <label htmlFor="redColor"><span></span>
            <input type = "radio"
                id = "redColor"
                name = "color"
                value = "red" />
            </label>

            <label htmlFor = "greenColor"> <span> </span>
                <input type="radio" id="greenColor" name="color" value="green"/>
            </label>

            <label htmlFor = "orangeColor" > <span> </span>
                <input type="radio" id="orangeColor" name="color" value="orange"/>
            </label>

            <label htmlFor = "pinkColor" > <span> </span>
                <input type="radio" id="pinkColor" name="color" value="pink"/>
            </label>

            <label htmlFor = "blueColor" > <span> </span>
                <input type="radio" id="blueColor" name="color" value="blue"/>
            </label>
        </div>
            <button type="submit" className = "todo__popupAddBtn"> Add task </button>
        </form>
        
    </div>
    )
}

export default AddTaskPopUp;