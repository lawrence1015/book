<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/pretty-woman-asking-boyfriend-something_1262-5428.jpg">

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
    border-radius: 30px;" class="black--text">~하고 싶어요
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 44 |  </h2>
                  <br />
                  <h3>I’d like to…</h3>
                    <br />
                    <p>
                      조심스러운 상대에게 자신이 원하는 바를 말할 때는 I want to.. 보다 I’d like to (=I would like to)… 를 쓰는 게 좋다. 쇼핑하면서 용건을 말하거나 식당에서 주문을 할 때도 유용하게 쓸 수 있는 패턴이다.
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
            A : <b>사과하고 싶어요.</b><br />
            B : For what?<br />
            A : For what I said earlier.<br />
            B : Oh, that?
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’d like to apologize.</mark><br />
            B : 뭘요?<br />
            A : 아까 내가 한 말에 대해서요.<br />
            B : 아, 그거요?
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
          <b>345</b> 그것을 입어보고 싶은데요. ( try on ) <br />
              *try on 입어보다, 신어보다.<br />
        </p>
        <p>
          <b>346</b> 머리 스타일을 바꾸고 싶어요. ( change, hairdo ) <br />
        </p>
        <p>
          <b>347</b> 이 사진을 확대하고 싶어요. ( enlarge, picture ) <br />
              *enlarge 확대하다.<br />
        </p>
        <p>
          <b>348</b> 사과하고 싶어요. ( apologize ) <br />
        </p>
        <p>
          <b>349</b> 난 일기를 쓰고 싶어. ( keep a journal ) <br />
        </p>
        <p>
          <b>350</b>  <br />
        </p>
        <p>
          <b>351</b>  <br />
        </p>
        <p>
          <b>352</b>  <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              345 I’d like to try it on.<br />
              346 I’d like to change my hairdo.<br />
              347 I’d like to enlarge this picture.<br />
              348 I’d like to apologize.<br />
              349 I’d like to  keep a journal.<br />
              350 <br />
              351 <br />
              352 <br />
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
