<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/mom-dad-little-boy-taste-apples-sitting-grass-during-picnic-park_8353-5353.jpg">

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
    border-radius: 30px;" class="black--text">언제 ~하는지 알아?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;" class = "korean">

                 <h2>Pattern 19 |  </h2>
                  <br />
                  <h3>Do you know when…?</h3>
                    <br />
                    <p>
                    영화가 언제 시작하는지 아니? 처럼 when 을 써서 때나 시간과 관련된 질문을 할 때 이 패턴을 사용한다.
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
            A : What a great picnic!<br />
            B : I’m really enjoying myself.<br />
            A : Well, there will be more fun later.<br />
            B : <b>언제 불꽃놀이가 시작되는지 알아?</b>
          </p>
          <p style="line-height: 2;">
            A : 정말 굉장한 나들이야!<br />
            B : 정말 재밌어<br />
            A : 글쎄, 나중에 더 재미있는 게 있을걸.<br />
            B : <mark style="background-color: #a7d7c5; color: #d9e7cd;">Do you know when the fireworks start?</mark>
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
          <b>145</b> 그분이 언제 도착했는지 알아요? ( arrive ) <br />
        </p>
        <p>
          <b>146</b> 이게 언제 끝날지 알아요? ( will, over ) <br />
        </p>
        <p>
          <b>147</b> 언제 불꽃놀이가 시작되는지 알아? ( fireworks, start ) <br />
        </p>
        <p>
          <b>148</b> 그 애 생일이 언제인지 알아? ( birthday ) <br />
        </p>
        <p>
          <b>149</b> 우리 숙제가 언제까지인지 아니? ( assignment, due ) <br />
        </p>
        <p>
          <b>150</b> 랜디가 언제 부케를 줬는지 아세요? (give, bouquet) <br />
        </p>
        <p>
          <b>151</b> 여러분은 언제 최초의 인공위성이 발사되었는지 알고 있나요? (artificial,satellite) <br />
        </p>
        <p>
          <b>152</b> 빌이 언제 다시 출근하는지 아세요? (coming back) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              145 Do you know when he arrived?<br />
              146 Do you know when this will be over?<br />
              147 Do you know when the fireworks start?<br />
              148 Do you know when his Birthday is<br />
              149 Do you know when our assignment is due?<br />
              150 Do you know when Randy gave her the bouquet? <br />
              151 Do you know when the first artificial satellite was launched? <br />
              152 Do you know when Bill is coming back to work?<br />
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
