
<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/night-view-opera-house-odessa_1153-3599.jpg">

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
    border-radius: 30px;" class="black--text">~할 시간이 없어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 29 |  </h2>
                  <br />
                  <h3>There’s no time to…</h3>
                    <br />
                    <p>
                    ‘시간이 있다/없다’ 하는 말은 하루에도 수없이 사용하게 된다. 너무 바빠서 뭔가를 할 시간이 없을 때, 상대방을 재촉할 때 이 패턴을 활용해보자.
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
            A : We need to get to the opera.<br />
            B : Let me just change my clothes.<br />
            A : <b>옷 갈아입을 시간이 없어.</b><br />
            B : All right. Let’s go.
          </p>
          <p style="line-height: 2;">
            A : 우리 오페라 보러 가야 돼.<br />
            B : 옷만 갈아입고.<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">There’s no time to change.</mark><br />
            B : 알았어. 가자.
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
          <b>225</b> 옷 갈아입을 시간이 없어. ( change ) <br />
        </p>
        <p>
          <b>226</b> 말싸움할 시간 없어. ( argue ) <br />
        </p>
        <p>
          <b>227</b> 휴식을 취할 시간도 없어. ( relax ) <br />
        </p>
        <p>
          <b>228</b> 저녁 먹을 시간이 없어. ( dinner ) <br />
        </p>
        <p>
          <b>229</b> 영화 볼 시간이 없어.( see, movie ) <br />
        </p>
        <p>
          <b>230</b> <br />
        </p>
        <p>
          <b>231</b> <br />
        </p>
        <p>
          <b>232</b> <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              225 There’s no time to change.<br />
              226 There’s no time to argue.<br />
              227 There’s no time to relax.<br />
              228 There’s no time to have dinner.<br />
              229 There’s no time to see a movie.<br />
              230 <br />
              231 <br />
              232 <br />
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
