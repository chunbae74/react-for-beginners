import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  const getDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setLoading(false);
    setDetails(json.data.movie);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return loading ? <h2>Loading...</h2> : JSON.stringify(details, null, 3);
}

export default Detail;
