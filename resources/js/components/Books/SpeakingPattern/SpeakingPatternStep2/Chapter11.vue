<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/blank-advertising-billboard-city-bus-stop_23-2147845893.jpg">

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
    border-radius: 30px;" class="black--text">~가 있어?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 31 |  </h2>
                  <br />
                  <h3>Is there…?</h3>
                    <br />
                    <p>
                    어떤 물건이나 사람을 찾으면서 ‘~가 있나요?’ 하로 물을 때 간편하게 사용할 수 있는 패턴이다. 감정에 공감을 표현할 때도 자주 쓰인다.
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
            A : Can I ask you something?<br />
            B : Yeah, sure. What is it?<br />
            A : <b>이 근처에 버스 정류장 있나요?</b><br />
            B : Yeah, it’s right next to that building.
          </p>
          <p style="line-height: 2;">
            A : 뭣 좀 여쭤봐도 될까요?<br />
            B : 네, 그러세요. 뭔데요?<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Is there a bus stop around here?</mark><br />
            B : 네, 바로 저 건물 옆에 있어요.
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
          <b>241</b> 근처에 은행이 있어? ( bank, nearby ) <br />
        </p>
        <p>
          <b>242</b> 여기 의사 있나요? ( doctor, here )<br />
        </p>
        <p>
          <b>243</b> 이 근처에 버스 정류장 있나요? ( bus stop, around ) <br />
        </p>
        <p>
          <b>244</b> 뭐 문제가 있어? ( problem ) <br />
        </p>
        <p>
          <b>245</b> 벽장에 우산 있니? (umbrella, closet) <br />
        </p>
        <p>
          <b>246</b> <br />
        </p>
        <p>
          <b>247</b> <br />
        </p>
        <p>
          <b>248</b> <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              241 Is there a bank nearby?<br />
              242 Is there a doctor here?<br />
              243 Is there a bus stop around here<br />
              244 Is there a problem?<br />
              245 Is there an umbrella in the closet?<br />
              246 <br />
              247 <br />
              248 <br />
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
