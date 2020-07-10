<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/toast-dinner_53876-89.jpg">

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
    border-radius: 30px;" class="black--text">~에 관심 있어요?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 88 | </h2>
                  <br />
                  <h3>Are you interested in….?</h3>
                    <br />
                    <p>
                    뭔가에 대해 상대방에게 흥미나 관심이 있는지 물어보는 표현이다. ‘~어때요?’ 라며 조심스럽게 제안하는 의미로 쓰이기도 한다.
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
            A : What are you doing tonight?<br />
            B : Nothing special.<br />
            A : <b>우리랑 저녁 같이 할래?</b><br />
            B : Sure. What time?
          </p>
          <p style="line-height: 2;">
            A : 오늘 저녁에 뭐 해?<br />
            B : 특별한 거 없어.<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Are you interested in joining us for dinner?</mark><br />
            B : 그래, 몇 시에?
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
          <b>697</b> 우리 딸한테 관심 있어요? ( daughter ) <br />
        </p>
        <p>
          <b>698</b> 이런 종류의 영화에 관심 있어? ( kind of, movie ) <br />
        </p>
        <p>
          <b>699</b> 우리랑 저녁 같이 할래? ( join. dinner ) <br />
        </p>
        <p>
          <b>700</b> 비용을 나누는 거 어때요? ( split the cost ) <br />
                  *split the cost 비용을 분담하다. <br />
        </p>
        <p>
          <b>701</b> 소설 읽는 거에 관심 있니? ( read, novel ) <br />
        </p>
        <p>
          <b>702</b>  <br />
        </p>
        <p>
          <b>703</b>  <br />
        </p>
        <p>
          <b>704</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              697 Are you interested in my daughter?<br />
              698 Are you interested in this kind of movie?<br />
              699 Are you interested in joining us for dinner?<br />
              700 Are you interested in splitting the cost?<br />
              701 Are you interested in reading a novel?<br />
              702 <br />
              703 <br />
              704 <br />
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
