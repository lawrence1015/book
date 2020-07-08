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
    border-radius: 30px;" class="black--text">우리 ~해야 할지도 모르겠어
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 58 |  </h2>
                  <br />
                  <h3>Maybe we should…</h3>
                    <br />
                    <p>
                    우리가 해야 하는 일이라면 we should…를 써서 말하고, 우리가 해야 할지도 모르는 일, 해야할 것 같은 일이라면 앞에 maybe나 I think를 붙여서 말하는 것이 좋다.
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
          <p style="line-height: 2 ;">
            A : I hear the speaker is a famous surgeon.<br />
            B : <b>우리 그 강연에 가야 할 것 같아.</b><br />
            A : I’ll pick you up at 3:00 then.<br />
            B : See you then.
          </p>
          <p style="line-height: 2;">
            A : 발표하는 사람이 아주 유명한 외과의사라고 들었어.<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Maybe we should go to the lecture.</mark><br />
            A : 그럼 2시에 데리러 갈게.<br />
            B : 그때 보자.<br />
              *pick up ~를 태우다, 마중 나가다.
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
          <b>457</b> 우리가 그걸 다시 생각해야 될지도 모르겠어. ( think over ) <br />
        </p>
        <p>
          <b>458</b> 다시 시작해야 할지도 모르겠어. ( start over ) <br />
              * Start over  처음부터 다시 하다.<br />
        </p>
        <p>
          <b>459</b> 우리 얘기 좀 해야 할 것 같아. ( talk ) <br />
        </p>
        <p>
          <b>460</b> 우리 그 강연에 가야 할 것 같아. ( go, lecture ) <br />
        </p>
        <p>
          <b>461</b> 지금 당장 떠나야 할 것 같아. ( leave, right now ) <br />
        </p>
        <p>
          <b>462</b>  <br />
        </p>
        <p>
          <b>463</b>  <br />
        </p>
        <p>
          <b>464</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              457 Maybe we should think it over.<br />
              458 Maybe we should start over.<br />
              459 Maybe we should talk.<br />
              460 Maybe we should go to the lecture.<br />
              461 Maybe we should leave right now.<br />
              462 <br />
              463 <br />
              464 <br />
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
