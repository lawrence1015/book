<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/happy-two-women-friends-sitting-cafe-reading-book_171337-19661.jpg">

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
    border-radius: 30px;" class="black--text">~를 생각 중이야
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 3 | </h2>
                  <br />
                  <h3>I’m thinking about</h3>
                    <br />
                    <p>
                    “노트북을 살까 생각중이야.”처럼 현재 생각하고 있는 것에 대해 말할 때  think 를 진행형으로 써서 이렇게 말하면 된다. 이때 think 뒤에는 about이나 of를 붙인다.
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
            A : What’s your plan for today?<br />
            B : <b>오늘 밤에 외출할까 생각중이야.</b><br />
            A : To where?<br />
            B : I don’t know yet.
          </p>
          <p style="line-height: 2;">
            A : 오늘 계획이 어떻게 돼?<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’m thinking about going out tonight.</mark><br />
            A : 어디로?<br />
            B : 아직 모르겠어.
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
          <b>017</b> 노트북을 하나 살까 생각 중이야. ( buy ) <br />
        </p>
        <p>
          <b>018</b> 오늘밤에 외출할까 생각 중이야 ( going out ) <br />
        </p>
        <p>
          <b>019</b> 성형수술을 할까 생각중이야 ( get ) <br />
        </p>
        <p>
          <b>020</b> 네가 한 말에 대해 생각하고 있다. ( say ) <br />
        </p>
        <p>
          <b>021</b> 춤을 배울까 생각 중이야. ( learn, how to dance ) <br />
        </p>
        <p>
          <b>022</b> 병원에 가 볼까 생각 중이에요. ( visit ) <br />
        </p>
        <p>
          <b>023</b> 저는 내년에 그와 결혼할 생각이에요. ( marry ) <br />
        </p>
        <p>
          <b>024</b> 022 초콜릿 케이크를 구울까 생각 중이에요.( bake ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              017 I’m thinking about buying a laptop.<br />
              018 I’m thinking about going out tonight.<br />
              019 I’m thinking about getting plastic surgery.<br />
              020 I’m thinking about what you said. <br />
              021 I’m thinking about learning how to dance.<br />
              022 I'm thinking about visiting a doctor.<br />
              023 I’m thinking about marrying him next year.<br />
              024 I'm thinking about baking a chocolate cake.<br />
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
