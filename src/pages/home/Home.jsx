import React from 'react';
import Categories from '../../components/categories/Categories';
import Hero from '../../shared/hero/Hero';
import Stat from '../../shared/state/Stat';



const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Stat></Stat>
           <Categories></Categories>
        </div>
    );
};

export default Home;