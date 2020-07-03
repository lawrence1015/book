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
    border-radius: 30px;" class="black--text">~에 만족해
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 66 |  </h2>
                  <br />
                  <h3>I’m happy with…</h3>
                    <br />
                    <p>
                    Happy는 ‘행복한, 만족한’ 이라는 뜻으로,  I’m happy with…는 어떤 것에 만족하거나 뭔가로 인해 기분이 좋을 때 자주 사용하는 패턴이다.
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
            A : I love the new business plan.<br />
            B : Thank you. We worked very hard.<br />
            A : Well, <b>나도 성과에 만족합니다.</b><br />
            B : It should raise our profits.
          </p>
          <p style="line-height: 2;">
            A : 새로운 사업 기획안이 아주 맘에 드는군요.<br />
            B : 고맙습니다. 저희가 아주 열심히 했습니다.<br />
            A : 음, <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’m happy with the outcome.</mark><br />
            B : 당연히 저희 이익이 올라갈 겁니다.
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
          <b>350</b> 그 성과에 만족하고 있어. ( outcome ) <br />
        </p>
        <p>
          <b>351</b> 난 새로 하게 된 일이 맘에 들어. ( new job ) <br />
        </p>
        <p>
          <b>352</b> 난 결과에 만족해. ( result ) <br />
        </p>
        <p>
          <b>353</b> 너희들 모두한테 만족해. ( all of you ) <br />
        </p>
        <p>
          <b>354</b> 자네의 실적에 만족하고 있네. ( performance ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              350 I’m happy with the outcome<br />
              351 I’m happy with my new job.<br />
              352 I’m happy with the result.<br />
              353 I’m happy with all of you.<br />
              354 I’m happy with your performance.<br />
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
