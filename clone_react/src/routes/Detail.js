import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
	// useParams() : 해당 url 이 받을 변수 id 에 대한 정보를 가져옴
	// 클릭한 영화 제목의 id 를 알아내서 API 에 다시 요청하고, 해당 영화의 세부 정보를 가져오도록
	const { id } = useParams();
	const [info, setInfo] = useState([]);
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		console.log(json);
		setInfo(json.data.movie.year);
	};

	useEffect(() => {
		getMovie();
	}, []);

	return <h1>개봉 시기 : {info}</h1>;
}

export default Detail;
