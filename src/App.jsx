import { useState, useEffect } from 'react'
import Layout from './components/layouts/Layout'
import Welcome from './components/layouts/Welcome'
import Dashboard from './components/layouts/Dashboard'
import Challange from './components/layouts/Challange'


function App() {
   const [selectedPage, setSelectedPage] = useState(0);
  const [name, setName] = useState('');
  function handleChangePage(pageIndex) {
    setSelectedPage(pageIndex);
  }

  function handleCreateAccount() {
    if(!name) {
      alert('Please enter your name to continue');
      return;
    }
    localStorage.setItem('username', name);
    handleChangePage(1);
  }

  useEffect(() => {
    if(!localStorage){return;}
    if(localStorage.getItem('username')) {
      setName(localStorage.getItem('username'));
      handleChangePage(1);
    }
  }, []);
   
  const pages = {
    0: <Welcome handleCreateAccount={handleCreateAccount} username="hello world!" name={name} setName={setName} />,
    1: <Dashboard name={name} />,
    2: <Challange />
  }
  return (
    <Layout>
       {pages[selectedPage]}
    </Layout>
  )
}

export default App
