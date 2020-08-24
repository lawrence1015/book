<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/friends-ready-grab-slice-pizza_1098-3188.jpg">

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
    border-radius: 30px;" class="black--text">뭘~하고 싶어?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 48 |  </h2>
                  <br />
                  <h3>What do you want to…?</h3>
                    <br />
                    <p>
                    상대방에게 구체적으로 무엇을 하고 싶은지 물을 때는 do you want to 앞에 what(무엇)을 붙여서 물어보면 된다.
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
            A : I’m hungry.<br />
            B : Me too.<br />
            A : <b>점심 뭐 먹고 싶어?</b><br />
            B : Anything is fine with me.
          </p>
          <p style="line-height: 2;">
            A : 배고파.<br />
            B : 나도<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">What do you want to eat for lunch?</mark><br />
            B : 난 아무거나 괜찮아.
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
          <b>377</b> 뭘 마시고 싶어? ( drink ) <br />
        </p>
        <p>
          <b>378</b> 듣고 싶은 게 뭐야? ( hear ) <br />
        </p>
        <p>
          <b>379</b> 점심 뭐 먹고 싶어? ( eat, for lunch ) <br />
        </p>
        <p>
          <b>380</b> 졸업한 다음에 뭘 하고 싶어요? ( do, after graduation ) <br />
        </p>
        <p>
          <b>381</b> 말하고 싶은 게 뭐예요? ( say ) <br />
        </p>
        <p>
          <b>382</b>  <br />
        </p>
        <p>
          <b>383</b>  <br />
        </p>
        <p>
          <b>384</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              377 What do you want to drink?<br />
              378 What do you want to hear?<br />
              379 What do you want to eat for lunch?<br />
              380 What do you want to do after graduation?<br />
              381 What do you want to say?<br />
              382 What do you want to talk about?<br />
              383 What do you want to know about this topic?<br />
              384 What do you want to see first?<br />
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
