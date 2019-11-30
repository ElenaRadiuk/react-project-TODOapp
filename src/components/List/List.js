import React from 'react';
import listIcon from '../../assets/images/list_icon.svg';

const List = () => {
    return(
            <ul className="todo__list">
              <li>
                <span><img src={listIcon} alt="icon list"/></span>
                <span className="todo__list_text">All tasks</span>
              </li>
            </ul>
    )
}

export default List;