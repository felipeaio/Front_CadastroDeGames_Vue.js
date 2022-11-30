<template>
    <div>
        <h1>Cadastrar Game</h1>
        <a>Nome:</a><br>
        <input type="text" name="name" id="name" v-model="games.nome"><br><br>
        <a>Empresa:</a><br>
        <input type="text" name="name" id="name" v-model="games.empresa"><br><br>
        <button @click="save()">Salvar</button>
    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import axios from "axios";
import env from "/env.json"


    const apiURL = env.apiURL

    const games = reactive({
        nome: "",
        empresa: ""
    })

    const save = () => {
        axios.post(apiURL + "/games", games)
        .then((response) => {
            if(response.status === 200){
                games.nome = ""
                games.empresa = ""
                alert("Dados Cadastrados com sucesso!")                
            }
        }).catch( (error) => {
            alert("Erro: " + error.response.status)
        } )
    }

</script>

<style lang="scss" scoped>

</style>