<template>
 <div justify="center" align="center" style="width: 100%">
    <h1>Аккуратней на дороге:)</h1>
   </div>
<v-card
    class="mx-auto my-12"
    color="#FFFEEE"
  >
    <template >
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="100%"
      src="public\park1.jpg"
    ></v-img>
    <v-card-title>Парковка у вокзала</v-card-title>
    <v-card-text>
      <v-row
        align ="center"
        class="mx-0"
      >
        
      </v-row>
      

     <div>  
        <p></p>  
    </div>
    </v-card-text>
   <v-card-actions>

      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="show1 = !show1"
      >
        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show1">

        <v-card
          color="#FFFEEE">
              <v-divider class="mx-4"></v-divider>
    <v-card-title>Часы работы</v-card-title>
    <v-card-text>Круглосуточно </v-card-text>
    <v-card-title>Стоимость</v-card-title>
    <v-card-text>100р - час </v-card-text>
    
   

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      > <a href="https://www.google.com/maps/dir//%D0%9F%D0%BB%D0%B0%D1%82%D0%BD%D0%B0%D1%8F+%D0%BF%D0%B0%D1%80%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0,+%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA,+%D0%A1%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+357700/@43.8992892,42.708599,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x40582b5fccc1a61d:0x110059a5d1971b9f!2m2!1d42.7215577!2d43.9007798"> Построить маршрут</a>
       
      </v-btn>
    </v-card-actions>
        </v-card>
      </div>
    </v-expand-transition>
  </v-card>

</template>

<script>
export default {
  name: 'Car',
  
  data: () => ({   
    show: false,
    show1: false,
    show2: false,

  })
}

</script>