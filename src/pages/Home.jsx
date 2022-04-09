import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from '../store/actions/products'
import ProductItem from '../components/ProductItem';
import cl from '../styles/ProductItem.module.css'
import Categories from '../components/Categories';
import { setCategory } from '../store/actions/filters';

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({products}) => products.items);
    const isLoaded = useSelector(({products}) => products.isLoaded);
    const {category} = useSelector(({filters}) => filters);
const categoryNames=["Напитки","молочные продукты","Овощи и фрукты","Хлеб","Мясо и птица","Колбаса","Замороженные продукты","Сладости"]

    console.log(category)
    

    useEffect(() => {
        dispatch(fetchProducts(category));
    }, [category]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    },[]);
  
  return (
    <div>
        
        <Categories
        activeCategory={category}
        onClickCategory={onSelectCategory}
        items={categoryNames}
        />
        <div className={cl.products}>
        {isLoaded?
       items.map((item) => (
          
       <ProductItem key={item.id} {...item}  />
       )) :
       <div>LOADING... </div>
       }
        </div>
      
    </div>
  )
}

export default Home