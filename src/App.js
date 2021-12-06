import './App.css';
import Main from './main/Main.jsx'
import Cursor from './cursor/Cursor'
import Projects from './projects/Projects.jsx';
import { useState } from 'react';
function App() {
  const [projectClicked,setProjectClicked]= useState(false)
  return (
    <div className="app">
      <Cursor/>
      
      <Main className='main'/>
      <Projects projectClicked={projectClicked} setProjectClicked={setProjectClicked} className='projects'/>

      {/*{/projects/}
      {/social/}
      {/contact/}
      {/contact*/}

      
    </div>
      
  );
}
export default App;
