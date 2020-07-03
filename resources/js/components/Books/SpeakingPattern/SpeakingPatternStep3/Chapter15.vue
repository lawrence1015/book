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
    border-radius: 30px;" class="black--text">~하는 게 좋겠어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 55 |  </h2>
                  <br />
                  <h3>We’d better…</h3>
                    <br />
                    <p>
                    이 패턴 역시 뭔가를 제안하는 말이지만, 제안대로 하지 않으면 뭔가 안 좋은 일이 일어날 거라는 전제가 깔려있다. 즉 강한 권고의 표현이다.
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
            A : We have to get the car fixed.<br />
            B : <b>줄을 서는 게 좋겠어.</b><br />
            A : What if we can’t get concert tickets?<br />
            B : We’ll just have to try.
          </p>
          <p style="line-height: 2;">
            A : 와, 여기 사람들 많네.<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">We’d better get in line.</mark><br />
            A : 우리가 표를 못 구하면?<br />
            B : (그래도 구할 수 있나) 노력해봐야겠지.
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
          <b>295</b> 준비를 하는 게 좋겠어. ( get prepared ) <br />
        </p>
        <p>
          <b>296</b> 예약을 하는 게 좋겠어. ( make a reservation ) <br />
              *make a reservation  예약하다. <br />
        </p>
        <p>
          <b>297</b> 줄을 서는 게 좋을 것 같아. ( get in line ) <br />
              *get in line 줄을 서다.<br />
        </p>
        <p>
          <b>298</b> 두 눈 똑바로 뜨고 있는 게 좋겠어.( keep our eyes open ) <br />
        </p>
        <p>
          <b>299</b> 우리 이제 서로 만나지 않는 게 좋겠어. ( stop, see, each, other ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              295 We’d better get prepared.<br />
              296 We’d better make a reservation.<br />
              297 We’d better get in line.<br />
              298 We’d better keep our eyes open.<br />
              299 We’d better stop seeing each other.<br />
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
