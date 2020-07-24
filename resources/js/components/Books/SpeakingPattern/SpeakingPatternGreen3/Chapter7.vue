<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/two-young-friends-sitting-penny-skateboard-street-showing-peace-sign_158538-10684.jpg">

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
    border-radius: 30px;" class="black--text">~하지 않을래
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 47 |  </h2>
                  <br />
                  <h3>Don’t you wanna….?</h3>
                    <br />
                    <p>
                    Don’t you want to…? 하면 ‘~하고 싶지 않니?’, 즉 ‘~하지 않을래?’라는 뜻이다. 말할 때는 보통 want to 를 wanna로 줄여서 Don’t you wanna…? 라고 한다.
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
            A : It's so bright out here.<br />
            B : I know. <b>선글라스 쓰지 그래?</b><br />
            A : I forgot to bring them.<br />
            B : I have an extra pair.
          </p>
          <p style="line-height: 2;">
            A : 밖이 너무 밝은데.<br />
            B : 그러게. <mark style="background-color: #a7d7c5; color: #d9e7cd;">Don’t you wanna wear your sunglasses?</mark><br />
            A : 그냥 네가 좀 긴장한 것 같아서.<br />
            B : 마음이 복잡해서 그래
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
          <b>369</b> 우리랑 같이 하지 않을래? ( join ) <br />
        </p>
        <p>
          <b>370</b> 더 알고 싶지 않니? ( know , anything ) <br />
        </p>
        <p>
          <b>371</b> 운전하는 거 배우지 않을래? ( learn , how to ) <br />
        </p>
        <p>
          <b>372</b> 선글라스 쓰지 그래? ( wear ) <br />
        </p>
        <p>
          <b>373</b> 거기에 가고 싶지 않니?  ( go there ) <br />
        </p>
        <p>
          <b>374</b>  <br />
        </p>
        <p>
          <b>375</b>  <br />
        </p>
        <p>
          <b>376</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              369 Don’t you wanna join us?<br />
              370 Don’t you wanna know anything more?<br />
              371 Don’t you wanna learn how to drive?<br />
              372 Don’t you wanna wear your sunglasses?<br />
              373 Don’t you wanna go there?<br />
              374 <br />
              375 <br />
              376 <br />
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
