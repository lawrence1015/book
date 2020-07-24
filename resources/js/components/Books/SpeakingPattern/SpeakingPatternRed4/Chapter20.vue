<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/man-unhappy-businesspeople-sitting-business-office_1150-7568.jpg">

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
    border-radius: 30px;" class="black--text">~해서 참 답답해
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 80 | </h2>
                  <br />
                  <h3>It’s so frustrating….</h3>
                    <br />
                    <p>
                     Frustrating은 사전적 의미로는 ‘절망적인’ 이지만, 여기서는 ‘(뜻대로 되지 않아) 답답하고 짜증이 나는, 속상한’ 이란 의미에 더 가깝다. 따라서 이 패턴은 해결할 수 없는 문제 때문에 좌절감이나 답답함을 느낄 때 사용하면 딱이다.
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
            A : <b>면접 보러 다니는 거 너무 짜증나!</b><br />
            B : I know how you feel.<br />
            A : How many more interviews must I go on?<br />
            B : Don’t worry. I’m sure you’ll get a job soon.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">It’s so frustrating to go on job interviews!</mark><br />
            B : 어떤 기분인지 알아.<br />
            A : 면접을 얼마나 더 봐야 할까?<br />
            B : 걱정 마. 분명히 금방 취직할 거야.
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
          <b>633</b> 새로운 언어를 배우는 것은 정말 답답하고 힘들어. ( learn, language ) <br />
        </p>
        <p>
          <b>634</b> 부모님이랑 사는 게 가끔은 정말 답답해. ( live, parents ) <br />
        </p>
        <p>
          <b>635</b> 면접 보러 다니는 거 너무 짜증나! ( job interview ) <br />
        </p>
        <p>
          <b>636</b> 돈이 얼마 없다는 게 정말 속상해. ( much money ) <br />
        </p>
        <p>
          <b>637</b> 그 사람이 나를 이해하지 못하는 게 너무 답답해. ( understand ) <br />
        </p>
        <p>
          <b>638</b>  <br />
        </p>
        <p>
          <b>639</b>  <br />
        </p>
        <p>
          <b>640</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              633 It’s so frustrating to learn a new language.<br />
              634 It’s so frustrating to live with my parents sometimes.<br />
              635 It’s so frustrating to go on job interviews!<br />
              636 It’s so frustrating that I don’t have much money.<br />
              637 It’s so frustrating he didn't understand me.<br />
              638 <br />
              639 <br />
              640 <br />
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
