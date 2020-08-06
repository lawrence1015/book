<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://1.bp.blogspot.com/-V2_usryMwX0/TtDC9GP4c2I/AAAAAAAAbhQ/lnXrX_E5XrI/s640/snsd+wonder+gils.jpg" 
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
        padding-bottom: 10px;">Korean Girls
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        The upper picture shows the Girls Generation that is composed of nine members. The picture below shows The Wonder Girls that consist of five members. These female groups are popular and they are highly competing themselves in Korean pop culture.
      </h3>

      <p>
        <h4>위쪽 사진은 9명의 멤버로 구성된 소녀시대를 보여준다. 아래 사진은 5명의 멤버로 구성된 원더걸스를 보여준다. 이 여성 그룹들은 인기가 많고 한국 대중 문화에서 높은 경쟁을 하고 있다.</h4>
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Composed ~으로 구성되다[이뤄지다], 침착한, 차분한</b>
        </p>

        <p>
          <b>Consist 되어[이루어져] 있다, 있다, 존재하다, 양립[일치]하다</b>
        </p>

        <p>
          <b>Popular 인기 있는, 대중[통속]적인, 많은 사람들이 공유하는, 일반적인</b>
        </p>

        <p>
          <b>Highly 크게, 대단히, 매우, 높이[많이], 고도로, 높이 평가하여, 크게 칭찬하여</b>
        </p>

        <p>
          <b>Competing ( Present participle: competing ) 경쟁하다, (시합·경기 등에서) (~와) 겨루다, (시합 등에) 참가하다</b>
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
                        Who is your favorite female group?<br />
                        <br />
                        What female group is the most popular in Korea?<br />
                        <br />
                        What is Korean pop culture?
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
                        네가 가장 좋아하는 여성 그룹은 누구니?<br />
                        <br />
                        어떤 여성그룹이 한국에서 가장 인기가 있습니까.?<br />
                        <br />
                        한국의 팝 문화는 어떻습니까.?
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
