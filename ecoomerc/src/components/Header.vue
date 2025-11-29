<template>
  <header>
    <div class="logo">
      <router-link to="/" class="nav-link" active-class="active-link">
        <img :src="logo" alt="Logo" />
      </router-link>
    </div>

    <nav>
      <router-link to="/" class="nav-link" active-class="active-link">
        Home
      </router-link>

      <router-link to="/contactUs" class="nav-link" active-class="active-link">
        Contact us
      </router-link>

      <router-link to="/categories" class="nav-link" active-class="active-link">
        Categories
      </router-link>

      <input type="search" placeholder="Search" />

      <div class="icons">
        <!-- 🛒 CART ICON WITH BADGE -->
        <router-link to="/TheCs" class="nav-link cart-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="cart-icon"
          >
            <path
              d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.16 13h9.68c.55 0 1.04-.37 1.18-.91l2-7c.11-.39-.12-.79-.53-.79H5.21L4.27 2H1v2h2l3.6 7.59-1.35 2.44c-.14.25-.22.54-.22.84 0 1.104.896 2 2 2h12v-2H7.16z"
            />
          </svg>


         <!-- 🔴 BADGE -->
<span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>

        </router-link>

        <!-- 👤 USER ICON -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="cart-icon"
          @click="goToLogin"
        >
          <path
            d="M12 12c2.7 0 4.88-2.18 4.88-4.88S14.7 2.24 12 2.24 7.12 4.42 7.12 7.12 9.3 12 12 12zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"
          />
        </svg>
      </div>
    </nav>
  </header>
</template>

<script>
import logoImg from "@/assets/image5.png";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "Header",
  setup() {
    const logo = logoImg;
    const cartCount = ref(0);

    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cartCount.value = cart.length;
    };

    onMounted(() => {
      updateCartCount();
      window.addEventListener("cart-updated", updateCartCount);
    });

    // Cleanup باش ما يبقاش listener من بعد
    onUnmounted(() => {
      window.removeEventListener("cart-updated", updateCartCount);
    });

    const goToLogin = () => {
      // هنا تحط الرّووت ديال Login
      console.log("Go to login page");
    };

    return { logo, cartCount, goToLogin };
  },
};

</script>


<style>
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
    /* Wrapper ديال الأيقونة */
.cart-wrapper {
  position: relative;
  display: inline-block;
}

/* 🔴 BADGE صغيرة ومناسبة */
.cart-badge {
  position: absolute;
  top: -4px;
  right: -6px;
  background: #e53935;
  color: white;
  font-size: 9px;       /* تصغير الخط */
  font-weight: 600;
  border-radius: 50%;
  padding: 1px 4px;     /* تصغير الحجم */
  min-width: 8px;      /* قطر أصغر */
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
}

</style>