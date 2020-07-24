<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwEAZsbU/5/screen_2x/canva-closeup-photo-of-person-holding-panasonic-remote-control-in-front-of-turned-on-smart-television-MADGwEAZsbU.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">TV&amp;Movies</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What programs do you usually watch on TV?
     </li>
     <br />
     <li class="mb-2">
       How many hours a day do you watch TV?
     </li>
     <br />
     <li class="mb-2">
       Who has the most power over channel selection in your home?
     </li>
     <br />
     <li class="mb-2">
       Do you change the channel when commercials come on?
     </li>
     <br />
     <li class="mb-2">
        What kind of movies do you like?
       <ul>
       <li class="mt-2"> Do you like American films?</li>
       <li> What kind?</li>
       <li> Science fiction?</li>
       <li> Comedies?</li>
       <li> Dramas?</li>
       <li> Horror?</li>
       <li> Crime?</li>
       <li> Adventure?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       What do you think about Korean movies?
     </li>
     <br />
     <li class="mb-2">
       What was the most impressive movie you’ve ever seen?
     </li>
     <br />
     <li class="mb-2">
       Who’s your favorite movie star?
     </li>
   </ol>



</div>

<h3 style="background-color: #FF6E6E;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       TV에서 주로 보는 프로그램은 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       하루에 TV를 몇 시간이나 보세요?
     </li>
     <br />
     <li class="mb-2">
       당신의 집에서 누가 채널 선택을 가장 많이 하나요?
     </li>
     <br />
     <li class="mb-2">
       광고가 나오면 채널을 바꾸나요?
     </li>
     <br />
     <li class="mb-2">
        어떤 종류의 영화를 좋아하세요?
       <ul>
       <li class="mt-2">미국 영화 좋아하세요?</li>
       <li>어떤 종류죠?</li>
       <li>공상과학 소설?</li>
       <li>코미디?</li>
       <li>드라마?</li>
       <li>공포?</li>
       <li>범죄?</li>
       <li>모험?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       한국 영화에 대해 어떻게 생각하세요?
     </li>
     <br />
     <li class="mb-2">
       당신이 본 영화 중 가장 인상 깊었던 영화는 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
       당신이 가장 좋아하는 영화배우는 누구입니까?
     </li>
   </ol>



</div>


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
