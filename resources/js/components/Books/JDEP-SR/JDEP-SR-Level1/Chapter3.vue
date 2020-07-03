<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Fruits
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        There are different kinds of fruits.
      </h3>

      <h3>They are fresh and juicy.
      </h3>

      <h3>
        These are good for a diet.
      </h3>
      <p>
        <h4>다양한 종류의 과일이 있습니다.</h4>
      </p>
      <p>
        <h4>그것들은 신선하고 과즙이 많습니다.</h4>
      </p>
        <h4>이것들은 다이어트에 좋습니다.</h4>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Fresh 신선한, 갓 딴[만든], 새로 생긴; 생생한, 새로운</b>
        </p>

        <p>
          <b>Vitamin C 비타민 C/ Ascorbic acid아스코르브산</b>
        </p>

        <p>
          <b>Nutritious영양분이 많은, 영양가가 높은</b>
        </p>

        <p>
          <b>Diet 식사[음식]; 식습관, 규정식, 다이어트, 많은 양, 다이어트를 하다</b>
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
                        Are you on a diet?<br />
                        <br />
                        Do you eat fruits regularly?<br />
                        <br />
                        What are your favorite fruits?<br />
                        <br />
                        What tropical fruits can you see in the picture?<br />
                        <br />
                        Can you name the three fruits that you like to eat?<br />
                        <br />
                        What vitamin can we get from citrus?
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
                        다이어트 중이신가요?<br />
                        <br />
                        과일을 규칙적으로 먹나요?<br />
                        <br />
                        당신이 가장 좋아하는 과일은 무엇입니까?<br />
                        <br />
                        사진에서 볼 수 있는 열대과일은 무엇입니까?<br />
                        <br />
                        당신이 먹고 싶은 과일 세 개의 이름을 댈 수 있나요?<br />
                        <br />
                        감귤류에서 우리가 얻을 수 있는 비타민은 무엇인가요?
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
