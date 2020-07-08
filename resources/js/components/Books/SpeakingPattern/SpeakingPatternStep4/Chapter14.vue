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
    border-radius: 30px;" class="black--text">~하다니 충격적이었어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 74 |  </h2>
                  <br />
                  <h3>I was shocked…</h3>
                    <br />
                    <p>
                    너무나 충격적인 소식을 들었을 때는 I was surprised…로는 충분하지 않다. 그때는 I was shocked…로 표현해보자.
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
            A : What? Jane’s married?<br />
            B : Yep. <b>그 애가 그 말을 했을 때 충격 받았어.</b><br />
            A : I’m shocked, too<br />
            B : I know what you mean. She’s only 20, you know?
          </p>
          <p style="line-height: 2;">
            A : 뭐? 제인이 결혼을 했다고?<br />
            B : 응. <mark style="background-color: #a7d7c5; color: #d9e7cd;">I was shocked when she told me that.</mark><br />
            A : 나도 충격 받았어.<br />
            B : 무슨 말인지 알아. 그 앤 스무 살밖에 안 됐잖아.
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
          <b>585</b> 그 스캔들을 알고는 충격 받았어. ( find out, scandal ) <br />
        </p>
        <p>
          <b>586</b> 내가 F를 받다니 충격적이었어.  ( shocked ) <br />
        </p>
        <p>
          <b>587</b> 그 애가 그 말을 했을 때 난 충격 받았어. ( shocked ) <br />
        </p>
        <p>
          <b>588</b> 그 여자에게 아이가 있었다니 충격적이었어. ( have, baby ) <br />
        </p>
        <p>
          <b>589</b> 아무도 이걸 몰랐다니 충격적이었어. ( no one, know about ) <br />
        </p>
        <p>
          <b>590</b>  <br />
        </p>
        <p>
          <b>591</b>  <br />
        </p>
        <p>
          <b>592</b>  <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              585 I was shocked to find out about the scandal.<br />
              586 I was shocked that I got an F.<br />
              587 I was shocked when she told me that.<br />
              588 I was shocked that she had a baby.<br />
              589 I was shocked no one knew about that.<br />
              590 <br />
              591 <br />
              592 <br />
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
