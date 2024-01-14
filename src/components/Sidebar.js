import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%"},
            flexDirection: {md: 'column'}
        }}
    >
      {categories.map((catagory) => {
        return <button className='category-btn' key={catagory.name}
                onClick={()=> setSelectedCategory(catagory.name)}
                style={{
                    background: catagory.name === selectedCategory && "#FC1503",
                    color: "white"
                }}
                >
            <span style={{color: catagory.name === selectedCategory ? 'white': 'red', marginRight: '15px'}}>{catagory.icon}</span>
            <span>{catagory.name}</span>
        </button>
      })}
    </Stack>
  )
}

export default Sidebar
