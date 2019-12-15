import React from 'react';
import './AddTaskPopUp.scss'


const AddTaskPopUp = () => {
    return(
    <div className="todo__popup">
        <form>
        <input type="text" value="enter task"/>
        <div className="todo__choose-color">
            <input type="radio" id="redColor" name="color" value="red"/>
            <label for="redColor"><span></span></label>
            <input type="radio" id="greenColor" name="color" value="green"/>
            <input type="radio" id="orangeColor" name="color" value="orange"/>
            <input type="radio" id="pinkColor" name="color" value="pink"/>
            <input type="radio" id="blueColor" name="color" value="blue"/>
        </div>
        </form>
    </div>
    )
}

export default AddTaskPopUp;