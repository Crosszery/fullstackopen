import { useState } from 'react'

const Button = ({handleClick, text}) => {
	return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({text, value, valueMeasure}) => {
	return <tr><td>{text}</td><td>{value}{typeof valueMeasure == "undefined"?"":" " + valueMeasure}</td></tr>;
}

const Statistics = ({good, neutral, bad}) => {
	function getAllReview() {
		return good + neutral + bad;
	}

	function getAverageReview() {
		return ((good - bad) / getAllReview()).toFixed(1);
	}

	function getPositivePercentageReview() {
		return (good / getAllReview() * 100).toFixed(1);
	}

	if (getAllReview() == 0) {
		return (
			<>
				<h2>statistics</h2>	
				<p>
					no feedback given
				</p>
			</>
		)
	}

	return 	(
		<>	
			<h2>statistics</h2>	
			<table>
				<tbody>
					<StatisticLine text="good" value={good}/>
					<StatisticLine text="neutral" value={neutral}/>
					<StatisticLine text="bad" value={bad}/>
					<StatisticLine text="all" value={getAllReview()}/>
					<StatisticLine text="average" value={getAverageReview()}/>
					<StatisticLine text="positive" value={getPositivePercentageReview()} valueMeasure="%"/>
				</tbody>
			</table>
		</>
	)
}


const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGoodClick = () => {
		setGood(good + 1);
	}
	const handleNeutralClick = () => {
		setNeutral(neutral + 1);
	}
	const handleBadClick = () => {
		setBad(bad + 1);
	}



	return (
		<div>
			<h2>give feedback</h2>
			<Button handleClick={handleGoodClick} text="good"/>
			<Button handleClick={handleNeutralClick} text="neutral"/>
			<Button handleClick={handleBadClick} text="bad"/>
			<Statistics good={good} neutral={neutral} bad={bad}/>

		</div>
	)
}

export default App