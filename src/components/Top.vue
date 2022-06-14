<template >
  <v-app-bar absolute
      dark
      hide-on-scroll
      prominent
      scroll-target="#scrolling-techniques - 6"
       class="overflow-y-auto"
    >
    <v-btn :to="{path: '/account'}" icon>
      <v-icon style="font-size: 30px">mdi-account-circle</v-icon>
    </v-btn>
 
    <v-spacer></v-spacer>
     <v-btn :to="{path: '/'}"   style="background-color: #F7DF88">
    <span class="title"  >КИСЛОВОДСК</span> </v-btn>
    <v-spacer></v-spacer>
    <v-btn :to="{path: '/help'}" icon>
      <v-icon style="font-size: 30px" >mdi-help-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>

export default {
  name: 'Top',

  data: () => ({}),
}
</script>