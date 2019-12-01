import React from 'react';
import listIcon from '../../assets/images/list_icon.svg';

const List = ({items}) => {
  console.log(items)
    return(
            <ul className="todo__list">
              {items.map(item => (
                <li className={item.active ? "active" : null}>
                  <span>{item.icon ? item.icon : <span className={`badge badge--${item.color}`}></span>}</span>
                  <span className="todo__list_text">{item.name}</span>
                </li> 
                ))}
            </ul>
    )
};

export default List;