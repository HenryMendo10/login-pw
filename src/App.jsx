import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import './App.css'

import { useUser } from './context/User'
import { dataPosts } from './data/posts'
import Footer from './components/Footer/Footer'


function App() {

  const [ posts, setPosts ] = useState(dataPosts)

  useEffect(() => {
    const rawPosts = localStorage.getItem('posts');

    if (!rawPosts) {
      localStorage.setItem('posts', JSON.stringify(posts));
    } else {
      setPosts(JSON.parse(rawPosts));
    }
  },[])

  const obj = useUser()

  console.log(obj)

  return (
    <>
        <Header />
        <Footer />
    </>
  )
}

export default App
