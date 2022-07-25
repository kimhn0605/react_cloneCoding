import { useEffect, useState } from "react";

function CoinTracker() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);

	// useEffect -> 초기 렌더링에만 실행
	// 2번째 파라미터인 배열에 아무런 인자도 넣어주지 않았기 때문
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			{/* 로딩이 끝나면 coin 개수 출력 (템플릿 문자열) */}
			<h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>

			{/* 로딩중이라면 Loading 문구를 표시하고, 로딩이 끝나면 coins 출력*/}
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select>
					{coins.map((coin) => (
						<option>
							{/* 여기서는 각 coin 마다 고유 id 가 존재하기 때문에 리스트에 굳이 key 지정 X */}
							{coin.name} {coin.symbol} {coin.quotes.USD.price}
						</option>
					))}
				</select>
			)}
		</div>
	);
}

export default CoinTracker;
