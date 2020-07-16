<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://carolyngage.weebly.com/uploads/3/2/6/2/3262358/4617054.jpg" 
        style="max-width: 100%; display:block; height: auto;">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgb(32, 32, 64, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Skyrocketed Heels
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        These are sky-high platform heels. Nobody is brave enough to wear these distasteful heels, except the flamboyant Lady Gaga.
      </h3>

      <p>
        <h4>이것들은 하늘 높이 솟은 플랫폼 굽이다. 화려한 레이디 가가 외에는 누구도 이런 혐오스러운 구두를 신을 만큼 용감하지는 않다.</h4>
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Skyrocket 급등하다</b>
        </p>

        <p>
          <b>Heels 발꿈치</b>
        </p>

        <p>
          <b>Distasteful 불쾌한, 혐오스러운</b>
        </p>

        <p>
          <b>Sky-high 하늘을 찌를 듯한, 아주[너무] 높은</b>
        </p>

        <p>
          <b>Brave 용감한, 용기 있는, 용감한, 멋지게 새로운, 용감히 대면하다</b>
        </p>

        <p>
          <b>Except 제외하고는[외에는], …라는 점만 제외하면, …라는 것 외에는</b>
        </p>

        <p>
          <b>Flamboyant 이색적인; 대담한, 화려한[현란한]</b>
        </p>


      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px;padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Questions for Discussion</h3>
      <div style="padding : 16px;">

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#ffbd69">
                  <v-card-text class="px-10">
                    <p>
                      <b>
                        Would you dare to wear these heels?<br />
                        <br />
                        Why do women like to wear high heels?<br />
                        <br />
                        Are these sky-high heels fashionable?
                      </b>
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </p>

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#ffbd69">
                  <v-card-text class="px-10">
                    <p>
                      <b>
                        당신은 이런 굽의 신발들을 신을 용기가 있으신가요?<br />
                        <br />
                        왜 여성들은 높은 굽의 신발을 신는것을 좋아하나요?<br />
                        <br />
                        아주높은 굽의 신발들은 유행인가요?
                      </b>
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </p>

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

<style scoped lang="css">

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


.border {
  position: relative;
  left: 0px;
  width: 300px;
  height: 40px;
  background: #543864;
  padding-left: 10px;

}
.profile {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top : 330px;
  padding-left : 10px;
  padding-bottom: 10px;
}


</style>
