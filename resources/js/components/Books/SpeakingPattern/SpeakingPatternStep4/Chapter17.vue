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
    border-radius: 30px;" class="black--text">난 ~가 걱정돼
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 77 | </h2>
                  <br />
                  <h3>I’m worried about….</h3>
                    <br />
                    <p>
                    현재 걱정되는 것은 I’m worried about…,  과거에 걱정했던 것은 I was worried about…을 써서 말한다. 자주 하는 말인 “네 걱정 많이 했다.”고 하려면 I was worried about you. 라고 하면 된다.
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
            A : When are you going to start dating again?<br />
            B : I’m not in any hurry.<br />
            A : Why not? It could be fun.<br />
            B : <b>난 상처받는 게 걱정돼.</b>
          </p>
          <p style="line-height: 2;">
            A : 언제 다시 데이트를 시작할 거야?<br />
            B : 급하지 않아.<br />
            A : 왜? 재미있을텐데<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’m worried about getting hurt.</mark>
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
          <b>405</b> 난 직장을 잃을까봐 걱정돼. ( lose, my job ) <br />
        </p>
        <p>
          <b>406</b> 난 상처받는 게 걱정돼. ( get hurt ) <br />
        </p>
        <p>
          <b>407</b> 난 내 성적이 걱정돼. ( grade ) <br />
        </p>
        <p>
          <b>408</b> 난 환경이 걱정돼. ( environment ) <br />
        </p>
        <p>
          <b>409</b> 난 면접이 걱정돼. ( job interview ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              405 I’m worried about losing my job.<br />
              406 I’m worried about getting hurt.<br />
              407 I’m worried about my grade.<br />
              408 I’m worried about the environment.<br />
              409 I’m worried about my job interview.<br />
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
