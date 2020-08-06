<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADQ4vPrlZw/1/screen_2x/canva-dubai-burj-khalifa-tower-MADQ4vPrlZw.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Building
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        This is the tallest building in the world.
      </h3>

      <h3>
        The name of the building is Burj Khalifa, formerly Burj Dubai.
      </h3>

      <p>
        <h4>이것은 세계에서 가장 높은 건물입니다.</h4>
      </p>
        <h4>이 건물의 이름은 부르즈 칼리파, 이전에는 부르즈 두바이 였다.</h4>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Skyscraper 고층 건물</b>
        </p>

        <p>
          <b>Burj Khalifa 부르즈 할리파</b>
        </p>

        <p>
          <b>modern 현대의, 근대의, 현대적인, 모던한, 최신의, 새로운, 선구적인</b>
        </p>

        <p>
          <b>Architecture 건축학[술], 건축 양식, 아키텍처, 컴퓨터 시스템의 구성</b>
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
                        Where can you see the tallest building in the world?<br />
                        <br />
                        What is the tallest building in your country?<br />
                        <br />
                        What can you say about the architectural design of that building?<br />
                        <br />
                        Do you have any idea where we can find Burj  Khalifa Tower?<br />
                        <br />
                        Aside from the building, what else can you see in that picture?
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
                        여러분은 세계에서 가장 높은 건물을 어디에서 볼 수 있나요?<br />
                        <br />
                        당신 나라에서 가장 높은 건물은 무엇입니까?<br />
                        <br />
                        저 건물의 건축 디자인은 뭐라고 말할 수 있을까요?<br />
                        <br />
                        부르즈 칼리파 타워를 어디서 찾을 수 있는지 아세요?<br />
                        <br />
                        건물 말고 저 사진에서 또 뭐가 보이나요?
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
