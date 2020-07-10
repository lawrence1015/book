<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/front-view-male-mechanical-working_23-2148327536.jpg">

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
    border-radius: 30px;" class="black--text">~가 많나요?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 35 |  </h2>
                  <br />
                  <h3>Are there many…?</h3>
                    <br />
                    <p>
                    Are there many…? 는 ‘~가 많은지’ 여부를 묻는 질문이다. Many 다음에는 복수명사가 온다는 것을 명심하자.
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
            B : How much will it cost?<br />
            A : I’m told it will be $1,000 or more.<br />
            B : That much? <b>이번 달에 낼 청구서가 많나?</b>
          </p>
          <p style="line-height: 2;">
            A : 우리 차 고쳐야 되는데.<br />
            B : 얼마나 나올까?<br />
            A : 1,000달러는 나온다고 하더라.<br />
            B : 그렇게 많이? <mark style="background-color: #a7d7c5; color: #d9e7cd;">Are there many bills to pay this month?</mark>
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
          <b>273</b> 쇼핑할 곳이 많나요? ( place, to shop ) <br />
        </p>
        <p>
          <b>274</b> 볼 곳이 많나요? (  site, to see ) <br />
        </p>
        <p>
          <b>275</b> 이 수업에 학생들이 많나요? ( students, class ) <br />
        </p>
        <p>
          <b>276</b> 이번 달에 낼 청구서가 많아요? ( bills, to pay ) <br />
        </p>
        <p>
          <b>277</b> 한국에는 직장을 옮기는 사람이 많나요? ( job-hoppers ) <br />
        </p>
        <p>
          <b>278</b>  <br />
        </p>
        <p>
          <b>279</b>  <br />
        </p>
        <p>
          <b>280</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              273 Are there many places to shop?<br />
              274 Are there many sites to see?<br />
              275 Are there many students in this class?<br />
              276 Are there many bills to pay this month?<br />
              278 Are there many job-hoppers in Korea?<br />
              279 <br />
              280 <br />
              281 <br />
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
