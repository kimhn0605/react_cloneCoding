import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
	// App.js 는 router 를 렌더링
	// <Switch> : 한 번에 하나의 Route 만 렌더링 하기 위해서 사용하는 컴포넌트

	return (
		<Router>
			<Switch>
				<Route path='/movie/:id'>
					<Detail />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
