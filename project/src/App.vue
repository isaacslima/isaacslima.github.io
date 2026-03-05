<template>
  <v-main>
    <v-container>
    <v-card color="blue-grey-darken-3" outlined>

      <v-list-item three-line>
        <div>
          <div class="text-overline mb-4">Hi, I'm Isaac.</div>
          <div class="text-overline mb-4">I'm a software engineer</div>
          <v-list-item-title class="text-h5 mb-1">This is my Portifolio's page.</v-list-item-title>
        </div>

        <template #append>
          <v-avatar tile size="80" class="my-avatar">
            <img src="./assets/isaac.jpeg" alt="Isaac" style="max-height:100px;max-width:50px">
          </v-avatar>
        </template>
      </v-list-item>
    </v-card>
    </v-container>
    <router-view></router-view>
  </v-main>
</template>

<script>

</script>

<style>
.my-avatar {
    border-radius: 10px;
}
</style>
