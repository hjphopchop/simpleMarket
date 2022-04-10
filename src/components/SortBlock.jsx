import React from 'react'

const SortBlock = ({items, onClickSortType}) => {
    const onSelectItem = (index) => {
        if (onClickSortType) {
          onClickSortType(index);
        }
      };

  return (
    <div>
        <div>sortirovka po</div>
        <ul>
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
}

SortBlock.defaultProps = {
    items:[]
}

export default SortBlock