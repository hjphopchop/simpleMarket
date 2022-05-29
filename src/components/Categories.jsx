import React from "react";
import cl from "../styles/Categories.module.css";

const Categories = React.memo(function Categories({
  items,
  onClickCategory,
  activeCategory,
}) {
  return (
    <div className={cl.categories}>
      <ul className={cl.list}>
        <li
          className={activeCategory === null ? cl.active : cl.net}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>

        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? cl.active : cl.net}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
