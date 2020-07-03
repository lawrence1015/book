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
    border-radius: 30px;" class="black--text">내 생각에는 ~인 것 같아
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 1 |</h2>
                  <br />
                  <h3>I think..</h3>
                    <br />
                    <p>
                      “난 ~라고 생각해”뿐만 아니라 “~인 것 같아” 처럼 자신의 생각이나 의견을 조심스럽게 말할 때 자주 쓰이는 패턴이다. 100% 확실한 것이 아니라면 I think…를 붙여서 말하는 것이 좋다.
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
            A : <b>우리 가봐야 할 것 같아.</b><br />
            B : Already? But it’s not even 5 yet.<br />
            A : I know, but I think it’s going to rain soon.<br />
            B : I guess we have no choice then.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I think we should get going.</mark><br />
            B : 벌써? 그치만 아직 5시도 안됐는데<br />
            A : 알아. 하지만 금방 비가 올 것 같아서 그래.<br />
            B : 그럼 어쩔 수 없지 뭐.
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
          <b>001</b> 영화가 거의 다 끝난 것 같아. ( movie, over ) <br />
        </p>
        <p>
          <b>002</b> 전에 저 사람을 본 것 같은데. ( see, before ) <br />
        </p>
        <p>
          <b>003</b> 금방 비가 올 것 같아. ( going, rain ) <br />
        </p>
        <p>
          <b>004</b> 우린 가봐야 할 것 같은데 ( should, get ) <br />
        </p>
        <p>
          <b>005</b> 이 책 지루한 것 같아 ( book, boring ) <br />
        </p>
        <p>
          <b>006</b> 이 패턴이 더 좋은 것 같아요.( pattern,better ) <br />
        </p>
        <p>
          <b>007</b> 웃는 모습이 예쁜 것 같아요. ( pretty,smiles ) <br />
        </p>
        <p>
          <b>008</b> 이 케이크는 맛있는 것 같아요. ( cake, delicious ) <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              001 I think the movie’s almost over<br />
              002 I think I saw him before.<br />
              003 I think it’s going to rain soon.<br />
              004 I think we should get going<br />
              005 I think this book is boring<br />
              006 I think this pattern is better.<br />
              007 I think she's pretty when she smiles.<br />
              008 I think this cake is delicious.<br />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
        <br />

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

li{


}

body{

  font-size: 16px;
}

</style>
