<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://static0.srcdn.com/wordpress/wp-content/uploads/2018/12/Avengers-Infinity-War-Official-Team-Members.jpg" 
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
        padding-bottom: 10px;">The Hero
      </h1>
    </v-layout>
  </v-img>

  <div style= "border-color: #543864; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" style = "border-radius: 0px 0px 70px 0px;" >Sample Descriptions</h3>
  <div style = "padding : 16px;">

      <h3>
        Four men are playing different roles and wearing their signature costumes. Heroism is their mission as they maintain a balance between good and bad in this world.
      </h3>

      <p>
        <h4>네 명의 남자가 각기 다른 역할을 하며 그들의 시그니처 의상을 입고 있다. 영웅주의는 그들이 이 세상에서 선과 악 사이의 균형을 유지하는 그들의 사명이다.</h4>
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #543864; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="border-radius: 0px 0px 70px 0px; padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 2px; margin-top: 0px;">Suggested Vocabulary</h3>
      <div style="padding : 16px;">

        <p>
          <b>Role 역할, 역할[역/배역], 역할[기능]</b>
        </p>

        <p>
          <b>Signature 서명, 특징</b>
        </p>

        <p>
          <b>Costume 의상[복장], 의상[분장/변장]</b>
        </p>

        <p>
          <b>Heroism 영웅적[대단히 용감한] 행위</b>
        </p>

        <p>
          <b>Mission 임무, 사절단[파견단]; 파견지, 전도[포교], 전도 사업 시설</b>
        </p>

        <p>
          <b>Balance 균형[평형], 균형, 잔고, 잔액, 지불 잔액, 잔금</b>
        </p>

        <p>
          <b>Maintain 유지하다[지키다], 유지하다, 주장하다, 부양하다</b>
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
                        Who is your hero in your life?<br />
                        <br />
                        What will you do to become a hero?<br />
                        <br />
                        Is it nice to be a hero? Explain why.
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
                        너의 인생에서 너의 영웅은 누구니?<br />
                        <br />
                        영웅이 되기 위해 무엇을 할 것인가?<br />
                        <br />
                        영웅이 되는 것이 좋은가? 이유를 설명하라.
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
