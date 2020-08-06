<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/delighted-people-drinking-during-dinner_23-2147668876.jpg">

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
    border-radius: 30px;" class="black--text">Do you know if…?  ~인지 아닌지 아니? 
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;" class = "korean">

                 <h2>Pattern 20 |  </h2>
                  <br />
                  <h3>Do you know if…?</h3>
                    <br />
                    <p>
                    ~인지 아닌지 궁금할 때는 if를 사용해서 위와 같이 물어보자. 이 패턴은 ‘혹시~니?라는 의미로도 쓰인다.
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
            A : You’re joining us for dinner, right?<br />
            B : Yep. <b>제인이 올지 안 올지 알아?</b><br />
            A : I don’t know. Why?<br />
            B : I was just wondering.
          </p>
          <p style="line-height: 2;">
            A : 우리랑 저녁 같이 먹을 거지, 맞지?<br />
            B : 응. <mark style="background-color: #a7d7c5; color: #d9e7cd;">>Do you know if Jane’s coming?</mark><br />
            A : 모르겠는데, 왜?<br />
            B : 그냥 궁금해서.
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
          <b>153</b> 우리 월급이 인상될지 알고 있니? ( get, raise ) <br />
        </p>
        <p>
          <b>154</b> 제인이 올지 안 올지 아니? ( come ) <br />
        </p>
        <p>
          <b>155</b> 혹시 그 프로가 7시에 시작하니? ( the show, start ) <br />
        </p>
        <p>
          <b>156</b> 혹시 짐이 알레르기가 있니? ( any, allergy ) <br />
        </p>
        <p>
          <b>157</b> 이 영화 재미있는지 아닌지 알아? ( movie, interesting ) <br />
        </p>
        <p>
          <b>158</b> 우리가 시청을 통과했는지 아세요? ( pass, City Hall ) <br />
        </p>
        <p>
          <b>159</b> 크리스마스 이브에 일해야 하는지 아세요? ( work on, Christmas Eve) <br />
        </p>
        <p>
          <b>160</b> 당신은 그가 알코올 중독자인지 아나요? ( if, alcoholic ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              153 Do you know if we’re getting raises?<br />
              154 Do you know if Jane’s coming?<br />
              155 Do you know if the show starts at 7:00?<br />
              156 Do you know if Jim has any allergies?<br />
              157 Do you know if this movie is interesting or not?<br />
              158 Do you know if we've passed City Hall?<br />
              159 Do you know if we have to work on Christmas Eve? <br />
              160 Do you know if he's alcoholic?<br />
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
