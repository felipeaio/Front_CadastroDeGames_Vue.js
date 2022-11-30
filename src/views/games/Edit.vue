<template>
    <div>
        <h1>Editar Games</h1>
        <a>Nome:</a><br>
        <input type="text" name="nome" id="nome" v-model="games.nome"><br><br>
        <a>Empresa:</a><br>
        <input type="text" name="empresa" id="empresa" v-model="games.empresa">
        <br><br>
        <button @click="update">Salvar</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import env from "/env.json"
import { useRoute } from "vue-router";
import axios from "axios";

const apiURL = env.apiURL

const route = useRoute()

const games = ref({ id: null, name : "" })

const load = () => {
    let id = route.params.id
    axios.get(apiURL + "/games/" + id)
    .then((response) => {
        games.value.id = response.data.id;
        games.value.nome = response.data.nome;
        games.value.empresa = response.data.empresa;
    }).catch((error) => {
        alert("Erro: " + error.response.status)
    })
}

const update = () => {
    axios.put(apiURL + "/games", games.value)
    .then((response) => {
        if(response.data != ""){
            alert("Dados atualizados com sucesso!")
            load()
        }
    }).catch((error) => {
        alert("Erro: " + error.response.status)
    })
}

onMounted(() => {
    load();
})

</script>

<style lang="scss" scoped>

</style>