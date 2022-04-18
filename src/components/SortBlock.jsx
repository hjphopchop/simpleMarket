import React from 'react'
import cl from '../styles/SortBlock.module.css'

const SortBlock = React.memo(({items, onClickSortType,index}) => {
    const onSelectItem = (index) => {
        if (onClickSortType) {
          onClickSortType(index);
        }
      };

  return (
    <div className={cl.SortBlock}>
        <div>Сортировать по:</div>
        <ul className={cl.sortList}>
            {items &&
              items.map((obj, index) => (
                <li 
                  onClick={() => onSelectItem(obj)}
                  
                  key={`${obj.type}_${index}`}>
                  {obj.name}
                </li>
              ))}
          </ul>
    </div>
  )
})

export default SortBlock