import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from '../store/actions/products'
import ProductItem from '../components/ProductItem';
import cl from '../styles/ProductItem.module.css'
import Categories from '../components/Categories';
import { setCategory, setSort } from '../store/actions/filters';
import SortBlock from '../components/SortBlock';
import hl from '../styles/Home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({products}) => products.items);
    const isLoaded = useSelector(({products}) => products.isLoaded);
    const {category,sort} = useSelector(({filters}) => filters);
const categoryNames=["Напитки","молочные продукты","Овощи и фрукты","Хлеб","Мясо и птица","Колбаса","Замороженные продукты","Сладости"];
const sortItems = [
    {name: "price", type:'price' , order: 'desc'},
    {name: "name", type:'name' , order: 'asc'},
]

    console.log(category)
    console.log(sort);

    useEffect(() => {
        dispatch(fetchProducts(category,sort));
    }, [category,sort]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    },[]);
    const onSelectSort = useCallback((type) => {
        console.log(type);
        dispatch(setSort(type))
        
    },[]);
   
  
  return (
    <div>
        
        <SortBlock
        
        onClickSortType={onSelectSort}
        items={sortItems}
        />
        
        
        <div className={cl.main}>
            <div>
            <Categories
        activeCategory={category}
        onClickCategory={onSelectCategory}
        items={categoryNames}
        />
            </div>
        

     
        <div className={cl.products}>
        {isLoaded?
       items.map((item) => (
          
       <ProductItem key={item.id} {...item}  />
       )) :
       <div>LOADING... </div>
       }
        </div>

        </div>
      
      
    </div>
  )
}

export default Home