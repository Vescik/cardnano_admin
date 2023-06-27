<template>
    <div class="menu_container">
        <div class="menu_logo">
            <img src="" alt="logo">
            <p>Panel Administratora</p>
        </div>
        <div class="menu_links">
            <router-link to="/admin-panel/organistions">Orgaznizacje</router-link>

    </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .menu_container {
    background-color: #f96302;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu_logo {
    display: flex;
    align-items: center;
    color: #fff;
  }

  .menu_logo img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  .menu_links {
    display: flex;
    align-items: center;
  }

  .menu_links router-link {
    margin-right: 20px;
    color: #fff;
    text-decoration: none;
    font-family: Arial, sans-serif;
    font-size: 16px;
  }

  .menu_links router-link:hover {
    color: #000;
  }
</style>