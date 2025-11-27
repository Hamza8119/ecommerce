<template>
  <div>


    <section class="hero">
      <h1>DISCOVER UNIQUE LAMPS EVERY DAY</h1>
      <button class="btn-1">View all collections</button>
    </section>

    <div class="images">
      <div class="image" v-for="(img,index) in images1" :key="index">
        <img :src="img.src" :alt="img.alt">
        <h2>{{ img.title }}</h2>
      </div>
    </div>

    <div class="fattk">
      <div class="vere">
        <h1 class="h1-1">FEATURING LAMP</h1>
        <button class="btn-2">View all collections</button>
      </div>
      <h2 class="h2-2">fresh selection</h2>
    </div>

    <div class="imagees">
      <div class="imagee" v-for="(img,index) in images2" :key="index">
        <img :src="img.src" :alt="img.alt">
        <h2 class="h2-2">{{ img.title }}</h2>
      </div>
    </div>

    <div class="riffe">
      <h3>Contemporary Living</h3>
      <h1>Decor for Homes</h1>
      <p>Transform your living space with our stylish furniture and decor.</p>
      <button class="btn-2">Shop New Items</button>
    </div>
  </div>
</template>

<script setup>
import logoImg from '@/assets/image5.png'
import img1 from '@/assets/image1.png'
import img2 from '@/assets/image2.png'
import img3 from '@/assets/image3.png'
import img6 from '@/assets/image6.png'
import img8 from '@/assets/image8.png'
import img9 from '@/assets/image9.png'
import img10 from '@/assets/image10.png'

const logo = logoImg

const images1 = [
  { src: img1, alt: "Image 1", title: "image" },
  { src: img2, alt: "Image 2", title: "image" },
  { src: img3, alt: "Image 3", title: "image" },
  { src: img6, alt: "Image 6", title: "image" },
  { src: img1, alt: "Image 1", title: "image" },
]

const images2 = [
  { src: img10, alt: "Image 10", title: "image" },
  { src: img8, alt: "Image 8", title: "image" },
  { src: img9, alt: "Image 9", title: "image" },
]


</script>

<style scoped>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }
    body {
      background: #f5f5f5;
      color: #333;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 50px;
      background: #e0e0e0;
    }
    header .logo {
      font-weight: bold;
      font-size: 20px;
    }
    nav {
      display: flex;
      align-items: center;
      gap: 20px;
    }
 nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px; /* مسافة بين الأيقونة والنص */
  transition: color 0.3s;
}
nav a.active {
  color: #880e0e; /* اللون الخاص بـ Home */
}

nav a:hover {
  color: #880e0e;
}

nav svg {
  width: 18px;
  height: 18px;
  fill: currentColor; /* لون الأيقونة يتبع لون النص */
}
    nav input[type="search"] {
      padding: 5px 10px;
      border-radius: 20px;
      border: 1px solid #ccc;
      outline: none;
    }
    nav .icons {
      display: flex;
      gap: 15px;
      margin-left: 10px;
      font-size: 18px;
      cursor: pointer;
    }

    .hero {
      position: relative;
      background-size: cover;
      background-position: center;
      height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 50px;
      color: white;
  background-image: url('@/assets/image4.png'); 
    }
    .hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/dow.png') no-repeat center;
  background-size: cover;
  pointer-events: none;
}
    .hero h1 {
      font-size: 50px;
      max-width: 600px;
      margin-bottom: 20px;
      text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
    }
    .hero .btn-1 {
      padding: 12px 25px;
      width: 220px;
      font-size: 16px;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      background: #fff;
      color: #880e0e;
      font-weight: bold;
    }
    .hero .btn-1:hover {
      background: #880e0e;
      color: #fff;
      transition: 0.3s;
    }

    /* القسم الأول للصور */
    .images {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;
      padding: 20px;
    }
    .images .image {
      flex: 1 1 calc(20% - 20px);
      text-align: center;
    }
    .images .image img {
      width: 100%;
      max-width: 250px;
      border-radius: 10px;
    }
    .images h2 {
      margin-top: 10px;
      font-size: 16px;
    }

    /* القسم الثاني مع 3 أعمدة */
    .fattk {
      padding: 40px 38px;
    }
    .vere {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .h1-1 {
      font-size: 40px;
    }
    .btn-2 {
      padding: 12px 25px;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      background: #fff;
      color: #880e0e;
      font-weight: bold;
    }
    .btn-2:hover {
      background: #880e0e;
      color: #fff;
      transition: 0.3s;
    }
    .h2-2 {
      font-size: 25px;
      color: #000;
      opacity: 0.3;
    
    }
    .imagees {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin: 0;
      
      padding: 0px 20px; ;
    }
    .imagees .imagee {
      text-align: center;
    }
    .imagees .imagee img {
      width: 100%;
      max-width: 450px;
      border-radius: 10px;
    }
    .h2-2{
        margin-top: 10px;
        font-size: 16px;
  
    }

    .riffe {
      position: relative;
      background-size: cover;
      background-position: center;
      margin-top: 65px;
      height: 90vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 50px;
      color: white;
      background-image: 
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('@/assets/image11.png');
    }
    

    .riffe h1 {
      font-size: 50px;
      max-width: 600px;
      margin-bottom: 20px;
      text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
    }

    .riffe p {
      font-size: 18px;
      max-width: 500px;
      margin-bottom: 25px;
      line-height: 1.5;
    }

    .riffe .btn-2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 12px 25px;
      width: 220px;
      font-size: 16px;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      background: #fff;
      color: #880e0e;
      font-weight: bold;
      box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
    }

    .riffe .btn-2:hover {
      background: #880e0e;
      color: #fff;
      transition: 0.3s;
    }
    
    img:active {
      transform: scale(0.95);
    }







    .images .image img,
.imagees .imagee img {
  transition: transform 0.3s, box-shadow 0.3s;
}

.images .image img:hover,
.imagees .imagee img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: box-shadow 0.3s;
}

header.scrolled {
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
.btn-1:hover,
.btn-2:hover {
  box-shadow: 0 0 20px rgba(136,14,14,0.5);
}
</style>
