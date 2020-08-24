<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/man-relaxing-sofa-home_23-2147689401.jpg">

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
    border-radius: 30px;" class="black--text">~한 게 있나요?</h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 33 |  </h2>
                  <br />
                  <h3>Is there anything…?</h3>
                    <br />
                    <p>
                    혹시나 뭔가가 있는지 없는지 물어볼 때 쓴다는 점에서 Is there any…? 와 비슷하다. 다만 Is there any뒤에는 명사를 붙이고, Is there anything 뒤에는 anything을 수식하는 구나 절을 붙인다.
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
            A : <b>텔레비전에서 뭐 재미있는 거 하니?</b><br />
            B : Not really. I’m just flipping channels.<br />
            A : Why don’t we just rent a movie then?<br />
            B : That sounds good.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Is there anything good on TV?</mark><br />
            B : 아니, 그냥 (뭐 하나) 채널 돌리고 있는 중이야.<br />
            A : 그럼 영화나 빌려 볼까?<br />
            B : 그거 좋지.<br />
            * Flip channels 채널을 이리저리 돌리다.
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
          <b>257</b> 텔레비전에서 뭐 재미있는 거 하니? ( good, on TV ) <br />
        </p>
        <p>
          <b>258</b> 더 이른 것은 없나요? ( earlier ) <br />
        </p>
        <p>
          <b>259</b> 뭐 필요한 거 있어? ( need ) <br />
        </p>
        <p>
          <b>260</b> 내가 널 위해 할 수 있는 게 뭐 없을까? ( can, do ) <br />
        </p>
        <p>
          <b>261</b> 더 치워야 할 것들이 있어? ( left, clean up ) <br />
        </p>
        <p>
          <b>262</b> <br />
        </p>
        <p>
          <b>263</b> <br />
        </p>
        <p>
          <b>264</b> <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              257 Is there anything good on TV?<br />
              258 Is there anything earlier?<br />
              259 Is there anything you need?<br />
              260 Is there anything I can do for you?<br />
              261 Is there anything left to clean up?<br />
              262 Is there anything you want to say?<br />
              263 Is there anything else?<br />
              264 Is there anything we could do?<br />
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
