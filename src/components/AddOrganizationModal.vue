<template>
    <div @click="modalStore.closeModal" class="backdrop"></div>
    <div class="modal_container" >
        <div class="modal-content">
    <h2>Dodaj produkt</h2>
    <form @submit.prevent="addToDatebase" id="organizationForm">
      <div class="form-group">
        <span @click="modalStore.closeModal" class="close">&times</span>
        <label for="orgName">Nazwa produtku</label>
        <input v-model="organization.name" type="text" id="orgName" name="orgName" required>
      </div>
      <div class="form-group">
        <label for="orgType">Rozmiar produktu</label>
        <select v-model="organization.size" id="orgType" name="orgType" required>
          <option value="">Wybierz rozmiar</option>
          <option value="Siłownia">Big</option>
          <option value="Basen">Medium</option>
          <option value="Inne">Small</option>
        </select>
      </div>
      <div class="form-group">
        <label for="orgAddress">Rodzaj produktu</label>
        <input v-model="organization.type" type="text" id="orgAddress" name="orgAddress" required>
      </div>
      <div class="form-group">
        <label for="orgAddress">Cena produktu</label>
        <input v-model="organization.price" type="number" id="orgAddress" name="orgAddress" required>
      </div>
      <div class="form-group">
        <label for="orgAddress">Zdjęcie produktu</label>
        <input v-model="organization.image" type="text" id="orgAddress" name="orgAddress" required>
      </div>
      <!-- Add more input fields as needed for additional organization information -->

      <div class="form-group">
        <button type="submit" >Stwórz profil</button>
      </div>
    </form>
  </div>
  
    </div>
</template>

<script setup lang="ts">
   import { useModalStore } from '@/stores/OrganizationStore';
   import { collection, addDoc } from "firebase/firestore"; 
   import {datebase} from '@/db/settings'
   import { ref,onMounted,defineProps } from 'vue';
    const modalStore = useModalStore();

    const props = defineProps({
        name: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: false
        },
        type: {
            type: String,
            required: false
        },
        size: {
            type: String,
            required: false
        },

    })

    
    const organization = ref({
        name: '',
        image: '',
        price: 0,
        type: '',
        size: '',
        // Add more fields as needed
    })
    const addToDatebase = async () => {
        const organizationsCollectionRef = collection(datebase, 'products');
        const newDocumentRef = await addDoc(organizationsCollectionRef, { ...organization.value });
        modalStore.closeModal()
    }
    
</script>

<style lang="scss" scoped>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }

  .modal_container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 2px solid #f96302;
    border-radius: 5px;
    padding: 20px;
    z-index: 10000;
  }

  .modal-content {
    max-width: 400px;
    margin: 0 auto;
  }

  .modal-content h2 {
    color: #f96302;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #f96302;
    font-size: 24px;
    cursor: pointer;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: #f96302;
    font-size: 16px;
  }

  input[type="text"],
  input[type="number"],
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #f96302;
    border-radius: 5px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
  }

  select {
    appearance: none;
    padding-right: 30px;
    background: url("https://image.flaticon.com/icons/svg/25/25255.svg") no-repeat center right;
  }

  button[type="submit"] {
    background-color: #f96302;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-family: Arial, sans-serif;
    font-size: 16px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #e85600;
  }
</style>