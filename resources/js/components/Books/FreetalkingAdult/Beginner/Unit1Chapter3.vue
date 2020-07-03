<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGv_dR6A8/6/screen_2x/canva-assorted-color-beads-MADGv_dR6A8.jpg">

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
        padding-bottom: 10px;">Colors</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

   <p>Colors are very important. The world would look very boring without any colors. Everything will be in gray even the flowers, the trees and the sky! Can you imagine that? Colors can change your mood and attract your attention. Colors also bring up different meanings for people. For example, the color red can mean love or hatred depending on the person. Blue can mean peace or sorrow.
</p>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>Boring</u> - not interesting or special <span style="font-size:16px">재미없는, 지루한</span>
</li>

<li style="list-style-type: none;"><u>Hatred</u> - intense dislike; hate <span style="font-size:16px">증오[혐오](감)</span>
</li>

<li style="list-style-type: none;"><u>Sorrow</u> - sadness <span style="font-size:16px">(큰) 슬픔, 비애 (=grief)</span>
</li>

<li style="list-style-type: none;"><u>Symbolize</u> - to mean or represent <span style="font-size:16px">상징하다</span>
</li>

<li style="list-style-type: none;"><u>Jealousy</u> - to want something that another person owns <span style="font-size:16px">질투[시기](심), 시샘</span>
</li>

<p>
<h3>Vocabulary Stop</h3>
</p>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>We fell asleep in the theater because the movie was _____________.
  </li>

  <li> My ________________ towards my enemy is now gone.
  </li>

  <li>Flags ___________ freedom.
  </li>

  <li>I play sports to forget my ___________.
  </li>

  <li>It’s bad to feel __________.  We should be happy for other people!
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">




<ol style="margin: 12px;">
<li>What will the world be like without colors?</span>
</li>

<li>What can colors do?</span>
</li>

<li>What does red mean?</span>
</li>

<li>What does blue symbolize?</span>
</li>

<li>What is the meaning of yellow?</span>
</li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;">

       <p>
          색은 매우 중요하다. 어떤 색깔도 없다면 세상은 매우 지루해 보일 것이다. 모든 것은 심지어 꽃, 나무, 하늘도 회색일 것이다! 상상이 가는가? 색깔은 당신의 기분을 바꿀 수 있고 당신의 관심을 끌 수 있다.
          색깔은 또한 사람들에게 다른 의미를 불러 일으킨다. 예를 들어 빨간색은 사람에 따라 사랑이나 증오를 의미할 수 있다. 파란색은 평화나 슬픔을 의미한다.
       </p>

     </div>










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

<style lang="css">

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

</style>
