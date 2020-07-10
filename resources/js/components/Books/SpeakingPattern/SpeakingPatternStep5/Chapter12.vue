<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/succesful-businesswomen-giving-high-five_53876-15136.jpg">

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
    border-radius: 30px;" class="black--text">네가 ~하는 방식이 좋아
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 92 |  </h2>
                  <br />
                  <h3>I like the way you….</h3>
                    <br />
                    <p>
                    앞서 설명했듯 way 는 ‘방식, 방법’이라는 뜻으로, I like the way you…는 상대방에게 칭찬 할 때 쓸 수 있는 문장 패턴이다.
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
            A : What should we do?<br />
            B : Don’t worry. We’ll be okay.<br />
            A : You’re really optimistic. <b>난 사고방식이 마음에 들어</b><br />
          </p>
          <p style="line-height: 2;">
            A : 우리 어떻게 해야 하는 거지?<br />
            B : 걱정 마. 괜찮을 거야.<br />.
            A : 넌 정말 낙천적이구나. <mark style="background-color: #a7d7c5; color: #d9e7cd;">I like the way you think.</mark><br />

                  * Optimistic  낙천적인 <br />
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
          <b>729</b> 난 네가 그렇게 웃는 게 좋아. ( laugh ) <br />
        </p>
        <p>
          <b>730</b> 난 네 사고방식이 마음에 들어. ( think ) <br />
        </p>
        <p>
          <b>731</b> 난 네가 나를 대하는 방식이 마음에 들어. ( treat ) <br />
        </p>
        <p>
          <b>732</b> 난 네가 그렇게 노래하는 것 좋아해. ( sing )  <br />
        </p>
        <p>
          <b>733</b> 난 네가 이 상황을 처리한 방식이 마음에 들어 ( handle, situation ) <br />
        </p><p>
          <b>734</b>   <br />
        </p><p>
          <b>735</b>  <br />
        </p><p>
          <b>736</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              729 I like the way you laugh.<br />
              730 I like the way you think.<br />
              731 I like the way you treat me.<br />
              732 I like the way you sing.<br />
              733 I like the way you handle this situation.<br />
              734 <br />
              735 <br />
              736 <br />
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
