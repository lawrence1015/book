<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/laughing-girls-drinking-tea-talking_23-2147745188.jpg">

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
    border-radius: 30px;" class="black--text">왜 ~하는지 알아?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;" korean = "korean">

                 <h2>Pattern 18 |  </h2>
                  <br />
                  <h3>Do you know why…?</h3>
                    <br />
                    <p>
                    “왜 화났는지 알아?” 처럼 어떤 상황에 대한 이유를 아는지 물을 때 Do you know why…? 패턴을 사용해보자.
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
            A : Where’s Sarah?<br />
            B : She didn’t come.<br />
            A : <b>왜 안왔는지 아니?</b><br />
            B : I have no idea.
          </p>
          <p style="line-height: 2;">
            A : Sarah는 어디에 있어?<br />
            B : 안왔어.<br />
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Do you know why she didn’t come?</mark><br />
            B : 모르겠는데.
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
          <b>137</b> 왜 여기가 추운지 알아? ( cold, here ) <br />
        </p>
        <p>
          <b>138</b> 그 애가 왜 안 왔는지 아니? ( did, come ) <br />
        </p>
        <p>
          <b>139</b> 그 남자애가 화가 난 이유를 알고 있어? ( angry ) <br />
        </p>
        <p>
          <b>140</b> 그 애가 왜 회사를 그만뒀는지 알아?( left, company ) <br />
        </p>
        <p>
          <b>141</b> 왜 바닥이 젖었는지 아니? ( floor, wet ) <br />
        </p>
        <p>
          <b>142</b> 문이 왜 잠겨 있는지 아세요? (lock) <br />
        </p>
        <p>
          <b>143</b> 제가 왜 진짜 사냥꾼이 됐는지 아세요? ( become, hunter ) <br />
        </p>
        <p>
          <b>144</b> 일본인들은 왜 생선 먹는 것을 좋아하는지 아세요? ( eat, fish ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              137 Do you know why it’s cold in here?<br />
              138 Do you know why she didn’t come?<br />
              139 Do you know why he’s angry?<br />
              140 Do you know why she left the company?<br />
              141 Do you know why the floor is wet?<br />
              142 Do you know why the door is locked?<br />
              143 Do you know why I really became a hunter?<br />
              144 Do you know why does Japanese like eating fish?<br />
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
