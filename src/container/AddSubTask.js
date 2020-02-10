import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo, handleInputChange, closePopupSubTask } from '../actions'

import AddButton from '../components/List/AddButtonList';
import AddTaskPopUp from '../components/AddTaskPopUp/AddTaskPopUp';

class AddSubTask extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(name, value);
        const { onInputChange } = this.props;
        console.log(onInputChange);
        this.props.onInputChange(name, value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onFormSubmit();
    }

    handleClosePopup() {
        this.props.onClosePopup();
    }

    renderPopup() {
        return (
            <AddTaskPopUp onFormSubmit={this.handleSubmit} 
              onInputChange={this.handleInputChange}
              onClosePopup={this.handleClosePopup} />
        )
    }

    render() {
        return(
            <div className='todo__addPopup-container'>
             <AddButton onClosePopup={this.handleClosePopup}/>
            { this.props.isPopupSubHidden === true ? this.renderPopup() : null} 
            </div>
            // <AddTaskPopUp onFormSubmit={this.handleSubmit} 
            //   onInputChange={this.handleInputChange}
            //   onClosePopup={this.closePopup} {...this.props.isPopupHidden} />
        )
    }
}

function  mapStateToProps(state) {
    console.log(state + state.todos.newTodo, 'ui state' + state.uiReducer.isPopupHidden);
    return {
        newTodo: state.todos.newTodo,
        isPopupSubHidden: state.uiReducer.isPopupSubHidden
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFormSubmit: (newTodo) => {
            console.log('dispatch add');
            dispatch(addTodo(newTodo));
        },
        onInputChange: (name, value) => {
            dispatch(handleInputChange(name, value))
        },
        onClosePopup: (task) => {
            dispatch(closePopupSubTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubTask)