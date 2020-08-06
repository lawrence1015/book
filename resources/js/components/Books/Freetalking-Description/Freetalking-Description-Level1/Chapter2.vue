<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/RwLJI/MADyR2RwLJI/1/s2/canva-close-up-photo-of-goats-near-person%27s-hands-MADyR2RwLJI.jpg" style="max-width: 100%; display:block; height: auto;">

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
        padding-bottom: 10px;">Zoo
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        A girl is feeding two goats.
      </h3>

      <h3>The goats are inside the cage.</h3>

      <p>
        <h4>한 소녀가 염소 두 마리에게 먹이를 주고 있습니다.</h4>
     </p>

        <h4>염소들이 우리 안에 있어요.</h4>
      
      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Feed 밥[우유]을 먹이다; 먹이를 주다, 먹을 것을 먹다, 먹이다[먹여 살리다]</b>
        </p>

        <p>
          <b>Cage 우리; 새장, 우리[새장]에 가두다</b>
        </p>

        <p>
          <b>Hungry 배고픈, 굶주리는, 굶주리는 사람들, 허기지게 만드는</b>
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
                        Do you like going to the zoo? Why or why not?<br />
                        <br />
                        What's your favorite animal?<br />
                        <br />
                        Do you think people are happy everytime they visit a zoo?<br />
                        <br />
                        What kind of animal can you see inside the cage?<br />
                        <br />
                        What is the girl doing in the picture?
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
                        당신은 동물원에 가는 것을 좋아하나요? 왜 그런가요, 아니면 왜 아닌가요?<br />
                        <br />
                        당신이 가장 좋아하는 동물은 무엇입니까?<br />
                        <br />
                        여러분은 사람들이 동물원을 방문할 때마다 행복하다고 생각하나요?<br />
                        <br />
                        우리 안에서 어떤 동물을 볼 수 있나요?<br />
                        <br />
                        사진 속의 소녀는 무엇을 하고 있는가?
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
