<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/woman-using-mobile-while-car_53876-40315.jpg">

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
    border-radius: 30px;" class="black--text">~할 방법이 없을까요?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 36 | </h2>
                  <br />
                  <h3>Is there any way…?</h3>
                    <br />
                    <p>
                    Way는 ‘길’이라는 뜻 외에 ‘방법’이라는 의미로 많이 쓰인다. 뭐라도 좋으니 어떤 방법이 있을까 하는 마음에서 물을 때는 any를 붙여서 위와 같이 물어보자
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
            A : Is Phil home?<br />
            B : No, he’s not.<br />
            A : <b>그 애랑 연락할 방법이 뭐 없을까요?</b><br />
            B : Try his cell phone.
          </p>
          <p style="line-height: 2;">
            A : 필 집에 있어요?<br />
            B : 아뇨, 없는데요.<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Is there any way I can reach him?</mark><br />
            B : 휴대폰으로 전화해보세요.
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
          <b>281</b> 제가 도와드릴 방법이 뭐 없을까요? ( place, to shop )  <br />
        </p>
        <p>
          <b>282</b> 그 사람이랑 연락할 방법이 뭐 없을까요? (  site, to see ) <br />
        </p>
        <p>
          <b>283</b> 알아낼 방법이 뭐 없을까요? ( students, class ) <br />
        </p>
        <p>
          <b>284</b> 그것을 개선시킬 수 있는 방법이 뭐 없을까요? ( bills, to pay ) <br />
        </p>
        <p>
          <b>285</b> 나를 도와주실 방법이 없겠습니까? ( help ) <br />
        </p>
        <p>
          <b>286</b>  <br />
        </p>
        <p>
          <b>287</b>  <br />
        </p>
        <p>
          <b>288</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              281 Is there any way I can help?<br />
              282 Is there any way I can reach him?<br />
              283 Is there any way to find out?<br />
              284 Is there any way to make it better?<br />
              285 Is there any way to help me?<br />
              286 <br />
              287 <br />
              288 <br />
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
