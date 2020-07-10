<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/portrait-unsatisfied-woman-eyeglasses_171337-3716.jpg">

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
    border-radius: 30px;" class="black--text">~하다니 실망이야
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 79 |  </h2>
                  <br />
                  <h3>I’m disappointed that…</h3>
                    <br />
                    <p>
                    I’m disappointed… 는 ‘나는 ~에 실망했어’라는 뜻으로, that 다음에 실망한 이유를 덧붙여서 문장을 만들면 된다.
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
            A : Jerry has never done this before.<br />
            B : What was he thinking?<br />
            A : He was probably trying to stay out of trouble.<br />
            B : But still, <b>그 애가 나에게 거짓말을 했다는 게 실망스러워.</b>
          </p>
          <p style="line-height: 2;">
            A : 제리는 전에 한 번도 이러지 않았어.<br />
            B : 무슨 생각을 하고 있었던 걸까?<br />
            A : 아마 말썽을 피하려고 했겠지.<br />
            B : 아무리 그래도 그렇지, <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’m disappointed that he lied to me.</mark><br />

            *stay out of trouble  말썽을 피하다
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
          <b>625</b> 우리가 져서 실망했어. ( lose ) <br />
        </p>
        <p>
          <b>626</b> 그 애가 나에게 거짓말을 했다는 게 실망스러워. ( lie ) <br />
        <p>
          <b>627</b> 네가 그런 식으로 생각하다니 실망이야. ( feel, that way ) <br />
        </p>
        <p>
          <b>628</b> 우리가 휴가를 못 갈 거라니 실망이야. ( get, vacation ) <br />
        </p>
        <p>
          <b>629</b> 난 그게 충분히 좋지 않아서 실망스러워. ( good enough ) <br />
        </p>
        <p>
          <b>630</b>  <br />
        </p>
        <p>
          <b>631</b>  <br />
        </p>
        <p>
          <b>632</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              625 I’m disappointed that we lost.<br />
              626 I’m disappointed that he lied to me.<br />
              627 I’m disappointed that you feel that way.<br />
              628 I’m disappointed that we won’t get a vacation.<br />
              629 I’m disappointed that it is not good enough.<br />
              630 <br />
              631 <br />
              632 <br />
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
