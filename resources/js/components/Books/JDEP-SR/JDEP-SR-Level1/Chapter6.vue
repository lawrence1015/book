<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGxpAwoVg/4/screen_2x/canva-aerial-photography-of-people-swimming-on-beach-MADGxpAwoVg.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Beach
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        There are a lot of people on the beach.
      </h3>

      <h3>
        Some people are sunbathing.
      </h3>

      <h3>
        It is a white sand beach.
      </h3>
      <p>
        <h4>해변에 사람이 많아요.</h4>
      </p>
      <p>
        <h4>일광욕을 하는 사람들이 있습니다.</h4>
      </p>
        <h4>그것은 백사장이에요.</h4>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Sunbath 일광욕; 태양등욕</b>
        </p>

        <p>
          <b>Surfing  파도타기, 서핑, 인터넷 서핑; 텔레비전 채널을 이리저리 돌리기</b>
        </p>

        <p>
          <b>Sand 모래, 모래사장, 사포[모래]로 닦다, 눈곱, [U][鑛]홍옥수, 사드</b>
        </p>

        <p>
          <b>Sight seeing 관광, 유람.</b>
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
                        When was the last time you went to the beach?<br />
                        <br />
                        Do you like sunbathing?<br />
                        <br />
                        What do people usually bring if they go to the beach? <br />
                        <br />
                        What are the things that you can see on the shoreline?<br />
                        <br />
                        Do you think it's safe to swim on that beach?
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
                        마지막으로 해변에 간 게 언제죠?<br />
                        <br />
                        일광욕을 좋아하세요?<br />
                        <br />
                        사람들이 해변에 가면 보통 무엇을 가지고 오나요?<br />
                        <br />
                        해안선에서 볼 수 있는 것은 무엇입니까?<br />
                        <br />
                        당신은 그 해변에서 수영하는 것이 안전하다고 생각하나요?
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
