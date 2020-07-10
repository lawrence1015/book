<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/young-man-happy-his-new-car_23-2148332982.jpg">

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
    border-radius: 30px;" class="black--text">~를 계속 생각해왔어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 5 | </h2>
                  <br />
                  <h3>I’ve been thinking about…</h3>
                    <br />
                    <p>
                    I was thinking.. 이 과거의 한 시점에서 생각했던 거라면, I’ve been thinking… 은 과거부터 지금까지 계속 생각해왔다는 의미로, 오랫동안 생각해온 것을 나타낸다.
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
            A : We have too many expenses these days.<br />
            B : Times are tough.<br />
            A : <b>난 낡은 차를 팔아버릴까 계속 생각하고 있었어</b><br />
            B : But you love that car!
          </p>
          <p style="line-height: 2;">
            A : 우리 요즘 지출이 너무 많아.<br />
            B : 경기가 너무 안좋으니까.<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’ve been thinking about selling the old car.</mark><br />
            B : 하지만 너 그 차 완전 좋아하잖아!
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
          <b>033</b> 사업을 해볼까 하고 계속 생각해왔어. ( start, business ) <br />
        </p>
        <p>
          <b>034</b> 이혼에 대해 계속 생각해왔어. ( get, divorce  ) <br />
        </p>
        <p>
          <b>035</b> 낡은 차를 팔아버릴까 계속 생각하고 있었어. ( sell, old car ) <br />
        </p>
        <p>
          <b>036</b> 회사를 그만둘까 계속 생각해왔어. ( quit, job ) <br />
        </p>
        <p>
          <b>037</b> 난 그 싱크대를 고칠까 계속 생각하고 있었어. ( fix, sink ) <br />
        </p>
        <p>
          <b>038</b> 돈을 입금할까 생각 중이에요. ( deposit,money ) <br />
        </p>
        <p>
          <b>039</b> 그 노래를 녹음할까 생각 중이에요. ( record,song ) <br />
        </p>
        <p>
          <b>040</b> 임신할까 생각 중이에요. ( get,pregnant ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              033  I’ve been thinking about starting a business.<br />
              034  I’ve been thinking about getting a divorce<br />
              035  I’ve been thinking about selling the old car.<br />
              036  I’ve been thinking about quitting my job.<br />
              037  I’ve been thinking about fixing the sink.<br />
              038  I've been thinking about depositing money.<br />
              039  I've been thinking about recording that song.<br />
              040  I've been thinking about getting pregnant.<br />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container
        <br />

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
