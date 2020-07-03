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
    border-radius: 30px;" class="black--text">~때문에 긴장돼
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 78 |  </h2>
                  <br />
                  <h3>I’m nervous about….</h3>
                    <br />
                    <p>
                    Nervous는 ‘긴장한, 안절부절 못하는’ 이라는 뜻이다. 앞으로 닥칠 일 때문에 몹시 긴장되고 초조할 때 쓰면 딱이다.
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
            A : Your big speech is the weekend, right?<br />
            B : Yep.<br />
            A : But you don’t seem excited. <br />
            B : <b>사람들 앞에서 말하는 것 때문에 긴장돼</b> That’s why.
          </p>
          <p style="line-height: 2;">
            A : 네 중요한 연설이 이번 주말이지?<br />
            B : 그래.<br />
            A : 근데 설레는 것 같지 않은데. <br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’m nervous about speaking in public.</mark> 그래서 그래.
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
          <b>410</b> 난 데이트 때문에 긴장돼. ( date ) <br />
        </p>
        <p>
          <b>411</b> 난 그 발표 때문에 긴장돼. ( presentation ) <br />
        </p>
        <p>
          <b>412</b> 사람들 앞에서 말하는 것 때문에 긴장돼. ( speak in public ) <br />
        </p>
        <p>
          <b>413</b> 제시간에 끝낼 수 있을지 초조해. ( finish, in time ) <br />
        </p>
        <p>
          <b>414</b> 난 증언하는 게 긴장돼. ( testify ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              410 I’m nervous about my date.<br />
              411 I’m nervous about the presentation.<br />
              412 I’m nervous about speaking in public.<br />
              413 I’m nervous about finishing in time.<br />
              414 I’m nervous about testifying.<br />
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
