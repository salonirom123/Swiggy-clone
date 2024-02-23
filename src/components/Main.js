import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Manu'
import Restaurants from '../components/Restaurent'
import Footer from '../components/Footer'
import TopRated from '../components/TopRated'
import Offers from '../components/Offers'
import { useLocation } from 'react-router-dom'
import { ToastContainer, } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {

	const location = useLocation()

	console.log(location)
	

	const [restarantsList,setRestaurantsList] = useState([])
	const [menu,setMenu] = useState("")

  const getRestaurants = async() =>{
	const url = 'https://restaurants222.p.rapidapi.com/search';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '12c48c5d0amshb5dd9cd40724d92p1bf8b7jsn7612d3980b30',
		'X-RapidAPI-Host': 'restaurants222.p.rapidapi.com'
	},
	body: new URLSearchParams({
		location_id: `${location?.state?.data ?? "297701"}`,
		language: 'en_US',
		currency: 'USD',
		offset: '0'
	})
};

try {
	const response = await fetch(url, options);
	const details = await response.json();
	setRestaurantsList(details?.results?.data);
} catch (error) {
	console.error(error);
}
  }

  useEffect(()=>{
    getRestaurants()
  },[])
  
  

  return (
	<>
	<ToastContainer autoClose={3000}/>
	<div>
      <Navbar restaurantsList={restarantsList}/>
	  <div className='ml-44 w-8/12'>
	  <h1 className='mt-7 font-bold text-2xl'>Best offers for you</h1>
		<Offers/>
		<h1 className='mt-7 font-bold text-2xl'>What's on your mind?</h1>
	  <Menu setMenu={setMenu}/>
	  <h1 className='mt-7 font-bold text-2xl'>Top restaurant chains in {restarantsList ? restarantsList[0]?.address_obj?.city : "Location"}</h1>
		<TopRated restaurantsList={restarantsList}/>
      </div>
	  <div className='ml-44'>
	  <h1 className='mt-7 font-bold text-2xl'>Restaurants with online food delivery in {restarantsList ? restarantsList[0]?.address_obj?.city : "Location"}</h1>
	  <Restaurants menu={menu} restaurantsList={restarantsList}/>
	  </div>
	  <Footer/>
    </div>
	</>
  )
}

export default Main