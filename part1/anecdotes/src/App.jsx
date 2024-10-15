import { useState } from 'react'

const Button = ({handleClick,text}) => {
	return <button onClick={handleClick}>{text}</button>
}

const MostVotedAnecdote = ({anecdote, maxVotes}) => {
	if (maxVotes == 0) {
		return (
			<div>
				<h2>Anecdote with most votes</h2>
				No one vote yet!
			</div>
		)
	}
	return (
		<div>
			<h2>Anecdote with most votes</h2>
			{anecdote}<br/>
			has {maxVotes} votes 
		</div>
	)
}

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	]
	
	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

	function getRandomIndex(maxValue) {
		return Math.floor(Math.random() * (maxValue));
	}

	function getMostVotedIndex(votes) {
		let index = 0;
		let maxVotes = 0;
		for (let i = 0; i < votes.length; i++) {
			if (maxVotes < votes[i]) {
				maxVotes = votes[i];
				index = i;
			}
		}
		return index;
	}

	const handleNextClick = () => {
		//new anecdote every time
		do {
			var newSelected = getRandomIndex(anecdotes.length);
		} while (newSelected == selected)
		setSelected(newSelected);
	}

	const handleVoteClick = () => {
		const votesCopy = [...votes];
		votesCopy[selected] += 1;
		setVotes(votesCopy);
	}

	let mostVotedIndex = getMostVotedIndex(votes);
	return (
		<div>
			<h2>Anecdote of the day</h2>
			<p>
				{anecdotes[selected]}
			</p>
			<Button handleClick={handleVoteClick} text="vote" />
			<Button handleClick={handleNextClick} text="next anecdote" />
			<MostVotedAnecdote anecdote={anecdotes[mostVotedIndex]} maxVotes={votes[mostVotedIndex]} />
		</div>
	)
}

export default App