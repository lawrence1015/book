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
    border-radius: 30px;" class="black--text">넌 참~하구나
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 93 | 넌 참~하구나 </h2>
                  <br />
                  <h3>You’re so…</h3>
                    <br />
                    <p>
                    상대방이 뭔가를 훌륭히 해내면, ‘아주’라는 뜻의 so를 형용사 앞에 붙여서 다음과 같이 칭찬해보자.
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
            A : Look at me.<br />
            B : Ha ha ha. <b>너 참 귀여워.</b> You’re like a kid.<br />
            A : I am?<br />
            B : Yes, you are.
          <p style="line-height: 2;">
            A : 나 좀 봐.<br />
            B : 하하하. <mark style="background-color: #a7d7c5; color: #d9e7cd;">You’re so cute.</mark> 어린아이 같아.<br />
            A : 내가?<br />
            B : 응.
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
          <b>737</b> 넌 참 똑똑하구나. ( smart ) <br />
        </p>
        <p>
          <b>738</b> 넌 참 귀여워. ( cute ) <br />
        </p>
        <p>
          <b>739</b> 넌 참 재능이 많구나. ( talented ) <br />
        </p>
        <p>
          <b>740</b> 넌 참 창의력이 뛰어나구나. ( creative ) <br />
        </p>
        <p>
          <b>741</b> 너 참 웃긴다. ( funny ) <br />
        </p>
        <p>
          <b>742</b>  <br />
        </p>
        <p>
          <b>743</b>  <br />
        </p>
        <p>
          <b>744</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              737 You’re so smart.<br />
              738 You’re so cute.<br />
              739 You’re so talented.<br />
              740 You’re so creative.<br />
              741 You’re so funny.<br />
              742 <br />
              743 <br />
              744 <br />
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
