import { getAnimeResponse } from "@/libs/api-libs"
import VideoTrailer from "@/components/Utilities/VideoTrailer"
import Image from "next/image"

const Page = async({ params }) => {
    let {keyword} = params
    const anime = await getAnimeResponse(`anime/${keyword}`)

    return (
        <>
            <div className="p-4 m-8 text-color-primary bg-color-secondary">
                <div>
                    <h1 className="text-2xl">{anime.data?.title}</h1>
                </div>
                <div className="flex sm:flex-nowrap flex-wrap gap-2">
                    <Image 
                    src={anime.data.images.webp.image_url} 
                    alt={anime.data.images.jpg.image_url}
                    width={800} height={400} 
                    className="min-w-[200px] min-h-[200px] border-2 border-color-white rounded object-fit"/>
                    <p className="text-justify">{anime.data.synopsis}</p>
                </div>
            </div>
            <div className="p-4 m-8 text-color-primary bg-color-secondary">
                <h1 className="font-bold text-center text-2xl">Anime Description</h1>
                <div className="grid py-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-2">
                    <div className="p-4 border">
                        <b>Japanese</b>
                    </div>
                    <div className="p-4 border">
                        <span>{anime.data.title_japanese ? anime.data.title_japanese : "-"}</span>
                    </div>
                    <div className="p-4 border">
                        <b>English</b>
                    </div>
                    <div className="p-4 border">
                        <span>{anime.data.title_english ? anime.data.title_english : "-"}</span>
                    </div>
                    <div className="p-4 border">
                        <b>Status</b>
                    </div>
                    <div className="p-4 border">
                        <span>{anime.data.status ? anime.data.status : "-"}</span>
                    </div>
                    <div className="p-4 border">
                        <b>Rating</b>
                    </div>
                    <div className="p-4 border">
                        <span>{anime.data.rating ? anime.data.rating : "-"}</span>
                    </div>
                    <div className="p-4 border">
                        <b>Type</b>
                    </div>
                    <div className="p-4 border">
                        <span>{anime.data.type ? anime.data.type : "-"}</span>
                    </div>
                    <div className="p-4 border">
                        <b>Total Episode</b>
                    </div>
                    <div className="p-4 border">
                        <span>{anime.data.episodes ? anime.data.episodes : "-"}</span>
                    </div>
                    <div className="p-4 border">
                        <b>Duration</b>
                    </div>
                    <div className="p-4 border">
                        <span>{anime.data.duration ? anime.data.duration : "-"}</span>
                    </div>
                    <div className="p-4 border">
                        <b>Genres</b>
                    </div>
                    <div className="p-4 border">
                        <span>{anime.data.genres ? anime.data.genres.map((data, index) => (index === anime.data.genres.length - 1) ? data.name + "" : data.name + ", ") : "-"}</span>
                    </div>
                    <div className="p-4 border">
                        <b>Aired</b>
                    </div>
                    <div className="p-4 border">
                        <span>{anime.data.aired ? anime.data.aired.string : "-"}</span>
                    </div>
                    <div className="p-4 border">
                        <b>Season</b>
                    </div>
                    <div className="p-4 border">
                        <span>{anime.data.season && anime.data.year ? anime.data.season + " " + anime.data.year : "-"}</span>
                    </div>
                    <div className="p-4 border">
                        <b>Score</b>
                    </div>
                    <div className="p-4 border">
                        <span>{anime.data.score && anime.data.scored_by ? anime.data.score + " / " + anime.data.scored_by.toLocaleString('en-US') : "-"}</span>
                    </div>
                </div>
            </div>
            <div className="p-4 m-8 flex-col text-color-primary bg-color-secondary">
                <h1 className="font-bold text-center text-2xl pb-4">Trailer</h1>
                <div className="rounded transition-all">
                    <VideoTrailer videoId={anime.data.trailer.youtube_id}/>
                </div>
            </div>
        </>
    )
}

export default Page