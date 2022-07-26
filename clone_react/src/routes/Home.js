import React, { useState, useEffect } from "react";
import MovieApp from "../components/MovieApp";

function Home(props) {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		// .then 대신 async-await 사용
		const json = await (
			await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
		).json();

		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<MovieApp
							// react.js 에서 map 사용할 때마다 고유한 값으로 key 지정해줄 것
							key={movie.id}
							id={movie.id}
							coverImg={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
