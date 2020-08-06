<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cast-members-of-nbcs-comedy-series-friends-pictured-david-news-photo-908295-1567634609.jpg?crop=0.846xw:0.674xh;0.115xw,0.213xh&resize=640:*" 
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
        padding-bottom: 10px;">Friends
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        There are six people in the picture and they are friends.
      </h3>

      <h3>
        They are comfortable with each other and very joyful.
      </h3>

      <h3>The first guy is holding the shoes of the girl wearing a silver gown.</h3>

      <p>
        <h4>사진에는 6명이 있고 그들은 친구들이다.</h4>
      </p>
      <p>
        <h4>그들은 서로 편안하고 매우 즐겁다.</h4>
      </p>
        <h4>첫 번째 남자가 옆에 있는 소녀의 신발을 들고 있다.</h4>


      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Comfortable 편한, 쾌적한, 편안한, 수월하게[편하게] 생각하는, 풍족한, 넉넉한</b>
        </p>

        <p>
          <b>Comfort 안락, 편안, 위로, 위안, 위안을 주는[위로가 되는] 사람[것]</b>
        </p>

        <p>
          <b>Company 회사, 단체, 함께 있음, 손님, 함께 있는 사람들, 중대</b>
        </p>

        <p>
          <b>Joyful 아주 기뻐하는; 기쁜, 기쁨을 주는</b>
        </p>

        <p>
          <b>Seek 찾다, 구하다, 추구하다, 청하다, 구하다, …하려고 하다</b>
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
                        Why do we need friends?<br />
                        <br />
                        To whom do you seek comfort?
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
                        왜 우리는 친구가 필요한가?<br />
                        <br />
                        너는 누구에게 위안을 구하니?
                      </b>
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </p>

        <p>Image Source: "Women's Health"</p>


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
