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
				console.log(json);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h1>The Coins!</h1>
			{loading ? <strong>Loading...</strong> : null}
			<ul>
				{coins.map((coin) => (
					<li>
						{/* 여기서는 각 coin 마다 고유 id 가 존재하기 때문에 리스트에 굳이 key 지정 X */}
						{coin.name} {coin.symbol} {coin.quotes.USD.price}
					</li>
				))}
			</ul>
		</div>
	);
}

export default CoinTracker;
