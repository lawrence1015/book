<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/front-view-chicken-pizza-with-bell-red-yellow-pepper-with-yellow-cherry-tomatoes_141793-4592.jpg">

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
    border-radius: 30px;" class="black--text">난 좀 ~해
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 61 |  </h2>
                  <br />
                  <h3>I’m kind of… </h3>
                    <br />
                    <p>
                      우리가 자주 쓰는 ‘좀’이라는 말에 가장 잘 어울리는 영어가 바로 kind of이다.  “좀 피곤해.”. “좀 바빠.” 등 나의 상태를 말할 때 이 패턴을 사용해보자.
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
            A : <b>나 좀 배고파.</b><br />
            B : Me, too.<br />
            A : Let’s go get something.<br />
            B : Yeah, sure.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’m kind of hungry.</mark><br />
            B : 나도.<br />
            A : 뭣 좀 먹으러 가자.<br />
            B : 그래, 그러자.
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
          <b>481</b> 좀 피곤하네. ( tired ) <br />
        </p>
        <p>
          <b>482</b> 좀 배고파. ( hungry ) <br />
        </p>
        <p>
          <b>483</b> 좀 우울해. ( depressed ) <br />
              *depressed.  우울한, 낙담한. <br />
        </p>
        <p>
          <b>484</b> 그 사람한테 좀 미안하네. ( feel sorry ) <br />
        </p>
        <p>
          <b>485</b> 좀 급해서요. ( in a hurry ) <br />
        </p>
        <p>
          <b>486</b>  <br />
        </p>
        <p>
          <b>487</b>  <br />
        </p>
        <p>
          <b>488</b>  <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              481 I’m kind of tired.<br />
              482 I’m kind of hungry.<br />
              483 I’m kind of depressed.<br />
              484 I’m kind of feeling sorry for him.<br />
              485 I’m kind of being in a hurry.<br />
              486 <br />
              487 <br />
              488 <br />
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
