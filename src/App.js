import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);
   console.log(users)
  return (
    <div className='App'>
       <button onClick={() => dispatch(getUsersFetch())}>Get Users</button> 
      
      <div>Users: {users.map((user => (<div>{user.name}</div>)))}</div>
   </div> 
  );
}


export default App;
