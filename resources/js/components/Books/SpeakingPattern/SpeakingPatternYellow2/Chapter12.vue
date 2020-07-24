<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/top-view-professional-dslr-camera-yellow-background_23-2148038951.jpg">

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
    border-radius: 30px;" class="black--text">~가 좀 있니?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 32 |  </h2>
                  <br />
                  <h3>Is there any…?</h3>
                    <br />
                    <p>
                    Is there 뒤에 any가 붙으면 ‘어떤 ~라도 좀 있나요?’ 라는 뜻이다. 조금이라도 있는지, 혹시나 있는지 물어볼 때 사용하면 된다.
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
            A : I’m thinking about buying a digital camera.<br />
            B : If so, get a DX or CX.<br />
            A : <b>다른 점이라도 있어?</b><br />
            B : Nah, they’re almost the same.
          </p>
          <p style="line-height: 2;">
            A : 디카 살까 생각 중이야.<br />
            B : 그러면 DX나 CX로 사.<br />.
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Is there any difference (between them)?</mark><br />
            B : 아니, 거의 똑같아.
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
          <b>249</b> 희망이 조금이라도 있는 거야? ( hope ) <br />
        </p>
        <p>
          <b>250</b> 다른 점이라도 있어? ( difference ) <br />
        </p>
        <p>
          <b>251</b> 팝콘이 남은 게 좀 있니? ( popcorn, left ) <br />
        </p>
        <p>
          <b>252</b> 스티브를 의심할 만한 이유가 있는 거야? ( reason, doubt)  <br />
        </p>
        <p>
          <b>253</b> 식용유 좀 있니? (cooking oil) <br />
        </p>
        <p>
          <b>254</b>  <br />
        </p>
        <p>
          <b>255</b>  <br />
        </p>
        <p>
          <b>256</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              249 Is there any hope?<br />
              250 Is there any difference?<br />
              251 Is there any popcorn left?<br />
              252 Is there any reason to doubt Steve?<br />
              253 Is there any cooking oil?<br />
              254 <br />
              255 <br />
              256 <br />
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
