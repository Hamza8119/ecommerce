<script setup>
import { ref } from "vue";

// ------------------ Main Product Images ------------------
import pic from "@/assets/pic.jpeg";
import pic1 from "@/assets/pic1.jpeg";
import pic2 from "@/assets/pic2.jpeg";
import pic3 from "@/assets/pic3.jpeg";
import pic4 from "@/assets/pic4.jpeg";

// ------------------ Related / Popular Products Images ------------------
import img1 from "@/assets/image7.png";
import img2 from "@/assets/Paper_lantern 1.png";
import img3 from "@/assets/LED_lantern 1.png";
import img4 from "@/assets/Vector (9).png";
import img5 from "@/assets/Vector (8).png";
import img6 from "@/assets/Gas_lantern 1.png";

// ------------------ Main Product ------------------
const product = ref({
  brand: "John Lewis ANYDAY",
  title: "Long Sleeve Overshirt, Khaki, 6",
  price: 28.0,
  oldPrice: 40.0,
  description: "Boba etiam ut bulla tea est potus dilectus singulari compositione saporum...",
  sold: "1,238 Sold",
  rating: 4.5,
  images: [pic, pic1, pic2, pic3, pic4],
  colors: [
    { name: "Royal Brown", value: "#4a3b2c" },
    { name: "White", value: "#fff" },
    { name: "Blue", value: "#2e5a88" },
    { name: "Black", value: "#111" },
  ],
  sizes: ["6", "8", "10", "14", "18", "20"],
});

// ------------------ Reactive States ------------------
// ------------------ Reactive States ------------------
const selectedImage = ref(product.value.images[0]);
const selectedTitle = ref(product.value.title);
const selectedPrice = ref(product.value.price);
const selectedDesc = ref(product.value.description);
const selectedColor = ref(product.value.colors[0].name);
const selectedSize = ref(null);
const selectedRating = ref(product.value.rating);
const selectedSold = ref(product.value.sold);
const cart = ref(JSON.parse(localStorage.getItem("cart")) || []); // <--- خلي هادي وحدة فقط
const showNotif = ref(false); // لإظهار Notification


// ------------------ Track Selected Product for Highlight ------------------
const selectedProductTitle = ref(product.value.title);

// ------------------ Related / Popular Products ------------------
const popularProducts = ref([
  { img: img1, title: "John Lewis ANYDAY", price: 40, desc: "Denim Overshirt, Mid Wash", rating: 4.6, sold: 238 },
  { img: img2, title: "Whistle", price: 26, desc: "Wide Leg Cropped Jeans", rating: 4.8, sold: 1238 },
  { img: img3, title: "John Lewis ANYDAY", price: 32, desc: "Stripe Curved Hem Shirt", rating: 4.5, sold: 620 },
  { img: img4, title: "John Lewis ANYDAY", price: 40, desc: "Denim Overshirt, Mid Wash", rating: 4.6, sold: 238 },
  { img: img5, title: "John Lewis", price: 79, desc: "Linen Blazer, Navy", rating: 4.8, sold: 1238 },
  { img: img6, title: "John Lewis ANYDAY", price: 40, desc: "Denim Overshirt, Mid Wash", rating: 4.6, sold: 238 },
]);

// ------------------ Methods ------------------
function selectColor(c) {
  selectedColor.value = c.name;
}
function selectSize(s) {
  selectedSize.value = s;
}
function addToCart() {
  if (!selectedSize.value) {
    alert("Please select a size!");
    return;
  }

  cart.value.push({
    title: selectedTitle.value,
    price: selectedPrice.value,
    image: selectedImage.value,
    color: selectedColor.value,
    size: selectedSize.value,
  });

  localStorage.setItem("cart", JSON.stringify(cart.value));

  // 🔥 Notification
  showNotif.value = true;
  setTimeout(() => {
    showNotif.value = false;
  }, 2000);

  // ⚡️ تحديث Header
  window.dispatchEvent(new Event("cart-updated"));
}

function selectRelatedProduct(p) {
  const mainImg = document.querySelector('.main-image');
  mainImg.style.opacity = 0;
  setTimeout(() => {
    selectedImage.value = p.img;
    selectedTitle.value = p.title;
    selectedPrice.value = p.price;
    selectedDesc.value = p.desc;
    selectedColor.value = product.value.colors[0].name;
    selectedSize.value = null;
    selectedProductTitle.value = p.title;
    selectedRating.value = p.rating;
    selectedSold.value = p.sold;
    mainImg.style.opacity = 1;
  }, 200);
}
</script>


<template>
  <div class="container">
    <!-- Notification -->
<div 
  v-if="showNotif" 
  class="cart-notif"
>
  Product added to cart!
</div>

    <!-- IMAGE GALLERY -->
    <div class="product-image">
      <img :src="selectedImage" class="main-image" />
      <div class="thumbnail-list">
        <img
          v-for="img in product.images"
          :key="img"
          :src="img"
          :class="{ active: selectedImage === img }"
          @click="selectedImage = img"
        />
      </div>
    </div>

  <!-- DETAILS -->
