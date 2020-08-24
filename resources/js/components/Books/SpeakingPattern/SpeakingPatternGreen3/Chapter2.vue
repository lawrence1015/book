<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/twin-brothers-talking-through-tin-phone_1368-3183.jpg">

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
    border-radius: 30px;" class="black--text">난 단지 ~하고 싶었어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 42 |  </h2>
                  <br />
                  <h3>I just wanted to….</h3>
                    <br />
                    <p>
                    ‘난 ~하고 싶었어’ 라고 하려면 I wanted to… 를 사용하면 되는데, 여기에 just를 넣어면 ‘난 단지 ~하고 싶었을 뿐이야’ 라고 조심스럽게 또는 겸손하게 말하는 느낌을 준다.
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
            A : Hello?<br />
            B : Hi, Phil. It’s Tom.<br />
            A : Hello, Tom. What’s up?<br />
            B : <b>그냥 안부 인사나 하려고 (전화했어)</b>
          </p>
          <p style="line-height: 2;">
            A : 여보세요?<br />
            B : 안녕, 필. 나야, 톰.<br />
            A : 안녕, 톰 무슨 일이야?<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I just wanted to say hi.</mark>
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
          <b>329</b> 난 단지 새것을 써보고 싶었어. ( try, something new ) <br />
        </p>
        <p>
          <b>330</b> 난 단지 너에게 고맙다고 하고 싶었어. ( thank ) <br />
        </p>
        <p>
          <b>331</b> 그냥 안부 인사를 하고 싶었어. ( say hi ) <br />
        </p>
        <p>
          <b>332</b> 난 단지 너를 놀라게 해주고 싶었을 뿐이야. ( surprise ) <br />
        </p>
        <p>
          <b>333</b> 난 단지 거기에서 나오고 싶었어요. ( get out of ) <br />
        </p>
        <p>
          <b>334</b>  <br />
        </p>
        <p>
          <b>335</b>  <br />
        </p>
        <p>
          <b>336</b>  <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              329 I just wanted to try something new.<br />
              330 I just wanted to thank you.<br />
              331 I just wanted to say hi.<br />
              332 I just wanted to surprise you.<br />
              333 I just wanted to get out of there.<br />
              334 I just wanted to apologize.<br />
              335 I just wanted to see you.<br />
              336 I just wanted to get there safely.<br />
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
