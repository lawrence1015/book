<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/young-friends-with-birthday-cake_23-2147720226.jpg">

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
    border-radius: 30px;" class="black--text">~하다니 정말 고마워
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 100 | </h2>
                  <br />
                  <h3>How nice of you to….</h3>
                    <br />
                    <p>
                     It’s very nice of you.. 처럼 상대방의 행동에 감사의 마음을 전하는 표현이다. How kind of you to… 도 많이 쓰인다.
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
            A : Happy birthday!<br />
            B : What? What are you doing here?<br />
            A : I came here to celebrate your birthday<br />
            B : <b>와줘서 정말 고마워!</b>
          </p>
          <p style="line-height: 2;">
            A : 생일 축하해!<br />
            B : 뭐? 너 여기서 뭐 하는 거야?<br />
            A : 네 생일 축하해주러 왔지.<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">How nice of you to come!</mark>
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
          <b>793</b> 와줘서 정말 고마워! ( come ) <br />
        </p>
        <p>
          <b>794</b> 제안해주셔서 정말 감사드려요! ( offer ) <br />
        </p>
        <p>
          <b>795</b> 그런 말을 해줘서 정말 고마워! ( say so ) <br />
        </p>
        <p>
          <b>796</b> 전부 계산하다니 너 정말 착하구나! ( pay for, everything ) <br />
                  *pay for~ ~에 대한 값을 치르다, 지불하다<br />
        </p>
        <p>
          <b>797</b> 나를 위해 저녁 준비해줘서 정말 고마워! ( prepare, dinner ) <br />
        </p>
        <p>
          <b>798</b>  <br />
        </p>
        <p>
          <b>799</b>  <br />
        </p>
        <p>
          <b>800</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              793 How nice of you to come!<br />
              794 How nice of you to offer!<br />
              795 How nice of you to say so!<br />
              796 How nice of you to pay for everything.<br />
              797 How nice of you to prepare the dinner for me.<br />
              798 How nice of you to join us in this gathering.<br />
              799 How nice of you to give free tokens.<br />
              800 How nice of you to forgive.<br />
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
