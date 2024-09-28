import React from 'react'

const Card = ({name, branchType, deliveryStatus, state, district, division}) => {
    return (
        <div id='card'>
            <pre><p>Name   <span className='result'>{name}</span></p></pre>
            <pre><p>Branch Type   <span className='result'>{branchType}</span></p></pre>
            <pre><p>Delivery Status   <span className='result'>{deliveryStatus}</span></p></pre>
            <pre><p>State   <span className='result'>{state}</span></p></pre>
            <pre><p>District   <span className='result'>{district}</span></p></pre>
            <pre><p>Division   <span className='result'>{division}</span></p></pre>
        </div>
    )
}

export default Card