<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGv-yvXZI/6/screen_2x/canva-smiling-women-and-men-sitting-on-green-grass-MADGv-yvXZI.jpg">

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
        padding-bottom: 10px;">Friendship</h1>
      </v-layout>
    </v-img>


    <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <span style="font-size:18px">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
         <div style="padding : 16px;">

<p>There is a saying "No man is an island."  
   My elementary school teacher told us it meant no man can live alone. 
   As time passed by, I began to understand its meaning entirely. 
   Although socially awkward, 
   I don't think I can live without my friends even if there are only a handful of them.  
   My friends cheer me up and support me. 
   Friendship is a wonderful and splendid thing. 
   It is very important because, for many times, it has been a cause of joy, comfort, and strength to me.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Entirely </u> - in every way, fully <span style="font-size:16px">전적으로, 완전히, 전부</span>
</li>

<li style="list-style-type: none;"><u>Awkward </u> - shy and uncomfortable <span style="font-size:16px">어색한, 서투른</span>
</li>

<li style="list-style-type: none;"><u>Handful </u> - small amount or number <span style="font-size:16px">몇 안 되는 수</span>
</li>

<li style="list-style-type: none;"><u>Tan</u> - reason
</li>

<li style="list-style-type: none;"><u>Cause </u> - magnificent <span style="font-size:16px">이유, 까닭, 사유, 근거</span>
</li>

<li style="list-style-type: none;"><u>Splendid </u> - very funny <span style="font-size:16px">정말 좋은[멋진], 훌륭한, 아주 인상적인[아름다운]</span>
</li>


<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>My shy sister is very __________ around people.
  </li>

  <li>I didn't __________ understand the lesson. Can you explain it again?
  </li>

  <li>He only has a __________ of candies left.
  </li>

  <li>What is the ________ of your sadness? Please tell me.
  </li>

  <li>This is a __________ place!  It's so beautiful.
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>

<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What does the saying “No man is an island” mean?
</li>

<li>Does the writer have many friends?
</li>

<li>How do his friends help him?
</li>

<li>What is friendship to him?
</li>

<li>Why is it important to him?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;">

  <p>
    "아무도 혼자인 사람은 없다"는 말이 있다.
    초등학교 선생님은 우리에게 그것은 아무도 혼자 살 수 없다는 것을 의미한다고 말했다.
    시간이 흐르면서 나는 그 의미를 완전히 이해하기 시작했다.
    사회적으로 서툴지만 나는 친구가 몇 명 없다고 하더라도 친구 없이는 살 수 없을 것 같다.
    친구들은 나를 격려해주고 응원해줘. 우정은 멋지고 찬란한 것이다.
    여러 번, 그것은 나에게 기쁨과 위로와 힘의 원인이 되어왔기 때문에 매우 중요하다.
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
