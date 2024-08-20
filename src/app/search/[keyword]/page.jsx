import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const fetchData = async (keyword) => {
  let data = []
  let currentPage = 1
  let hasNextPage = true

  while (hasNextPage) {
    const searchAnimeKey = await getAnimeResponse("anime", `q=${keyword}&page=${currentPage}`)
    data = data.concat(searchAnimeKey.data)
    currentPage++

    hasNextPage = searchAnimeKey.pagination?.has_next_page
  }

  return data;
};

const Page = async ({ params }) => {
    let { keyword } = params
    keyword = decodeURI(keyword)

    const data = await fetchData(keyword)
    let dataApi = {data}

    return (
        <>
        <section>
            <Header title={`Search For ${keyword}...`} />
            <AnimeList api={dataApi} />
        </section>
        </>
    );
    };

export default Page
