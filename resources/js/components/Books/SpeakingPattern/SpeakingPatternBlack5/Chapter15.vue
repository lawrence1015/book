<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/travel-elements-map_23-2148077190.jpg">

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
    border-radius: 30px;" class="black--text">넌 ~감각이 뛰어나구나
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 95 | 넌 ~감각이 뛰어나구나 </h2>
                  <br />
                  <h3>You have a good sense of…</h3>
                    <br />
                    <p>
                    유머감각, 패션감각 등 상대방의 뛰어난 감각을 칭찬할 때는 sense를 이용해서 다음과 같이 말해보자.
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
            A : This map is confusing.<br />
            B : I think we need to go that way east.<br />
            A : <b>방향감각이 뛰어난데.</b><br />
            B : I used to be a boy scout.
          </p>
          <p style="box-sizing: 2;">
            A : 이 지도는 헷갈려.<br />
            B : 내 생각엔 저기 동쪽 길로 가야 될 것 같아.<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">You have a good sense of direction.</mark><br />
            B : 예전에 보이스카우트였거든<br />

            *confusing  (복잡하여) 헷갈리는
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
          <b>753</b> 너 유머감각이 제법인데 ( humor ) <br />
        </p>
        <p>
          <b>754</b> 넌 패션감각이 좋구나. ( style ) <br />
        </p>
        <p>
          <b>755</b> 방향감각이 뛰어난데 ( direction ) <br />
        </p>
        <p>
          <b>756</b> 넌 냄새를 잘 맡는구나. ( smell ) <br />
        </p>
        <p>
          <b>757</b> 넌 시간관념이 뛰어나구나. ( timing ) <br />
        </p>
        <p>
          <b>758</b>  <br />
        </p>
        <p>
          <b>759</b>  <br />
        </p>
        <p>
          <b>760</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              753 You have a good sense of humor.<br />
              754 You have a good sense of style.<br />
              755 You have a good sense of direction<br />
              756 You have a good sense of smell.<br />
              757 You have a good sense of timing.<br />
              758 You have a good sense of right and wrong.<br />
              759 You have a good sense of responsibility.<br />
              760 You have a good sense of balance.<br />
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
