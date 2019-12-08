import React from 'react';
import plusIcon from '../../assets/images/plus_icon.svg';

const AddButton = ({items}) => {
  console.log(items)
  console.log(plusIcon)
    return(
            <ul className="todo__list add-icon">
              
                <li>
                    <span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </span>
                    <span className="todo__list_text">Добавить задачу</span>
                </li> 
                
            </ul>
    )
};

export default AddButton;