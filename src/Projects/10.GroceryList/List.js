import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

function List({ name, edit, itemId, remove }) {
    return (
        <article className="grocery-item">
            <p className="title">{name}</p>
            <div className="btn-container">
                <button onClick={() => edit(itemId)} type="button" className="edit-btn">
                    <FaEdit />
                </button>
                <button onClick={() => remove(itemId)} type="button" className="delete-btn">
                    <FaTrash />
                </button>
            </div>
        </article>
    )
}

export default List
