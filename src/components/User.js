import React from 'react'

function User({data, handleClick}) {
    if(!data) return <></>;

  return (
    <div data-id= {data.id} onClick={handleClick}>
        <h2>{data.name}</h2>
        <h2>{data.gender}</h2>
        <h2>{data.email}</h2>
        <button data-id={data.id}>delete</button>
    </div>
  )
}

export default User