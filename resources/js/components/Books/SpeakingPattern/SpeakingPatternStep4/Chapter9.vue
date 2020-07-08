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
    border-radius: 30px;" class="black--text">기꺼이 ~할게
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 69 |  </h2>
                  <br />
                  <h3>I’d be happy to….</h3>
                    <br />
                    <p>
                    I’d be happy to…는 ‘~하면 기쁘겠다’, 즉 ‘기쁜 마음으로 ~하겠다’, ‘기꺼이 ~하겠다’ ‘~하면 정말 좋겠다’ 등의 뜻이 된다.
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
            A : Can you help me?<br />
            B : What kind of help do you need?<br />
            A : I need a new dress for the wedding.<br />
            B : <b>기꺼이 드레스를 만들어줄게요.</b>
          </p>
          <p style="line-height: 2;">
            A : 좀 도와줄 수 있어요?<br />
            B : 어떤 도움이 필요한데요?<br />
            A : 결혼식에 입을 새 드레스가 필요해요.<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’d be happy to make your dress.</mark>
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
          <b>545</b> 기꺼이 널 따라갈게. ( accompany ) <br />
               *accompany 동행하다, 함께 가다. <br />
        </p>
        <p>
          <b>546</b> 기꺼이 안내해 드릴게요. ( show, around ) <br />
                *show ~around  ~를 관광시키다, 안내하다. <br />
        </p>
        <p>
          <b>547</b> 기꺼이 네 드레스를 만들어줄게. ( make ) <br />
        </p>
        <p>
          <b>548</b> 기꺼이 내일 너 대신 해줄게. ( cover for ) <br />
                *cover for ~의 일을 대신 처리하다.<br />
        </p>
        <p>
          <b>549</b> 기꺼이 당신을 도와드리죠. ( help ) <br />
        </p>
        <p>
          <b>550</b>  <br />
        </p>
        <p>
          <b>551</b>  <br />
        </p>
        <p>
          <b>552</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              545 I’d be happy to accompany you.<br />
              546 I’d be happy to show you around<br />
              547 I’d be happy to make your dress.<br />
              548 I’d be happy to cover for you tomorrow.<br />
              549 I’d be happy to help you.<br />
              550 <br />
              551 <br />
              552 <br />
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
