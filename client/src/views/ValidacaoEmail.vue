<template>
	<div class="testeManeiro">
    <h1>Teste</h1>
    <v-text-field v-model="email"></v-text-field>
    <v-btn @click="validacaoEmailTeste">Vai</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { validacaoEmail } from '../service/api/validacoes'

@Component
export default class ValidacaoEmail extends Vue {
  email:String = "";
  validacaoEmailTeste(){
    validacaoEmail(this.email).then((teste)=>{
      console.log(teste.data);
      if(teste.data) alert("Já existe")
      else alert("Não existe")
    })
  }
}
</script>

<style>
  .testeManeiro {
    padding : 100px
  }
</style>