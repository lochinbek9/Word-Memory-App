import { useState } from 'react'
import Layout from './components/layouts/Layout'
import Welcome from './components/layouts/Welcome'
import Dashboard from './components/layouts/Dashboard'
import Challange from './components/layouts/Challange'


function App() {

  return (
    <Layout>
     <Welcome/>
     <Dashboard/>
     <Challange/>
    </Layout>
  )
}

export default App
