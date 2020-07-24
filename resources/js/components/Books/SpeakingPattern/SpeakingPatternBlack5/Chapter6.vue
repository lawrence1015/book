<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/couple-back-back_1134-501.jpg">

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
    border-radius: 30px;" class="black--text">~할 때가 좋아
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 86 |  </h2>
                  <br />
                  <h3>I like it when…</h3>
                    <br />
                    <p>
                    자기가 좋아하는 상황을 말할 때는 I like it뒤에 when절을 붙여서 말해보자. 반대로 싫어하는 상황을 말할 때는 I don’t like it when…이라고 하면 된다.
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
            A : <b>난 비 올 때가 좋아.</b><br />
            B : Really? Why? <br />
            A : No special reason. I just like it.<br />
            B : You’re really weird.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I like it when it rains.</mark><br />
            B : 정말? 왜?<br />
            A : 특별한 이유는 없어. 그냥 좋아.<br />
            B : 넌 정말 이상해.
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
          <b>681</b> 난 비 올 때가 좋아. ( rain ) <br />
        </p>
        <p>
          <b>682</b> 그 애가 날 보고 웃으면 좋아. ( smile ) <br />
        </p>
        <p>
          <b>683</b> 난 매운 게 좋더라. ( spicy )<br />
                 *spicy 양념을 넣은, 매콤한.<br />
        </p>
        <p>
          <b>684</b> 난 커피가 뜨거울 때가 좋아. ( coffee, hot ) <br />
        </p>
        <p>
          <b>685</b> 난 네가 나한테 친절할 때가 좋아. ( kind, me ) <br />
        </p>
        <p>
          <b>686</b>  <br />
        </p>
        <p>
          <b>687</b>  <br />
        </p>
        <p>
          <b>688</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              681 I like it when it rains.<br />
              682 I like it when she smiles at me.<br />
              683 I like it when it’s spicy.<br />
              684 I like it when my coffee is hot.<br />
              685 I like it when you're kind to me.<br />
              686 <br />
              687 <br />
              688 <br />
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
