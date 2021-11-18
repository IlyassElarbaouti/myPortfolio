import './App.css';
import Main from './main/Main'
import Cursor from './cursor/Cursor'
import Projects from './projects/Projects';
function App() {
  return (
    <div className="app">
      <Cursor/>
      <Main className='main'/>
      <Projects className='projects'/>

      {/*{/projects/}
      {/social/}
      {/contact/}
      {/contact*/}

      
    </div>
      
  );
}
export default App;
