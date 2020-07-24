<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/back-view-women-running-sea-coast_74855-4947.jpg">

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
    border-radius: 30px;" class="black--text">난 완전히 ~해
  </h1>
      </v-layout>
    </v-img>


          <h2 style="padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Today's topic</h2>

  <hr width="60%">
               <div style="padding : 10px; line-height: 200%;">

                 <h2>Pattern 63 |  </h2>
                  <br />
                  <h3>I’m absolutely… </h3>
                    <br />
                    <p>
                    영어를 잘하는 사람은 부사와 형용사를 적절하게 잘 쓴다. 가령 I’m thrilled. 라고 해도 되지만, 강하게 I’m absolutely thrilled. 라고 하면 정말 실감나는 표현이 된다.
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
            A : That was a tough marathon.<br />
            B : <b>난 완전 지쳤어.</b><br />
            A : Same here. Let’s hit the shower<br />
            B : Sounds terrific!
          </p>
          <p style="line-height: 2;">
            A : 힘든 마라톤이었어.<br />
            B : <b>I’m absolutely exhausted.</b><br />
            A : 나도. 자, 샤워하자고.<br />
            B : 좋지!
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
          <b>497</b> 완전 짜릿해. ( thrill ) <br />
        </p>
        <p>
          <b>498</b> 정말로 확실하다니까. ( sure ) <br />
        </p>
        <p>
          <b>499</b> 완전히 지쳐버렸어. ( exhaust ) <br />
        </p>
        <p>
          <b>500</b> 이것에 대해선 전적으로 네 편이야. ( behind on you, this ) <br />
              *be behind~  ~를 지지하다.<br />
        </p>
        <p>
          <b>501</b> 난 단것에 완전히 빠져 있어. ( crazy about, sweets ) <br />
        </p>
        <p>
          <b>502</b>  <br />
        </p>
        <p>
          <b>503</b>  <br />
        </p>
        <p>
          <b>504</b>  <br />
        </p>
        <v-container grid-list-md text-xs-left>
      <v-layout row wrap>


          <v-flex xs12>
          <v-card light color="#a7d7c5">
            <v-card-text class="px-10" style="color:#d9e7cd;">
              335 I’m absolutely thrilled.<br />
              336 I’m absolutely sure.<br />
              337 I’m absolutely exhausted.<br />
              338 I’m absolutely behind you on this. <br />
              339 I’m absolutely crazy about sweets.<br />
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
