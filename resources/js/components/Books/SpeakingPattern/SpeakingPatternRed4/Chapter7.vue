<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/happy-smiling-woman-talking-mobile-phone_171337-12896.jpg">

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
    border-radius: 30px;" class="black--text">~해서 정말 기뻐
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 67 |  </h2>
                  <br />
                  <h3>I’m so glad …</h3>
                    <br />
                    <p>
                    I’m so glad to meet you. (만나서 정말 반가워요.)를 통해 익숙한 패턴이다. 누군가를 처음 만날 때뿐만 아니라, 여러 가지 기쁜 일이나 좋은 일에 대해서 이 패턴을 이용해 말해보자.
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
            A : I finally got a job.<br />
            B : Really? <b>그 말 들으니까 정말 기쁘다.</b><br />
            A : Thanks.<br />
            B : When do you start working?
          </p>
          <p style="line-height: 2;">
            A : 드디어 직장을 구했어.<br />
            B : 정말?  <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’m so glad to hear that.</mark><br />
            A : 고마워.<br />
            B : 언제 일 시작하는 거야?
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
          <b>529</b> 네가 그럴 해내서 정말 기뻐. ( made it ) <br />
        </p>
        <p>
          <b>530</b> 여기 오게 돼서 정말 기분이 좋아. ( here ) <br />
        </p>
        <p>
          <b>531</b> 그게 끝나서 너무 좋아. ( over ) <br />
                *be over 끝나다 <br />
        </p>
        <p>
          <b>532</b> 그 말을 들으니까 정말 기뻐. ( hear ) <br />
        </p>
        <p>
          <b>533</b> 오늘 화창해서 정말 좋구나. ( sunny ) <br />
        </p>
        <p>
          <b>534</b>  <br />
        </p>
        <p>
          <b>535</b>  <br />
        </p>
        <p>
          <b>536</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              529 I’m so glad you made it.<br />
              530 I’m so glad to be here.<br />
              531 I’m so glad that’s over<br />
              532 I’m so glad to hear that.<br />
              533 I’m so glad that it's sunny today.<br />
              534 <br />
              535 <br />
              536 <br />
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
