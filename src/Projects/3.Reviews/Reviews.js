import React, { useState } from 'react'
import './index.css'
import data from './data'
import { FaQuoteRight } from 'react-icons/fa'
function Reviews() {
    const [review, setReview] = useState(0)
    const { name, image, job, text } = data[review]

    const reviewHandler = (direction) => {
        direction === "forward" && setReview(pre => pre >= data.length - 1 ? 0 : pre + 1);
        direction === "backward" && setReview(pre => pre <= 0 ? data.length - 1 : pre - 1)
    }
    return (
        <main className="container">
            <h1 className="heading">Our Reviews</h1>
            <div className="underline"></div>
            {/* card */}
            <section className="card">
                <div>
                    <div className="img-container">
                        <img src={image} alt="person" />
                        <div className="quote-icon-container">
                            <FaQuoteRight className="quote-icon" />
                        </div>
                        <div className="details">
                            <h3>{name}</h3>
                            <p className="job-desc">{job}</p>
                        </div>
                    </div>
                </div>
                <p className="descritption">{text}</p>
                <div className="btn-container">
                    <button onClick={() => reviewHandler("backward")}>&#x3c;</button>
                    <button onClick={() => reviewHandler("forward")}>&#x3e;</button>
                </div>
                <button onClick={() => setReview(Math.floor(Math.random() * 4))} className="btn">Surprise Me</button>
            </section>
        </main>
    )
}

export default Reviews
