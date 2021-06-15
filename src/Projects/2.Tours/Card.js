import React, { useState } from 'react'

export const Card = (props) => {
    const { id, image, info, name, price, remove } = props
    const [readLess, setReadLess] = useState(true)

    return (
        <section className="card">
            <img src={image} alt={name} />
            <div className="card-content">
                <div className="heading-container">
                    <h3>{name}</h3>
                    <h4>${price}</h4>
                </div>
                <p>
                    {readLess ? info.slice(0, Math.floor(0.50 * info.length)) : info};
                    <span onClick={() => setReadLess(!readLess)}>{readLess ? 'Read More' : 'Read Less'}</span>
                </p>
                <button className="btn" onClick={() => remove(id)}>Not Interested</button>
            </div>
        </section >
    )
}
