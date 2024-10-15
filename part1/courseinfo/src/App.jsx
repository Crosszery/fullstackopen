const Header = (props) => {  
	return (
		<h1>{props.courseName}</h1>
	)
  }

const Content = (props) => {  
	return (
		<>
			<Part content={props.content[0]} />
			<Part content={props.content[1]} />
			<Part content={props.content[2]} />
		</>
	)
  }

  const Part = (props) => {  
	return (
		<p>
			{props.content.name} {props.content.exercises}
		</p>
	)
  }

  const Total = (props) => {  
	const exercisesNum = (a) => {
		console.log(a);
		let sum = 0;
		for (let i = 0; i < a.length; i++) {
			sum += a[i].exercises;
		}
		return sum;
	}
	return (
		<p>Number of exercises {exercisesNum(props.content)}</p>
	)
  }

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
		  {
			name: 'Fundamentals of React',
			exercises: 10
		  },
		  {
			name: 'Using props to pass data',
			exercises: 7
		  },
		  {
			name: 'State of a component',
			exercises: 14
		  }
		]
	  }
  
	return (
	  <div>
		<Header courseName={course.name}/>
		<Content content={course.parts}/>
		{/*<Content part1={part1} exercises1={exercises1}.../>*/}
		<Total content={course.parts}/>
	  </div>
	)
  }
  
  export default App