import { useCallback, useEffect, useState } from "react"
import { getAllPhotos } from "api/gallery";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import css from './App.module.css'
import cSs from './Button/ButtonWrapper.module.css'

export const App = () => {
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [loadMore, setLoadMore] = useState(false);
  const [totalHits, setTotalHits] = useState(0);


  const handleFormSubmit =  (newQuery) => {
     if (query !== newQuery) {
       setHits([]);
       setLoadMore(false);
       setPage(1);
       setQuery(newQuery);
       setTotalHits(totalHits);
  }
  }

 const handleLoadMore = () => {
   setPage((prev) => prev +1 )
  }

   const getPhotos = useCallback(async () => {
    try {
      setLoading(true)
      const response = await getAllPhotos(query, page)
      console.log(response);

        setHits((prev)=> [...prev,...response.hits])
        setTotalHits(response.totalHits)
      setLoadMore(page < Math.ceil(response.totalHits / 12))
      setError('')
      }
    catch (error) {
      setError(error.message)
    }
    finally {
      setLoading(false)
     }
   },[page,query])

  useEffect(() => {
    if (query === '') {
      return
    }
    const fetchData = async () => {
      await getPhotos()
    };
    fetchData();
  }, [query,getPhotos,page]);

   return (
      <div className={css.App} >
         <Searchbar onSubmit={handleFormSubmit}></Searchbar>
         {loading && <Loader></Loader>}
         {error && <div className={css.error}>{error}</div>}
         <ImageGallery hits={hits}>
         </ImageGallery>
          <div className={cSs.buttonWrraper}>
             {loadMore && <Button click={handleLoadMore}></Button>}
          </div>
    </div>
  );
}
