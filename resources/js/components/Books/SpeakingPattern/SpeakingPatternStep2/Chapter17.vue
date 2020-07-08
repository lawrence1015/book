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
    border-radius: 30px;" class="black--text">~하는 건 불가능해
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 37 |  </h2>
                  <br />
                  <h3>There’s no way…</h3>
                    <br />
                    <p>
                    There’s no way…하면 ‘~할 방법이 없다.’ 즉 ‘문가가 불가능하다’ 라는 뜻이다. 더 나아가서 ‘그럴 리가 없다’는 의미로도 사용된다.
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
            A : It’s freezing in here. Haven’t you fixed the heater?<br />
            B : <b>그걸 고치는 건 불가능해.</b><br />
            A : What’s the problem?<br />
            B : The thermostat is broken.
          </p>
          <p style="line-height: 2;">
            A : 여기 너무 춥다. 히터 안 고쳤어?<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">There’s no way to fix it.</mark><br />
            A : 뭐가 문젠데?<br />
            B : 온도조절장치가 고장 났거든.<br />
            *thermostat 자동온도조절장치
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
          <b>289</b> 그걸 고치는 건 불가능해. ( fix ) <br />
        </p>
        <p>
          <b>290</b> 그 게임을 이길 방법이 없어. ( win, the game ) <br />
        </p>
        <p>
          <b>291</b> 그 애가 이걸 알고 있을 리 없어. ( know ) <br />
        </p>
        <p>
          <b>292</b> 그 여자가 고작 스물다섯일 리가 없어. ( only ) <br />
        </p>
        <p>
          <b>293</b> 금요일까지 거기에 가는 건 불가능해. (get there, Friday) <br />
        </p>
        <p>
          <b>294</b>  <br />
        </p>
        <p>
          <b>295</b>  <br />
        </p>
        <p>
          <b>296</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              289 There’s no way to fix it.<br />
              290 There’s no way to win the game<br />
              291 There’s no way she knows about this.<br />
              292 There’s no way she’s only 25.<br />
              293 There’s no way to get there by Friday.<br />
              294 <br />
              295 <br />
              296 <br />
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
