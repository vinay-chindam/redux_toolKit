import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './redux/ThemeSlice'

function ThemeButton() {
    const dispatch=useDispatch()
    const theme=useSelector((store)=>store.theme.darkTheme)
    console.log(theme)
    function changeTheme(){
       dispatch(toggleTheme()) 
    }
  return (
    <button onClick={()=>changeTheme()}>
        {theme}
    </button>
  )
}

export default ThemeButton