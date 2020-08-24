<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/casual-blogger-interviewing-man-her-vlog_23-2148538884.jpg">

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
        padding-bottom: 10px;">An interview
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">An interview</li><br />

      <p>
        Arnold Rivera, the TV news reporter, is interviewing Mrs. Cornelia Vandergilt for the program Real People.<br />
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
          <u>Fill the blanks. Always answer with a whole sentence.</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)<br />
        </p>

        <ol style="margin: 12px;">
          <li>
            What <u> &emsp; &emsp; &emsp; </u> do you <u> &emsp; &emsp; &emsp; </u> dinner?<br />
              당신은 저녁을 몇 시에 드십니까?<br />
          </li>
          <li>
            I <u> &emsp; &emsp; &emsp; </u> dinner <u> &emsp; &emsp; &emsp; </u> eight o'clock. <br />
              저는 8시 정각에 저녁을 먹습니다. <br />
          </li>
          <li>
            What <u> &emsp; &emsp; &emsp; </u> you do <u> &emsp; &emsp; &emsp; </u> dinner? <br />
              저녁 식사 후에는 무엇을 하십니까? <br />
          </li>
          <li>
            I usually <u> &emsp; &emsp; &emsp; </u> TV. <br />
              저는 주로 TV를 봅니다. <br />
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
            What time do you get up? <br />
            Do you ever have breakfast in bed? <br />
            What time do you have lunch?<br />
            What time do you go to bed? <br />
            Is your life busy? <br />
            Is your life interesting? <br />

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
          Arnold Rivera, TV뉴스 리포터는 Real People 프로그램을 위해 Cornelia Vandergilt여사를 인터뷰하고 있습니다. <br />
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
                      wake up은 잠에서 깨다 / get up은 잠자리에서 나오다의 뜻입니다.<br />
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
          name:'A:',
          speech:'Well, Mrs. Vandergilt, please tell our viewers about an ordinary day in your life.'
        },
        {
          name:'B:',
          speech:'Well, I wake up at eight o’clock.'
        },
        {
          name:'A:',
          speech:'Really? Do you get up then?'
        },
        {
          name:'B:',
          speech:'No, of course I don’t get up at that time. I have breakfast in bed, and I read The New York Times.'
        },
        {
          name:'A:',
          speech:'What time do you get up?'
        },
        {
          name:'B:',
          speech:'I get up at ten.'
        },
        {
          name:'A:',
          speech:'What do you do then?'
        },
        {
          name:'B:',
          speech:'I read my letters and dictate the answers to my secretary.'
        },
        {
          name:'A:',
          speech:'And then?'
        },
        {
          name:'B:',
          speech:'At eleven I take a walk with Jimmy.'
        },
        {
          name:'A:',
          speech:'Jimmy? Who’s Jimmy?'
        },
        {
          name:'B:',
          speech:'Jimmy’s my dog.'
        },
        {
          name:'A:',
          speech:'Oh. What time do you have lunch?'
        },
        {
          name:'B:',
          speech:'I have lunch at twelve-thirty. I eat alone.'
        },
        {
          name:'A:',
          speech:'Oh, I see. Well, what do you do after lunch?'
        },
        {
          name:'B:',
          speech:'I rest until six o’clock.'
        },
        {
          name:'A:',
          speech:'And at six? What do you do at six?'
        },
        {
          name:'B:',
          speech:'I get dressed for dinner. I have dinner at seven o’clock.'
        },
        {
          name:'A:',
          speech:'Yes, well, what do you do after dinner?'
        },
        {
          name:'B:',
          speech:'I read or watch TV. I take a bath at nine-thirty. And I go to bed at ten.'
        },
        {
          name:'A:',
          speech:'You certainly have a busy and interesting life, Mrs. Vandergilt. Thank you.'
        },
        {
          name:'B:',
          speech:'You’re welcome.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'그럼, Vandergilt여사, 시청자분들께 당신 삶의 일상적인 하루에 대해 말해 주세요.'
        },
        {
          name:'B:',
          speech:'글쎄요, 저는 8시 정각에 깹니다.'
        },
        {
          name:'A:',
          speech:'정말요? 그 때 일어나십니까?'
        },
        {
          name:'B:',
          speech:'아니요, 물론 그 때에 일어나지 않습니다. 침대에서 아침 식사를 하고 뉴욕타임즈를 읽습니다.'
        },
        {
          name:'A:',
          speech:'몇 시에 일어나십니까?'
        },
        {
          name:'B:',
          speech:'10시에 일어납니다.'
        },
        {
          name:'A:',
          speech:'그 때 무엇을 하십니까?'
        },
        {
          name:'B:',
          speech:'저는 편지를 읽고 비서에게 답하도록 시킵니다.'
        },
        {
          name:'A:',
          speech:'그런 다음에는요?'
        },
        {
          name:'B:',
          speech:'11시에 Jimmy와 산책을 합니다.'
        },
        {
          name:'A:',
          speech:'Jimmy요? Jimmy가 누구입니까?'
        },
        {
          name:'B:',
          speech:'Jimmy는 제 개입니다.'
        },
        {
          name:'A:',
          speech:'오. 몇 시에 점심 식사를 하십니까?'
        },
        {
          name:'B:',
          speech:'12시 30분에 점심 식사를 합니다. 저는 혼자 먹습니다.'
        },
        {
          name:'A:',
          speech:'오, 그렇군요. 그럼, 점심 식사 후에는 무엇을 하십니까?'
        },
        {
          name:'B:',
          speech:'저는 6시 정각까지 쉽니다.'
        },
        {
          name:'A:',
          speech:'그리고 6시에는요? 6시에는 무엇을 하십니까?'
        },
        {
          name:'B:',
          speech:'저녁 식사를 위해 옷을 입습니다. 저는 7시 정각에 저녁 식사를 합니다.'
        },
        {
          name:'A:',
          speech:'네, 그럼, 저녁 식사 후에는 무엇을 하십니까?'
        },
        {
          name:'B:',
          speech:'독서를 하거나 TV를 봅니다. 9시 30분에 목욕을 합니다. 그리고 10시에 취침합니다.'
        },
        {
          name:'A:',
          speech:'당신은 분명히 바쁘고 재밌는 삶을 사시는군요. Vandergilt여사. 감사합니다.'
        },
        {
          name:'B:',
          speech:'천만에요.'
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
