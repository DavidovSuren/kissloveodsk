<template>
  <div>
    <div justify="center" align="center" style="width: 100%">
    <h1>Новости</h1>
   </div>
 
   <v-carousel
    cycle
    height="300"
    hide-delimiters
    hide-delimiter-background
    
    progress-color = "#EBDB8D"
    progress
    next-icon = "mdi-light mdi-gesture-swipe-left"
    prev-icon = " mdi-light mdi-gesture-swipe-right"
    >
  
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        > <img :src="`public/news/${i + 1}.jpg`" alt="" style="height: 337px; width: 100%; padding-bottom: 30px;"  >
          
        </v-row> 
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
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
      src="public\news\4.jpg"
    ></v-img>
    <v-card-title>Реконструкция кинотеатра "Россия"</v-card-title>
    <v-card-text>
    
      <div class="my-5 text-subtitle-1">
      В Кисловодске появится многофункциональный культурный центр на месте кинотеатра «Россия»...
      </div>

      <div>  <p></p>  </div>
    </v-card-text>
   <v-card-actions>

      <v-spacer></v-spacer>
      <v-btn
       
        @click="show = !show"
      >Подробнее
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        
        <v-card
          color="#FFFEEE">
              <v-divider class="mx-4"></v-divider>
    <v-card-title>Подробнее:</v-card-title>
    <v-card-text>
     В Кисловодске появится многофункциональный культурный центр на месте кинотеатра «Россия». Строительство начнется в текущем году, а для посетителей комплекс откроется в 2025-м.

Большой и важный для города проект будет реализован по государственной программе Развитие СКФО. Федеральный центр выделяет нашему региону субсидию из федерального бюджета на софинансирование вложений в строительство объекта. Соответствующее распространение подписал премьер-министр Михаил Владимирович Мишустин. 

Судьба бывшего кинотеатра давно беспокоила кисловодчан, им было важно, чтобы на этом месте был именно объект культуры, отдыха для людей. 

Через 3 года на месте разрушенного временем здания будет современный культурный центр, где можно проводить выставки, концерты, конференции, проводить творческие занятия, посещать библиотеку и кинотеатр. Появление нового центра сделает ярче культурную жизнь города-курорта. Станет местом встреч с друзьями и семейного отдыха кисловодчан и отличным дополнением к культурной программе отдыхающих.
   
   

</v-card-text>
    
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Построить маршрут
      </v-btn>
    </v-card-actions>
        </v-card>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          '#FFFEEE',
          '#FFFEEE',
          '#FFFEEE',
          '#FFFEEE',
          '#FFFEEE',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        show: false,
      }
    },
    
  }
</script>
  
  

   export default {
    data: () => ({   
      show: false,
         })
  }
