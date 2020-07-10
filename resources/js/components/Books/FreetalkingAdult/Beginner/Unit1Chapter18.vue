<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ5jA6S2g/1/screen_2x/canva-untitled-MADQ5jA6S2g.jpg">

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
        padding-bottom: 10px;">Movies</h1>
      </v-layout>
    </v-img>


    <h3 style="background-color: #a7d7c5;   
               padding-top : 10px;  
               padding-left : 10px; 
               padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
    <div style="padding : 16px;">

<p>The colourful and visually dazzling movies we enjoy now either at home or in the cinema have a long history. Its history began in the late 1890s with the invention of the movie camera. Actually, movies are only a series of photographs. When these photos move fast, they give an illusion of movement.  The earliest films were short and were shown only in black and white. They don't even have any sounds. It was only in the late 1920's that the films had sounds. They were called "talkies." The first talkie was entitled “The Jazz Singer.” Two of the first colored movies were "The Wizard of Oz" and "Gone with the Wind", both from 1939.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Dazzling(adj)</u> - impressive display, very nice to look at <span style="font-size:16px">눈부신, 휘황찬란한; 현혹적인</span>
</li>

<li style="list-style-type: none;"><u>Photographs(n)</u> -  pictures <span style="font-size:16px">사진</span>
</li>

<li style="list-style-type: none;"><u>Illusion(n)</u> -   something that tricks the mind and the eyes <span style="font-size:16px">오해[착각], 환상, 환각</span>
</li>

<li style="list-style-type: none;"><u>Series(n)</u> -  same thing come one after the another <span style="font-size:16px">연속, 연쇄, 시리즈</span>
</li>

<li style="list-style-type: none;"><u>Entitled(n)</u> - to be given the name or title <span style="font-size:16px">~라는 제목의</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>The decorations of the hotel looked _______________.
  </li>

  <li>Looking at these childhood _____________makes me nostalgic.
  </li>

  <li>I am reading a book ____________ “The Little Prince.”
  </li>

  <li>Most magic tricks are only ____________.
  </li>

  <li>The parade showed a ____________ of flower-decorated trucks.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">
  
 <ol style="margin: 12px;">

<li>Where do we usually enjoy movies?
</li>

<li>When did the movie history begin?
</li>

<li>What happens when series of photos move fast?
</li>

<li>What are “talkies”?
</li>

<li>What was the first “talkie”?
</li>

<li>What were the earliest colored films?
</li>
</ol>


</div>
<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

<div style="padding : 16px;">
  <p>우리가 지금 집에서나 영화관에서나 즐기는 다채롭고 시각적으로 눈부신 영화는 오랜 역사를 가지고 있다. 그것의 역사는 1890년대 후반에 영화 카메라의 발명으로 시작되었다. 사실 영화는 사진의 연속일 뿐이다. 이 사진들이 빠르게 움직이면 움직이는 듯한 착각을 일으킨다. 초창기 영화는 짧고 흑백으로만 상영되었다. 소리조차 없다. 이 영화들이 소리를 낸 것은 1920년대 후반에야 있었다. 그들은 "발성영화"라고 불렸다. 첫 번째 발성영화에는 "재즈 싱어"라는 제목이 붙었다. 최초의 컬러 영화들 중 두 편은 1939년에 제작된 "오즈의 마법사"와 "바람과 함께 사라지다"이다.
  </p>

</div>

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

<style lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}


body{

  font-size: 16px;
}

</style>
