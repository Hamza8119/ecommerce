<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <h1>Contact us</h1>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <!-- Left Info -->
      <div class="contact-info">
        <h2>Contact</h2>
        <p>hi@green.com</p>

        <div class="based-in">
          <h3>Based in</h3>
          <p>MOROCCO, AGADIR<br>HAY SALAM</p>
        </div>

        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-row">
            <input type="text" placeholder="First Name*" v-model="firstName" required>
            <input type="text" placeholder="Last Name*" v-model="lastName" required>
          </div>
          <input type="email" placeholder="Email*" v-model="email" required>
          <input type="tel" placeholder="Phone Number*" v-model="phone" required>
          <textarea placeholder="Your message..." v-model="message" required></textarea>
          <button type="submit" class="send-btn">Send Message</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      console.log({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        message: this.message
      });
      alert("Form submitted!");
      // Reset form
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.phone = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  /* استخدم import عبر url مع @/assets/ بدون النقطة */
  background-image: url('@/assets/image12.png');
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/image13.png') no-repeat center;
  background-size: cover;
  pointer-events: none;
}

.hero h1 {
  font-size: 50px;
  color: #000000;
  opacity: 0.5;
  max-width: 600px;
  margin: 0;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  z-index: 1; 
}

/* Contact Section */
.contact-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 60px 10%;
  gap: 50px;
  min-height: 100vh;

  /* صورتين في الخلفية */
  background: 
    url('@/assets/image14.png') no-repeat left center,
    url('@/assets/image15.png') no-repeat right center;
    
  background-size: 200% auto, 60% auto; /* حجم الصور */
}

    .contact-info {
      max-width: 350px;
      
      padding: 25px;
      border-radius: 10px;
    }
    .contact-info h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .contact-info p {
      margin-bottom: 20px;
      font-size: 16px;
    }
    .based-in {
      
      padding: 15px;
      margin-bottom: 30px;
    }
    .based-in h3 {
      font-weight: bold;
      margin-bottom: 10px;
    }
    .social-icons {
      display: flex;
      gap: 20px;
    }
    .social-icons a {
      font-size: 25px;
      color: black;
      text-decoration: none;
    }
    /* Form */
    .contact-form {
      flex: 1;
    
      padding: 25px;
      border-radius: 10px;
    }
    .form-row {
      display: flex;
      gap: 15px;
      margin-bottom: 15px;
    }
    .contact-form input,
    .contact-form textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 14px;
        margin-bottom: 15px; /* هذه المسافة تفصل كل حقل عن الآخر */
    }
    .contact-form input:focus,
    .contact-form textarea:focus {
      outline: none;
      border: 2px solid #880e0e;

    }
    .contact-form textarea {
      resize: none;
      height: 120px;
    }
    .send-btn {
      display: block;
      width: 100%;
      padding: 14px;
      border: none;
      border-radius: 25px;
      background: black;
      color: white;
      font-size: 16px;
      cursor: pointer;
      margin-top: 10px;
      transition: 0.3s;
    }
    .send-btn:hover {
      background: #333;
    }
</style>