const Pagination = ({ page, lastPage, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }
    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-xl">
            {page <= 1 ? null :
                <button className="transition-all hover:text-color-accent" onClick={handlePrevPage}>Prev</button>
            }
            <p>{page} of {lastPage}</p>
            {page > lastPage ? null :
                <button className="transition-all hover:text-color-accent" onClick={handleNextPage}>Next</button>
            }
        </div>
    )
}

export default Pagination