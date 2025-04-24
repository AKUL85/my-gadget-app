import React, { useRef } from 'react';
import Hero from '../Hero/Hero';
import Item from '../item/Item';


const Home = () => {
    const sectionRef=useRef(null);
    const handleScroll = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
    return (
        <div>
            <Hero handleScroll={handleScroll}></Hero>
            <Item ref={sectionRef}></Item>
           
          
           
        </div>
    );
};

export default Home;