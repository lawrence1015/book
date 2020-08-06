<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="images/crustacean.jpg" 
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
        padding-bottom: 10px;">Crustacean Family
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        The pictures show a king crab and a giant lobster. These species belong to one family called crustacean. Crab is an omnivore while the lobster is a scavenger. 
      </h3>

      <h3>
        It looks like a delectable meal.
      </h3>

      <p>
        <h4>이 사진들은 킹크랩과 거대한 랍스터를 보여준다. 이 종들은 갑각류라고 불리는 한 종에 속한다. 게는 잡식성이고, 바닷가재는 잡식성이다.</h4>
      </p>
        <h4>그것은 맛있는 식사처럼 보인다.</h4>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Crustacean 갑각류 동물</b>
        </p>

        <p>
          <b>Species 종</b>
        </p>

        <p>
          <b>Omnivore 잡식 동물</b>
        </p>

        <p>
          <b>Scavenger 쓰레기 더미를 뒤지는 사람[동물]; 죽은 동물을 먹는 동물[조류]</b>
        </p>

        <p>
          <b>Delectable 아주 맛있는[맛있어 보이는/좋은 냄새가 나는], 매력이 넘치는</b>
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
                        Which do you prefer to eat, a crab or a lobster?<br />
                        <br />
                        What nutrients can you get from eating crabs and lobsters?
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
                        당신은게와 바닷가재 중 어떤것을 먹는 것을 선호하나요.?<br />
                        <br />
                        당신은 게와 바닷가재에서 어떤 영양분을 섭취할 수 있나요.?
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
