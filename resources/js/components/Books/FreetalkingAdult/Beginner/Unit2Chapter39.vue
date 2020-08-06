<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <div style="padding : 16px;">

<div style="margin-left: -18px;
margin-right: -18px;
margin-bottom: -10px;">
<v-img
           src="https://img.freepik.com/free-photo/man-portrait-alva-edison-thomas-inventor_121-67763.jpg?size=338&ext=jpg"></v-img>
</div>


<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Reading Practice <br><span class = "korean">( 선생님의 안내에 따라 문장을 읽어 주세요 )</span></h3>
     <div style="padding : 16px;">

<p>Thomas Alva Edison will always be the epitome of an inventor. He is the famous inventor of the light bulb, early motion picture cameras, recorded music, electric car battery and others. As the creator of the phonograph, he was actually slightly deaf in both ears due to scarlet fever in his youth. As a student, his mind often wandered in his class. His teachers found him difficult to deal with. His mother pulled him out from school and taught him at home herself.
He was only 22 years old when his first invention was sold for $40,000. Several of his inventions failed and many of his businesses went bankrupt but Edison remained persistent and resilient. He once said, “I have not failed, I just found 10,000 ways that won’t work.”
</p>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Vocabulary Review</h3>
     <div style="padding : 16px;">



       <li style="list-style-type: none;"><u>Epitome</u> - model or the best example <span class = "korean">완벽한 보기, 전형</span>
       </li>

       <li style="list-style-type: none;"><u>Deaf</u> - not able to hear <span class = "korean">귀가 먹은, 청각 장애가 있는, 청각 장애인, ~에 귀[주의]를 기울이지 않는</span>
       </li>

       <li style="list-style-type: none;"><u>Wander</u> - to daydream; travel without destination <span class = "korean">거닐다, 돌아다니다, 헤매다, 다른 데로 가다, 떨어져 나가다</span>
       </li>

       <li style="list-style-type: none;"><u>Persistent</u> - continuing despite difficulties <span class = "korean">끈질긴, 집요한, 끊임없이 지속[반복]되는</span>
       </li>

       <li style="list-style-type: none;"><u>Resilient</u> - recovering quickly <span class = "korean">회복력 있는, 탄력 있는</span>
       </li>

<p>Fill in the blanks using the words above.
</p>

<ol style="margin: 12px;">
  <li>The people of my country are ________. After the war in the 1880’s, we established a stronger government.
  </li>

  <li>Nice, smart and respectful, she is the ______ of a good daughter.
  </li>

  <li>Sometimes letting your mind _____ can give you great ideas.
  </li>

  <li>Please don’t yell at her, she’s not ____!
  </li>

  <li>Schooling is difficult but stay __________.
  </li>




</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Comprehension</h3>
     <div style="padding : 16px;">

<ol style="margin: 12px;">
<li>What were Edison’s famous inventions?
</li>

<li>Why was he slightly deaf?
</li>

<li>Why did his teachers find him difficult to deal with?
</li>

<li>What did his mother do?
</li>

<li>What did he do when his businesses failed?
</li>

<li>What Edison quote was mentioned in the reading?
</li>
</ol>

</div>

<h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation</h3>
     <div style="padding : 16px;" class = "korean">

       <p>토마스 알바 에디슨은 항상 발명가의 전형일 것이다. 그는 유명한 전구, 초기 영화 카메라, 녹음된 음악, 전기 자동차 배터리 등을 발명했다. 축음기를 만든 사람으로서 그는 사실 젊은 시절 성홍열로 양쪽 귀가 약간 들리지 않았다. 학생으로서, 그의 마음은 종종 그의 반에서 방황했다. 그의 선생님들은 그를 다루기 힘들다고 생각했다. 그의 어머니는 그를 학교에서 끌어내서 집에서 직접 가르쳤다. 그의 첫 발명품이 4만 달러에 팔렸을 때 그는 겨우 22살이었다. 그의 발명품들 중 몇몇은 실패했고 그의 많은 사업들은 파산했지만 에디슨은 끈질기고 회복력이 있었다. 그는 "실패한 게 아니라 적용되지 않는 1만 가지 방법을 찾았을 뿐"이라고 말한 적이 있다.
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
