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
    border-radius: 30px;" class="black--text">난 정말 ~하고 싶어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 45 | </h2>
                  <br />
                  <h3>I’m dying to…</h3>
                    <br />
                    <p>
                    우리도 “배고파 죽겠어.”, “힘들어 죽겠어.” 처럼 ‘~해서 죽겠어’ 라는 말을 뒤에 자주 붙이는데, I’m dying to…도 그런 맥락으로 무언가를 간절히 하고 싶을 때 쓸 수 있다.
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
          <p style="line-height: 2;"
            A : It’ll be fun to fix up this old house.<br />
            B : <b>난 얼른 시작하고 싶어.</b><br />
            A : We should start with the roof.<br />
            B : I’ll get a repair estimate.
          </p>
          <p style="line-height: 2;">
            A : 이 오래된 집을 고치는 건 재미있을 거야.<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’m dying to get started.</mark><br />
            A : 우린 지붕부터 시작해야 해.<br />
            B : 수리 견적을 짜서 올게.<br />

              *fix up  수리하다, 개조하다.  Estimate  견적.
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
          <b>353</b> 난 정말 그 영화 보고 싶어. ( see , movie ) <br />
        </p>
        <p>
          <b>354</b> 난 정말 유럽여행을 하고 싶어. ( go on , trip ) <br />
        </p>
        <p>
          <b>355</b> 난 얼른 시작하고 싶어. ( get started ) <br />
        </p>
        <p>
          <b>356</b> 난 그 소식을 듣고 싶어 미치겠어. ( hear , news ) <br />
        </p>
        <p>
          <b>357</b> 그 여자의 아기를 정말 보고 싶은데. ( see, baby ) <br />
        </p>
        <p>
          <b>358</b>  <br />
        </p>
        <p>
          <b>359</b>  <br />
        </p>
        <p>
          <b>360</b>  <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              353 I’m dying to see that movie.<br />
              354 I’m dying to go on a trip to Europe.<br />
              355 I’m dying to get started.<br />
              356 I’m dying to hear the news<br />
              357 I’m dying to see her baby.<br />
              358 <br />
              359 <br />
              360 <br />
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
