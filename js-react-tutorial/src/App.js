import logo from './logo.svg';
import './App.css';
import { MyButton1 } from './DAMLComponents/Buttons/MyButton1';
import { MyButton2 } from './DAMLComponents/Buttons/MyButton2';
import { MyButton3 } from './DAMLComponents/Buttons/MyButton3';
import { MyButton4 } from './DAMLComponents/Buttons/MyButton4';
import { DogsListPrintedNotShown } from './DAMLComponents/DataFetching/FetchAndPrintDogs';
import { DogsListDisplayed } from './DAMLComponents/DataFetching/FetchAndShowDogs';

function App() {
	return (
		<div>
			<MyButton4 buttonText="Press me"/>
			<DogsListDisplayed/>
		</div>
	);
}

export default App;
