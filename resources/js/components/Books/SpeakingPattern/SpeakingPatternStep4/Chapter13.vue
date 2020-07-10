<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://media.wired.com/photos/5b688e6a4644980a2c29a1a9/16:9/w_2300,h_1294,c_limit/TomCruise-1000200844.jpg">

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
    border-radius: 30px;" class="black--text">넌 ~를 못 믿을 거야
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 73 | 넌 ~를 못 믿을 거야 </h2>
                  <br />
                  <h3>You wouldn’t believe…</h3>
                    <br />
                    <p>
                    믿기 어려울 만큼 기쁜 소시이나 충격적인 소식을 전할 때 약간 수선을 떨면서 이 패턴을 사용해보자.
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
            A : <b>내가 오늘 누굴 봤는지 넌 못 믿을걸.</b><br />
            B : Who did you see?<br />
            A : Tom Cruise<br />
            B : What? I don’t believe you.
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">You wouldn’t believe who I saw today.</mark><br />
            B : 누굴 봤는데?<br />
            A : 톰 크루즈.<br />
            B : 뭐 네 말 못 믿겠어.
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
          <b>577</b> 내가 오늘 누굴 봤는지 넌 못 믿을 거야. ( saw ) <br />
        </p>
        <p>
          <b>578</b> 방금 무슨 일이 있었는지 넌 못 믿을 거야. ( happened ) <br />
        </p>
        <p>
          <b>579</b> 내가 방금 무슨 얘기를 들었는지 넌 못 믿을 거야. ( heard ) <br />
        </p>
        <p>
          <b>580</b> 넌 잭의 성질을 못 믿을 거야. ( temper ) <br />
                *temper  성질, 화<br />
        </p>
        <p>
          <b>581</b> 넌 내가 오늘 뭘 해야 했는지 못 믿을 거야. ( what, have to ) <br />
        </p>
        <p>
          <b>582</b>  <br />
        </p>
        <p>
          <b>583</b>  <br />
        </p>
        <p>
          <b>584</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              577 You wouldn’t believe who I saw today.<br />
              578 You wouldn’t believe what just happened.<br />
              579 You wouldn’t believe what I just heard.<br />
              580 You wouldn’t believe Jack’s temper.<br />
              581 You wouldn’t believe what I had to do.<br />
              582 <br />
              583 <br />
              584 <br />
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
