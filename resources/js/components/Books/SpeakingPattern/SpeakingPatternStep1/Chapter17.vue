<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://media-public.canva.com/MADQ4w39aME/1/screen.jpg">

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
    border-radius: 30px;" class="black--text">~가 뭔지 아니?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 17 |  </h2>
                  <br />
                  <h3>Do you know what…?</h3>
                    <br />
                    <p>
                    그 애 이름이 뭔지 알아? 처럼 ~가 무엇인지 아느냐고 물어볼 때는 Do you know what…? 을 이용하면 된다. 이 패턴은 상대방과 대화를 시작하려고 할 때도 유용하다.
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
            A : <b>그 애 이름이 뭔지 알아?</b><br />
            B : Who?<br />
            A : That guy over there.<br />
            B : Ah, his name is Phil
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Do you know what his name is?</mark><br />
            B : 누구?<br />
            A : 저기 있는 저 남자애 말이야.<br />
            B : 아, 그 아이 이름은 필이야.
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
          <b>105</b> 무슨 일이 일어났는지 아니? ( happened ) <br />
        </p>
        <p>
          <b>106</b> 그 애 이름이 뭔지 알아? ( his, name ) <br />
        </p>
        <p>
          <b>107</b> 이게 무슨 뜻인지 알아? ( engage ) <br />
        </p>
        <p>
          <b>108</b> 리디아가 뭐라고 했는지 알아? ( said ) <br />
        </p>
        <p>
          <b>109</b> 지금 몇시인지 알아? ( time, it ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              105 Do you know what happened?<br />
              106 Do you know what his name is?<br />
              107 Do you know what this means<br />
              108 Do you know what Lydia said<br />
              109 Do you know what time is it now?<br />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>

      
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
