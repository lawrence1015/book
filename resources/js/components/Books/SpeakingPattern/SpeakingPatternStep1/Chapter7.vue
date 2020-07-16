<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/feet-christmas-socks-near-fireplace-relaxing-home_23-2147578351.jpg">

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
    border-radius: 30px;" class="black--text">~인 것 같지 않아?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 7 |  </h2>
                  <br />
                  <h3>Don’t you think…?</h3>
                    <br />
                    <p>
                    자신의 생각이나 의견에 대해 상대방도 동의해주길 바라는 마음으로 ~인 것 같지 않아? 하고 물어보는 표현이다. 상대방의 마음을 살짝 떠보고 싶을 때도 사용할 수 있다.
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
            A : What’s wrong with this weather?<br />
            B : I know. <b>오늘 너무 추운 것 같지 않아?</b><br />
            A : I hear you.<br />
            B : I should have worn more layers.
          </p>
          <p style="line-height: 2;">
            A : 날씨가 왜 이 모양이래?<br />
            B : 내 말이. <mark style="background-color: #a7d7c5; color: #d9e7cd;">Don’t you think it’s too cold today?</mark><br />
            A : 그러게 말이야.<br />
            B : 옷을 더 껴입고 올걸.
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
          <b>049</b> 오늘 너무 추운 것 같지 않아? ( too, cold, ) <br />
        </p>
        <p>
          <b>050</b> 그거 대단한 것 같지 않니? ( amazing ) <br />
        </p>
        <p>
          <b>051</b> 좀 너무 빠른 것 같지 않아?( little, too, soon ) <br />
        </p>
        <p>
          <b>052</b> 그 여자는 그에게 너무 어린 것 같지 않니? ( young, for ) <br />
        </p>
        <p>
          <b>053</b> 우리가 먼저 물어봐야 한다고 생각하지 않니? ( should, ask, first ) <br />
        </p>
        <p>
          <b>054</b> 서울에서 돈을 더 모을 수 있지 않을까요? ( save, money ) <br />
        </p>
        <p>
          <b>055</b> 당신이 그녀에게 좀 거칠게 대했다고 생각하지 않나요? ( little, rough ) <br />
        </p>
        <p>
          <b>056</b> 좀 과민한 것 같지 않아요? ( bit, oversensitive ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              049 Don’t you think it’s too cold today?<br />
              050 Don’t you think that’s amazing?<br />
              051 Don’t you think it’s a little too soon?<br />
              052 Don’t you think she’s too young for him?<br />
              053 Don’t you think we should ask first?<br />
              054 Don't you think you can save more money in Seoul?<br />
              055 Don't you think you were a little rough on her?<br />
              056 Don't you think you're being a bit oversensitive?<br />
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
