import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12")
  let recomenAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recomenAnime = reproduce(recomenAnime, 8)
  
  return (
    <>
    {/* Popular Anime */}
      <section>
        <Header title="Most Popular" linkHref="/popular" linkTitle="See All..."/>
        <AnimeList api={topAnime}/>
      </section>

    {/* Recommend Anime */}
      <section>
        <Header title="Recommendation" linkHref="/recommended" linkTitle="See All..."/>
        <AnimeList api={recomenAnime}/>
      </section>
    </>
  )
}

export default Page