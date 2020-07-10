<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/laughing-women-drinking-wine_23-2147769943.jpg">

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
    border-radius: 30px;" class="black--text">~는 어때?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 10 |  </h2>
                  <br />
                  <h3>How do you like….?</h3>
                    <br />
                    <p>
                    ~를 어떻게 좋아하니? 라고 직역하면 어색하다. 상대방이 뭔가를 마음에 들어하는지 물어볼 때 사용하는 패턴으로 외워두자. 음식과 함께 쓰일 때는 원하는 요리 방법이나 맛을 묻는 표현이 되기도 한다.
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
            A : <b>와인 어때?</b><br />
            B : I like it, but it’s a little bitter.<br />
            A : Is it?<br />
            B : You didn’t know? Here. Try some.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">How do you like the wine?</mark><br />
            B : 좋긴 한데 좀 쓰네.<br />
            A : 그래?<br />
            B : 몰랐어? 자. 여기. 한번 마셔봐.
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
          <b>073</b> 그거 마음에 드니? ( it ) <br />
        </p>
        <p>
          <b>074</b> 그 음악 어때? ( 마음에 드니? ) <br />
        </p>
        <p>
          <b>075</b> 그 와인은 어떤 것 같아? ( 괜찮아? ) <br />
        </p>
        <p>
          <b>76</b> 계란을 어떻게 요리해줄까? ( egg ) <br />
        </p>
        <p>
          <b>077</b> 내 머리 스타일 어때? ( hair ) <br />
        </p>
        <p>
          <b>078</b> 커피는 어떻습니까? ( coffee ) <br />
        </p>
        <p>
          <b>079</b> 이 양복 어때요? ( suit ) <br />
        </p>
        <p>
          <b>080</b> 결혼 생활은 어때요? ( marriage ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              073  How do you like it?<br />
              074  How do you like the music?<br />
              075  How do you like the wine<br />
              076  How do you like your egg?<br />
              077  How do you like my hairstyle?<br />
              078  How do you like your coffee?<br />
              079  How do you like this suit?<br />
              080  How do you like your marriage?<br />
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
