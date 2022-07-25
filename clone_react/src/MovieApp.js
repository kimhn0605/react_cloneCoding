import React, { useEffect, useState } from "react";

function MovieApp(props) {
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
		// 로딩 중이면 Loading 문구를 출력하고, 로딩이 끝나면 영화 제목 출력
		// map 사용할 때마다 고유한 값으로 key 지정해줄 것
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<div key={movie.id}>
							<h2>{movie.title}</h2>
							<img src={movie.medium_cover_image} />
							<p>{movie.summary}</p>
							<ul>
								{movie.genres.map((genre) => (
									<li key={genre}>{genre}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default MovieApp;
