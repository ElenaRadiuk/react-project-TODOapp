import React, { Component } from 'react';
import listIcon from '../../assets/images/list_icon.svg';
import Todo from '../Todo';

export class ListSubTask extends Component {
  constructor(props) {
    super(props);
  }

  render() {
     console.log(this.props.subTodoList)
     console.log(this.props.index)
    return(
       <ul className="todo__list">
              {console.log(this.props.subTodoList)}
              {this.props.subTodoList.map((todo, index) => (
                <Todo key={index} id={todo.id} name={todo.name} color={todo.color} todo={todo} index={index+1}
                    {...todo} onToggle={this.props.onToggle}
                />
              ))}
            </ul>
    )
  }
}

// const List = ({todoList, onToggle, completed, active}) => {
//   console.log(todoList)
//     return(
//             <ul className="todo__list">
//               {console.log(todoList)}
//               {todoList.map((todo, index) => (
//                 <Todo key={index} id={index} name={todo.name} color={todo.color} todo={todo}
//                     onToggle={() => onToggle(index)}
//                 />
//               ))}
//             </ul>
//     )
// };

export default ListSubTask;