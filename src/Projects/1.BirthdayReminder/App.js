import React, { useState } from 'react'
import './index.css'
import { data } from './data'

function Birthday() {

    const [birthdays, setBirthdays] = useState(data)

    const removeHandler = (id) => {
        const updatedBirthdays = birthdays.filter(bday => bday.id !== id)
        setBirthdays(updatedBirthdays)
    }

    const clearAllHandler = () => {
        if (birthdays.length === 0) {
            window.location.reload()
        }
        setBirthdays([])
    }
    return (
        <main>
            <div className="container">
                <h2 className="heading">{birthdays.length} birthdays today</h2>
                {birthdays.map(birthday => {
                    const { id, name, age, img } = birthday
                    return (
                        <article className="card">
                            <div className="card-image-text">
                                <img src={img} alt={name} />
                                <div className="card-details">
                                    <h3>{name}</h3>
                                    <p>{age} years</p>
                                </div>
                            </div>
                            <button className="btn" onClick={() => removeHandler(id)}>Remove</button>
                        </article>
                    )
                })}
                <button className="btn clear-btn" onClick={clearAllHandler}> {birthdays.length > 0 ? "Clear All" : "Click here to refresh"}</button>
            </div>
        </main>
    )
}

export default Birthday
