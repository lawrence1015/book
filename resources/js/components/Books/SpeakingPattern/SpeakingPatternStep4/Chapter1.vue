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
    border-radius: 30px;" class="black--text">난 좀 ~해
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

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
          <b>325</b> 좀 피곤하네. ( tired ) <br />
        </p>
        <p>
          <b>326</b> 좀 배고파. ( hungry ) <br />
        </p>
        <p>
          <b>327</b> 좀 우울해. ( depressed ) <br />
              *depressed.  우울한, 낙담한. <br />
        </p>
        <p>
          <b>328</b> 그 사람한테 좀 미안하네. ( feel sorry ) <br />
        </p>
        <p>
          <b>329</b> 좀 급해서요. ( in a hurry ) <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              325 I’m kind of tired.<br />
              326 I’m kind of hungry.<br />
              327 I’m kind of depressed.<br />
              328 I’m kind of feeling sorry for him.<br />
              329 I’m kind of being in a hurry.<br />
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
