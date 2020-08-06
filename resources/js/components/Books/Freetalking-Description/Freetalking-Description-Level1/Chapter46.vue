<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://i0.wp.com/bucketlistjourney.net/wp-content/uploads/2012/05/IMG_0965-1024x682.jpg" 
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
        padding-bottom: 10px;">The Palace Guard
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        There are men in uniform standing firmly outside their designated posts. They are observing the surroundings carefully to ensure the security of the palace.
      </h3>

      <p>
        <h4>제복을 입은 남자들이 지정된 직책 밖에 굳게 서 있다. 그들은 궁궐의 안정을 위해 주변을 주의 깊게 관찰하고 있다.</h4>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Firmly 단호히, 확고히</b>
        </p>

        <p>
          <b>Designated 지정된; 관선의</b>
        </p>

        <p>
          <b>Post 우편, 우편물, 우편물 수거[배달] 시간, 직책, 자리</b>
        </p>

        <p>
          <b>Observe …을 보다[ 알다/목격하다], 관찰[관측/주시]하다, 말하다</b>
        </p>

        <p>
          <b>Surrounding 인근의, 주위의</b>
        </p>

        <p>
          <b>Ensure 반드시 …하게[이게] 하다, 보장하다</b>
        </p>

        <p>
          <b>Security  보안, 경비, 안보, 방위</b>
        </p>

        <p>
          <b>Palace 궁전, 왕실, 대궐 같은 집, 대저택, 팰리스</b>
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
                        What can you say about the job of a palace guard?<br />
                        <br />
                        Why do they need to protect the palace? Who do you think protects the palace guard?
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
                        대저택 경호원의 업무에 관하여 어떻게 생각하십니까.?<br />
                        <br />
                        그들은 왜 궁전을 보호해야 하는가? 누가 궁궐 경비원을 보호한다고 생각하는가?
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
