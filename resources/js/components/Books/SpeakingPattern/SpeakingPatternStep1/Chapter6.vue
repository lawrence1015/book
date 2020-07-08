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
    border-radius: 30px;" class="black--text">~라고 생각해?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 6 |  </h2>
                  <br />
                  <h3>Do you think…?</h3>
                    <br />
                    <p>
                    “~인 것 같아?’ “~라고 생각해?” 처럼 상대방의 생각이나 의견을 물을 때 사용하는 패턴이다. “~라고 생각했니>” 처럼 과거에 들었던 생각에 대해 물을 때는 Did you  think…? 를 이용하면 된다.
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
            A : <b>그 애가 거짓말하고 있는 것 같아?</b><br />
            B : I think so.<br />
            A : How do you know that?<br />
            B : He keeps blinking his eyes. That’s how.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Do you think he’s lying?</mark><br />
            B : 그런 것 같아.<br />
            A : 그걸 어떻게 알아?<br />
            B : 계속 눈을 깜박거리잖아. 그래서 알아
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
          <b>041</b> 그 애가 거짓말하고 있다고 생각해? ( lie ) <br />
        </p>
        <p>
          <b>042</b> 우리가 이길 것 같니? ( win ) <br />
        </p>
        <p>
          <b>043</b> 그 여자가 예쁜 것 같아? ( pretty ) <br />
        </p>
        <p>
          <b>044</b> 시간이 충분하다고 생각해? ( enough, time ) <br />
        </p>
        <p>
          <b>045</b> 여기가 춥다고 생각하니? ( cold, in here ) <br />
        </p>
        <p>
          <b>046</b> 그녀가 그것을 다 먹을 수 있을까요? ( eat,all ) <br />
        </p>
        <p>
          <b>047</b> 음식이 충분하다고 생각하세요? ( plenty, food ) <br />
        </p>
        <p>
          <b>048</b> 오늘 돼지고기를 굽는 게 좋을까요? ( grill, pork ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              041 Do you think he’s lying?<br />
              042 Do you think we’ll win?<br />
              043 Do you think she’s pretty?<br />
              044 Do you think there’s enough time?<br />
              045 Do you think it's cold in here?<br />
              046 Do you think she can eat all of it?<br />
              047 Do you think there's plenty of food?<br />
              048 Do you think there's plenty of food?<br />
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
