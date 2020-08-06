<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>

  <div style="padding : 16px;">

<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://marketplace.canva.com/MADQ4-ahw3I/1/screen/canva-untitled-MADQ4-ahw3I.jpg"></v-img>
</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
     <div style="padding : 16px;">

<p>I have been exposed to music at an early age because both my father and mother are musicians. First, I learned to play the piano when I was four years old. However, it was not very handy so I shifted to the guitar when I was eight. Second, I learned the flute because I got bored with the guitar. After some time, I became uncomfortable with wind instruments and wanted to play the strings. At last, I decided to take up violin lessons and fell in love with it! I just love how beautiful its sound is! Now, I work as a concert violinist.
</p>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>Expose</u> - to make accessible to some action or influence <span class = "korean">(보통 때는 가려져 있는 것을) 드러내다 </span>
</li>

<li style="list-style-type: none;"><u>Musician</u> - someone who plays a musical instrument <span class = "korean">음악가, 뮤지션</span>
</li>

<li style="list-style-type: none;"><u>Handy</u> - easy to use <span class = "korean">유용한, 편리한, 가까운[이용하기 편한] 곳에 있는</span>
</li>

<li style="list-style-type: none;"><u>Wind instruments</u> - instruments that make music through breathes <span class = "korean">관악기</span>
</li>

<li style="list-style-type: none;"><u>Strings</u> - refers to instruments that have strings like the violin and guitar <span class = "korean">현악기, 현악기</span>
</li>

<li style="list-style-type: none;"><u>Shift</u> - to exchange for another <span class = "korean">옮기다, 이동하다[되다]; 자세를 바꾸다</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>She is a _______________. She plays the piano well.
  </li>

  <li>This phone is very ___________.
  </li>

  <li>If you ____________ the paints to open air, they will dry.
  </li>

  <li>Flutes and trumpets are examples of _______________________.
  </li>

  <li>He's a guitarist and a violinist.  He's good with _______________.
  </li>

  <li>I will _________________ my major from Business to English.
  </li>

</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">


<ol style="margin: 12px;">
<li>Why was she exposed to music at an early age?
</li>

<li>What instrument did she learn first?
</li>

<li>Why did she shift to the guitar?
</li>

<li>Why did she change the guitar for the flute?
</li>

<li>Why did she love the violin?
</li>

<li>In your own words, can you tell what instruments she learned? (Use “first”, “second”, and “then.”)
</li>
</ol>
</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;" class = "korean">
       <p>
         아버지와 어머니 모두 음악가여서 어릴 적부터 음악을 접해 왔다. 우선, 나는 4살 때 피아노를 배웠다.
         하지만, 그것은 그다지 편리하지 않아서 나는 8살 때 기타로 바꾸었다. 둘째, 기타가 지루해져서 플루트를 배웠다.
         얼마 후 관악기가 불편해져서 현악기를 연주하고 싶었다. 마침내, 나는 바이올린 레슨을 받기로 결심했고 그것에 반했다!
         나는 그것의 소리가 얼마나 아름다운지 사랑한다! 지금은 음악회 바이올리니스트로 일하고 있다.
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
