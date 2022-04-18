import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from '../store/actions/products'
import ProductItem from '../components/ProductItem';
import cl from '../styles/Home.module.css'
import Categories from '../components/Categories';
import { setCategory, setSort } from '../store/actions/filters';
import SortBlock from '../components/SortBlock';
import cartImg from '../assets/img/cart.png'
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({products}) => products.items);
    const isLoaded = useSelector(({products}) => products.isLoaded);
    const {category,sort} = useSelector(({filters}) => filters);
    const cartItems = useSelector(({cart}) => cart)
const categoryNames=["Напитки","молочные продукты","Овощи и фрукты","Хлеб","Мясо и птица","Колбаса","Замороженные продукты","Сладости"];
const sortItems = [
    {name: "Цене", type:'price' , order: 'asc'},
    {name: "Скидке", type:'sale' , order: 'desc'},
    {name: "Названию", type:'name' , order: 'asc'},
]

   console.log(cartItems);

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

    const addProductToCart = (obj) =>{
       
       console.log(obj)
       dispatch({
           type: "PRODUCT_TO_CART",
           payload: obj
       })
    }

  return (
    <div className={cl.home}>
        
         {cartItems.totalCount >0 && <div className={cl.cart}>
             <Link to='/simpleMarket//cart' className={cl.cartItems}><img className={cl.cartImg} src={cartImg} ></img>
             <div className={cl.cartPrice}>{cartItems.totalPrice}</div>
             <div className={cl.cartCount}>{cartItems.totalCount}</div>
            </Link> </div> }
       
        
        
        
        <div className={cl.main}>
            <div>
            <SortBlock
        onClickSortType={onSelectSort}
        items={sortItems}
        />
            <Categories
        activeCategory={category}
        onClickCategory={onSelectCategory}
        items={categoryNames}
        
        />
            </div>
    
        <div className={cl.products}>
        {isLoaded &&
       items.map((item) => (
       <ProductItem
       clickProduct={addProductToCart}
        key={item.id} {...item} 
        
       
        />
       ))
       
       }
        </div>

        </div>
      
      
    </div>
  )
}

export default Home