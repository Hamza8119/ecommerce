<template>
  <div class="confirmation-page">
    <div class="checkmark-wrapper">
      <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
        <path class="checkmark-check" fill="none" d="M14 27l7 7 16-16"/>
      </svg>
    </div>

    <h1 class="title">Commande Confirmée !</h1>

    <div class="summary">
      <h2>Détails de la commande :</h2>
      <p><strong>Total payé:</strong> ${{ total.toFixed(2) }}</p>
      <p v-if="method === '1'"><strong>Mode:</strong> Paiement à la livraison</p>
      <p v-if="method === '2'"><strong>Mode:</strong> Paiement par carte</p>
      <p><strong>Ville:</strong> {{ data.ville }}</p>
      <p><strong>Adresse:</strong> {{ data.adresse }}</p>
    </div>

    <button @click="goHome" class="btn-home">Retour à l'accueil</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const total = ref(0);
const method = ref(null);
const data = ref({});

onMounted(() => {
  total.value = parseFloat(localStorage.getItem('total')) || 0;
  method.value = localStorage.getItem('method') || null;
  data.value = JSON.parse(localStorage.getItem('confirmationData')) || {};
});

function goHome() {
  localStorage.removeItem('cart');
  localStorage.removeItem('subtotal');
  localStorage.removeItem('total');
  localStorage.removeItem('method');
  localStorage.removeItem('confirmationData');
  router.push('/');
}
</script>

<style scoped>
.confirmation-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  animation: fadeIn 0.8s ease forwards;
}

.checkmark-wrapper {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.checkmark {
  width: 100%;
  height: 100%;
  stroke: #4BB543;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  fill: none;
  animation: scaleIn 0.5s ease forwards;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 4;
  stroke-miterlimit: 10;
  stroke: #4BB543;
  fill: none;
  animation: drawCircle 0.6s ease forwards;
}

.checkmark-check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: drawCheck 0.4s 0.6s ease forwards;
}

.title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #0435e6;
  animation: fadeUp 0.6s 0.6s ease forwards;
}

.summary {
  margin: 20px 0;
  text-align: left;
  display: inline-block;
  background: #f0f8ff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  animation: fadeUp 0.6s 0.8s ease forwards;
}

.btn-home {
  margin-top: 30px;
  padding: 12px 25px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg,#0435e6,#0ba0ea);
  color: white;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-home:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(4,53,230,0.3);
}

/* Animations */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(10px);}
  100% { opacity: 1; transform: translateY(0);}
}

@keyframes scaleIn {
  0% { transform: scale(0);}
  100% { transform: scale(1);}
}

@keyframes drawCircle {
  0% { stroke-dashoffset: 166; }
  100% { stroke-dashoffset: 0; }
}

@keyframes drawCheck {
  0% { stroke-dashoffset: 48; }
  100% { stroke-dashoffset: 0; }
}
</style>
