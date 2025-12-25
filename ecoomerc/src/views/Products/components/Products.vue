<template>
  <div>
    <!-- Hero Section -->
    <div class="arial">
      <h1>YOUR PRODUCTS ARE GREAT.</h1>
       <router-link to="/Shops" class="nav-link" active-class="active-link">
                <button class="btn-1">  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1a1 1 0 0 1 1-1h1.27a1 1 0 0 1 .95.68L3.89 3H14a1 1 0 0 1 .96 1.27l-1.5 6A1 1 0 0 1 12.5 11H5a1 1 0 0 1-1-.76L2.31 2H1a1 1 0 0 1-1-1z"/>
        <path d="M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/>
      </svg> SHOP PRODUCT</button>
</router-link>
    </div>

    <!-- Features -->
    <div class="second">
      <div class="feature">
        <h3>FREE Delivery</h3>
        <i class="fas fa-truck"></i>
      </div>
      <div class="feature">
        <h3>QUALITE GRANDTAILLE</h3>
        <i class="fas fa-star"></i>
      </div>
      <div class="feature">
        <h3>DAILY OFFERS</h3>
        <i class="fas fa-gift"></i>
      </div>
      <div class="feature">
        <h3>100% SECURE PAYMENT</h3>
        <i class="fas fa-lock"></i>
      </div>
    </div>

    <!-- Decor Section -->
    <div class="decor-section">
      <div class="decor-header">
        <h2>Decor Product</h2>
                     <router-link to="/Shops" class="nav-link" active-class="active-link">
               <button class="shop-btn">GO TO SHOP</button>
