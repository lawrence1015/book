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
    border-radius: 30px;" class="black--text">~가 없어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 26 |  </h2>
                  <br />
                  <h3>There’s no</h3>
                    <br />
                    <p>
                    ‘~가 없다’고 말할 때는 There is not.. 을 써도 되지만, 그보다 There’s no… 패턴이 더 많이 쓰인다. No를 사용하면 ‘없다’는 의미를 좀 더 강조하는 뉘앙스를 주기 때문인 것 같다.
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
            A : Can you work on this?<br />
            B : Yeah, sure. How soon do you need it?<br />
            A : <b>서두를 필요는 없어요. </b>Just take your time.<br />
            B : I got it.
          </p>
          <p style="line-height: 2;">
            A : 이것 좀 작업해줄래요?<br />
            B : 네, 물론이죠. 얼마나 빨리 필요하세요?<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">There’s no rush.</mark> 그냥 천천히 하세요.<br />
            B : 알겠습니다.
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
          <b>201</b> 서두를 필요 없어. ( rush ) <br />
        </p>
        <p>
          <b>202</b> 선택의 여지가 없네. ( choice ) <br />
        </p>
        <p>
          <b>203</b> 의심의 여지가 없군. ( doubt ) <br />
        </p>
        <p>
          <b>204</b> 그렇다는 증거가 없잖아. ( proof ) <br />
        </p>
        <p>
          <b>205</b> 희망이 없어. ( hope ) <br />
        </p>
        <p>
          <b>206</b> 희망이 없어. ( hope ) <br />
        </p>
        <p>
          <b>207</b> 희망이 없어. ( hope ) <br />
        </p>
        <p>
          <b>208</b> 희망이 없어. ( hope ) <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              201 There’s no rush.<br />
              202 There’s no choice.<br />
              203 There’s no doubt about it.<br />
              204 There’s no proof of that.<br />
              205 There’s no hope.<br />
              206 There’s no hope.<br />
              207 There’s no hope.<br />
              208 There’s no hope.<br />
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

li{


}

body{

  font-size: 16px;
}

</style>
