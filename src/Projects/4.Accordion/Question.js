import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export const Question = ({ click, current, index, title, info }) => {

    return (
        <section className="card">
            <div onClick={() => click(index)} className="card--head">
                <h3>{title}</h3>
                <div className="">
                    {index === current ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
                </div>
            </div>

            {index === current ? <p className="card--ans">{info}</p> : null}

        </section>
    )
}
