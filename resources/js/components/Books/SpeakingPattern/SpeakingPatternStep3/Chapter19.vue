<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/furious-entrepreneur-crumpling-documents_1098-16753.jpg">

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
    border-radius: 30px;" class="black--text">우리 ~하자
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 59 |  </h2>
                  <br />
                  <h3>I suggest we…</h3>
                    <br />
                    <p>
                    제안하다’라는 뜻의 suggest를 이용해서 I suggest we…하면 ‘우리가 ~할 것을 제안한다. 즉 ’우리~하자’라는 말이 된다.
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
            A : Steve is really angry.<br />
            B : I think he doesn’t want to talk to anybody now.<br />
            A : <b>혼자 있게 내버려두자.</b><br />
            B : I think that’s a good idea.
          </p>
          <p style="line-height: 2;">
            A : 스티브가 완전 화났던데.<br />
            B : 지금은 누구와도 얘기하고 싶어하지 않은 것 같아.<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I suggest we leave him alone.</mark><br />
            B : 그러는 게 좋을 것 같다.
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
          <b>465</b> 우리 그 프로젝트를 같이 검토했으면 해. ( go over ) <br />
                *Go over  검토하다.<br />
        </p>
        <p>
          <b>466</b> 그 사람을 혼자 있게 내버려두자. ( leave, alone ) <br />
        <p>
          <b>467</b> 우리 상사에게는 말하지 말자. ( tell, boss ) <br />
        </p>
        <p>
          <b>468</b> 우리 파티를 열자.( throw a party ) <br />
                *Throw a party 파티를 열다.<br />
        </p>
        <p>
          <b>469</b> 우리 디저트 먹을 배는 남겨두자. ( save, room, dessert ) <br />
        </p>
        <p>
          <b>470</b>  <br />
        </p>
        <p>
          <b>471</b>  <br />
        </p>
        <p>
          <b>472</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              465 I suggest we go over the project together.<br />
              466 I suggest we leave him alone.<br />
              467 I suggest we don’t tell our boss.<br />
              468 I suggest we throw a party.<br />
              469 I suggest we save room for dessert.<br />
              470 <br />
              471 <br />
              472 <br />
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
