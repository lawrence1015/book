<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/glass-bottles-beer-with-glass-ice-dark-background_1150-8901.jpg">

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
    border-radius: 30px;" class="black--text">난 ~를 좋아하지 않아
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 84 | </h2>
                  <br />
                  <h3>I don’t like…</h3>
                    <br />
                    <p>
                      내가 좋아하지 않는 것, 마음에 들지 않는 것을 말하는 표현이다. 안 좋아하는 정도가 아니라 굉장히 싫을 때는 I hate…를 써야 감정이 제대로 전달된다.
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
            A : <b>난 맥주 마시는 걸 좋아하지 않아.</b><br />
            B : Then what do you like?<br />
            A : I like Soju.<br />
            B : Really? But, it’s too strong.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">I don’t like drinking beer.</mark><br />
            B : 그럼 뭘 좋아해?<br />
            A : 소주가 좋아.<br />
            B : 정말? 근데 그건 너무 독하잖아.
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
          <b>665</b> 난 기름진 음식을 안좋아해. ( greasy ) <br />
                *greasy 기름진, 기름기많은<br />
        </p>
        <p>
          <b>666</b> 난 맥주 마시는 걸 좋아하지 않아. ( beer )  <br />
        </p>
        <p>
          <b>667</b> 그 애가 입은 옷이 마음에 안 들어. ( wear ) <br />
        </p>
        <p>
          <b>668</b> 난 밖에 나가는 걸 좋아하지 않아. ( go out ) <br />
        </p>
        <p>
          <b>669</b> 우리가 해야 되는 일이 마음에 안 들어. ( what, have to ) <br />
        </p>
        <p>
          <b>670</b>  <br />
        </p>
        <p>
          <b>671</b>  <br />
        </p>
        <p>
          <b>672</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              665 I don’t like greasy food.<br />
              666 I don’t like drinking beer.<br />
              667 I don’t like what she’s wearing.<br />
              668 I don’t like going out.<br />
              669 I don’t like what we have to do.<br />
              670 <br />
              671 <br />
              672 <br />
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
