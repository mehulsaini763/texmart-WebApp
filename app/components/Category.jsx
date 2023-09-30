import React from 'react'

const Category = ({url}) => {
    const handleClick = () => {

    }
  return (
    <div className='flex-shrink-0 py-2' onClick={handleClick}>
        <img className='w-28' src={url} alt="" />
    </div>
  )
}

export default Category