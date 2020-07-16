<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://media.architecturaldigest.com/photos/55e791cecd709ad62e900ec9/master/w_900,h_600,c_limit/dam-images-daily-2015-06-most-beautiful-restaurants-most-beautiful-restaurants-11.jpg" 
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
        padding-bottom: 10px;">An Italian Restaurant
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        The picture shows a fancy restaurant. The superb meal and delightful ambiance are very tempting. It's worth it to spend dollars eating at this kind of restaurant.
      </h3>

      <p>
        <h4>사진은 고급 레스토랑이다. 훌륭한 식사와 즐거운 분위기는 매우 유혹적이다. 이런 식당에서 밥을 먹으며 달러를 쓰는 것은 그만한 가치가 있다.</h4>
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Fancy 원하다, …하고 싶다, 끌리다[반하다], 자만심에 차 있다</b>
        </p>

        <p>
          <b>Superb 최고의, 최상의, 대단히 훌륭한</b>
        </p>

        <p>
          <b>Delightful 정말 기분 좋은[마음에 드는]</b>
        </p>

        <p>
          <b>Ambience 분위기</b>
        </p>

        <p>
          <b>Worth …의 가치가 있는[되는], ~할 가치가 있는[~해 볼 만한]</b>
        </p>

        <p>
          <b>Tempting 솔깃한, 구미가 당기는</b>
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
                        Have you tried eating at an Italian restaurant?<br />
                        <br />
                        What's your favorite Italian food?<br />
                        <br />
                        How much does it cost eating at an Italian restaurant?
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
                        당신은 이탈리아 음식점에서 식사를 해본적이 있습니까.?<br />
                        <br />
                        네가 가장 좋아하는 이탈리아 음식은 뭐니?<br />
                        <br />
                        이탈리안 음식점에서 식사하는 것은 얼마정도의 비용이 듭니까.?
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
