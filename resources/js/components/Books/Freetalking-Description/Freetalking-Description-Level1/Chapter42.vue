<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://i.pinimg.com/originals/98/45/09/9845094fef42176717a4cb77ca858f54.jpg" 
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
        padding-bottom: 10px;">Golf Course
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        This is a very fascinating golf course that is cruising in the ocean. It can reach different destinations worldwide. It is perfected by its beautiful landscape.
      </h3>

      <p>
        <h4>이곳은 바다를 순항하고 있는 매우 매혹적인 골프장이다. 그것은 전세계적으로 다른 목적지에 도달할 수 있다. 그것은 아름다운 경치로 완벽하다.</h4>
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Fascinating 대단히 흥미로운, 매력적인</b>
        </p>

        <p>
          <b>Golf 골프</b>
        </p>

        <p>
          <b>Cruising 여자[남자]를 낚으러 다니기</b>
        </p>

        <p>
          <b>Destination 목적지, 도착지, 사람들이 특별히 찾는 호텔/상점/식당 등</b>
        </p>

        <p>
          <b>Worldwide 전 세계적인</b>
        </p>

        <p>
          <b>Reach ...에 이르다[닿다/도달하다], 들어가다[미치다], 이르다[달하다]</b>
        </p>

        <p>
          <b>Landscape 풍경, 풍경화, 가로로 긴 배치, 풍경 모드, 조경을 하다</b>
        </p>

        <p>
          <b>Perfected (결함흠 등이 없는) 완벽한[완전한/온전한] (틀린 데가 하나도 없이) 완벽한 (→word-perfect)</b>
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
                        What made golf a very expensive sport in Korea?<br />
                        <br />
                        Why are Koreans fanatic about golf?<br />
                        <br />
                        Have you tried playing golf?
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
                        한국에서 어떤것이 골프를 값비싼 운동으로 만들었습니까. ?<br />
                        <br />
                        왜 한국사람들은 골프에 광적입니까. ?<br />
                        <br />
                        골프해 본 적 있니?
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
