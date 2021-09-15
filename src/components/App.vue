<template>
  <div id="app" style="font-family: 'Roboto Mono', monospace; !important">

    <nav>
      <div class="nav-wrapper blue darken-1" style="background-color:#d4afb9 !important;">
        <a href="#" class="brand-logo center">Pessoas Cadastradas</a>
      </div>
    </nav>

    <div class="container">
      <p>{{pessoa.dateCreated}}</p>
      <form @submit.prevent="salvar">
        
          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="pessoa.name">
          <label>Numero</label>
          <input type="text" placeholder="Numero" v-model="pessoa.phoneNumber">
          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left"></i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>NUMERO</th>
            <th>DATA DE REGISTRO</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="pessoa of pessoas" :key="pessoa.id">

            <td>{{pessoa.name}}</td>
            <td>{{pessoa.phoneNumber}}</td>
            <td>{{pessoa.dateCreated}}</td>
            <td>
              <button @click="editar(pessoa)" class="waves-effect btn-small blue darken-1"><i class="material-icons">Alterar</i></button>
              <button @click="remover(pessoa)" class="waves-effect btn-small red darken-1"><i class="material-icons">deletar</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>


    var moment = require('moment'); // require
    let now = new Date();
    var dateString = moment(now). format('YYYY-MM-DDTHH:mm:ss');

import Pessoa from '../services/pessoas'



export default{

  data(){
    return {
      pessoa: {
        id: undefined,
        name: '',
        phoneNumber: '',
        dob: '2021-09-14T00:00:00',
        dateCreated: dateString
      },
      pessoas: []
    }
  },

  mounted(){
    this.listar()
  },

  methods:{

    listar(){
      Pessoa.listar().then((resposta) => {
      this.pessoas = resposta.data
      })
    },

    salvar(){
      if(this.pessoa.id == undefined){
        Pessoa.salvar(this.pessoa).then((resposta) => {
          console.log(resposta)
          this.pessoa = {}
          alert("Salvo com sucesso")
          this.listar()
      })
      }
      else{
        Pessoa.atualizar(this.pessoa).then((resposta) => {
          console.log(resposta)
          this.pessoa = {}
          alert("Atualizado com sucesso")
          this.listar()})
      }
      
    },
      
   

    editar(pessoa){
      this.pessoa = pessoa
    },

    remover(pessoa){

      if(confirm('Deseja excluir o produto?')){ 
        Pessoa.apagar(pessoa).then(resposta => {
          console.log(resposta);
          this.listar();})
      }


      
    }


    
  }


}

</script>

<style>

</style>
