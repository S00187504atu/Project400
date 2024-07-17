import BannerContainer from "../Banner/BannerContainer"
import React from 'react'
import Gallery from "./Gallery/Gallery"
import FavoriteClasses from "./FavoriteClasses/FavoriteClasses"
import FavoriteTeacher from "./FavoriteTeacher/FavoriteTeacher"
import Footer from "../Footer"
import useAuth from "../../hooks/useAuth"



const Home = () => {
const{user} = useAuth();
console.log(user)

  return (
    <section>
      <BannerContainer/>
      <div className="max-w-screen-xl mx-auto">
        <Gallery/>
        <FavoriteClasses/>
        <FavoriteTeacher/>
        <Footer/>
        

      </div>
      
    </section>
    
  )
}

export default Home;