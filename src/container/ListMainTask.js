import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo, handleInputChange, toggleTodo } from '../actions';
import List from '../components/List/List'

class ListMainTask extends Component {
    constructor(props){
        super(props);

        this.handleToggleTodo = this.handleToggleTodo.bind(this);
    }

    handleToggleTodo(id) {
        this.props.onToggle(id)
    }  

    render() {
        console.log(...this.props.items)
        return(
            <div>
                <List items={this.props.items} onToggle={this.handleToggleTodo}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.todos.todoList)
    return {
        items: state.todos.todoList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onToggle: (id) => {
                dispatch(toggleTodo(id))
            }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMainTask)