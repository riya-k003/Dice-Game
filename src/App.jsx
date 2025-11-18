import { useState } from 'react';
import Intro from './components/INTRODUCTION/Intro.jsx';
import Content from './components/content/content.jsx';
function App() {
       const [currentPage , setCurrentPage] = useState(false);

       const togglePage = () =>{
        setCurrentPage((prev) =>(!prev));
       }
       return(
       <>
       {currentPage ? <Content/> : <Intro toggle = {togglePage}/>}
       </>
       );
}

export default App;
