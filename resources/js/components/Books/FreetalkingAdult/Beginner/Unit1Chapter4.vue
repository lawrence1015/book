<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwPBupS0/5/screen_2x/canva-black-and-white-house-near-mountains-under-blue-sky-MADGwPBupS0.jpg">

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
        padding-bottom: 10px;">Memories</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

   <p>Although I live in California now, I grew up in Gwangju. As a kid, I played in the fields and drew the mountains with my friends. My mother cooked very well and she ran a small cafe for tourists. She brewed very delicious tea every day. My father was a History professor at Chosun University. He told me a lot of stories about the world. He toured me often to the magnificent historical temples there. I had a happy childhood. It feels nostalgic to think about it sometimes.
</p>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



<li style="list-style-type: none;"><u>Brew</u> - to boil leaves and other ingredients in water to make tea or beer <span style="font-size:16px">(커피차를) 끓이다[만들다], (맥주를) 양조하다</span>
</li>

<li style="list-style-type: none;"><u>Memory</u> - something that is remembered <span style="font-size:16px">기억(력)</span>
</li>

<li style="list-style-type: none;"><u>Magnificent</u> - beautiful and impressive <span style="font-size:16px">참으로 아름다운[감명 깊은/훌륭한]</span>
</li>

<li style="list-style-type: none;"><u>Nostalgia</u> - bittersweet feelings when thinking of the past; a longing <span style="font-size:16px">향수</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>When I feel sad, I think about our happy ________ during vacation and I feel better.
  </li>

  <li>How do they ___________ this beer? It’s so delicious.
  </li>

  <li>The clear night sky looks very _____________.
  </li>

  <li> It feels __________ visiting my hometown after ten years.
  </li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">

  <ol style="margin: 12px;">
  <li>Where did the writer grow up?
  </li>
  <li>What did he do as a child?
  </li>
  <li>What did his mother do?
  </li>
  <li>How about his father?
  </li>
  <li>How does he feel about his childhood?
  </li>
  <li>Where does he live now?
  </li>
  </ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;">
       <p>
         지금은 캘리포니아에 살고 있지만 광주에서 자랐다. 어렸을 때, 나는 들판에서 놀았고 친구들과 산을 그렸다.
         어머니는 요리를 아주 잘하셔서 관광객들을 위한 작은 카페를 운영하셨다. 그녀는 매일 매우 맛있는 차를 끓였다.
         아버지는 조선대학교 역사학과 교수였다.. 그는 나에게 세상에 대한 많은 이야기를 들려주었다.
         그는 그곳의 웅장한 역사적인 절들을 자주 구경했다. 나는 행복한 어린 시절을 보냈다. 가끔 그것에 대해 생각하면 향수를 느낀다.
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
