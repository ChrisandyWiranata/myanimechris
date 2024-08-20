import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    const filteredAnime = api.data?.filter(
        (anime) => !anime?.genres?.some(
            (genre) => genre.name === "Hentai" || genre.name === "Erotica" || genre.name === "Ecchi"
        )
    )

    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 text-color-dark">
            {filteredAnime?.map((anime, index) => {
                return (
                <Link href={`/anime/${anime?.mal_id}`} className="cursor-pointer shadow-xl bg-color-primary hover:text-color-accent transition ease-all duration-300 hover:scale-95" key={index}>
                    <Image 
                        src={anime?.images.webp.image_url} 
                        alt="..." 
                        width={350} 
                        height={350} 
                        className="w-full max-h-64 object-fill"
                    />
                    <h3 className="font-bold md:text-xl text-md p-4">{anime?.title}</h3>
                </Link>
                )
            })}      
        </div>
  
    )
}

export default AnimeList