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
    border-radius: 30px;" class="black--text">~해주신다면 정말 감사하겠어요.
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 98 |  </h2>
                  <br />
                  <h3>I’d really appreciate it if you could…</h3>
                    <br />
                    <p>
                    상대방에게 예의를 갖춰 정중하게 부탁할 때 이 패턴을 사용할 수 있다.
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
            A : Are you free this afternoon?<br />
            B : Yep. Why?<br />
            A : I need your help. <b>여기에 들러준다면 정말 고맙겠어.</b><br />
            B : No problem. I’ll see you later then.
          </p>
          <p style="line-height: 2;">
            A : 너 오늘 오후에 시간 있니?<br />
            B : 응, 왜? <br />
            A : 네 도움이 필요해서. <mark style="background-color: #a7d7c5; color: #d9e7cd;">I’d really appreciate it if you could stop by here.</mark><br />
            B : 알았어. 그럼 이따가 보자.
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
          <b>510</b> 내 부탁을 들어준다면 정말 감사하겠어요. ( do, favor ) <br />
                  *do~favor  ~의 부탁을 들어주다, 도와주다.<br />
        </p>
        <p>
          <b>511</b> 네가 이걸 해준다면 정말 고맙겠어. ( do, for ) <br />
        </p>
        <p>
          <b>512</b> 여기에 들러준다면 정말 고맙겠어. ( stop by ) <br />
                    *Stop by 들르다.<br />
        </p>
        <p>
          <b>513</b> 이걸 비밀로 지켜준다면 정말 감사하겠어요 ( keep, quiet ). <br />
                    *keep ~quiet  ~를 비밀로 해두다<br />
        </p>
        <p>
          <b>514</b> 네가 그걸 물어봐 준다면 정말 고맙겠어. ( ask, questions ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              510 I’d really appreciate it if you could do me a favor<br />
              511 I’d really appreciate it if you could do this for me.<br />
              512 I’d really appreciate it if you could stop by here.<br />
              513 I’d really appreciate it if you could keep this quiet.<br />
              514 I’d really appreciate it if you could ask me questions.<br />
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
