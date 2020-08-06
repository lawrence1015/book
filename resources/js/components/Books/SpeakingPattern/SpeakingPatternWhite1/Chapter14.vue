<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/two-young-pretty-girls-looking-dresses-try-it-while-choosing-shop_155003-7615.jpg">

        <v-layout
        align-end
        fill-height
        pa-2
        white--text
      >
     <h1 style="margin:0 -30px 10px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 25px;
    background-color: rgba(255, 231, 255, 0.64);
    border:0px solid #9B4F95;
    -webkit-border-radius: 30px;
    border-radius: 30px;" class="black--text">뭘 ~할지 모르겠어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;" class = "korean">

                 <h2>Pattern 14 | 뭘 ~할지 모르겠어 </h2>
                  <br />
                  <h3>I don’t know what…</h3>
                    <br />
                    <p>
                    I don’t know  뒤에 what/where/when/how/why/which 등이 있는 의문사절이나 의문사구를 붙이면 자신이 모르고 있는 것을 구체적으로 설명할 수 있다.
                    </p>
                    <br />

<h2 style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #CB6ECB;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Dialogue
</h2>

<div style="padding-top : 10px; padding-bottom : 2px;">

          <br />
          <p style="line-height: 2;">
            A : Hurry up. We’re late<br />
            B : But <b>뭘 골라야 할지 모르겠는걸</b><br />
            A : Come on. Just choose one already.<br />
            B : I’m trying. Give me one more second.
          </p>
          <p style="line-height: 2;">
            A : 서둘러. 우리 늦었단 말이야.<br />
            B : 그렇지만 <mark style="background-color: #a7d7c5; color: #d9e7cd;">I don’t know what to choose.</mark><br />
            A : 야,야, 그냥 빨리 하나 골라.<br />
            B : 노력 중이라고, 잠깐만 기다려봐.
          </p>
          <br />


</div>

<h2  style="margin-left: -30px;
    overflow: hidden;
    padding: 5px;
    padding-left: 35px;
    padding-right: 0px;
    background-color: #CB6ECB;
    border:0px solid #afcde3;
    -webkit-border-radius: 30px;
    border-radius: 30px;">Pattern Practice
</h2>

<div style="padding-top : 10px; padding-bottom : 0px;">

        <br />

        <p>
          &rarr; 우리말을 보고 순식간에 영어로 말할 수 있을 때까지 반복하세요!
        </p>
        <br />

        <p>
          <b>105</b> 뭘 골라야 할지 모르겠어. ( choose ) <br />
        </p>
        <p>
          <b>106</b> 어디에서 시작해야 할지 모르겠어. ( where, start ) <br />
        </p>
        <p>
          <b>107</b> 이 문제를 어떻게 푸는지 모르겠어. ( how, solve ) <br />
        </p>
        <p>
          <b>108</b> 어느 길로 가야 할지 모르겠어. ( which, way ) <br />
        </p>
        <p>
          <b>109</b> 그 사람이 왜 그런 말을 했는지 모르겠어. ( say so ) <br />
        </p>
        <p>
          <b>110</b> 나는 시험에서 무슨 일이 일어났는지 모른다. ( happened, exam ) <br />
        </p>
        <p>
          <b>111</b> 어떤 색을 골라야 할지 모르겠어. ( color, pick ) <br />
        </p>
        <p>
          <b>112</b> 내 돈이 어디로 가는지 모르겠어, 그냥 녹는 것 같아. ( goes, melt ) <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              105 I don’t know what to choose.<br />
              106 I don’t know where to start.<br />
              107 I don’t know how to solve this problem.<br />
              108 I don’t know which way to go.<br />
              109 I don’t know why he says so.<br />
              110 I don't know what happened in the exams.<br />
              111 I don't know which color to pick.<br />
              112 I don't know where my money goes, it just seems to melt.<br />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      </v-container>
  
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
