
import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMode]=useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
   document.querySelector('html').classList.remove("light","dark")
   document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <>
    <ThemeProvider
    value={{themeMode,lightTheme,darkTheme}}
    > 
<div className="flex flex-wrap min-h-screen items-center bg-repeat-round"
style={{backgroundImage:'url("https://images.pexels.com/photos/5632355/pexels-photo-5632355.jpeg?auto=compress&cs=tinysrgb&w=400")'}}>
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider> 

    </>
  )
}

export default App
