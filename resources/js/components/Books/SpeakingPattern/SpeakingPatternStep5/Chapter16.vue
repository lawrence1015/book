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
    border-radius: 30px;" class="black--text">~해서 고마워
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 96 | </h2>
                  <br />
                  <h3>Thank you for….</h3>
                    <br />
                    <p>
                    for뒤에는 명사 또는 동명사를 사용해서 구체적으로 고마운 내용을 덧붙일 수 있다.
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
            A : We’re almost done painting<br />
            B : <b>늦게까지 있어줘서 고마워.</b><br />
            A : My pleasure.<br />
            B : I appreciate the help.
          </p>
          <p style="line-height: 2;">
            A : 그림을 거의 다 그렸네.<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Thank you for staying late.</mark><br />
            A : 천만에<br />
            B : 도와줘서 고마워.
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
          <b>761</b> 기다려줘서 고마워. ( wait )  <br />
        </p>
        <p>
          <b>762</b> 늦게까지 있어줘서 고마워 ( stay, late ) <br />
        </p>
        <p>
          <b>763</b> 칭찬 고마워. ( compliment ) <br />
                *compliment  칭찬, 듣기 좋은 말<br />
        </p>
        <p>
          <b>764</b> (차) 태워줘서 고마워. ( ride )<br />
        </p>
        <p>
          <b>765</b> 담배 피우지 않아 줘서 고마워. ( smoke ) <br />
        </p>
        <p>
          <b>766</b>  <br />
        </p>
        <p>
          <b>767</b>  <br />
        </p>
        <p>
          <b>768</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              761 Thank you for waiting.<br />
              762 Thank you for staying late.<br />
              763 Thank you for the compliment.<br />
              764 Thank you for the ride.<br />
              765 Thank you for not smoking.<br />
              766 <br />
              767 <br />
              768 <br />
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
