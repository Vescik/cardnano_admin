import { defineStore } from "pinia";
import { ref } from "vue";



export const useModalStore = defineStore("useModalStore", () => {
    const showModal = ref(false);;

    const openModal = () => {
        showModal.value = true; 
    };
    
    const closeModal = () => {
        showModal.value = false;
    };
    
    return { showModal, openModal, closeModal };
    }
);

