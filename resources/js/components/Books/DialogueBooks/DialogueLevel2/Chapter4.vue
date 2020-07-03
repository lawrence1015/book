<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGxTwcvOA/5/screen_2x/canva-vegetale-and-meat-sandwhich-MADGxTwcvOA.jpg">

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
        padding-bottom: 10px;">Making a purchase
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #204051; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Hello. A cheese sandwich, please. – Anything else? – Yes, an orange juice.</li>
      <li style="list-style-type: none;">How much is that? – It’s four dollars twenty cents, sir.</li>
      <li style="list-style-type: none;">Oops! No cash, sorry. Please wait five minutes. I’ll be right back.</li>
      <li style="list-style-type: none;">One ticket to Los Angeles, please. – One way or a round trip?</li>
      <li style="list-style-type: none;">Round trip. How much? – Seventy-eight dollars and forty cents.</li>

      <p>
        When is the next bus? – At seven-thirty.<br />
        Hi. I’m looking for a cheap and reliable car. – What about this model, sir?<br />
        Hmm. The color is nice, but the design is a bit odd. – But it’s very sturdy and reliable.
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #204051;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Look at the Open Air Café menu. Imagine you want to buy something to drink. Order at least 3 things and ask about the price.<br />
          Switch the roles with your teacher.<br />
          (Open Air Café 메뉴를 보세요. 당신이 마실 것을 사고 싶어한다고 상상해보세요. 적어도 3개를 주문하고 가격에 대해 질문하세요. 선생님과 역할을 바꿔서 해보세요.)<br />
        </p>

        <v-container grid-list-md text-xs-center>
          <v-layout wrap align-content-center>

            <v-flex xs12 md3 >
              <v-card hover>

                <v-img src="images/aircafemenu.jpg" />

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

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
                      안녕하세요. 치즈 샌드위치 주세요. - 다른 것은요? - 오렌지 주스 주세요.<br />
                      얼마인가요? - 4달러 20센트입니다.<br />
                      어머! 돈이 없네요. 5분만 기다려 주세요. 다시 오겠습니다.
                    </p>
                    <p>
                      로스엔젤레스행 티켓하나 주세요. - 편도로 하시겠습니까 왕복으로 하시겠습니까?<br />
                      왕복으로 하겠습니다. 얼마인가요? - 78달러 40센트입니다.
                    </p>
                    <p>
                      다음 버스는 몇시에 있습니까? - 7시 30분에 있습니다.
                    </p>
                    <p>
                      안녕하세요. 저는 싸고 믿을만한 차를 찾고 있습니다. - 이 모델은 어떻습니까?<br />
                      음. 색은 좋은데 디자인은 조금 이상합니다. - 하지만 매우 튼튼하고 믿을만 합니다.
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
                    명사의 복수형: 셀 수 있는 명사 뒤에는 s를 붙이고 셀 수 없는 명사는 붙이지 않습니다.<br />
                    money는 셀 수 없는 명사이지만 dollar나 cent는 셀 수 있는 명사입니다. / one dollar; two dollars; three dollars
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
