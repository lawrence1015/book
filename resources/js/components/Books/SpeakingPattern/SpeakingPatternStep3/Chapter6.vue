<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/rolling-pin-near-fruits-pastry_23-2147742751.jpgg">

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
    border-radius: 30px;" class="black--text">~할래?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 46 |  </h2>
                  <br />
                  <h3>Do you want to…?</h3>
                    <br />
                    <p>
                    상대방이 원하는 것을 물을 때도 쓰지만, “이거 먹을래>” 처럼 상대방에게 무너가를 제안할 때도 쓰기 좋은 패턴이다. 친구를 사귈 때 유용한 표현이니 자주 사용해보자.
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
            A : That was an excellent dinner.<br />
            B : <b>디저트 좀 먹을래?</b><br />
            A : I’m too full.<br />
            B : Not me. I’m having pie.
          </p>
          <p style="line-height: 2;">
            A : 멋진 저녁식사였어.<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Do you want to have some dessert?</mark><br />
            A : 난 너무 배가 부른데<br />
            B : 난 아니야. 난 파이를 먹을 거야.
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
          <b>361</b> 디저트 좀 먹을래? ( have , dessert ) <br />
        </p>
        <p>
          <b>362</b> 내 사진 볼래? ( see , pictures ) <br />
        </p>
        <p>
          <b>363</b> 나랑 같이 갈래? ( come with ) <br />
        </p>
        <p>
          <b>364</b> 간단히 뭐 좀 먹을까? ( grab a bite ) <br />
              *Grab a bite  간단히 먹다. <br />
        </p>
        <p>
          <b>365</b> 내 이야기를 듣고 싶니? ( listen to, story ) <br />
        </p>
        <p>
          <b>366</b>  <br />
        </p>
        <p>
          <b>367</b>  <br />
        </p>
        <p>
          <b>368</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              361 Do you want to have some dessert?<br />
              362 Do you want to see my pictures?<br />
              363 Do you want to come with me?<br />
              364 Do you want to grab a bite?<br />
              365 Do you want to hear my story?<br />
              366 <br />
              367 <br />
              368 <br />
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
