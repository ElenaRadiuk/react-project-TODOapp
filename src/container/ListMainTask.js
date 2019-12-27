import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo, handleInputChange } from '../actions';
import List from '../components/List/List'

class ListMainTask extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(...this.props.items)
        return(
            <div>
                <List items={this.props.items} />
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMainTask)