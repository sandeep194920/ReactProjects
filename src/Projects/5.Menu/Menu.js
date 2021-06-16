import React, { useState } from 'react'
import './index.scss'
import data from './data';

function Menu() {

    const [loading, setLoading] = useState(true);
    const [food, setFood] = useState(data)
    const allCategories = ["all", ...new Set(data.map(item => item.category))]
    const [activeCategory, setActiveCategory] = useState("all");

    const foodTypeHandler = (category) => {
        setActiveCategory(category)
        if (category === "all") return setFood(data)
        const updatedFood = data.filter(food => food.category === category)
        setFood(updatedFood)
    }
    React.useEffect(() => {
        setLoading(false)
    }, [])

    return loading ? <h1>Loading...</h1> :
        (
            <main className="container">
                <header>
                    <h1>Our Menu</h1>
                    <div className="separator"></div>
                    <ul>
                        {allCategories.map((category, index) => <li className={activeCategory === category && "active-category"} onClick={() => foodTypeHandler(category)} key={index}>{category}</li>)}
                    </ul>
                </header>
                <section className="items-container">

                    {food.map((item) => {
                        return (
                            <article key={item.id} className="item">
                                <img src={item.img} alt={item.title} />
                                <div className="item__desc">
                                    <div className="item__desc--head">
                                        <h4>{item.title}</h4>
                                        <h4>${item.price}</h4>
                                    </div>
                                    <div className="item__desc--spearator"></div>
                                    <p className="item__desc--details">{item.desc}</p>
                                </div>
                            </article>
                        )
                    })}
                </section>
            </main>
        )
}


export default Menu
