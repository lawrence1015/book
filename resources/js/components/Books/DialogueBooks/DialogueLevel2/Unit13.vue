<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/positive-young-employee-showing-report-business-colleague_1262-18025.jpg">

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
        padding-bottom: 10px;">A questionnaire
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">A questionnaire</li><br />
      
      <p>
        Arthur McNair works for a market research firm in San Francisco.<br />
        He is asking people about their free time.<br />
      </p>
      
      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs" :key="dialog">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Exercise</h3>
        <div style="padding : 16px;">

          <p>
            <u>Fill the blanks. Always answer with a whole sentence</u><br />
            (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
          </p>
  
          <ol style="margin: 12px;">
            <li>
              How <u> &emsp; &emsp; &emsp; </u> do you exercise?<br />
                당신은 얼마나 자주 운동을 하십니까?<br />
            </li>
            <li>
              I exercise <u> &emsp; &emsp; &emsp; </u> or twice <u> &emsp; &emsp; &emsp; </u> week. <br />
                저는 일주일에 한 번 혹은 두 번 운동합니다. <br />
            </li>
            <li>
              Do you <u> &emsp; &emsp; &emsp; </u> go to the concerts? <br />
                당신은 콘서트에 가기도 합니까?<br />
            </li>
            <li>
              Not often. Actually, I <u> &emsp; &emsp; &emsp; </u> go to the concerts. <br />
                그렇게 자주는 안갑니다. 사실, 저는 거의 콘서트에 가지 않습니다.<br />
            </li>
          </ol>

          <br />
          <p>
            Free response:<br />
            <br />
            How often do you go out?<br />
            How often do you watch television?<br />
            Do you ever go to the opera?<br />
            Do you even go to the movies?<br />
            
          </p>
      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Translation</h3>
      <div style="padding : 16px;">

        <p>
          Arthur McNair는 San Francisco에 있는 시장조사회사에서 일합니다.<br />
          그는 사람들에게 그들의 여가 시간에 대해 묻고 있습니다.<br />
        </p>

        <table style = "border-collapse: collapse;">

          <tr v-for="translation in translations" :key="translation">
            <td class = "uppertable" >{{translation.name}}</td>
            <td class = "lowertable" >{{translation.speech}}</td>
          </tr>
  
        </table>

</div>
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
        </div>
        <h3 class = "border white--text" style="padding-top: 7px;
                                                margin-left: -18px;
                                                margin-right: -18px;
                                                padding-left: 10px;
                                                padding-bottom: 10px;
                                                padding-top: 10px;
                                                margin-top: 0px;
                                                background-color: #204051;">Self Study</h3>
        <div style="padding : 16px;">

          <p>

            <v-container grid-list-md text-xs-left>
              <v-layout row wrap>


                <v-flex xs12>
                  <v-card light color="#cae8d5">
                    <v-card-text class="px-10">
                    <li>
                      Notes
                    </li>
                    <ol style="margin: 12px;">
                    <li>
                      Do you ever … = ~ 하기는 합니까?<br />
                    </li>
                    <li>
                      빈도부사가 있는 문장의 의문문: Do you 빈도부사 일반동사...?<br />
                    </li>
                    <li>
                      pretty + 부사 / quite + 부사 = 꽤, 상당히, 매우 ~하다<br />
                    </li>
                    <li>
                      about : ~경(에), ~(때)쯤 : about six o'clock (6시경에) <br />
                    </li>
                    <li>
                      how do you go to ~? : 교통수단을 물을 때 표현 (~에 어떻게 가십니까?) <br />
                        이 질문에 대해 by car(차로), by subway(지하철로), on foot(걸어서)로 대답합니다.<br />
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
</div>



</template>



<script>
export default {

  props: ['fontSize'],

  data(){

    return{
        dialogs:[
        {
          name:'AM:',
          speech:'Excuse me, ma’am.'
        },
        {
          name:'Janet Ross',
          speech:'Yes?'
        },
        {
          name:'AM:',
          speech:'I’m from Market Research, Inc. May I ask you some questions?'
        },
        {
          name:'JR:',
          speech:'Uh, yes, all right.'
        },
        {
          name:'AM:',
          speech:'Thank you. First, how do you go to work?'
        },
        {
          name:'JR:',
          speech:'I go to work by car.'
        },
        {
          name:'AM:',
          speech:'What time do you usually get home from work?'
        },
        {
          name:'JR:',
          speech:'Um, I usually get home about six o’clock.'
        },
        {
          name:'AM:',
          speech:'When do you usually have dinner?'
        },
        {
          name:'JR:',
          speech:'I usually eat about seven, but I sometimes eat at eight or nine. My husband works too!'
        },
        {
          name:'AM:',
          speech:'What do you usually do after dinner?'
        },
        {
          name:'JR:',
          speech:'Well, I sometimes go out, but I usually stay home and read or watch TV.'
        },
        {
          name:'AM:',
          speech:'How often do you go out?'
        },
        {
          name:'JR:',
          speech:'Oh, not often… about once or twice a week.'
        },
        {
          name:'AM:',
          speech:'Do you often see your friends?'
        },
        {
          name:'JR:',
          speech:'Yes, I do. (1)Pretty often. I sometimes visit them, and they sometimes visit me.'
        },
        {
          name:'AM:',
          speech:'Do you ever go to the movies?'
        },
        {
          name:'JR:',
          speech:'Oh, yes.'
        },
        {
          name:'AM:',
          speech:'How often?'
        },
        {
          name:'JR:',
          speech:'Well, occasionally … I like horror movies — Frankenstein or Dracula.'
        },
        {
          name:'AM:',
          speech:'What about the theater? Do you ever go to the theater?'
        },
        {
          name:'JR:',
          speech:'Yes, I do, but not often. In fact, I hardly ever go to the theater.'
        },
        {
          name:'AM:',
          speech:'Well, thank you, Ms. Ross.'
        },
        ],

        translations:[
        {
          name:'AM:',
          speech:'실례합니다, ma’am.'
        },
        {
          name:'Janet Ross',
          speech:'네?'
        },
        {
          name:'AM:',
          speech:'저는 주식회사 Market Research 에서 왔습니다. 제가 몇 가지 질문을 해도 될까요?'
        },
        {
          name:'JR:',
          speech:'오, 네, 괜찮습니다.'
        },
        {
          name:'AM:',
          speech:'감사합니다. 첫 번째로, 출근은 어떻게 하십니까?'
        },
        {
          name:'JR:',
          speech:'저는 차로 출근합니다.'
        },
        {
          name:'AM:',
          speech:'당신은 주로 직장에서 몇 시에 귀가하십니까?'
        },
        {
          name:'JR:',
          speech:'음, 저는 주로 6시경에 귀가합니다.'
        },
        {
          name:'AM:',
          speech:'당신은 주로 언제 저녁 식사를 하십니까?'
        },
        {
          name:'JR:',
          speech:'주로 7시경에 합니다. 하지만 때때로 8시나 9시에 하기도 합니다. 제 남편 역시 일합니다.'
        },
        {
          name:'AM:',
          speech:'저녁 식사 후에 주로 무엇을 하십니까?'
        },
        {
          name:'JR:',
          speech:'글쎄요, 때때로 밖에 나가고 주로 집에 머무르며 독서를 하거나 TV를 봅니다.'
        },
        {
          name:'AM:',
          speech:'당신은 얼마나 자주 외출하십니까?'
        },
        {
          name:'JR:',
          speech:'오, 그렇게 자주는 안하고... 일주일에 한 번 혹은 두번 합니다.'
        },
        {
          name:'AM:',
          speech:'당신은 친구들을 자주 봅니까?'
        },
        {
          name:'JR:',
          speech:'네 그렇습니다. 꽤 자주봅니다. 저는 가끔 그들을 방문하고 그들도 저를 자주 방문합니다.'
        },
        {
          name:'AM:',
          speech:'당신은 영화보러 가기는 합니까?'
        },
        {
          name:'JR:',
          speech:'오, 네.'
        },
        {
          name:'AM:',
          speech:'얼마나 자주 갑니까?'
        },
        {
          name:'JR:',
          speech:'글쎄요, 가끔... 저는 Frankenstein 혹은 Dracula 같은 공포영화를 좋아합니다.'
        },
        {
          name:'AM:',
          speech:'극장은 어떻습니까? 극장에 가기는 합니까?'
        },
        {
          name:'JR:',
          speech:'네, 그렇습니다. 하지만 자주 가진 않습니다. 사실, 거의 극장에 가지 않습니다.'
        },
        {
          name:'AM:',
          speech:'그럼, 고맙습니다. Ross씨'
        },
        ]


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

.uppertable {
  border: 0px solid #dddddd;
  text-align: left; padding: 8px;
  vertical-align:top;
  width: 5%;
  white-space: nowrap;
}

.lowertable {
  border: 0px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
