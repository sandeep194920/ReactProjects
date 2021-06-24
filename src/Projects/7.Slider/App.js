import React, { useState, useEffect } from 'react'
import './index.css'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data'

function App() {
    const [people] = useState(data)
    const [activeIndex, setActiveIndex] = useState(0)

    // let position = "moveRight"

    useEffect(() => {
        if (activeIndex > people.length - 1) {
            setActiveIndex(0)
        }
        if (activeIndex < 0) {
            setActiveIndex(people.length - 1)
        }
    }, [people, activeIndex])

    useEffect(() => {
        const timerID = setInterval(() => {
            setActiveIndex(activeIndex + 1)
        }, 3000)
        return (() => clearInterval(timerID))
    })
    return (
        <main>
            <h2>review</h2>
            <section>
                {/* all the articles */}
                {people.map((person, personIndex) => {
                    let position = "moveLeft"
                    if (personIndex === activeIndex) {
                        console.log(activeIndex)
                        position = "active";
                    }
                    if (personIndex === activeIndex - 1 || (activeIndex === 0 && personIndex === people.length - 1)) {
                        console.log("Moving right")
                        position = "moveRight";
                        console.log(activeIndex, personIndex)
                    }
                    const { id, image, title, name, quote } = person
                    return <article className={position} key={id}>
                        <img src={image} alt={name} />
                        <h3>{name}</h3>
                        <br />
                        <h4>{title}</h4>
                        <br />
                        <p>{quote}</p>
                        <FaQuoteRight className="quote" />
                    </article>
                })}


            </section>
            {/* buttons */}
            <FiChevronLeft onClick={() => setActiveIndex(activeIndex - 1)} className="arrow" />
            <FiChevronRight onClick={() => setActiveIndex(activeIndex + 1)} className="arrow" />
        </main>
    )
}

export default App
