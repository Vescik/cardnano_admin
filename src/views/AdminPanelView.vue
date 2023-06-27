<template>
    <div class="panel" >
        <AdminPanel />
    </div>
</template>

<script setup lang="ts">
import AdminPanel from '@/components/AdminPanel.vue';
</script>

<style scoped>
   .panel {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 2px solid #f96302;
    border-radius: 5px;
  }
</style>