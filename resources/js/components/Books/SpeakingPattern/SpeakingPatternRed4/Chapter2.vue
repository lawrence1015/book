<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/very-hungry-man_1098-16621.jpg">

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
    border-radius: 30px;" class="black--text">난 정말~해
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 62 | </h2>
                  <br />
                  <h3>I’m really…</h3>
                    <br />
                    <p>
                    “나 정말 화났거든.” “정말 바빠.”와 같이 ‘정말~해’ 라고 말할 때는 really, very, so 등의 부사를 이용하여 I’m really…/ I’m very… / I’m so… 와 같이 말하면 된다.
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
            A : <b>배고파 죽겠어.</b><br />
            B : What? I thought you had lunch.<br />
            A : No, I didn’t. I had to skip it because I was busy.<br />
            B : Oh, really? You must be starving then.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’m really starving.</mark><br />
            B : 뭐? 너 점심 먹은 줄 알았는데.<br />
            A : 아니, 바빠서 걸렸어.<br />
            B : 아, 그래? 그럼 아주 배고프겠네 <br />

            * Skip  건너뛰다.
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
          <b>489</b> 정말 감동받았어. ( impressed ) <br />
        </p>
        <p>
          <b>490</b> 정말 스트레스 받아. ( stressed out ) <br />
        </p>
        <p>
          <b>491</b> 배고파 죽겠어. ( starve ) <br />
        </p>
        <p>
          <b>492</b> 너한테 무지 화났거든. ( mad ) <br />
        </p>
        <p>
          <b>493</b> 너무 졸려.  ( sleepy ) <br />
        </p>
        <p>
          <b>494</b>  <br />
        </p>
        <p>
          <b>495</b>  <br />
        </p>
        <p>
          <b>496</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              489 I’m really impressed.<br />
              490 I’m really stressed out.<br />
              491 I’m really starving.<br />
              492 I’m really mad at you.<br />
              493 I’m really sleepy.<br />
              494 <br />
              495 <br />
              496 <br />
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
