<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/interested-young-student-looking-her-boyfriend_171337-18998.jpg">

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
    border-radius: 30px;" class="black--text">좋아하는 것 말하기
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 89 | ~에 관심 없어요 </h2>
                  <br />
                  <h3>I’m not interested in….</h3>
                    <br />
                    <p>
                    I’m not interested in…은 말 그대로 관심 없다고 하거나 상대방의 제안을 거절할 때 사용할 수 있는 패턴이다.
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
            A : What do you think of Phil?<br />
            B : I think he’s nice. Why do you ask?<br />
            A : I think he’s interested in you.<br />
            B : But <b>난 그 사람한테 관심 없는데.</b>
          </p>
          <p style="line-height: 2;">
            A : 필에 대해 어떻게 생각해?<br />
            B : 괜찮은 사람 같아. 왜 묻는 거야?<br />
            A : 그 사람이 너한테 관심 있는 거 같아서.<br />
            B : 근데 <b>I’m not interested in him.</b>
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
          <b>705</b> 난 당신 의견에는 관심 없어요. ( opinion ) <br />
        </p>
        <p>
          <b>706</b> 난 그 남자한테는 관심 없거든. ( him ) <br />
        </p>
        <p>
          <b>707</b> 난 아기 봐주는 일에는 관심 없어요. ( babysitting ) <br />
        </p>
        <p>
          <b>708</b> 난 비밀 지키는 것에는 관심 없어. ( keep, secret ) <br />
        </p>
        <p>
          <b>709</b> 난 더 이상 너한테 관심 없어. ( any more ) <br />
        </p>
        <p>
          <b>710</b>  <br />
        </p>
        <p>
          <b>711</b>  <br />
        </p>
        <p>
          <b>712</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              705 I’m not interested in your opinion.<br />
              706 I’m not interested in him.<br />
              707 I’m not interested in babysitting.<br />
              708 I’m not interested in keeping secrets.<br />
              709 I’m not interested in you anymore.<br />
              710 <br />
              711 <br />
              712 <br />
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
