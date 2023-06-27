<template>
    <div v-if="modalStore.showModal">
    <AddOrganizationModal />
    </div>
    <div class="panel_container">
        <nav class="panel_nav">
            <h2>Organizacje</h2>
            <button @click="modalStore.openModal()" class="panel_button">Dodaj Organizacje</button>
        </nav>
    <div class="orgainzations">
        <table class="table">
      <thead>
        <tr>
          <th>Zdjęcie produktu</th>
          <th>Nazwa produktu</th>
          <th>Typ produktu </th>
          <th>Wielkość produtku</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="organization in organizations" :key="organization.id">
          <td><img class="product-img" :src="organization.image" alt="prduct image"></td>
          <td>{{ organization.name }}</td>
          <td>{{ organization.type }}</td>
          <td>{{ organization.size }}</td>
          <td>{{ organization.price }}</td>
          <td><button @click="delteDocument('products',organization.id)" >Edit product</button></td>
          <td><button @click="delteDocument('products',organization.id)" >Delete product</button></td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>
</template>

<script setup lang="ts">
import MainMenu from './MainMenu.vue';
import { RouterView } from 'vue-router';
import { collection, addDoc,getDocs,doc,deleteDoc } from "firebase/firestore";
import {datebase} from '@/db/settings'
import { ref,onMounted } from 'vue';
import {useModalStore} from '../stores/OrganizationStore';
import AddOrganizationModal from './AddOrganizationModal.vue';

const modalStore = useModalStore();
const organizations = ref([]);
onMounted(async () => {
        const organizationsCollectionRef = collection(datebase, 'products');
        const organizationsSnapshot = await getDocs(organizationsCollectionRef);
        organizations.value = organizationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(organizations.value);
        console.log(organizations.value);
        
    })
    const delteDocument = async (collectionName:string, docID:string) =>{
      try{
        const documentRef = doc(datebase, collectionName, docID);
        await deleteDoc(documentRef);
      }catch(e){
        console.log(e);
      }
    }


</script>

<style lang="scss"  scoped>
.panel_container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 2px solid #f96302;
    border-radius: 5px;
  }

  .panel_nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .panel_nav h2 {
    color: #f96302;
    font-size: 24px;
  }

  .panel_button {
    background-color: #f96302;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-family: Arial, sans-serif;
    font-size: 16px;
    cursor: pointer;
  }

  .panel_button:hover {
    background-color: #e85600;
  }

  .organizations {
    margin-top: 20px;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
  }

  .table th,
  .table td {
    border: 1px solid #f96302;
    padding: 10px;
    text-align: center;
  }

  .table th {
    background-color: #f8f8f8;
    color: #f96302;
    font-weight: bold;
  }

  .product-img {
    width: 80px;
    height: 80px;
  }
</style>