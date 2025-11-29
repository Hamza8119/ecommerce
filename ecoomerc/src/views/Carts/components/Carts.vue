<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
const cartItems = ref([]);
const promo = ref("");
const discount = ref(0);
const subtotal = ref(0);
const total = ref(0);

// Load Cart Items from LocalStorage
const loadCart = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.value = storedCart;
  calculateTotal();
};

// Apply Promo Code
const applyPromo = () => {
  calculateTotal();
  if (promo.value.toLowerCase() === "hamza10") {
    discount.value = subtotal.value * 0.1;
  } else {
    discount.value = 0;
    alert("Invalid promo code!");
  }
  total.value = subtotal.value - discount.value;

  // تخزين الخصم و total في localStorage
  localStorage.setItem("discount", discount.value);
  localStorage.setItem("total", total.value);
};




// Calculate Total Price
const calculateTotal = () => {
  subtotal.value = cartItems.value.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0; // تأكد من أن السعر رقم
    const quantity = parseInt(item.quantity) || 1; // تأكد من أن الكمية رقم
    return sum + price * quantity;
  }, 0);

  total.value = subtotal.value - discount.value;
};



// Remove item
const updateQuantity = (index, action) => {
  const item = cartItems.value[index];
  if (action === "inc") item.quantity++;
  if (action === "dec" && item.quantity > 1) item.quantity--;
  localStorage.setItem("cart", JSON.stringify(cartItems.value));
  calculateTotal();
};

const removeItem = (index) => {
  cartItems.value.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems.value));
  calculateTotal();
};



// Checkout → Paiement
const goToPaiement = () => {
  if (cartItems.value.length === 0) {
    alert("Votre panier est vide !");
    return;
  }
// بعد حساب total
localStorage.setItem("subtotal", subtotal.value);
localStorage.setItem("discount", discount.value);
localStorage.setItem("total", total.value);

  router.push("/pai"); // تأكد أن هاد route موجود
};
onMounted(() => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  cartItems.value = storedCart.map(item => ({
    ...item,
    price: parseFloat(item.price) || 0,
    quantity: parseInt(item.quantity) || 1
  }));

  subtotal.value = parseFloat(localStorage.getItem("subtotal")) || 0;
  discount.value = parseFloat(localStorage.getItem("discount")) || 0;
  total.value = parseFloat(localStorage.getItem("total")) || 0;

  calculateTotal();
});


</script>

<template>
  <div class="container">
    <!-- Cart Items -->
    <div class="cart-items">
      <h1>Your cart</h1>

      <div v-if="cartItems.length === 0" class="empty">
        Your cart is empty 
      </div>

      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <img :src="item.image" class="item-img" />
        <div class="details">
          <h2>{{ item.title }}</h2>
          <p class="price">${{ item.price }}</p>

          <div class="quantity">
            <button @click="updateQuantity(index, 'dec')">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(index, 'inc')">+</button>
          </div>

          <button class="remove" @click="removeItem(index)">
            Remove
          </button>
        </div>
      </div>
    </div>

    <!-- Checkout Section -->
    <div class="checkout">
      <input
        type="text"
        v-model="promo"
        placeholder="Promocode"
      />
      <button class="apply" @click="applyPromo()">Apply</button>

      <div class="summary">
        <p>Subtotal: <span>${{ subtotal.toFixed(2) }}</span></p>
        <p>Discount: <span>- ${{ discount.toFixed(2) }}</span></p>
        <p class="total">Total: <span>${{ total.toFixed(2) }}</span></p>
      </div>

      <button class="checkout-btn" @click="goToPaiement">Checkout →</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 30px;
}
.cart-items {
  width: 65%;
}
.cart-item {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 10px;
}
.item-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
}
.details h2 {
  margin: 0 0 10px;
}
.price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.quantity button {
  width: 28px;
  height: 28px;
}
.remove {
  margin-top: 10px;
  color: red;
  cursor: pointer;
  background: none;
  border: none;
}
.checkout {
  width: 30%;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
}
.summary {
  margin-top: 20px;
}
.summary p {
  display: flex;
  justify-content: space-between;
}
.total {
  font-size: 20px;
  font-weight: bold;
  border-top: 1px solid #eee;
  margin-top: 10px;
  padding-top: 10px;
}
.checkout-btn {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
}
.empty {
  padding: 20px;
  font-size: 18px;
}
</style>
