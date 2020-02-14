import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addSubTodo, handleInputChangeSub, closePopupSubTask } from '../actions'

import AddButton from '../components/List/AddButtonList';
import AddTaskPopUp from '../components/AddTaskPopUp/AddTaskPopUp';

class AddSubTask extends Component {
    constructor(props) {
        super(props);

        this.handleInputChangeSub = this.handleInputChangeSub.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
    }

    handleInputChangeSub(event) {
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
              onInputChange={this.handleInputChangeSub}
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
    console.log('newSubTodo ' + state + state.todos.newSubTodo);
    return {
        newSubTodo: state.todos.newSubTodo,
        isPopupSubHidden: state.uiReducer.isPopupSubHidden
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFormSubmit: (newSubTodo) => {
            console.log('dispatch add sub' + newSubTodo);
            dispatch(addSubTodo(newSubTodo));
        },
        onInputChange: (name, value) => {
             console.log('name, value' + name + value);
            dispatch(handleInputChangeSub(name, value))
        },
        onClosePopup: (task) => {
            dispatch(closePopupSubTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSubTask)