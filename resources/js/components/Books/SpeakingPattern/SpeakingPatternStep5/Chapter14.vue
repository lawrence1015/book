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
    border-radius: 30px;" class="black--text">넌 ~를 잘하는구나
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 94 | 넌 ~를 잘하는구나 </h2>
                  <br />
                  <h3>You’re a good…</h3>
                    <br />
                    <p>
                    상대방이 잘하는 것을 칭찬할 때 쓰기 좋은 패턴이다. good뒤에 cook(요리사), singer(가수) 등의 명사를 붙여서 말하면 된다.
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
            A : I made this pasta for you. I hope you like it.<br />
            B : Wow, this is delicious.<br />
            A : Really?<br />
            B : Yeah, really. <b>요리 잘하는구나.</b>
          </p>
          <p style="line-height: 2;">
            A : 너 주려고 이 파스타 만들었어. 입맛에 맞으면 좋겠다.<br />
            B : 와 이거 맛있다.<br />
            A : 정말?<br />
            B : 응, 정말. <mark style="background-color: #a7d7c5; color: #d9e7cd;">You’re a good cook.</mark>
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
          <b>490</b> 요리를 잘하시네요. ( cook ) <br />
        </p>
        <p>
          <b>491</b> 넌 남의 말을 잘 들어줘. ( listener ) <br />
        </p>
        <p>
          <b>492</b> 넌 글을 잘 써. ( writer ) <br />
        </p>
        <p>
          <b>493</b> 넌 말을 잘해. ( talker ) <br />
        </p>
        <p>
          <b>494</b> 너는 좋은 학생이야. ( student ) <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              490 You’re a good cook<br />
              491 You’re a good listener.<br />
              492 You’re a good writer.<br />
              493 You’re a good talker.<br />
              494 You’re a good student.<br />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      </v-container>
        <br />
  <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#FFE7FF">
            <v-card-text class="px-10">

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
