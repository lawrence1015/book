<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/nQr5M/MAD9BGnQr5M/1/s2/canva-group-of-diverse-friends-sitting-in-modern-cafe-MAD9BGnQr5M.jpg">

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
        padding-bottom: 10px;">What are they doing?
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #204051; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Where’s Fred? – He’s in the bathroom.</li>
      <li style="list-style-type: none;">What’s he doing? – He’s taking a shower and brushing his teeth.</li>
      <li style="list-style-type: none;">And Anne? What is she doing? – Anne’s making tea in the kitchen.</li>
      <li style="list-style-type: none;">What is Mr. Smith doing? – He’s kissing his wife.</li>

      <p>
        Where are Barbara and Tino? – They’re at Mom’s Café.<br />
        What are they doing? – They’re meeting some friends and drinking coffee.<br />
        What are Jack and Jim doing? – They’re watching a baseball game.<br />
        What are those two girls doing? – They are paying the cashier.
      </p>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #204051;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          <u>Answer the questions</u><br />
          (질문에 답하세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            What is Fred doing?
          </li>
          <li>
              Where is Anne? What is she doing?
          </li>
          <li>
             Is Barbara drinking milk?
          </li>
          <li>
             Who is watching a baseball game?
          </li>
        </ol>

        <p>
          <u>Free response</u>
        </p>

        <ol style="margin: 12px;">
          <li>
            What is your mother doing now?
          </li>
          <li>
            What is your sister(brother) doing now?
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
                      Fred는 어디에 있습니까? - 그는 목욕탕에 있습니다.<br />
                      무엇을 하고 있습니까? - 샤워를 하고 이를 닦고 있습니다.<br />
                      그리고 Anne는요? 그녀는 무엇을 하고 있습니까? - Anne는 부엌에서 차를 만들고 있습니다.<br />
                      Smith씨는 무엇을 하고 있습니까? - 그는 그의 부인과 키스를 하고 있습니다.
                    </p>
                    <p>
                      Barbara와 Tino는 어디에 있습니까? - 그들은 Mom 커피점에 있습니다.<br />
                      무엇을 하고 있습니까? - 친구들을 만나 커피를 마시고 있습니다. <br />
                      Jack과 Jim은 무엇을 하고 있습니까? - 야구 시합을 보고 있습니다. <br />
                      그 두 소녀는 무엇을 하고 있습니까? - 판매원에게 돈을 지불하고 있습니다.
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
                       V-ing 만드는 방법:<br />
                       대부분의 동사뒤: V- ing (ex: play -> playing) / i, e로 끝나는 동사: e를 빼고 ing (ex: skate -> skating)<br />
                       단모임+단자음으로 끝나고 그 단모음에 강세가 오는 경우: 자음을 겹쳐 쓰고 ing (ex: begin -> beginning; stop ->stopping)
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
