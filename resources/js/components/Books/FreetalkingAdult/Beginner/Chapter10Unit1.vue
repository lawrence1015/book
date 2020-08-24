<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://images.unsplash.com/uploads/1411074708175ba26fea4/498d4c3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80">

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
        padding-bottom: 10px;">Favorite Things</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #a7d7c5;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
               <div style="padding : 16px;">

<p>I own two, red luxury cars and a white townhouse but you may be surprised if I tell you that my most prized possessions are the three rectangular, yellow photo albums. They are not mere collections of pictures but diaries as well. My parents made them together. They posted our pictures and wrote down the experiences and ideas in words. They also pasted leaves and flowers that we got during our several excursions. They are very precious to me because my parents died when I was a teenager and these albums helped me not to feel that I was alone.
</p>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>

<div style="padding : 16px;">



<li style="list-style-type: none;"><u>Luxury(adj)</u> - rich and superior in quality <span class = "korean">호화로움, 사치, 사치, 드문 호사</span>
</li>

<li style="list-style-type: none;"><u>Prized(v)</u> - Regard highly, think much of <span class = "korean">소중한</span>
</li>

<li style="list-style-type: none;"><u>Mere(adj)</u> - Being nothing more than specified <span class = "korean">겨우 …의, …에 불과한, 단지 …만의</span>
</li>

<li style="list-style-type: none;"><u>Excursions(n)</u> -  a journey taken for pleasure <span class = "korean">여행</span>
</li>

<li style="list-style-type: none;"><u>Precious(adj)</u> - of high worth or cost <span class = "korean">귀중한, 값비싼, 귀한[소중한]</span>
</li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>Look at these expensive wooden chair and table! What a ___________ dining room this is!
  </li>

  <li>Mrs. Fulton __________ their family's collection of books very much.
  </li>

  <li>We are planning to have a winter __________ in Australia!
  </li>

  <li>This is a very ____________ scarf. It was given to me by a good friend from Italy.
  </li>

  <li>You are just a __________ child? What do you know about life?
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Comprehension</h3>
<div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What are very precious to the writer?
</li>

<li>How did he describe them?
</li>

<li>What do the albums contain?
</li>

<li>Why were they very precious?
</li>
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>
<div style="padding : 16px;" class = "korean">
  <p>
    나는 빨간 고급 승용차 두 대와 하얀 타운하우스를 가지고 있지만 내가 가장 아끼는 물건은 직사각형의 노란색 사진첩 세 장이라고 말한다면 놀랄지도 모른다.
    그것들은 단순한 그림의 모음이 아니라 일기장이다. 부모님이 함께 만드셨다.
    그들은 우리의 사진을 붙였고 경험과 아이디어를 말로 적었다. 그들은 또한 우리가 몇 번의 소풍 동안 얻은 잎과 꽃들을 붙이기도 했다.
    내가 십대였을 때 부모님이 돌아가셨고 이 앨범들은 내가 혼자라는 것을 느끼지 않도록 도와줬기 때문에 나에게 매우 소중하다.
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
