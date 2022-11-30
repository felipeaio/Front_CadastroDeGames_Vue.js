<script setup>
import Home from '@/views/Home.vue';
</script>

<template>
  <div>
    <h1>Front-End App</h1>
    <ul>
      <li> <router-link to="/">Início</router-link> </li>
      <li> Games
        <ul>
          <li> <router-link to="/games">Listar Games</router-link> </li>
          <li> <router-link to="/games/create">Cadastrar</router-link> </li>
        </ul>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<style scoped>

</style>
