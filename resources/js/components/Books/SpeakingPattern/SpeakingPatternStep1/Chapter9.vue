<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/businesswomen-restaurant_1157-9031.jpg">

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
    border-radius: 30px;" class="black--text">~에 대해 어떻게 생각해?
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px;">

                 <h2>Pattern 9 |  </h2>
                  <br />
                  <h3>What do you think about…?</h3>
                    <br />
                    <p>
                    What do you think about…? 은 What do you think of…?와 같은 의미다. Of와 about 은 의미 차이가 거의 없지만 about이 좀더 구어체에 가깝다.
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
            A : <b>그 여자에 대해 어떻게 생각해?</b><br />
            B : I think she’s a nice person.<br />
            A : Is she cute?<br />
            B : I think so, but she’s not my type.
          </p>
          <p style="line-height: 2;">
            A : <mark style="background-color: #a7d7c5; color: #d9e7cd;">What do you think about her?</mark><br />
            B : 괜찮은 사람 같아.<br />
            A : 귀여워?<br />
            B : 응. 그렇지만 내 타입은 아니야.
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
          <b>065</b> 이 그림 어떤 것 같아? ( painting ) <br />
        </p>
        <p>
          <b>066</b> 그 여자에 대해 어떻게 생각해? ( her ) <br />
        </p>
        <p>
          <b>067</b> 그 여자 새로 한 머리 스타일 어때? ( new,  hairstyle ) <br />
        </p>
        <p>
          <b>068</b> 일찍 떠나는 것에 대해서 어떻게 생각하니? ( leave, early ) <br />
        </p>
        <p>
          <b>069</b> 하룻밤 묵고 가는 것에 대해 어떻게 생각해? ( stop for the night ) <br />
        </p>
        <p>
          <b>070</b> 코로나 바이러스에 대해 어떻게 생각하세요? ( corona virus ) <br />
        </p>
        <p>
          <b>071</b> 새로운 휴가 계획에 대해 어떻게 생각하세요? ( vacation, plan ) <br />
        </p>
        <p>
          <b>072</b> 그 뉴스에 대해 어떻게 생각하세요? ( news ) <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              065 What do you think about this painting?<br />
              066 What do you think about her?<br />
              067 What do you think about her new hairstyle?<br />
              068 What do you think about leaving early?<br />
              069 What do you think about stopping for the night?<br />
              070 What do you think about the Corona Virus?<br />
              071 What do you think about the new vacation plan?<br />
              072 What do you think about the news?<br />
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
