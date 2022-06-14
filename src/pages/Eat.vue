<template> 
    <div justify="center" align="center" style="width: 100%">
    <h1>Где бы покушть?...</h1>
   </div> 

  
<v-card
    class="mx-auto my-12"
    color="#FFFEEE"
  >

    <v-img
      height="100%"
      src="\public\sun.jpeg"
    ></v-img>
    <v-card-title >Кафе "СОЛНЦЕ"</v-card-title>
    
    <v-card-text>
      <v-spacer></v-spacer>  <v-row
        align ="center"
        class="mx-0"
      >
        <v-rating
          :value= "4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="grey--text ms-4">
          5
        </div>
      </v-row>
      
      <div class="my-5 text-subtitle-1">
        Европейская, Фьюжн, Кавказская
      </div>
 
      <div>  <p></p>  </div>
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
    
  
   <v-card-text>	09:00–23:00</v-card-text>
    <v-card-title>Адрес</v-card-title>
    <v-card-text>
     Пр. Победы 19
</v-card-text>
    <v-card-actions>
      <v-btn
        
        text
        @click="reserve"
      >
       <a href="https://www.google.com/maps/dir//%D0%A1%D0%BE%D0%BB%D0%BD%D1%86%D0%B5+%D0%9A%D0%B0%D1%84%D0%B5,+%D0%BF%D1%80.+%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B,+19,+%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA,+%D0%A1%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+357700/@43.9111151,42.7099625,14.26z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40582b2c592c04db:0x37029abf1bd918bd!2m2!1d42.7172815!2d43.9099842!3e2">Построить маршрут</a> 
      </v-btn>
    </v-card-actions>
        </v-card>
      </div>
    </v-expand-transition>
  </v-card>






<v-card
    :loading="loading"
    class="mx-auto my-12"
    color="#FFFEEE" 
  >

    <v-img
      height="100%"
      src="public\kombinat.jpg"
    ></v-img>
    <v-card-title>Ресторан "Комбинат"</v-card-title>
    <v-card-text>
      <v-row
        align ="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4
        </div>
      </v-row>
      <div class="my-4 text-subtitle-1">
        Европейская, Восточноевропейская, Кавказская
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
    <v-card-text>
     10:00–00:00
    </v-card-text>
    <v-card-title>Адрес</v-card-title>
    <v-card-text>
    Первомайский пр., 23
</v-card-text>
    <v-card-actions>
      <v-btn
        color="green "
        text
        @click="reserve"
      > <a href="https://www.google.com/maps/dir//%D0%9A%D0%BE%D0%BC%D0%B1%D0%B8%D0%BD%D0%B0%D1%82,+%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%BC%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82,+%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA/@43.9058706,42.7002209,14.08z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40582b9261df2659:0xd899bf2254a59ac3!2m2!1d42.7147303!2d43.9038994!3e2">Построить маршрут</a>
        
      </v-btn>
    </v-card-actions>
        </v-card>
      </div>
    </v-expand-transition>
  </v-card>





  <v-card
    :loading="loading"
    class="mx-auto my-12"
    color="#FFFEEE"
  >
   
    <v-img
      height="100%"
      src="public\rim i ris.jpg"
    ></v-img>
    <v-card-title>Ресторан "Рим и Рис"</v-card-title>
    <v-card-text>
      <v-row
        align ="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="grey--text ms-4">
          5
        </div>
      </v-row>
      <div class="my-4 text-subtitle-1">
       Европейская, американская, итальянская, японская, домашняя
      </div>
    </v-card-text>
   <v-card-actions>

    <v-spacer></v-spacer>
      <v-btn
        icon
        @click="show2 = !show2"
      >
        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show2">
            <v-card
          color="#FFFEEE">
              <v-divider class="mx-4"></v-divider>
    <v-card-title>Часы работы</v-card-title>
    <v-card-text>
     11:00-23:00
    </v-card-text>
    <v-card-title>Адрес</v-card-title>
    <v-card-text>
     Пр. Победы 9а
</v-card-text>
    <v-card-actions>
      <v-btn
        color="green "
        text
        @click="reserve"
      > <a href="https://www.google.com/maps/dir//%D0%A0%D0%B8%D0%BC+%D0%B8+%D0%A0%D0%B8%D1%81,+%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B,+%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA/@43.9071739,42.7075062,14.08z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40582b2689bb3985:0x28722602dad1ed44!2m2!1d42.7164128!2d43.908679!3e2"> Построить маршрут</a>
       
      </v-btn>
    </v-card-actions>
        </v-card>
      </div>
    </v-expand-transition>
  </v-card>
</template>


<script>
export default {
  name: 'Eat',
  
  data: () => ({   
    show: false,
    show1: false,
    show2: false,

  })
}
</script>