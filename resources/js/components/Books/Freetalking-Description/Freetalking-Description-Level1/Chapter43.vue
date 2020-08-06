<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://assets.rappler.com/B30B75B1BDB444CE9600EEA5A931DCD1/img/721FCF390BCE4DD3A170601B0C9B619A/Ms_World_2018-Queens-October-8-2018-012.jpg" 
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
        padding-bottom: 10px;">Beauty Pageant
        </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        Three elegant women wearing gorgeous gowns are joyful while receiving their respective crowns and titles. These girls possess the required qualities to win the pageant.
      </h3>

      <p>
        화려한 가운을 입은 우아한 여성 3명이 각자의 왕관과 타이틀을 받으며 즐거워하고 있다. 이 소녀들은 미인대회에서 우승하는데 필요한 자질을 갖추고 있다.
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Elegant 우아한, 품격 있는, 우아한, 명쾌한, 멋들어진</b>
        </p>

        <p>
          <b>Gorgeous 아주 멋진[아름다운/좋은], 선명한, 화려한</b>
        </p>

        <p>
          <b>Joyful 아주 기뻐하는; 기쁜, 기쁨을 주는</b>
        </p>

        <p>
          <b>Respective 각자의, 각각의</b>
        </p>

        <p>
          <b>Possess 소유[소지/보유]하다, 지니다[갖추고 있다], 사로잡다[지배하다]</b>
        </p>

        <p>
          <b>Required &lt;학과가&gt; 필수의</b>
        </p>

        <p>
          <b>Qualities 질, 우수함, 고급, 양질, 자질, 특성, 특징, 고급[양질]의</b>
        </p>

        <p>
          <b>Pageant 야외극; 가장 행렬, 미인 대회, 변화무쌍하고 흥미로운 것</b>
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
                        Do you like watching beauty pageants?<br />
                        <br />
                        What makes a woman beautiful?<br />
                        <br />
                        Which is more important, the inner beauty or outer beauty?
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
                        당신은 미인대회 보는것을 좋아하나요.?<br />
                        <br />
                        어떤것이 여성을 아름답게 만드나요.?<br />
                        <br />
                        내면의 아름다움 과 외면의 아름다움중 어떤것이 중요한가요.?
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
