<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/young-couple-arguing-about-high-bills-with-laptop-documents_1163-4808.jpg">

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
    border-radius: 30px;" class="black--text">~하면 정말 싫어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 87 |  </h2>
                  <br />
                  <h3>I hate it when….</h3>
                    <br />
                    <p>
                    어떤 상황이 굉장히 싫다고 말할 때 I hate it 뒤에 when 절을 붙여서 말하자. 수위를 좀 낮춰서 말하려면 I don’t like it when…이라고 하면 된다. 알아두면 무척 편리한 패턴이다.
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
            A : When can you pay back my money?<br />
            B : What money? What are you talking about?<br />
            A : <b>네가 그런 식으로 말하면 너무 싫더라</b><br />
            B : Come on, I was just kidding.
          </p>
          <p style="line-height: 2;">
            A : 내 돈 언제 갚아줄 수 있어?<br />
            B : 무슨 돈? 무슨 소리 하는 거야?<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I hate it when you talk like that.</mark><br />
            B : 야, 야, 그냥 농담이야.
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
          <b>689</b> 네가 그런 식으로 말하면 너무 싫어. ( talk ) <br />
        </p>
        <p>
          <b>690</b> 그 여자애가 나한테 이래라 저래라 하면 진짜 싫어. ( tell, what to do ) <br />
        </p>
        <p>
          <b>691</b> 난 내 차가 시동이 안 걸릴 때 정말 짜증나. ( car, start ) <br />
        </p>
        <p>
          <b>692</b> 난 네가 내 생각에 반대할 때 기분이 나빠. ( disagree with ) <br />
                  *disagree with ~와 의견이 맞지 않다. 동의하지 않다.<br />
        </p>
        <p>
          <b>693</b> 난 서둘러야 할 때가 싫어 ( have to , hurry ) <br />
        </p>
        <p>
          <b>694</b>  <br />
        </p>
        <p>
          <b>695</b>  <br />
        </p>
        <p>
          <b>696</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              689 I hate it when you talk like that.<br />
              690 I hate it when she tells me what to do.<br />
              691 I hate it when my car won’t start.<br />
              692 I hate it when you disagree with me.<br />
              693 I hate it when I have to hurry.<br />
              694 I hate it when someone yells at me.<br />
              695 I hate it when we argue.<br />
              696 I hate it when John hides my things.<br />
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
