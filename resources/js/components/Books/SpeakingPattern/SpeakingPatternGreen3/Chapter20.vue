<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/wines-wooden-shelve_1426-1949.jpg">

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
    border-radius: 30px;" class="black--text">제가 ~를 제안해도 될까요?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 60 | </h2>
                  <br />
                  <h3>May I suggest….?</h3>
                    <br />
                    <p>
                     다소 어려운 상대에게 조심스럽게 제안할 때는 May I를 써서 위와 같이 물어보자. 다른 사람에게 무언가를 추천하거나 자신의 의견을 정중하게 제시할 수 있다.
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
            A : There are so many wines to choose from.<br />
            B : <b>제가 와인을 하나 추천해도 될까요?</b><br />
            A : Of course. What do you suggest?<br />
            B :  I think you would enjoy the Chianti.
          </p>
          <p style="line-height: 2;">
            A : 고를 와인이 정말 많네.<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">May I suggest a wine?</mark><br />
            A : 물론이죠. 뭘 추천하시겠어요?<br />
            B : 끼안띠를 좋아하실 것 같군요.
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
          <b>473</b> 제가 와인을 하나 추천해도 될까요? ( wine ) <br />
        </p>
        <p>
          <b>474</b> 제가 다른 것을 제안해도 될까요? ( something else ) <br />
        </p>
        <p>
          <b>475</b> 제가 전문가 한 분 추천할까요? ( specialist ) <br />
        </p>
        <p>
          <b>476</b> 제가 대안을 하나 제안해도 될까요? ( alternative ) <br />
              *alternative  대안 <br />
        </p>
        <p>
          <b>477</b> 제가 투자를 제안해도 될까요? ( investment ) <br />
        </p>
        <p>
          <b>478</b>  <br />
        </p>
        <p>
          <b>479</b>  <br />
        </p>
        <p>
          <b>480</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              473 May I suggest a wine?<br />
              474 May I suggest something else?<br />
              475 May I suggest a specialist?<br />
              476 May I suggest an alternative?<br />
              477 May I suggest an investment?<br />
              478 May I suggest a different technique?<br />
              479 May I suggest a book?<br />
              480 May I suggest we take a break first?<br />
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
