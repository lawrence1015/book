<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/business-people-analyzing-statistics-financial-concept_53876-23509.jpg">

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
    border-radius: 30px;" class="black--text">우리 ~하는 게 어때요?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 57 |  </h2>
                  <br />
                  <h3>Why don’t we….?</h3>
                    <br />
                    <p>
                    이 패턴을 ‘우리는 왜 ~하지 않니?’ 라고 직역하면 이해하기 어렵다. 이 패턴은 ‘우리~하는게 어때? 하고 제안할 때 쓰는 말이다. Why don’t you…? 가 상대방에게 제안하는 것이라면, 이 패턴은 우리가 같이 해보자고 하는 것이다
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
            A : This discussion is going nowhere.<br />
            B : Perhaps we should take a break.<br />
            A : I don’t know if that will help.<br />
            B : Then, <b>회의를 미루는 게 어때?</b>
          </p>
          <p style="line-height: 2;">
            A : 이 토론이 점점 산으로 가고 있어.<br />
            B : 아무래도 잠시 쉬어야 할까봐.<br />
            A : 그게 도움이 될지 모르겠네<br />
            B : 그러면 <mark style="background-color: #a7d7c5; color: #d9e7cd;">Why don’t we adjourn the meeting?</mark>
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
          <b>449</b> 우리 드라이브 갈까? ( go for, drive ) <br />
        </p>
        <p>
          <b>450</b> 우리 식당에서 만날까요? ( meet ) <br />
        </p>
        <p>
          <b>451</b> 회의를 미루는 게 어때요? ( adjourn, meeting ) <br />
              *adjourn 연기하다, 휴회하다<br />
        </p>
        <p>
          <b>452</b> (하룻밤 자며) 신중히 생각해보는 게 어때요? ( sleep on ) <br />
              *sleep on  하룻밤 자며 신중히 생각하다. <br />
        </p>
        <p>
          <b>453</b> 그 여자에게 기회를 한 번 더 주는 게 어때?  ( give, chance ) <br />
        </p>
        <p>
          <b>454</b>  <br />
        </p>
        <p>
          <b>455</b>  <br />
        </p>
        <p>
          <b>456</b>  <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              449 Why don’t we go for a drive?<br />
              450 Why don’t we meet at the restaurant?<br />
              451 Why don’t we adjourn the meeting?<br />
              452 Why don’t we sleep on it?<br />
              453 Why don't you give her another chance?<br />
              454 <br />
              455 <br />
              456 <br />
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
