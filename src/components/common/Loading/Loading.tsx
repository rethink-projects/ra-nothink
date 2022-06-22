import React from 'react'

export default function Loading({text}: {text?: string}) {
  return (
    <div>
        <h1 style={{color: "var(--color-detail)"}} >{text ? text : "Buscando informações..."}</h1>
    </div>
  )
}
