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
    border-radius: 30px;" class="black--text">~는 신경 안 써
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 90 | </h2>
                  <br />
                  <h3>I don’t care….</h3>
                    <br />
                    <p>
                    다른 사람의 시선이나 유행 따위는 신경 안 쓴다고 할 때 사용하기 좋은 패턴이다. 뒤에는 의문사절, whether절, (about+명사? 등의 형태가 온다. 참고로, I don’t care 뒤에 for를 붙이면 ‘~를 좋아하지 않는다’는 뜻이 된다.

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
            A : Don’t do it.<br />
            B : Why not?<br />
            A : Because everyone is saying it’s too dangerous.<br />
            B : <b>누가 뭐라고 하든 난 신경 안 써.</b> I’ll just do it.
          </p>
          <p style="line-height: 2;">
            A : 그거 하지 마.<br />
            B : 왜?<br />
            A : 다들 너무 위험하다고 하잖아.<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I don’t care what anybody says.</mark> 그냥 할 거야.
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
          <b>470</b> 누가 뭐라고 하든 난 신경 안 써. ( anybody, say ) <br />
        </p>
        <p>
          <b>471</b> 다른 사람들이 어떻게 생각하는지 난 신경 안 써 ( others, think ) <br />
        </p>
        <p>
          <b>472</b> 그게 사실이든 아니든 난 상관 없어요. ( true or not ) <br />
        </p>
        <p>
          <b>473</b> 돈이 얼마 들든 난 신경 안 써. ( how much. cost ) <br />
        </p>
        <p>
          <b>474</b> 네가 하는 말은 신경 안 써. ( what, say ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              470 I don’t care what anybody says.<br />
              471 I don’t care what others think.<br />
              472 I don’t care whether it is true or not.<br />
              473 I don’t care how much it costs.<br />
              474 I don’t care what you say.<br />
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
