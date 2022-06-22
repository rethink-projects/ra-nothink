import React from 'react'

const Loading = ({ text }: { text?: string }) => {
    return (
        <div>
            <h1
                style={{ color: "var(--color-detail)" }}>
                {text ? text : "Buscando informações..."}
            </h1>
        </div>
    )
}

export default Loading