import React from 'react'

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className='global'>
        Table Search : {" "}
        <input value={filter || ""} onChange={e => setFilter(e.target.value)} />
    </span>
  )
}
