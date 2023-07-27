import './App.css';
import { TasksList } from './components/TasksList';


function App() {
  return(
    <div>
      <TasksList/>
    </div>
  );






  // const [count, setCount] = useState(0);

  // return(
  //   <div>
  //     <p>{count}</p>
  //     <button onClick={() => setCount((prevState) => prevState + 1 )}>-</button>
  //     <button onClick={() => setCount(count + 1)}>+</button>
  //   </div>
  // )















  // const [name, setName] = useState('Michal');

  // const handleChangeName = () =>{
  //   setName('Marian');
  // };

  // return(
  //   <div>
  //     <p>{name}</p>
  //     <button onClick={handleChangeName}>Change name</button>
  //   </div>
  // );







  // return (
  //   <div>
  //     {users.map((user, index) => {
  //       return <div key={index}>{user.name} - {user.age}</div>;
  //     })}
  //   </div>
  // )
}

export default App;
