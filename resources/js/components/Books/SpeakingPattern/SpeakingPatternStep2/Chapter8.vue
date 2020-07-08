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
    border-radius: 30px;" class="black--text">~하는 사람은 아무도 없어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 28 | ~하는 사람은 아무도 없어 </h2>
                  <br />
                  <h3>There’s no one… </h3>
                    <br />
                    <p>
                    There’s no one.. 은 “남은 사람 없는데.”, “그런 사람 없어요.” 처럼 ‘~한 사람이 아무도 없다’라는 표현이다. No one 뒤에는 no one을 수식하는 구나 절을 붙이면 된다.
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
            A : Could I speak to Phil, please?<br />
            B : Phil? <b>그런 이름 가진 사람 여기 없는데요.</b><br />
            A : Is your number 249-7667?<br />
            B : No, you’ve got the wrong number.
          </p>
          <p style="line-height: 2;">
            A : 필 좀 바꿔주시겠어요?<br />
            B : Phil 이요? <mark style="background-color: #a7d7c5; color: #d9e7cd;"></mark><br />
            A : 249-7667 아닌가요?<br />
            B : 아니오, 전화 잘못 거셨습니다.
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
          <b>217</b> 남은 사람은 아무도 없어. ( left ) <br />
        </p>
        <p>
          <b>218</b> 믿을 수 있는 사람이 전혀 없어요. ( trust ) <br />
        </p>
        <p>
          <b>219</b> 데이트하고 싶은 사람이 한 명도 없어요. ( want, date ) <br />
        </p>
        <p>
          <b>220</b> 그런 이름 가진 사람 여기 없는데요. ( here, by that name ) <br />
        </p>
        <p>
          <b>221</b> 그 일에 더 적합한 사람은 아무도 없어요. ( better, job ) <br />
        </p>
        <p>
          <b>222</b>  <br />
        </p>
        <p>
          <b>223</b>  <br />
        </p>
        <p>
          <b>224</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              217 There’s no one left.<br />
              218 There’s no one I can trust.<br />
              219 There’s no one I want to date.<br />
              220 There’s no one here by that name.<br />
              221 There’s no one better than that job.<br />
              222 <br />
              223 <br />
              224 <br />
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
