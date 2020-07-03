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
    border-radius: 30px;" class="black--text">~를 아니?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 16 |  </h2>
                  <br />
                  <h3>Do you know?</h3>
                    <br />
                    <p>
                    상대방이 어떤 사실이나 사람을 아는지 물을 때 쓰인다. ‘혹시 ~를 아니? 라고 물으려면 Do you happen to know…? 하면 되고, ‘~을 알고 있었니?’ 처럼 과거에 알았는지 물을 때는 Did you know…? 를 이용하면 된다.
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
            A : Do we have any assignments for tomorrow?<br />
            B : I’m not sure. I’ll have to check.<br />
            A : Okay. I’ll have to check.<br />
            B : Sure. <b>내 휴대폰 번호 알아?</b>
          </p>
          <p style="line-height: 2;">
            A : 우리 내일까지 해야 하는 과제 있어?<br />
            B : 모르겠네. 확인해봐야겠다.<br />
            A : 알았어. 그럼 내가 나중에 전화할게<br />
            B : 그래. <mark style="background-color: #a7d7c5; color: #d9e7cd;">Do you know my cell phone number?</mark>
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
          <b>100</b> 내 휴대폰 번호 알아? ( cell phone number )  <br />
        </p>
        <p>
          <b>101</b> 서로 아는 사이야? ( each other ) <br />
        </p>
        <p>
          <b>102</b> 그 남자 약혼한 거 알고 있어? ( engage ) <br />
        </p>
        <p>
          <b>103</b> 그 사람에 대해 아는 게 좀 있니? ( anything, about ) <br />
        </p>
        <p>
          <b>104</b> 너 내 이메일 주소 알아? ( e-mail address ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              100 Do you know my cell phone number?<br />
              101 Do you know each other?<br />
              102 Do you know he’s engaged?<br />
              103 Do you know anything about him?<br />
              104 Do you know my e-mail address?<br />
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
