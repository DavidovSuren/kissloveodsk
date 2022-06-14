<template>
 <div justify="center" align="center" style="width: 100%">
<h1>Кисловодск!</h1>
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
      src="public\hostel1.jpg"
    ></v-img>
    <v-card-title>Outdoor</v-card-title>
    <v-card-text>
      <v-row
        align ="center"
        class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="15  "
        ></v-rating>
        <div class="grey--text ms-4">
          5 
        </div>
      </v-row>
      <div class="my-5 text-subtitle-1">
      Хостел
      </div>

      <div>  <p>Адрес: Курортный Бульвар, 10,</p>  </div>
    </v-card-text>
   <v-card-actions>

      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        
        <v-card
          color="#FFFEEE">
              <v-divider class="mx-4"></v-divider>
    <v-card-title>Часы работы</v-card-title>
    <v-card-text>
     текст
    </v-card-text>
    <v-card-title>Стоимость</v-card-title>
    <v-card-text>
     текст
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      ><a href="https://www.google.com/maps/dir//Hostel+Outdoor,+%D0%9A%D1%83%D1%80%D0%BE%D1%80%D1%82%D0%BD%D1%8B%D0%B9+%D0%B1-%D1%80,+10,+%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA,+%D0%A1%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+357700/@43.9036118,42.6939405,13.56z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40582b0d48466239:0xe0ccaf9f8c47353!2m2!1d42.716277!2d43.900556!3e0">Построить маршрут</a>
        
      </v-btn>
    </v-card-actions>
        </v-card>
      </div>
    </v-expand-transition>
  </v-card>









</template>


<script>
export default {
  name: 'Tx',
  
  data: () => ({   
    show: false,
    

  })
}
</script>