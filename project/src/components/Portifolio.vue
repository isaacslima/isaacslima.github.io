<template>
  <v-container>
    <v-row>
  <v-col class="col-xs-12 col-md-3">
   <v-card class="mx-auto my-12" max-width="374">
    <v-img
      responsive
      src="../assets/unesul.jpg"
    ></v-img>

    <v-card-title>Controle de estágio</v-card-title>

    <v-card-text>
      

      <div class="my-4 subtitle-1">
         Projeto para cadastro e gerenciamento do núcleo de estágio da faculdade.
      </div>

      <div></div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple"
        @click="reserve"
      >
        Ver mais info
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  <v-col class="col-xs-12 col-md-3">    
  <v-card class="mx-auto my-12" max-width="374" >
    <v-img
      responsive
      src="../assets/espaco-materno.png"
    ></v-img>

    <v-card-title>Espaço materno</v-card-title>

    <v-card-text>
      

      <div class="my-4 subtitle-1">
         Projeto para cadastro e gerenciamento dos clientes, entradas e saídas.
      </div>

      <div></div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple"
        @click="reserve"
      >
        Ver mais info
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</v-row>
  </v-container>
</template>

<script>

</script>

<style>
.my-avatar {
    border-radius: 10px;

}
</style>

