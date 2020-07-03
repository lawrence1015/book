<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGyE3lyo4/4/screen_2x/canva-exhibit-painting-display-MADGyE3lyo4.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgb(59, 105, 120, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Exhibition 1
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #204051; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Today there’s an exhibition in City Park.</li>
      <li style="list-style-type: none;">Pablo has some of his new paintings in the exhibition.</li>
      <li style="list-style-type: none;">He’s showing them to the public for the first time.</li>
      <li style="list-style-type: none;">Pablo is a very good artist. His paintings are an expression of his strong personality.</li>
      <li style="list-style-type: none;">He likes people. That’s why he paints portraits.</li>
      <li style="list-style-type: none;">The people in Pablo’s paintings are different from ordinary people.</li>
      <li style="list-style-type: none;">They have strange shapes and colors.</li>
      <li style="list-style-type: none;">At the moment Pablo is talking to some art lovers, including Dr. Stein.</li>

      <p>
        to be continued
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #204051;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Answer the questions<br />
          (질문에 답하세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            Where is Pablo?
          </li>
          <li>
            Who is he?
          </li>
          <li>
            Why does he paint portraits?
          </li>
          <li>
            What is he doing now?
          </li>
        </ol>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #204051;">Self Study</h3>
      <div style="padding : 16px;">


          <p>
            Translation
          </p>

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#cae8d5">
                  <v-card-text class="px-10">
                    <p>
                      오늘, City Park안에 전시회가 있습니다. <br />
                      Pablo의 새로운 그림 중 몇 점이 전시회에 있습니다. <br />
                      그는 처음으로 그림을 대중들에게 보이고 있습니다. <br />
                      Pablo는 매우 훌륭한 예술가입니다. 그의 그림들은 그의 강한 개성의 표현입니다. <br />
                      그는 사람들을 좋아합니다. 그렇기때문에 그는 초상화를 그립니다.  <br />
                      Pablo의 그림 안에 있는 사람들은 평범한 사람들과는 다릅니다. <br />
                      그들의 생김새나 색깔이 이상합니다.<br />
                      바로 지금 Pablo는 Dr.Stein를 포함해 그림을 사랑하는 몇몇의 사람들에게 말하고 있습니다.
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </p>

        <p>
          Notes
        </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#cae8d5">
                <v-card-text class="px-10">
                  <p>
                  a) talk to 와 talk with: 둘 다 같은 의미이지만 쓰임에 약간의 차이가 있습니다.
                  talk to는 내가 원하는 것을 상대방에게 전달할 때 주로 사용이 되고 talk with는 동시에 말을 주고 받을 때 사용이 됩니다.
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

.border:before {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 40px 40px 0px 0px;
  transform: rotate(180deg);
  border-color: transparent #204051 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #204051;
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
