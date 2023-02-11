import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore"
import Intro from './components/Intro';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Registration from './components/Registration/Registration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [users, setUsers] = useState([])
  const membersCollectionRef = collection(db, "Members")
  useEffect(() => {
    const getMembers = async () => {
      const data = await getDocs(membersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    getMembers();
  }, []);


  return (

    <div>

      <Router>
        <Intro/>
        <Navbar />
        <Welcome/>

        <Routes>
          <Route path="registration" element={<Registration />}>

          </Route>

          <Route path="/" element={<Home />}>

          </Route>

        </Routes>
        
      </Router>



    </div>
    // <div>
    //   {users.map((Members) => {
    //     return(
    //       <div> 
    //       <h1> Name: {Members.Name}</h1>


    //     </div>
    //     )
    //   })}

    // </div>



  )
}

export default App;
