<template>
  <v-content>
    <v-container>
    <v-card color="blue-grey darken-3" outlined>

      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Hi, I'm Isaac.</div>
          <div class="overline mb-4">I'm a software enginner</div>
          <v-list-item-title class="headline mb-1">This is my Portifolio's page.</v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          class="my-avatar"
        >
        <img src="./assets/isaac.jpeg" max-height="100px" max-width="50px">
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
    </v-container>
    <router-view></router-view>
  </v-content>  
</template>

<script>

</script>

<style>

</style>