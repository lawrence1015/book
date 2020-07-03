<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/front-view-barista-taking-order_23-2148436222.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(140, 103, 90, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Eating out (understanding a menu, Ordering a meal)
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color:#402B24; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <ol style="margin: 12px;">
      <p>
        <li>
          Waiter: Are you ready to order?<br />
          Ella:     Yes. For me, um… To start, the tomato soup, please.<br />
          David:  Yes, the same for me, please. The tomato soup.<br />
          Waiter: What would you like for the main course?<br />
          Ella:     I’d like salmon with rice and peas, please.<br />
          David:  The lamb, with peas and carrots for me, please. Ivan?<br />
          Ivan:    I don’t want a starter, just a main course.<br />
          &emsp;&emsp;&nbsp;Can I have steak, chips and peas, please?<br />
          Waiter: How would you like the steak?<br />
          Ivan:   Um… Medium, please.
        </li>
      </p>
      <p>
        <li>
          Waiter: Dessert?<br />
          Ella:     Yes, could I have the apple pie, please.<br />
          Waiter: Apple pie.<br />
          David:  Just a coffee for me, please. Would anyone else like coffee?<br />
          Ella:     I’ll have one after my dessert.<br />
          Waiter: OK. Would anyone else like dessert?
        </li>
      </p>
    </ol>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text"
        style="padding-top: 7px;
               margin-left: -18px;
               margin-right: -18px;
               padding-left: 10px;
               padding-bottom: 10px;
               padding-top: 10px;
               margin-top: 0px;
               background-color:#402B24;">Translation</h3>
    <div style="padding : 16px;">

      <ol style="margin: 12px;">
        <p>
          <li>
            웨이터: 주문하시겠습니까?<br />
            엘라: 네. 저는, 음… 우선 토마토 수프부터 부탁해요.<br />
            데이비드: 그래, 나도 마찬가지야. 토마토 수프 주세요.<br />
            웨이터: 메인 코스로 뭘 드시겠습니까?<br />
            엘라: 밥과 완두콩을 곁들인 연어로 부탁해요.<br />
            데이빗: 완두콩과 당근을 곁들인 양고기를 부탁해요. 이반은?<br />
            이반: 나는 전채요리가 아니라 그냥 메인 코스를 원해요. 스테이크, 칩, 완두콩을 주시겠습니까?<br />
            웨이터: 스테이크는 어떻게 하시겠습니까?<br />
            이반: 음… 미디엄으로 부탁합니다.
          </li>
        </p>
        <p>
          <li>
            웨이터: 디저트는?<br />
            엘라: 네, 애플 파이 좀 주시겠습니까?<br />
            웨이터: 애플파이요.<br />
            데이비드: 그냥 커피 한 잔만 주세요. 다른 사람 커피 드시겠습니까?<br />
            엘라: 디저트 먹고 하나 먹을게요.<br />
            웨이터: 알겠습니다. 디저트 드시겠습니까?
          </li>
        </p>
      </ol>

    </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Match the pairs to make sentences.
      </p>

      <v-container>
        <v-layout wrap align-content-center>

          <v-flex xs6 lg3>

            <v-card flat>


              <v-card-text>
                <ol style="margin: 12px;">
                  <li>We have
                  </li>
                  <li>Are you ready to
                  </li>
                  <li>I’d like soup
                  </li>
                  <li>Could I have chicken
                  </li>
                  <li>Could I have ice cream
                  </li>
                  <li>Can I get you
                  </li>
                  <li>No coffee, could
                  </li>
                </ol>

              </v-card-text>


            </v-card>
          </v-flex>



          <v-flex xs6 lg3>
            <v-card flat>

              <v-card-text>
                <ol style="margin: 12px;" type="a">
                  <li>for the main course?
                  </li>
                  <li>for the dessert, please?
                  </li>
                  <li>order now?
                  </li>
                  <li>anything else to drink?
                  </li>
                  <li>we just have the bill, please?
                  </li>
                  <li>for the starter,
                  </li>
                  <li>a reservation.
                  </li>
                </ol>

              </v-card-text>

            </v-card>
          </v-flex>

        </v-layout>
      </v-container>

      <p>
        Free response:<br />
        Practice ordering a meal in a restaurant.
      </p>

      <v-container grid-list-md text-xs-center>
        <v-layout wrap align-content-center>

          <v-flex xs12 md6 >
            <v-card hover>

              <v-img src="images/menu.jpg" />

            </v-card>
          </v-flex>

        </v-layout>
      </v-container>

    </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color:#402B24; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color:#402B24;">Self Study</h3>
    <div style="padding : 16px;">


      <p>
        Notes
      </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#F2CBBD">
                <v-card-text class="px-10">
                  <p>
                    Would you like…?<br />
                    I’d like + noun / I’d like to + verb
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
  border-color: transparent#402B24 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background:#402B24;
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
