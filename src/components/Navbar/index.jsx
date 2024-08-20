"use client"
import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"
import { Moon, Sun } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [mode, setMode] = useState(false)

    const handleButton = () => {
        setMode(!mode)
    }
    
    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.toggle('bg-color-dark', mode)
        body.classList.toggle('text-color-primary', mode)
        body.classList.toggle('bg-color-primary', !mode)
        body.classList.toggle('text-color-dark', !mode)
    }, [mode])

    return (
        <header className="bg-color-accent text-color-white">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-4">
                <div className="text-center md:text-left">
                    <Link className="text-center md:text-left font-bold text-2xl" href="/">MYANIMECHRIS</Link>
                </div>
                <div className="flex justify-center items-center gap-7 font-bold text-l">
                    <div className="flex justify-center items-center">
                        <button onClick={handleButton}>
                            {mode ? 
                            <Sun size={30}/> : <Moon size={30}/>}
                        </button>
                    </div>
                    <Link href="/">Home</Link>
                    <Link href="/popular">Popular</Link>
                    <Link href="/recommended">Recommended</Link>
                    {/* <UserActionButton/> */}
                </div>
                <div>
                    <InputSearch/>
                </div>
            </div>
        </header>
    )
}

export default Navbar