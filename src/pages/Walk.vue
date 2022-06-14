  <template>
  
  <v-col 
  sm= "12"
  md = "6"
  lg = "4"

  >
     <v-flex v-for="image in items" :key="image.id">
     <v-card
    class="mx-auto my-12"
    color="#FFFEEE"
  >
    <v-img
      height="100%"
      :src="`public/img/walk/${image.id}.jpg`"  
    ></v-img>
    <v-card-title>{{ image.name }}</v-card-title>
    <v-card-text>
      <v-row
        align ="center"
        class="mx-0"
      >
      </v-row>
      <div>  {{image.scription}} </div>
    </v-card-text>
   <v-card-actions>
      <v-spacer></v-spacer>
     <v-btn
        
        @click="image.show = !image.show"
      >Подробнее
        <v-icon>{{ image.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="image.show">
            <v-card
          color="#FFFEEE">
              <v-divider class="mx-4"></v-divider>
    <v-card-title>{{image.name1}}</v-card-title>
    <v-card-text>
      {{image.description}}
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        @click="reserve"
      >
      <a :href = "`src/pages/Walk.vue/${map1}`">
           Построить маршрут</a>
      </v-btn>
    </v-card-actions>
        </v-card>
      </div>
    </v-expand-transition>
  </v-card>
        </v-flex>

   
    </v-col>

</template>


<script>
  export default {
    data: () => ({
     
     items: [
        { id: 1,
          name: 'Долина роз',
           name1: "О долине роз", 
            scription: 'Находится в парке рядом с санаторием имени Орджоникидзе', 
             show: false,
              description: "Большинство бутонов Долины раскрывается в середине лета — июле-августе. Срывать цветы категорически запрещено, можно схлопотать штраф. За сохранностью следят сотрудники. Местные жители с уважением относятся к Долине и того же требуют от туристов.",
               map: '"https://www.google.com/maps/dir//%D0%94%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0+%D1%80%D0%BE%D0%B7,+%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA/@43.8960576,42.6681785,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40582b309ef9584b:0x57d1996c0839650a!2m2!1d42.7382185!2d43.896079!3e0"' 
        },

        { id: 2, 
          name: 'Нарзанная галерея',
           name1:"О нарзанной галерее", 
            scription: 'Нарзанная галерея — памятник архитектуры XIX века, расположенный в курортном парке города Кисловодска.', 
             show: false,  
              description: "В самом сердце Кисловодска, у входа в Курортный парк, возвышается готическое здание из желтого камня, напоминающее ожившую иллюстрацию из средневекового рыцарского романа, — Нарзанная галерея, одна из самых популярных достопримечательностей города. Сложно поверить, что когда-то на месте сказочного дворца стоял обычный деревянный колодец с оградой, из которого местные жители брали воду для лечения хронических недугов. Со временем вокруг была сооружена парусиновая галерея, где приехавшие поправить здоровье на целебных водах господа совершали променад, любуясь окрестностями. Ввиду роста популярности источника среди отдыхающих, в 1851 г. парусину было решено заменить на более долговечный материал — камень. Разработку проекта новой галереи поручили английскому архитектору Уптону.",
               map: '"https://www.google.com/maps/dir//%D0%9D%D0%B0%D1%80%D0%B7%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F+%D0%B3%D0%B0%D0%BB%D0%B5%D1%80%D0%B5%D1%8F,+%D1%83%D0%BB.+%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D1%8F+%D0%A0%D0%B5%D0%B1%D1%80%D0%BE%D0%B2%D0%B0,+%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA/@43.8998161,42.716648,17.78z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40582b0d55aa7d81:0x9592f6db6bf3e749!2m2!1d42.7170049!2d43.8999698!3e0"'
         },
        
      ]
    }),
    
    
  }
  let map1;
  map1 = "";
</script>
