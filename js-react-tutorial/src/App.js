import logo from './logo.svg';
import './App.css';
import { MyButton1 } from './DAMLComponents/Buttons/MyButton1';
import { MyButton2 } from './DAMLComponents/Buttons/MyButton2';
import { MyButton3 } from './DAMLComponents/Buttons/MyButton3';
import { MyButton4 } from './DAMLComponents/Buttons/MyButton4';
import { DogsListPrintedNotShown } from './DAMLComponents/DataFetching/FetchAndPrintDogs';
import { DogsListDisplayed } from './DAMLComponents/DataFetching/FetchAndShowDogs';
import { ParentComponent } from './DAMLComponents/ContextDemo/ParentComponent';
import { ParentWithoutContext } from './DAMLComponents/ContextDemo/WithoutContext/Parent';

function App() {
	return (
		<div style={{border : "1px solid black"}}>
			<ParentWithoutContext/>
		</div>
	);
}

export default App;
