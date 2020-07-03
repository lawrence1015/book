<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGvogDzYM/7/screen_2x/canva-black-activity-tracker-watch-reading-12%3A00-MADGvogDzYM.jpg">

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
        padding-bottom: 10px;">What time is it?
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #204051; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">What time is it?</li>
      <li style="list-style-type: none;">What time is it there? – I’m not sure…</li>
      <li style="list-style-type: none;">Well, it’s half past two here, so that’s about 12 A.M. there. – That’s very late.</li>
      <li style="list-style-type: none;">Excuse me, what time is it? – It’s noon, twelve o’clock. – Thanks.</li>
      <li style="list-style-type: none;">It’s quarter past eight. or It’s fifteen past eight.</li>
      <li style="list-style-type: none;">It’s half past eleven. or It’s eleven thirty.</li>
      <li style="list-style-type: none;">It’s quarter to ten. or It’s fifteen to ten. or It’s nine forty-five.</li>
      <li style="list-style-type: none;">It’s seven twenty. or It’s twenty after seven.</li>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #204051;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Answer the questions.<br />
          (질문에 답하세요.)
        </p>


        <ol style="margin: 12px;">
          <li>
            It’s quarter past two. = It's <u> &emsp; &emsp; &emsp; </u>.
          </li>
          <li>
             It's eleven thirty = It’s <u> &emsp; &emsp; &emsp; </u>.
          </li>
          <li>
            It's fifteen past five = It's <u> &emsp; &emsp; &emsp; </u>.
          </li>
          <li>
            It's eight forty-five. = It's <u> &emsp; &emsp; &emsp; </u>.
          </li>
        </ol>

        <p>
          Free response:<br />
          What time is it now?
        </p>



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
                      누구에게 전화하세요? - 제 동생이요. 그녀는 오스트레일리아, 시드니에 있습니다.<br />
                      그곳은 몇시인가요? - 잘 모르겠습니다....<br />
                      그러면, 이곳이 2시 30분이니 그곳은 거의 자정 12시입니다. - 너무 늦었습니다.
                    </p>
                    <p>
                      실례합니다, 지금 몇시인가요? - 정오 12시입니다. - 고맙습니다.
                    </p>
                    <p>
                      8시 15분입니다. <br />
                      11시 30분입니다.<br />
                      9시 45분입니다. 또는 10시 15분 전입니다.<br />
                      7시 20분입니다.<br />
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
                  <ol type="a" style="margin: 12px;">
                    <li>
                       시간을 영어로 표현하기: Quarter Hours 과 Half Hours<br />
                       A quarter hour 은 1/4 시간이므로 15분이고 , a half hour은  1/2 시간이므로 30분입니다. <br />
                       three quarters of an hour 은 3/4 시간이므로  45분입니다.
                    </li>
                    <li>
                       비인칭주어 it<br />
                       시간,명암,날씨,계절,거리에 사용되며 해석은 하지 않습니다.
                    </li>
                  </ol>
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
