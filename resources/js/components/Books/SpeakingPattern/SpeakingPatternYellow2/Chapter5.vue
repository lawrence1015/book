<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/old-man-putting-baked-chicken-festive-table_23-2147973655.jpg">

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
    border-radius: 30px;" class="black--text">분명 ~가 있을 거야.
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 25 |  </h2>
                  <br />
                  <h3>There must be…</h3>
                    <br />
                    <p>
                    There is(~가 있다)와 must (~임에 틀림없다) 가 만나면 ‘분명히 ~가 있을 거야’ 라는 뜻이 된다. 알아두면 무척 유용한 표현이다.
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
            A : Do you want to have dinner at BBQ?<br />
            B : Hmm…<br />
            A : Why?<br />
            B : It’s Christmas Eve today, so <b>거기에 사람들이 분명 많이 올 거야.</b>
          </p>
          <p style="line-height: 2;">
            A : BBQ에서 저녁 먹을래?<br />
            B : 흠…<br />
            A : 왜?<br />
            B : 오늘은 크리스마스 이브잖아. 그래서 <mark style="background-color: #a7d7c5; color: #d9e7cd;">there must be a lot of people there.</mark>
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
          <b>193</b> 맥주가 분명히 더 있을 텐데. ( more ) <br />
        </p>
        <p>
          <b>194</b> 분명 더 나은 방법이 있을 거야. ( better way ) <br />
        </p>
        <p>
          <b>195</b> 거기에 사람들이 분명 많이 올 거야. ( a lot of, there ) <br />
        </p>
        <p>
          <b>196</b> 담당자가 분명히 있을 거야. ( someone, in charge  ) <br />
        </p>
        <p>
          <b>197</b> 볼륨을 조절할 방법이 분명히 있을 거야. ( way, control, volume ) <br />
        </p>
        <p>
          <b>198</b>  <br />
        </p>
        <p>
          <b>199</b>  <br />
        </p>
        <p>
          <b>200</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              193 There must be more beer.<br />
              194 There must be a better way.<br />
              195 There must be a lot of people there.<br />
              196 There must be someone in charge. <br />
              197 There must be a way to control the volume.<br />
              198 <br />
              199 <br />
              200 <br />
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
