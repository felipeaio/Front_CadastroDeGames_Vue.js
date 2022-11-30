<template>
  <div>
    <h1>Games Cadastradas</h1>
    <hr />
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Empresa</th>
        <th>Editar</th>
        <th>Excluir?</th>
      </tr>
      <tr v-for="p in games" v-bind:key="p.id">
        <td>{{ p.id }}</td>
        <td>{{ p.nome }}</td>
        <td>{{ p.empresa }}</td>
        <td>
          <router-link :to="{ name: 'pro-edit', params: { id: p.id } }">Editar</router-link>
        </td>
        <td><button @click="destroy(p.id)">Excluir</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import env from "/env.json";
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";

const apiURL = env.apiURL;

const games = ref([]);

const findAll = () => {
  axios
    .get(apiURL + "/games")
    .then((response) => {
      games.value = response.data;
    })
    .catch((error) => {
      alert("Erro: " + error.response.status);
    });
};

const destroy = (id) => {
  if (confirm("Deseja excluir o game selecionada?")) {
    axios
      .delete(apiURL + "/games/" + id)
      .then((response) => {
        if (response.status === 200 && response.data == "") {
          alert("Dados Excluídos com sucesso!");
          findAll();
        }
      })
      .catch((error) => {
        alert("Erro: " + error.response.status);
      });
  }
};

onMounted(() => {
  //console.log("URL: " + url)
  findAll();
  console.log("data: " + games.value);
});
</script>

<style lang="scss" scoped></style>
