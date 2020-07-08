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
    border-radius: 30px;" class="black--text">더~하는 방법이 있어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 39 |  </h2>
                  <br />
                  <h3>There’s a 비교급 way to….</h3>
                    <br />
                    <p>
                    더 쉬운 방법, 더 빠른 방법 등 ‘더~한 방법이 있다’고 말할 때는 way앞에 비교급을 써서 말하면 된다.
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
            A : Why are you taking this road?<br />
            B : It’s the only road I know.<br />
            A : <b>거기 가는 더 빠른 길이 있는데</b><br />
            B : Oh, really? I had no idea.
          </p>
          <p style="line-height: 2;">
            A : 왜 이 길로 가는 거야?<br />
            B : 난 이 길밖에 모르거든.<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">There’s a faster way to get there.</mark><br />
            B : 어, 정말? 몰랐어.
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
          <b>305</b> 거기 가는 더 빠른 길이 있어. ( get, there ) <br />
        </p>
        <p>
          <b>306</b> 이것을 더 쉽게 요리하는 방법이 있어. ( cook ) <br />
        </p>
        <p>
          <b>307</b> 그런 말을 더 듣기 좋게 하는 방법이 있단다. ( say, that ) <br />
        </p>
        <p>
          <b>308</b> 그 남자의 관심을 끌 더 좋은 방법이 있어. (  get, attention ) <br />
        </p>
        <p>
          <b>309</b> 더 빨리 물을 끓일 방법이 있어. ( boil, water ) <br />
        </p>
        <p>
          <b>310</b>  <br />
        </p>
        <p>
          <b>311</b>  <br />
        </p>
        <p>
          <b>312</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              305 There’s a faster way to get there.<br />
              306 There’s an easier way to cook this.<br />
              307 There’s a nicer way to say that.<br />
              308 There’s a better way to get his attention.<br />
              309 There’s a quicker way to boil water.<br />
              310 <br />
              311 <br />
              312 <br />
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
