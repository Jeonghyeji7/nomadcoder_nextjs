import { useRouter } from "next/router";
import Seo from "../../components/Seo";
import { useEffect, useState } from "react";

export default function Detail() {
  const router = useRouter();
  

  //* console.log(router);
  //* -> query: params: (2) ['Sonic the Hedgehog 2', '675353']
  //*  그래서 title,id
  const [title, id] = router.query.params || [];

  const [detailMovie, setdetailMovie] = useState();
  useEffect(() => {
    (async () => {
      const data = await (await fetch(`/api/movies/${id}`)).json();
      setdetailMovie(data);
    })();
  }, []);

  

  return (
    <div>
      <Seo title={title} />
      {detailMovie ? (
        <>
          <h2>{detailMovie.original_title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${detailMovie.backdrop_path}`}
          />
          <h3>{detailMovie.overview}</h3>
        </>
      ) : null}
    </div>
  );
}