<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/speaker-business-meeting-conference-hall_155003-10520.jpg">

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
    border-radius: 30px;" class="black--text">~에 대해 어떻게 생각해?</h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 8 |  </h2>
                  <br />
                  <h3>What do you think of…?</h3>
                    <br />
                    <p>
                    내 신발 어때? 처럼 어떤 대상이나 사물에 대한 상대방의 느낌이나 생각을 묻고 싶을 때&lt; What do you think of + 묻고자 하는 대상/사물&gt; 과 같이 쓸 수 있다. ‘어떻게’라는 우리 말 때문에 How를 쓰지 않도록 주의하자.
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
            A : This class will be challenging.<br />
            B : <b>우리 선생님에 대해서는 어떻게 생각해?</b><br />
            A : I think he will be hard, but fair.<br />
            B : That was my impression, too.
          </p>
          <p style="line-height: 2;">
            A : 이 수업은 어렵겠는걸.<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">What do you think of our instructor?</mark><br />
            A : 조금 빡빡해도 공평할 것 같아.<br />
            B : 나도 그렇게 생각했는데
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
          <b>057</b> 내가 새로 산 신발 어때? ( new, shoes ) <br />
        </p>
        <p>
          <b>058</b> 지나의 남자친구는 어떤 것 같니? ( boyfriend ) <br />
        </p>
        <p>
          <b>059</b> 우리 선생님에 대해 어떻게 생각해? ( instructor ) <br />
        </p>
        <p>
          <b>060</b> 동성결혼에 대해 어떻게 생각하니? ( gay, marriage ) <br />
        </p>
        <p>
          <b>061</b> 해리의 턱수염에 대해서 어떻게 생각해? ( beard ) <br />
        </p>
        <p>
          <b>062</b> 제 새로운 헤어스타일에 대해 어떻게 생각하세요? ( new, haircut ) <br />
        </p>
        <p>
          <b>063</b> 이 팔찌들에 대해 어떻게 생각하세요? ( bracelets ) <br />
        </p>
        <p>
          <b>064</b> 당신은 성형 수술에 대해 어떻게 생각하시나요? ( cosmetic surgery ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              057 What do you think of my new shoes?<br />
              058 What do you think of Gina’s boyfriend?<br />
              059What do you think of our instructor?<br />
              060 What do you think of gay marriage?<br />
              061 What do you think of Harry's beard?<br />
              062 What do you think of my new haircut?<br />
              063 What do you think of these bracelets?<br />
              064 What do you think of cosmetic surgery?<br />
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
