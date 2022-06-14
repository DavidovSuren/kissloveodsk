<template>
  <v-bottom-navigation app>
    <v-btn :to="{path: '/eat'}">
      <v-icon style="font-size: 35px">mdi-food</v-icon>
      Еда
    </v-btn>
    <v-btn :to="{path: '/car'}">
      <v-icon style="font-size: 35px">mdi-parking</v-icon>
      Парковка
    </v-btn>
    <v-btn :to="{path: '/qr'}">
      <v-icon class="text-h3">mdi-qrcode-scan</v-icon>
    </v-btn>
    <v-btn
      :to="{path: '/tx'}">
      <v-icon style="font-size: 35px">mdi-bed</v-icon>
      Ночлег
    </v-btn>
    <v-btn :to="{path: '/walk'}">
      <v-icon style="font-size: 35px">mdi-human-scooter</v-icon>
      Досуг
    </v-btn>
  </v-bottom-navigation>
</template>

<script>

export default {
  name: 'Bottom',

  data: () => ({
    
  }),
  computed : {
  },
  
}
</script>