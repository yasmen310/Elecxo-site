import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Categories from '../../components/categories/Categories';
import HeroBanner from '../../components/banner/HeroBanner';
import ProductList from '../../components/productlist/ProductList';
const Home = () => {
  return (
    <div style={{width:'100%',overflow:'hidden'}}>
       <Navbar/>
       <Categories/>
       <HeroBanner/>
       <ProductList/>
    </div>
  );
}

export default Home;
