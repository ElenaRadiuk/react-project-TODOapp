import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo, handleInputChange, toggleTodo } from '../actions';
import ListSub from '../components/List/ListSub'

class ListSubTask extends Component {
    constructor(props){
        super(props);

        this.handleToggleTodo = this.handleToggleTodo.bind(this);
    }

    handleToggleTodo(todo) {
        this.props.onToggle(todo)
        console.log('toggle&item todo' + todo)
        console.log('toggle&item name' + todo.name)
        console.log('toggle&item name' + todo.id)
    }  

    render() {
        // console.log(...this.props.items)
        return(
            <div>
                <ListSub todoList={this.props.todoList} subTodoList={this.props.subTodoList} onToggle={this.handleToggleTodo} {...this.props.subTodoList}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.todos.subTodoList)
    return {
        subTodoList: state.todos.subTodoList,
        todoList: state.todos.todoList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onToggle: (todo) => {
                dispatch(toggleTodo(todo))
                console.log('near disp' + todo)
            }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListSubTask)