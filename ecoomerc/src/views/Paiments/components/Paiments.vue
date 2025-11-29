<template>
  <div class="main">
    <!-- صورة على اليسار -->
    <img src="@/assets/Subtract.png" alt="صورة" class="side-image left-image" />
    <img src="@/assets/pay.png" alt="Paiement" class="side-image" />


    <div class="container">
      <h1>Veuillez choisir un mode de paiement :</h1>

      <!-- خيارات الدفع -->
      <div class="options">
        <button
          :class="['option-btn', selectedMethod === 1 ? 'active' : '']"
          @click="selectMethod(1)"
        >
          <!-- أيقونة livraison -->
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30" height="30">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h1l1 9h14l1-9h1M5 6h14v4H5V6z"/>
          </svg>
          <p>Paiement à la livraison</p>
        </button>

        <button
          :class="['option-btn', selectedMethod === 2 ? 'active' : '']"
          @click="selectMethod(2)"
        >
          <!-- أيقونة carte -->
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30" height="30">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke-width="2" stroke="currentColor" fill="none"/>
            <line x1="1" y1="10" x2="23" y2="10" stroke-width="2" stroke="currentColor"/>
          </svg>
          <p>Paiement par carte</p>
        </button>
      </div>

      <!-- الفورم -->
      <div class="form-container">
        <div v-if="selectedMethod === 1">
          <div class="form-group">
            <label for="ville">Ville :</label>
            <select v-model="livraison.ville" class="form-input" id="ville">
              <option value="casablanca">Casablanca</option>
              <option value="rabat">Rabat</option>
              <option value="marrakech">Marrakech</option>
              <option value="tanger">Tanger</option>
              <option value="agadir">Agadir</option>
            </select>

            <label for="adresse">Adresse :</label>
            <input v-model="livraison.adresse" class="form-input" type="text" placeholder="Votre adresse" />

            <label for="postal">Code postal :</label>
            <input v-model="livraison.postal" class="form-input" type="text" placeholder="Code postal" />

            <label for="phone">Téléphone :</label>
            <input v-model="livraison.phone" class="form-input" type="text" maxlength="10" placeholder="Votre numéro" />
          </div>

          <button class="btn-pay" @click="confirmerLivraison">Confirmer la commande</button>
        </div>

        <div v-if="selectedMethod === 2">
          <div class="form-group">
            <label for="cardNumber">Numéro de carte :</label>
            <input
              v-model="carte.cardNumber"
              type="text"
              maxlength="19"
              class="form-input"
              placeholder="0000 0000 0000 0000"
              @input="formatCardNumber"
            />
          </div>

          <div class="form-inline">
            <div class="form-group" style="flex:1;">
              <label for="expiryDate">Date d'expiration :</label>
              <input
                v-model="carte.expiryDate"
                type="text"
                maxlength="5"
                class="form-input"
                placeholder="MM/AA"
                @input="formatExpiryDate"
              />
            </div>

            <div class="form-group" style="flex:1;">
              <label for="cvv">CVV :</label>
              <input
                v-model="carte.cvv"
                type="text"
                maxlength="3"
                class="form-input"
                placeholder="123"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="ville">Ville :</label>
            <select v-model="carte.ville" class="form-input">
              <option value="casablanca">Casablanca</option>
              <option value="rabat">Rabat</option>
              <option value="marrakech">Marrakech</option>
              <option value="tanger">Tanger</option>
              <option value="agadir">Agadir</option>
            </select>

            <label for="adresse">Adresse :</label>
            <input v-model="carte.adresse" class="form-input" type="text" placeholder="Votre adresse" />

            <label for="postal">Code postal :</label>
            <input v-model="carte.postal" class="form-input" type="text" placeholder="Code postal" />

            <label for="phone">Téléphone :</label>
            <input v-model="carte.phone" class="form-input" type="text" maxlength="10" placeholder="Votre numéro" />
          </div>

          <button class="btn-pay" @click="confirmerCarte">Payer</button>
        </div>
      </div>
    </div>

    <!-- صورة على اليمين -->
    <img src="@/assets/Subtract (1).png" alt="صورة يمين" class="side-image right-image" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedMethod = ref(null)

// Cart info
const cartItems = ref([])
const subtotal = ref(0)
const total = ref(0)

// Livraison info
const livraison = ref({
  ville: '',
  adresse: '',
  postal: '',
  phone: ''
})

// Carte info
const carte = ref({
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  ville: '',
  adresse: '',
  postal: '',
  phone: ''
})

// Load cart info from localStorage
onMounted(() => {
  cartItems.value = JSON.parse(localStorage.getItem('cart')) || []
  subtotal.value = parseFloat(localStorage.getItem('subtotal')) || 0
  total.value = parseFloat(localStorage.getItem('total')) || 0
})

function selectMethod(method) {
  selectedMethod.value = method
  if(method === 1) {
    livraison.value = { ville: '', adresse: '', postal: '', phone: '' }
  } else {
    carte.value = { cardNumber: '', expiryDate: '', cvv: '', ville: '', adresse: '', postal: '', phone: '' }
  }
}

function formatCardNumber() {
  carte.value.cardNumber = carte.value.cardNumber.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()
}

function formatExpiryDate() {
  carte.value.expiryDate = carte.value.expiryDate.replace(/\D/g, '').replace(/(.{2})/, '$1/').trim()
}

function verifierLivraison(data) {
  if (!data.adresse || !data.postal || !data.phone || !data.ville) {
    alert('Veuillez remplir tous les champs')
    return false
  }
  if (data.phone.length !== 10) {
    alert('Numéro de téléphone invalide')
    return false
  }
  return true
}

function verifierCarte(data) {
  if (!data.cardNumber || !data.expiryDate || !data.cvv || !data.adresse || !data.postal || !data.phone || !data.ville) {
    alert('Veuillez remplir tous les champs')
    return false
  }
  if (data.cardNumber.replace(/\s/g, '').length !== 16) {
    alert('Numéro de carte invalide')
    return false
  }
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(data.expiryDate)) {
    alert('Date d\'expiration invalide')
    return false
  }
  if (data.cvv.length !== 3) {
    alert('CVV invalide')
    return false
  }
  if (data.phone.length !== 10) {
    alert('Numéro de téléphone invalide')
    return false
  }
  return true
}

// Confirm Livraison
// Confirm Livraison
function confirmerLivraison() {
  if (verifierLivraison(livraison.value)) {
    // حفظ المعلومات فال localStorage باش الصفحة الجديدة تقدر تعرضها
    localStorage.setItem('method', 1); // 1 = livraison
    localStorage.setItem('confirmationData', JSON.stringify(livraison.value));
    localStorage.setItem('total', total.value);
    
    // تحويل المستخدم لصفحة Confirmation
    router.push('/confirmation');
  }
}

// Confirm Carte
function confirmerCarte() {
  if (verifierCarte(carte.value)) {
    // حفظ المعلومات فال localStorage باش الصفحة الجديدة تقدر تعرضها
    localStorage.setItem('method', 2); // 2 = carte
    localStorage.setItem('confirmationData', JSON.stringify(carte.value));
    localStorage.setItem('total', total.value);

    // تحويل المستخدم لصفحة Confirmation
    router.push('/confirmation');
  }
}

</script>


<style scoped>
  /* صفحة كاملة */
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
}

/* Wrapper للصفحة كامل */
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* باش يغطي كامل الصفحة */
}

/* Main content */
.main {
  display: flex;
  flex-direction: row;
  justify-content: center; /* مركز المحتوى أفقياً */
  align-items: flex-start; /* يبدا من الفوق */
  gap: 20px;
  flex: 1; /* ياخذ المساحة الباقية */
  padding: 20px;
}

/* Container */
.container {
  padding: 20px;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* Footer */
.footer {
  height: 80px;
  background-color: #0435e6;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}


    .options {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
    }

    .option-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 10px;
      cursor: pointer;
      background: #fafafa;
      transition: all 0.3s ease;
      box-shadow: rgba(4, 53, 230, 0.25) 0px 2px 4px, 
            rgba(4, 53, 230, 0.20) 0px 4px 8px, 
            rgba(4, 53, 230, 0.15) 0px 8px 16px;

    }

    .option-btn:hover {
        box-shadow: rgb(0, 0, 0) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      background: #0435e69f;
        border-Color : #333030;
    }

    .shado {
      padding: 15px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      gap: 10px;
    }

    .form-inline {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }

    .form-label {
      margin-bottom: 5px;
      font-weight: bold;
      font-size: 14px;
    }

    .form-input {
      padding: 12px 15px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 10px;
      outline: none;
      flex: 1;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
    }

    .form-input:focus {
      border-color: #007bff;
      box-shadow: 0 2px 8px rgba(0,123,255,0.2);
    }

    .btn-pay {
      margin-top: 20px;
      padding: 12px 15px;
      font-size: 16px;
      color: #fff;
      background-color:#0435e69f;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      transition: background-color 0.3s ease;
      width: 100%;
    }

    .btn-pay:hover {
      background-color: #0ba0eada;
    }
    .side-image {
  max-width: 400px;
  height: auto;
  
}
.side-image {
  max-width: 300px;
  height: 444px;
}

.left-image {
  order: 1; /* يسار */
}

.content {
  order: 2; /* وسط */
  text-align: center;
  max-width: 500px;
}

.right-image {
  order: 3; /* يمين */
}

</style>
