<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/7/73/San_Francisco-Bay_Bridge_Sunrise.jpg" 
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
        padding-bottom: 10px;">Bridges in the World
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        There are various structures spanning and providing passage for pedestrians and vehicles. It shows the greatest challenge in civil engineering.
      </h3>

      <p>
        <h4>보행자와 차량의 통행을 위한 다양한 구조물이 있다. 그것은 토목 공학에서 가장 큰 도전을 보여준다.</h4>
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Various 여러 가지의, 각양각색의, 다양한, 다양한 특징을 지닌</b>
        </p>

        <p>
          <b>Structure 구조, 구조물, 건축물, 체계, 짜임새, 조직하다, 구조화하다</b>
        </p>

        <p>
          <b>Spanning (얼마의 기간에) 걸치다[걸쳐 이어지다]</b>
        </p>
        
        <p>
          <b>Passage 통로, 복도, 관[길], 구절; 악절, 흐름[경과]</b>
        </p>

        <p>
          <b>Pedestrian 보행자, 보행자용의; 보행자의, 상상력이 없는, 재미없는</b>
        </p>

        <p>
          <b>Civil Engineering 토목 공학</b>
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
                        Where can you find the golden gate?<br />
                        <br />
                        What makes bridges the greatest challenge in civil engineering?<br />
                        <br />
                        What bridge connects Kobe and Awaji in Japan?
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
                        당신은 멋진 문을 어디서 찾을 수 있나요.?<br />
                        <br />
                        어떤 것이 다리를 토목공학에서 가장 위대한 도전으로 만들었나요.?<br />
                        <br />
                        어떤 다리가 일본의 고베와 아와지시를 연결하고 있나요.?
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
