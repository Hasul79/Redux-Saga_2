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
      
      <div><h1>Users:</h1> {users.map((user => (
      <table><th><u>id:-{user.id }</u></th>
           <tr><b>name:</b>-{user.name}</tr>
           <tr><b>username:</b>- { user.username}</tr>
          <tr><b>email:</b>-{user.email}</tr>
           <tr><b>phone:</b>- {user.phone}</tr>
           </table>)))}</div>
   </div> 
  );
}


export default App;
