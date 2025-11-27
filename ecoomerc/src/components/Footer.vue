<template>
  <footer>
    <!-- Top Section -->
    <div class="footer-top">
      <div class="footer-left">
        <router-link to="/" class="nav-link" active-class="active-link">
        Home
      </router-link>
      </div>
      <div class="footer-right">
         <!-- روابط التنقل -->
      <router-link to="/contactUs" class="nav-link" active-class="active-link">
        Contact us
      </router-link>
      <router-link to="/categories" class="nav-link" active-class="active-link">
        Categories
      </router-link>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="footer-bottom">
      <p>
        &copy; 2025 WebStore. All rights reserved.
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </p>

      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background: #000000ee;
  color: #fff;
  padding: 40px 20px;
  overflow: hidden;
}

.footer-top {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;
}

.footer-top:hover {
  transform: rotateY(3deg);
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer-left img {
  height: 50px;
}

.footer-left a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}

.footer-left a:hover {
  color: rgba(136, 14, 14, 0.5);
  text-shadow: 0 0 6px rgba(136, 14, 14, 0.5), 0 0 12px rgba(136, 14, 14, 0.5),
    0 0 18px rgba(136, 14, 14, 0.5);
}

.footer-right {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.footer-right a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}

.footer-right a:hover {
  color: #880e0e;
  text-shadow: 0 0 6px #880e0e, 0 0 12px #880e0e, 0 0 18px #880e0e;
}

.footer-bottom {
  max-width: 1200px;
  margin: 40px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;
}

.footer-bottom:hover {
  transform: rotateY(3deg);
}

.footer-bottom p {
  font-size: 14px;
  margin: 0;
}

.footer-bottom a {
  color: #fff;
  margin-left: 15px;
  text-decoration: underline;
  transition: all 0.3s ease-in-out;
}

.footer-bottom a:hover {
  color: #880e0e;
  text-shadow: 0 0 6px #880e0e, 0 0 12px #880e0e, 0 0 18px #880e0e;
}
</style>
