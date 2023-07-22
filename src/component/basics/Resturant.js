import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import MenuCard from './MenuCard';
import NavBar from './navBar';

const uniqueList = [
    ...new Set(
        Menu.map((curElm) => {
            return curElm.category;
        })
    ), 
    "All",
];
// console.log(uniqueList);


const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
        // console.log(setMenuData);
    const filterItem = (category) => {
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElm) => { 
            console.log(category)
            return curElm.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            <NavBar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData} />

        </>
    );
}

export default Resturant;