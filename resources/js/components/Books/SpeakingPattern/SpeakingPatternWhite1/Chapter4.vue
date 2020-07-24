<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/man-talking-with-his-friend-bar_171337-19359.jpg">

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
    border-radius: 30px;" class="black--text">~를 생각하고 있었어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 4 | </h2>
                  <br />
                  <h3>I’m thinking about</h3>
                    <br />
                    <p>
                      “그럴까 생각하고 있었어.” 처럼 과거에 한시적으로 생각하고 있었던 일을 말할 때는 think의 과거형을 쓴 I thought about… (난 ~를 생각했어) 보다 과거진행형을 쓴 I was thinking about…이 적합하다.
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
            A : Hi, Jack<br />
            B : Hey, <b>너한테 전화할까 생각 중이었는데.</b><br />
            A : Oh, yeah? Why?<br />
            B : Because I wanted to ask you something.
          </p>
          <p style="line-height: 2;">
            A : 안녕 잭.<br />
            B : 안녕. <mark style="background-color: #a7d7c5; color: #d9e7cd;">I was thinking about calling you.</mark><br />
            A : 아, 그래? 왜?<br />
            B : 뭣 좀 물어보고 싶었거든.
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
          <b>025</b> 네 생각하고 있었어. ( you ) <br />
        </p>
        <p>
          <b>026</b> 너한테 전화할까 생각 중이었는데. ( call ) <br />
        </p>
        <p>
          <b>027</b> 쇼핑몰에 갈까 생각하던 중이었어. ( go, mall ) <br />
        </p>
        <p>
          <b>028</b> 오토바이를 장만해볼까 생각하고있었어. ( get, motorcycle ) <br />
        </p>
        <p>
          <b>029</b> 학교로 돌아갈까 생각하고 있었어 ( go back, school ) <br />
        </p>
        <p>
          <b>030</b> 시를 외울까 생각 중이었어요. ( memorize, poem ) <br />
        </p>
        <p>
          <b>031</b> 기타를 칠까 생각 중이었어요. ( play,guitar ) <br />
        </p>
        <p>
          <b>032</b> 그 댄스 스텝을 연습할까 생각 중이었어요. ( practice,dance step ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              025 I was thinking about you.<br />
              026 I was thinking about calling you.<br />
              027 I was thinking about going to the mall.<br />
              028 I was thinking about getting a motorcycle. <br />
              029 I was thinking about going back to the school.<br />
              030 I was thinking about memorizing a poem.<br />
              031 I was thinking about playing the guitar.<br />
              032 I was thinking about practicing that dance step.<br />
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
