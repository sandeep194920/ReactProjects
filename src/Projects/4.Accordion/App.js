import React, { useState } from 'react'
import { Question } from './Question'
import './index.scss'
import data from './data'

function Accordion() {
    const [current, setCurrent] = useState(null)
    const closeHandler = (id) => {
        if (id === current) {
            return setCurrent(null)
        }
        setCurrent(id)
    }

    return (
        <section className="main">
            <div className="container">
                <article className="container--desc">
                    <h3>Questions And Answers About Login</h3>
                </article>
                <div className="question-container">
                    {data.map((question, index) => {
                        return <Question click={() => closeHandler(index)} current={current} index={index} key={question.id} {...question} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Accordion
