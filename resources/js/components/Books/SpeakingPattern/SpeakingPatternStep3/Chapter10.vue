<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/family-generations-being-happy-together_23-2148314916.jpg">

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
    border-radius: 30px;" class="black--text">언제 ~하고 싶어?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 50 |  </h2>
                  <br />
                  <h3>When do you want to…?</h3>
                    <br />
                    <p>
                    When do you want to…?는 “언제 만날까?” 처럼 약속시간을 정하거나 상대방의 일정을 물을 때 쓰기 좋은 패턴이다.
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
            A : Thanks for hosting the family dinner<br />
            B : My pleasure. <b>언제 먹고 싶니?</b><br />
            A : It doesn’t matter. Hmm… How about at 1?<br />
            B : That sounds good to me.
          </p>
          <p style="line-height: 2;">
            A : 가족 만찬을 연다니 고마워.<br />
            B : 천만에. <mark style="background-color: #a7d7c5; color: #d9e7cd;">When do you want to eat?</mark><br />
            A : 상관없어. 음.. 한 시쯤 어때?<br />
            B : 난 좋아.<br />

            *  Host (주인으로서 접대하다)
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
          <b>393</b> 언제 오고 싶어?( come ) <br />
        </p>
        <p>
          <b>394</b> 언제 먹고 싶니? ( eat ) <br />
        </p>
        <p>
          <b>395</b> 언제 떠나고 싶은데? ( leave ) <br />
        </p>
        <p>
          <b>396</b> 언제 만날까? ( meet ) <br />
        </p>
        <p>
          <b>397</b> 저녁 먹으러 언제 갈래? ( go, dinner ) <br />
        </p>
        <p>
          <b>398</b>  <br />
        </p>
        <p>
          <b>399</b>  <br />
        </p>
        <p>
          <b>400</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              393 When do you want to come?<br />
              394 When do you want to eat?<br />
              395 When do you want to leave<br />
              396 When do you want to meet?<br />
              397 When do you want to go to dinner?<br />
              398 <br />
              399 <br />
              400 <br />
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

li{


}

body{

  font-size: 16px;
}

</style>
