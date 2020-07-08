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
    border-radius: 30px;" class="black--text">~하지 말자
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 54 |  </h2>
                  <br />
                  <h3>Let’s not….</h3>
                    <br />
                    <p>
                    “거기 가지 말자.” 처럼 ‘~하지 말자’ 라고 할 때는 Let’s에 not을 붙여서 Let’s not…이라고 말하면 된다.
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
            A : About last night…<br />
            B : <b>그 얘기는 더 이상 하지 말자.</b><br />
            A : Why not?<br />
            B : Because if we do, we’ll argue again.
          </p>
          <p style="line-height: 2;">
            A : 어젯밤 일 말인데…<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Let’s not talk about it anymore.</mark><br />
            A : 왜?<br />
            B : 그 얘기하면 또 말다툼하게 되잖아.
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
          <b>425</b> 그 얘기는 더 이상 하지 말자. ( talk about, it ) <br />
        </p>
        <p>
          <b>426</b> 이거 가지고 질질 끌지 말자. ( drag out ) <br />
              *drag out 질질 끌다. 오래 끌다.<br />
        </p>
        <p>
          <b>427</b> 우리 넘겨짚지 말자. ( jump to conclusions ) <br />
              *jump to conclusions 성급하게 단정하다, 속단하다.. <br />
        </p>
        <p>
          <b>428</b> 에너지를 낭비하지 말자. ( waste , energy ) <br />
        </p>
        <p>
          <b>429</b> 너무 무리해서 하지 말자. ( overdo ) <br />
        </p>
        <p>
          <b>430</b>  <br />
        </p>
        <p>
          <b>431</b>  <br />
        </p>
        <p>
          <b>432</b>  <br />
        </p>

        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              425 Let’s not talk about it anymore.<br />
              426 Let’s not drag this out?<br />
              427 Let’s not jump to conclusions.<br />
              428 Let’s not waste energy.<br />
              429 Let’s not overdo.<br />
              430 <br />
              431 <br />
              432 <br />
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
