"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const inputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if (!keyword || keyword.trim() == "") return 

        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    return  (
        <div className="relative">
            <input 
                className="text-color-dark w-full p-2 rounded"
                placeholder="Search Anime..."
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button onClick={handleSearch}>
                <MagnifyingGlass className="absolute cursor-pointer text-color-dark top-2 end-2" size={24}  />
            </button>
        </div>
    )
}

export default inputSearch