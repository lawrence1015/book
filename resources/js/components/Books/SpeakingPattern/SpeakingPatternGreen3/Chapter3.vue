<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/two-girls-talking-another-secluded_1163-521.jpg">

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
    border-radius: 30px;" class="black--text">~하고 싶지 않아.
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 43 |  </h2>
                  <br />
                  <h3>I don’t want to… </h3>
                    <br />
                    <p>
                    하고 싶지 않은 일을 말할 때 쓰는 패턴이다. I don’t feel like –ing도 비슷한 의미인데, 그보다 자신의 의견을 좀 더 분명하게 말하는 느낌이다.
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
            A : How about teaming up with Cathy?<br />
            B : <b>그 여자랑 일하고 싶지 않아요.</b><br />
            A : Why not?<br />
            B : She gets on my nerves.
          </p>
          <p style="line-height: 2;">
            A : 캐시랑 한 팀으로 일하면 어때요?<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I don’t want to work with her.</mark><br />
            A : 왜요?<br />
            B : 그 여자 신경에 거슬려요.
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
          <b>337</b> 혼자 가고 싶지 않아. ( go, alone ) <br />
        </p>
        <p>
          <b>338</b> 그 얘기는 하고 싶지 않아. ( talk, about ) <br />
        </p>
        <p>
          <b>339</b> 난 헬스클럽에 가고 싶지 않아. ( go, gym ) <br />
        </p>
        <p>
          <b>340</b>난 그 여자랑 일하고 싶지 않아. ( work, her ) <br />
        </p>
        <p>
          <b>341</b> 난 그 여자애와 얘기하고 싶지 않아.  ( talk to, the girl ) <br />
        </p>
        <p>
          <b>342</b>  <br />
        </p>
        <p>
          <b>343</b>  <br />
        </p>
        <p>
          <b>344</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              337 I don’t want to go alone.<br />
              338 I don’t want to talk about it.<br />
              339 I don’t want to go to the gym.<br />
              340 I don’t want to work with her. <br />
              341 I don’t want to talk to the girl.<br />
              342 I don’t want to scare you.<br />
              343 I don’t want to eat there.<br />
              344 I don’t want to disappoint you.<br />
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
