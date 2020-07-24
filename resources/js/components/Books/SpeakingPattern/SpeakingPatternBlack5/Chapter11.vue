<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/eiffel-tower-s-view-from-park_1361-122.jpg">

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
    border-radius: 30px;" class="black--text">네~가 멋진데
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 91 |  </h2>
                  <br />
                  <h3>I like your….</h3>
                    <br />
                    <p>
                    사람들과 쉽게 친해지는 방법 중 하나는 칭찬이다. 이 패턴을 이용해 칭찬하면서 자연스럽게 대화거리를 만들어보자.
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
            A : Where are you from?<br />
            B : I just arrived from France.<br />
            A : I thought so. <b>억양이 멋지네요.</b><br />
            B : My accent
          <p style="line-height: 2;">
            A : 어디에서 왔어요?<br />
            B : 방금 프랑스에서 도착했어요.<br />
            A : 그렇게 생각했어요. <mark style="background-color: #a7d7c5; color: #d9e7cd;">I like your accent.</mark><br />
            B : 제 억양이요?
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
          <b>721</b> 네 지갑 예쁘다. ( purse ) <br />
        </p>
        <p>
          <b>722</b> 네 휴대폰 예쁘다. ( cell phone ) <br />
        </p>
        <p>
          <b>723</b> 새로운 헤어스타일 멋진데. ( new. hairstyle ) <br />
        </p>
        <p>
          <b>724</b> 억양이 멋지네요. ( accent ) <br />
        </p>
        <p>
          <b>725</b> 난 네 태도가 좋아. ( attitude ) <br />
        </p>
        <p>
          <b>726</b>  <br />
        </p>
        <p>
          <b>727</b>  <br />
        </p>
        <p>
          <b>728</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              721 I like your purse.<br />
              722 I like your cell phone.<br />
              723 I like your new hairstyle.<br />
              724 I like your accent.<br />
              725 I like your attitude.<br />
              726 <br />
              727 <br />
              728 <br />
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
