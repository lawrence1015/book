<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv9P6hSs/6/screen_2x/canva-selective-focus-photography-of-man-and-woman-sitting-on-chair-inside-restaurant-during-nighttime-MADGv9P6hSs.jpg">

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
        padding-bottom: 10px;">Sitting at a table and listening to the music
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #204051; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">It’s Saturday night at the Student Club.</li>
      <li style="list-style-type: none;">Jimmy and Linda are dancing and Tony’s watching them.</li>
      <li style="list-style-type: none;">Albert is standing by the table. He’s eating a sandwich.</li>
      <li style="list-style-type: none;">Bill and Jane are talking to each other and Karen’s walking to the door.</li>
      <li style="list-style-type: none;">IIt’s eleven o’clock and she’s going home.</li>

      <p>
        Sam and Mabel Brown are in a small restaurant.<br />
        They’re sitting at a table in the corner and listening to the music.<br />
        Sam’s calling the waiter and Mabel’s looking at the menu.<br />
        The waiter’s standing at the counter. He’s reading a newspaper.
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
            Is Tony dancing with Linda?
          </li>
          <li>
            Who is looking at menu?
          </li>
          <li>
            Who is reading a newspaper?
          </li>
        </ol>

        <p>
          <u>Free response</u><br />
          Imagine you are at the park with your friends now. Talk about what you are doing now.<br />
          지금 친구들과 함께 공원에 있다고 상상해보세요. 지금 무엇을 하고 있는지 말해보세요.
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
                      Student Club의 토요일 밤입니다.<br />
                      Jimmy와 Linda는 춤을 추고 있고 Tony는 그들을 보고 있습니다. <br />
                      Albert는 탁자 옆에 서서 샌드위치를 먹고 있습니다. <br />
                      Bill과 Jane은 서로 이야기를 하고 있고 Karen은 문쪽으로 걸어가고 있습니다. <br />
                      지금은 11시 정각이고 그녀는 집에 가고 있습니다.
                    </p>
                    <p>
                      Sam과 Mabel Brown은 작은 식당에 있습니다. <br />
                      구석에 있는 식탁에 앉아 음악을 듣고 있습니다. <br />
                      Sam은 웨이터를 부르고 있고 Mable은 메뉴를 보고 있습니다. <br />
                      웨이터는 계산대에 서서 신문을 보고 있습니다.
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
                       look at은 자동사와 전치사의 결합으로 마치 타동사처럼 보입니다. 문장에서 부사구로 쓰이기 때문에 뒤에는 반드시 목적어가 옵니다.<br />
                       give up, put on,look for, through out, put off, take off, turn up, turn down, pick up <br />
                        -> look at me / they put on their clothes / pick up your pencil and write down your name on it.
                    </li>
                    <li>
                       talk to ~ : 말하다, 이야기하다<br />
                       listen to ~ : (귀기울여) 듣다 <br />
                       walk to ~ :  ~로 걸어가다 (~을 향해 걷다)<br />
                       look at ~ : ~을 보다, 바라보다
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