</router-link>
      </div>

      <div class="decor-gallery">
        <div class="decor-item" v-for="(item, i) in decorProducts" :key="i">
          <img :src="item.image" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.price }}</p>
        </div>
      </div>
    </div>

    <!-- Decoration Homes Section -->
    <div class="decor-section">
      <div class="decor-header">
        <h2>Decoration Homes</h2>
        
      <router-link to="/Shops" class="nav-link" active-class="active-link">
      <button class="shop-btn">GO TO SHOP</button>
      </router-link>
      </div>

      <div class="decor-gallery">
        <div class="decor-item" v-for="(item, i) in homeDecor" :key="i">
          <img :src="item.image" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.price }}</p>
        </div>
      </div>
    </div>

    <!-- Sale Section -->
    <div class="ariale">
      <h5>-10% OFF</h5>
      <h1>NEW YOUR SALE</h1>
      
      <router-link to="/Shops" class="nav-link" active-class="active-link">
       <button class="btn-1">  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1a1 1 0 0 1 1-1h1.27a1 1 0 0 1 .95.68L3.89 3H14a1 1 0 0 1 .96 1.27l-1.5 6A1 1 0 0 1 12.5 11H5a1 1 0 0 1-1-.76L2.31 2H1a1 1 0 0 1-1-1z"/>
        <path d="M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/>
      </svg> SHOP SALE</button>
       </router-link>
      
    </div>

    <!-- Latest Posts -->
    <div class="latest-posts">
      <h2>Latest Posts</h2>
      <div class="posts-scroll">
        <div class="post-item" v-for="(post, i) in posts" :key="i">
          <img :src="post.image" :alt="post.title" />
          <h3>{{ post.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "@/assets/pic.jpeg";
import image2 from "@/assets/pic1.jpeg";
import image3 from "@/assets/pic2.jpeg";
import image4 from "@/assets/pic3.jpeg";
import image5 from "@/assets/pic4.jpeg";


export default {
  name: "Home",

  data() {
    return {
      decorProducts: [
        { image: image1, title: "Decor 1", price: "$45" },
        { image: image4, title: "Decor 2", price: "$60" },
        { image: image3, title: "Decor 3", price: "$30" },
        { image: image2, title: "Decor 4", price: "$55" },
      ],

      homeDecor: [
        { image: image5, title: "Decor 1", price: "$45" },
        { image: image2, title: "Decor 2", price: "$60" },
        { image: image4, title: "Decor 3", price: "$30" },
        { image: image1, title: "Decor 4", price: "$55" },
      ],

      posts: Array.from({ length: 10 }, (_, i) => ({
        image: image1,
        title: `Post Title ${i + 1}`,
      })),
    };
  },
};
</script>

<style scoped>
.social-icons {
  display: flex;
  gap: 20px;
}

.social-icons a {
  color: #fff;
  font-size: 18px;
  transition: all 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.social-icons a:hover {
  color: #880e0e;
  transform: scale(1.2) translateY(-3px);
  text-shadow: 0 0 6px  #880e0e, 0 0 12px  #880e0e, 0 0 18px #880e0e;
}
.cart-icon:hover {
  
   fill: #880e0e;
 
}
.arial {
    position: relative;
    background-size: cover;
    background-image: url("@/assets/pic4.jpeg");
    background-position: center;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 50px;
    color: white;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
    font-family: Arial, sans-serif;
}
.ariale {
    position: relative;
    background-size: cover;
    background-position: center;
   background-image: url("@/assets/pic1.jpeg");
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 50px;
    color: white;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
    font-family: Arial, sans-serif;
}

.arial::before, .ariale::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4); /* overlay */
    z-index: 1;
}

 .ariale h5 {
    font-size: 2rem;
    margin-bottom: 15px;
    position: relative;
    font-weight: 500;
    color: #e0e0e0;
    opacity: 0.9;
}

.arial h1, .ariale h1 {
    font-size: 4rem;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;

}

.arial .btn-1, .ariale .btn-1 {
    padding: 18px 40px;
    font-size: 1.5rem;
    color: white;
    background-color: #880e0e;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
    margin-top: 15px;
}

.arial .btn-1:hover, .ariale .btn-1:hover {
    background-color: #82c3EC;
    transform: scale(1.05);
}


.second {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1200px;
    margin: 50px auto;
}

.second .feature {
    flex: 1;
    min-width: 200px;
    background-color: #fff;
    color: #333;
    padding: 30px 20px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    cursor: pointer;
}

.second .feature h3 {
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.second .feature i {
    font-size: 2rem;
    color: #880e0e;
    transition: transform 0.3s ease, color 0.3s ease;
}

.second .feature:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.second .feature:hover i {
    color: #82c3EC;
    transform: scale(1.3) rotate(10deg);
}
.decor-section {
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
}

.decor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.decor-header h2 {
  font-size: 2.5rem;
  color: #880e0e;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* خط تحت العنوان */
.decor-header h2::after {
  content: "";
  width: 120px; /* أطول من قبل */
  height: 4px;
  background: linear-gradient(90deg, #880e0e, #82c3EC);
  display: block;
  margin: 10px 0 0 0;
  border-radius: 2px;
}


.shop-btn {
  padding: 10px 25px;
  background-color: #880e0e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.shop-btn:hover {
  background-color: #82c3EC;
  transform: scale(1.05);
}

.decor-gallery {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.decor-item {
  flex: 1 1 calc(25% - 20px); /* 4 صور في صف */
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.decor-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.decor-item h3 {
  font-size: 1.1rem;
  margin: 10px 0 5px;
  color: #333;
}

.decor-item p {
  font-size: 1rem;
  color: #880e0e;
  margin-bottom: 15px;
}

.decor-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

/* Responsive */
@media (max-width: 992px) {
  .decor-item {
    flex: 1 1 calc(50% - 20px); /* صفين في الشاشات المتوسطة */
  }
}

@media (max-width: 600px) {
  .decor-item {
    flex: 1 1 100%; /* صف واحد في الموبايل */
  }
}
.latest-posts {
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
}

.latest-posts h2 {
  font-size: 2.5rem;
  color: #880e0e;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* خط تحت العنوان */
.latest-posts h2::after {
  content: "";
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #880e0e, #82c3EC);
  display: block;
  margin: 10px auto 0;
  border-radius: 2px;
}


.posts-scroll {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
  scroll-behavior: smooth;
}

.posts-scroll::-webkit-scrollbar {
  height: 8px;
}

.posts-scroll::-webkit-scrollbar-thumb {
  background: #880e0e;
  border-radius: 4px;
}

.posts-scroll::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}

.post-item {
  min-width: 250px; /* حجم كل عنصر في السطر */
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.post-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-item h3 {
  font-size: 1.1rem;
  margin: 10px 0 15px;
  color: #880e0e;
}

.post-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}
</style>
