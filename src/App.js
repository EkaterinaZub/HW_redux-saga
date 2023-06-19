
import './App.css';
import { CreatePost } from './components/CreatePosts';
// import {Cats} from './components/Cats'
import { Posts } from './components/Posts';

function App() {
  return (
    <div className="App">
    APP
      {/* <Cats/> */}
      <Posts/>
      <CreatePost/>
    </div>
  );
}

export default App;
