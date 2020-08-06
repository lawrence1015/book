<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/BqFTg/MADyRLBqFTg/1/s2/canva-people-on-train-station-MADyRLBqFTg.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Subway
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        People are waiting in the subway.
      </h3>

      <h3>
        The subway station is big and wide.
      </h3>

      <p>
        <h4>지하철을 기다리는 사람들이 있어요.</h4>
      </p>
        <h4>지하철역은 크고 넓습니다.</h4>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Token coin 사주 화폐: 버스 요금·자동 판매기에 쓰인다., 정부의 임시 보조 화폐.</b>
        </p>

        <p>
          <b>Ticket 표, 입장권, 승차권, 티켓, 복권, 표[라벨], 딱지</b>
        </p>

        <p>
          <b>Rail 난간, 가로장[걸이], 레일, 기차, 철도, 격분하다</b>
        </p>

        <p>
          <b>Station 역, 정거장[정류장], &lt;특정한 서비스가 제공되거나 이루어지는 장소건물&gt;</b>
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
                        When going to work or school, do you take a train?<br />
                        <br />
                        Do you like taking a train?<br />
                        <br />
                        How many people are waiting in the subway station?<br />
                        <br />
                        What do people usually do while waiting?<br />
                        <br />
                        What is the weather on that day?
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
                        당신은 직장이나 학교에 갈 때 기차를 타나요?<br />
                        <br />
                        당신은 기차 타는 것을 좋아하나요?<br />
                        <br />
                        지하철역에는 몇 명이 대기하고 있나요?<br />
                        <br />
                        기다리는 동안 사람들은 보통 무엇을 하나요? <br />
                        <br />
                        그날 날씨는 어떤가요?
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