<div class="product-details">
  <p class="brand">{{ product.brand }}</p>
  <h2 class="title">{{ selectedTitle }}</h2>
  <p>
    <span class="old-price">£{{ selectedPrice === product.price ? product.oldPrice : '' }}</span>
    <span class="price">£{{ selectedPrice }}</span>
  </p>
 <p class="sold">★ {{ selectedRating }} • {{ selectedSold }} Sold</p>

  <p class="description">{{ selectedDesc }}</p>

  <!-- Colors -->
  <h4>Color: {{ selectedColor }}</h4>
  <div class="colors">
    <div
      v-for="color in product.colors"
      :key="color.value"
      class="color-option"
      :style="{ background: color.value }"
      :class="{ active: selectedColor === color.name }"
      @click="selectColor(color)"
    ></div>
  </div>

  <!-- Sizes -->
  <h4>Size</h4>
  <div class="sizes">
    <div
      v-for="size in product.sizes"
      :key="size"
      class="size"
      :class="{ active: selectedSize === size }"
      @click="selectSize(size)"
    >
      {{ size }}
    </div>
  </div>

  <button class="btn btn-cart" @click="addToCart">Add To Cart</button>
  <router-link to="/TheCs" class="nav-link" active-class="active-link">
  <button class="btn btn-checkout">Checkout Now</button>
  </router-link>
  <p class="t-c">Delivery T&C</p>
</div>

  </div>
  <!-- 🔥 RELATED PRODUCTS -->
  <section class="related-products">
    <div class="related-header">
      <h2><span class="highlight">R</span>elated Products</h2>
      <router-link to="/collections" class="view-all">View All</router-link>
    </div>
    <div class="related-list">
      <div
        class="related-card"
        v-for="(p, index) in popularProducts.slice(0, 6)"
        :key="index"
        @click="selectRelatedProduct(p)"
        :class="{ 'selected-card': selectedProductTitle === p.title }"
        style="cursor: pointer;">
        <img :src="p.img" :alt="p.title" />
        <h4>{{ p.title }}</h4>
        <p class="price">${{ p.price }}</p>
        <p class="desc">{{ p.desc }}</p>
        <div class="rating">
          <span>★</span><span>{{ p.rating }}</span><span>• {{ p.sold }} Sold</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 🔥 POPULAR OF THE WEEK -->
  <section class="related-products">
    <div class="related-header">
      <h2><span class="highlight">P</span>opular of the week</h2>
      <router-link to="/collections" class="view-all">View All</router-link>
    </div>
    <div class="related-list">
      <div
        class="related-card"
        v-for="(p, index) in popularProducts"
        :key="index"
        @click="selectRelatedProduct(p)"
        :class="{ 'selected-card': selectedProductTitle === p.title }"
        style="cursor: pointer;">
        <img :src="p.img" :alt="p.title" />
        <h4>{{ p.title }}</h4>
        <p class="price">${{ p.price }}</p>
        <p class="desc">{{ p.desc }}</p>
        <div class="rating">
          <span>★</span><span>{{ p.rating }}</span><span>• {{ p.sold }} Sold</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cart-notif {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #111;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 999;
  transition: all 0.3s ease;
}

/* --- Existing Styles --- */
.container {
  display: flex;
  gap: 40px;
  background: white;
  padding: 20px;
}
.product-image { flex: 1; }
.product-image img { width: 719px; height: 650px; border-radius: 10px; }
.thumbnail-list { display: flex; gap: 10px; margin-top: 15px; }
.thumbnail-list img { width: 100%; height: 160px; border-radius: 8px; border: 1px solid #ddd; cursor: pointer; }
.product-details { flex: 1; display: flex; flex-direction: column; gap: 15px; }
.brand { color: #999; font-size: 14px; }
.title { font-size: 22px; font-weight: bold; }
.price { font-size: 22px; font-weight: bold; color: #111; }
.old-price { text-decoration: line-through; color: #888; margin-right: 10px; }
.sold { font-size: 14px; color: #777; }
.rating { color: #f39c12; font-weight: bold; }
.description { font-size: 14px; color: #444; line-height: 1.5; }
.colors { display: flex; gap: 10px; }
.color-option { width: 60px; height: 30px; border: 2px solid #ddd; border-radius: 6px; cursor: pointer; }
.sizes { display: flex; gap: 10px; }
.size { padding: 8px 12px; border: 1px solid #ccc; border-radius: 6px; cursor: pointer; background: #f9f9f9; }
.size:active { border: 5px solid #000; }
.btn { padding: 14px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; margin-top: 10px; }
.btn-cart { background: #111; color: white; width: 200px; }
.btn-cart:hover { background: #0c0b0b4b; }
.btn-checkout { background: red; color: white; width: 200px; }
.btn-checkout:hover { background: rgba(152, 0, 0, 0.86); }
.t-c { font-size: 12px; color: #666; margin-top: 10px; }
.active { border: 2px solid #000000; }
.related-products { padding: 40px 60px; margin-top: 40px; }
.related-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
.related-header h2 { font-size: 22px; font-weight: bold; color: #111; }
.related-header .highlight { color: #fff; background-color: #880e0e; padding: 2px 8px; margin-right: 6px; }
.related-header .view-all { text-decoration: none; color: #111; font-size: 14px; font-weight: bold; }
.related-list { display: flex; gap: 25px; flex-wrap: wrap; }
.related-card { padding: 15px; border-radius: 10px; width: 180px; transition: all 0.3s ease; }
.related-card:hover { transform: translateY(-5px); }
.related-card img { width: 100%; height: 160px; border-radius: 8px; object-fit: cover; }
.related-card h4 { margin-top: 10px; font-size: 14px; font-weight: bold; }
.related-card .price { color: #111; font-weight: bold; margin-top: 4px; }
.related-card .desc { color: #666; font-size: 12px; }
.related-card .rating { display: flex; align-items: center; gap: 6px; margin-top: 8px; font-size: 12px; }
.related-card .rating span:first-child { color: #f39c12; }

/* --- Highlight Selected Card --- */
.selected-card {
  border: 2px solid #880e0e;
  transform: translateY(-5px);
}
</style>
