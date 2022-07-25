import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);

	const onChange = (e) => {
		setToDo(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault(); // submit 기본 동작인 새로고침 방지

		if (toDo === "") {
			// 아무것도 입력하지 않았다면 바로 리턴
			return;
		}

		// react.js 는 함수의 첫 번째 인자로 현재 state 를 전달
		setToDos((currentArray) => [...currentArray, toDo]);
		setToDo(""); // 입력란 초기화
	};

	return (
		<div>
			<h1>My To Dos ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					value={toDo}
					onChange={onChange}
					placeholder='Write your to do...'
				></input>

				{/* form 내부의 버튼 하나는 자동으로 submit 기능 수행 */}
				<button>Add To Do</button>
			</form>
			<hr />
			<ul>
				{toDos.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
