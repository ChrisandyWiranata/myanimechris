"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const notFound = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center
         items-center flex-col">
            <div className="flex justify-center items-center gap-3">
                <FileSearch size={36} className="text-color-accent"/>
                <h3 className="text-color-accent text-3xl font-bold">NOT FOUND</h3>
            </div>
            <div className="p-3">
                <Link href="/" className="text-color-primary hover:text-color-accent underline transition-all">Back to Home</Link>
            </div>
        </div>
    )
}

export default notFound