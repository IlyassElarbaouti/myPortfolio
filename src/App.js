import './App.css';
import Main from './Main'
import Cursor from './cursor'
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
