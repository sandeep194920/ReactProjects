import React from 'react'

function Modal({ success, msg }) {
    return (
        <div>
            <h5 className={`alert ${success ? "alert-success" : 'alert-danger'}`}>{msg}</h5>
        </div>
    )
}

export default Modal
