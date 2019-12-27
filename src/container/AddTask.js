import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo, handleInputChange } from '../actions'

import AddButton from '../components/List/AddButtonList';
import AddTaskPopUp from '../components/AddTaskPopUp/AddTaskPopUp';

class AddTask extends Component {
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

    render() {
        return(
            <AddTaskPopUp onFormSubmit={this.handleSubmit} 
              onInputChange={this.handleInputChange}
              onClosePopup={this.handleClosePopup} />
        )
    }
}

function  mapStateToProps(state) {
    console.log(state);
    return {
        newTodo: state.todos.newTodo
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
        onClosePopup: (e) => {
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)