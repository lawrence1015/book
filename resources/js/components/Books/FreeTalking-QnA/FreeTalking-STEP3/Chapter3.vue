<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://c1.wallpaperflare.com/preview/912/45/254/bible-proverbs-heart-purple.jpg" style="max-width: 100%; display:block; height: auto;" >

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
      >
        <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Proverbs</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       Do you know any Korean proverbs?
     </li>
     <br />
     <li class="mb-2">
        Proverbs were made by our ancestors.
        <ul>
        <li class="mt-2"> Are they still true in modern life?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
       Here are some modern proverbs:
       <ul>
       <li class="mt-2"> One thing you can't recycle is wasted time.?</li>
       <li> If you can't stand the heat. Get out of the kitchen.</li>
       <li> What words would you put on a T-Shirt?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Can you think of some movies that teach us lessons?
     </li>
   </ol>



</div>


       </v-layout>
     </v-container>
  </v-layout>
  </v-container>
</div>



</template>



<script>
export default {

  props: ['fontSize'],



  data(){

    return{


    }

  },


  beforeMount(){


  },

  methods:{


  },

  watch:{

    fontSize(current, old){

      console.log(current, 'current')
      console.log(old, 'previous')


    }
  }
}
</script>

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

li{


}

body{

  font-size: 16px;
}

ul {
  list-style-type: none;
}

ul > li:before {
  content: "–"; /* en dash */
  position: absolute;
  margin-left: -1.1em;
}

.format{
  margin-top: 0px;
}

</style>
