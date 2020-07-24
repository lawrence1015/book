<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://static.seattletimes.com/wp-content/uploads/2017/04/04162017_grasshoppers_140435-780x520.jpg">

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
    border-radius: 30px;" class="black--text">내가 ~하는 건 불가능해
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 38 |  </h2>
                  <br />
                  <h3>There’s no way I can…</h3>
                    <br />
                    <p>
                    ‘난 절대~못해’, ‘~하는 건 불가능해’ 처럼 자신이 할 수 없다고 강력하게 말할 때, 할 수 없는 상황이라고 단호히 거절할 때 사용하면 좋은 패턴이다.
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
            A : You should try these fried grasshoppers<br />
            B : <b>난 그거 절대 못 먹어.</b><br />
            A : They’re better than you think.<br />
            B : I’ll take your word for it.
          </p>
          <p style="line-height: 2;">
            A : 이 메뚜기 튀김 좀 먹어봐<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">They’re better than you think.</mark><br />
            A : 내가 생각하는 것보다 괜찮다니까.<br />
            B : 그 말 한번 믿어볼게.<br />
            *take A’s word for it   A의 말을 믿다.
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
          <b>297</b> 내가 제시간에 거기에 가는 건 불가능해. ( be there, on time ) <br />
        </p>
        <p>
          <b>298</b> 난 그거 절대 못 먹어. ( eat ) <br />
        </p>
        <p>
          <b>299</b> 나는 절대 그 사람을 용서할 수 없어.( forgive ) <br />
        </p>
        <p>
          <b>300</b> 난 이거 절대 못 해. ( do, this ) <br />
        </p>
        <p>
          <b>301</b> 이걸 오늘 밤까지 끝내는 건 불가능해. ( finish, tonight ) <br />
        </p>
        <p>
          <b>302</b>  <br />
        </p>
        <p>
          <b>303</b>  <br />
        </p>
        <p>
          <b>304</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              297 There’s no way I can be there on time.<br />
              298 There’s no way I can eat them.<br />
              299 There’s no way I can forgive him.<br />
              300 There’s no way I can do this.<br />
              301 There’s no way I can finish it by tonight.<br />
              302 <br />
              303 <br />
              304 <br />
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
