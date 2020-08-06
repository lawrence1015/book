<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://glassbulletinawards.com/wp-content/uploads/2019/03/RedCarpet.jpg" 
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
        padding-bottom: 10px;">The Red Carpet
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        This is a preparation for a special occasion. The red carpet is used for a very influential person (V.I.P). It shows a high level of treatment and honor.
      </h3>

      <p>
        <h4>이것은 특별한 날을 위한 준비다. 레드카펫은 매우 영향력 있는 사람(V.I.P)을 위해 사용된다. 높은 수준의 대우와 명예를 보여준다.</h4>
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Preparation 준비[대비], 조제용 물질</b>
        </p>

        <p>
          <b>Occasion 때[기회/경우], 행사[의식/축하], 적절한 때[기회]</b>
        </p>

        <p>
          <b>Special 특수한[특별한], 특별한, 특유의, 특정한, 특별한, 특별한 것, 특별 상품; 특집 방송</b>
        </p>

        <p>
          <b>Red Carpet 레드 카펫[빨간 융단]</b>
        </p>

        <p>
          <b>Treatment 치료, 처치, 대우[처우/처리], 다룸, 논의, 처리</b>
        </p>

        <p>
          <b>Influential 영향력 있는, 영향력이 큰</b>
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
                        Have you walked on a red carpet?<br />
                        <br />
                        Do you want to be treated as V.I.P. on a certain occasion?<br />
                        <br />
                        Who is the most influential person in your life?
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
                        빨간 융단을 걸어 본적이 있나요.?<br />
                        <br />
                        당신은 어떤 행사에서 VIP 대접을 받기를 원하시나요.?<br />
                        <br />
                        누가 당신의 삶에서 가장 영향력이 있는 사람인가요..?
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
