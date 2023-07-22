import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
            <section className="main-card--cointainer">
                {menuData.map((currElm) => {
                    // const {id,name, category , image}= currElm;
                    return (
                        <>
                            <div className='card-container' >
                                <div className="card" key={currElm.id}>
                                    <div className="card-body"></div>
                                    <span className="card-number card-circle subtle" >{currElm.id}</span>
                                    <span className="card-author subtle">{currElm.category}</span>
                                    <h2 className="card-title">{currElm.name}</h2>
                                    <span className="card_description Subtle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sequi harum error quos culpa alias.
                                    </span>
                                    <div className="card-read">Read</div>
                                    <img src={currElm.image} alt="images" className='card-media'/>

                                    <span className="card-tag subtle">Order Now</span>
                                </div>

                            </div>
                        </>

                    )
                })}
            </section>


        </>

    )
}

export default MenuCard
