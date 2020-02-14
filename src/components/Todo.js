import React, { Component } from 'react';

// const Todo = (onClick, name, todo, index, completed, active, color) => (
   
//     <li key={index}
//     //  className={todo.active ? "active" : null}
//             onClick={() => onClick}
//             style ={{textDecoration: completed ? 'line-through' : 'none'}}
//             >
//         {/* <span className={`index-${index}`}>{todo.icon ? this.props.todoList.icon 
//                     : <span className={`badge badge--${todo.color}`}></span>} */}
//         {/* </span> */}
//         <span className="todo__list_text">{todo}</span>
//          {
//              console.log(todo)
//          }
//     </li> 
// )

export class Todo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
            console.log(this.props.id);
            console.log(this.props._id)
            console.log(this.props.color)
            console.log(this.props.index)

            // deleteContact(e, index){
            //     e.preventDefault();
            //     this.props.deleteContact(index);
            //   }

            return (
                <>
               <li key={this.props.index}
                   className={this.props.active ? "active" : null}>
                       <span className={`index-${this.props.index}`}>{this.props.todo.icon ? this.props.todo.icon 
                                   : <span className={`badge badge--${this.props.todo.color}`}></span>} 
                       </span>
                       <span className="todo__list_text" onClick={() => this.props.onActive(this.props.id)}
                            style ={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
                                {this.props.todo.name}
                        </span>
                       { this.props.active ? (
                       <span className="todo__inProgress" onClick={() => this.props.onToggle(this.props.id)}>
                           change status:{this.props.completed ? "done" : "in progress"}
                       </span>
                       )
                            : (null)
                       }
                     
                       {
                          console.log(this.props.id + 'par' + this.props.parent_id)
                       }
                </li>  
                </>
            )
    }
}


export default Todo;