import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import { getNestedAnimeResponse } from "@/libs/api-libs"

const Page = async () => {
    let recomAnime = await getNestedAnimeResponse("recommendations/anime","entry")
    recomAnime = { data:recomAnime }
    
    return (
        <div>
            <HeaderMenu title="Recommended Anime"/>
            <AnimeList api={recomAnime}/>            
        </div>
    )
}

export default Page