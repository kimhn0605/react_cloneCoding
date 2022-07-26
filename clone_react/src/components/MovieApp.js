import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// <Link> : 브라우저 새로고침 없이도 유저가 다른 페이지로 이동할 수 있도록 해주는 컴포넌트
// html 에서 <a href> 태그를 사용하게 되면 전체 페이지가 다시 렌더링됨.

// 부모 (Home.js) 로부터 props 전달받아서 사용
function MovieApp({ id, coverImg, title, summary, genres }) {
	return (
		// 로딩 중이면 Loading 문구를 출력하고, 로딩이 끝나면 영화 제목 출력
		// map 사용할 때마다 고유한 값으로 key 지정해줄 것
		<div>
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			{/* 이미지 element 는 alt 속성 지정해줄 것 */}
			<img alt={title} src={coverImg} />
			<p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
			<ul>
				{genres.map((genre) => (
					<li key={genre}>{genre}</li>
				))}
			</ul>
		</div>
	);
}

MovieApp.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default MovieApp;
