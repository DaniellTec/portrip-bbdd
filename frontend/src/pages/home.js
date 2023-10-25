
import '../css/styles.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";

import ReactTooltip from 'react-tooltip';

//import Slider from "react-slick";


import blacksad from '../images/home/1.jpg';
import face from '../images/home/2.jpg';
import lake from '../images/home/11.jpg';
import mountain from '../images/home/12.jpg';



import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import CarouselPaint from '../components/CarouselArt';
import Footer from '../components/footer';
import Component from '../components/swipetoslide';

import { FaArrowRight, FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <> 
    {/*
    <CarouselPaint />       

    <br/>
    <center>
    <button class="button"> <Link to="/paint" style={{ color: "black" }}> Pinturas </Link></button>
    <button class="button"> <Link to="/abstract" style={{ color: "black" }}> Arte abstracto </Link>  </button>
    <button class="button"> <Link to="/oil" style={{ color: "black" }}> Óleos </Link> </button>
    <button class="button"> <Link to="/landscape" style={{ color: "black" }}> Paisajes </Link> </button>
    <button class="button"> <Link to="/colection" style={{ color: "black" }}> Colecciones </Link> </button>
    <button class="button"> <Link to="/photo" style={{ color: "black" }}> Fotografías </Link> </button>
    <button class="button"> <Link to="/featured" style={{ color: "black" }}> Destacados </Link> </button>
    </center>
    <hr/>
    <br/>
    */}
   <hr/>
   <br/>

    <h1 class="headerStyle">
      Schedule a lugg
    </h1>

    <h2 class="headerStyle1">
    Select a category and we’ll get you moving!
    </h2>

<div className='container'>

<div className='image-grid col-md-6 col-md-offset-3'>

  <div className='product-2 align-items-center p-2 text-center'>
  <a href="https://developer.mozilla.org/"><img src={blacksad} alt="" class="rounded img-fluid hoverable-image" style={{ width: 290, height: 240, }}/></a>
  <FaArrowRight/>
  </div>

  <div className='product-2 align-items-center p-2 text-center'>
  <a href="https://developer.mozilla.org/"><img src={blacksad} alt="" class="rounded img-fluid hoverable-image" style={{ width: 290, height: 240 }}/></a>
  <FaArrowRight/>
  </div>

  <div className='product-2 align-items-center p-2 text-center'>
  <a href="https://developer.mozilla.org/"><img src={blacksad} alt="" class="rounded img-fluid hoverable-image" style={{ width: 290, height: 240 }}/></a>
  <FaArrowRight/>
  </div>

  <div className='product-2 align-items-center p-2 text-center'>
  <a href="https://developer.mozilla.org/"><img src={blacksad} alt="" class="rounded img-fluid hoverable-image" style={{ width: 290, height: 240 }}/></a>
  <FaArrowRight/>
  </div>

  <div className='product-2 align-items-center p-2 text-center'>
  <a href="https://developer.mozilla.org/"><img src={blacksad} alt="" class="rounded img-fluid hoverable-image" style={{ width: 290, height: 240 }}/></a>
  <FaArrowRight/>
  </div>

  <div className='product-2 align-items-center p-2 text-center'>
  <a href="https://developer.mozilla.org/"><img src={blacksad} alt="" class="rounded img-fluid hoverable-image" style={{ width: 290, height: 240 }}/></a>
  <FaArrowRight/>
  </div>
  
<center>
  <button type="button" class="btn btn-outline-primary centerButton">Other <FaArrowRight/></button>  
  <br/>
  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
</center>


</div>


</div>



{/*
<div className='letterStyle1'>
  <p className='letterStyle'>Other <FaArrowRight/></p>
</div>  
*/}

{/*
<div className='container'>

  <div className='row'>
    <div className='box'>
    <img src={blacksad} alt="" class="rounded img-fluid" style={{ width: 290, height: 240 }}/>
    </div>
    <div className='box'>
    <img src={blacksad} alt="" class="rounded img-fluid" style={{ width: 290, height: 240 }}/>
    </div>
    <div className='box'>
    <img src={blacksad} alt="" class="rounded img-fluid" style={{ width: 290, height: 240 }}/>
    </div>
  </div>

  <div className='row'>
    <div className='box'>
    <img src={blacksad} alt="" class="rounded img-fluid" style={{ width: 290, height: 240 }}/>
    </div>
    <div className='box'>
    <img src={blacksad} alt="" class="rounded img-fluid" style={{ width: 290, height: 240 }}/>
    </div>
    <div className='box'>
    <img src={blacksad} alt="" class="rounded img-fluid" style={{ width: 290, height: 240 }}/>
    </div>
  </div>

</div>

*/}

{/*

<div class="wrapper">
  <div class="col-md-4">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={blacksad} alt="" class="rounded img-fluid" style={{ width: 290, height: 240 }}/>
   
    </div>
 </div> 
</div>

 <div class="col-md-4">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={face} alt="" class="rounded img-fluid" style={{ width: 290, height: 240 }}/>
     
    </div>
 </div> 
</div> 
<div class="col-md-4">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={lake} alt="" class="rounded img-fluid" style={{ width: 290, height: 240 }}/>
      
    </div>
    
 </div> 
</div>
</div>

*/}

<hr/>
<br/>

<h1 class="center" data-tip data-for="catalogue">
      Catálogo
    </h1>
    <ReactTooltip id="catalogue">
      Haz click y desliza con el mouse.
    </ReactTooltip>
    <br/>

<Component/>

<Footer/>
    </>
    
  );
};

export default Home;