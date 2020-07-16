8888888<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/cheerful-little-girl-hair-hoop-posing-with-open-hands-being-friendly-welcoming_171337-275.jpg">

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
    border-radius: 30px;" class="black--text">~해서 좋아
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 68 |  </h2>
                  <br />
                  <h3>It’s nice to…</h3>
                    <br />
                    <p>
                    It’s nice to see you!를 통해 익숙한 패턴이다. 누군가를 반갑게 만났을 때뿐만 아니라, 어떤 상황이 무척 기쁘고 좋을 때 이 패턴을 가지고 말해보자. It’s good to… 라고 할 수도 있고, it’s 를 생략하고 Nice to…라고 말해도 된다.
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
          <p>
            A : Welcome back.<br />
            B : Thanks. <b>집에 돌아와서 좋아.</b><br />
            A : We all missed you.<br />
            B : I missed you guys, too.
          </p>
          <p>
            A : 돌아온 걸 환영해.<br />
            B : 고마워. <mark style="background-color: #a7d7c5; color: #d9e7cd;">It’s nice to be back home.</mark><br />
            A : 우리 모두 네가 보고싶었어.<br />
            B : 나도 너희가 보고 싶었어.
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
          <b>537</b> 다시 보게 돼서 기쁘다. <br />
        </p>
        <p>
          <b>538</b> 가족들이 모이니 좋구나. <br />
        </p>
        <p>
          <b>539</b> 네 목소리를 다시 들어서 기뻐. <br />
        </p>
        <p>
          <b>540</b> 집에 돌아와서 좋아. <br />
        </p>
        <p>
          <b>541</b> 네가 날 위해 거기 있다는 걸 알게 돼서 정말 기뻐. ( know, there,for me ) <br />
        </p>
        <p>
          <b>542</b>   <br />
        </p>
        <p>
          <b>543</b>  <br />
        </p>
        <p>
          <b>544</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              537 It’s nice to see you again.<br />
              538 It’s nice to have the family together.<br />
              539 It’s nice to hear your voice again.<br />
              540 It’s nice to be back home.<br />
              541 It’s nice to know that you are there for me.<br />
              542 <br />
              543 <br />
              544 <br />
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
