
<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://www.reviewjournal.com/wp-content/uploads/2019/10/12822473_web1_catch-21-3.jpg">

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
        padding-bottom: 10px;">What's my job?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">What's my job?</li><br />
      
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
            (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)<br />
          </p>
  
          <ol style="margin: 12px;">
            <li>
              <u> &emsp; &emsp; &emsp; </u> you <u> &emsp; &emsp; &emsp; </u> a uniform? <br />
                당신은 유니폼을 입으십니까? <br />
            </li>
            <li>
              Yes, I <u> &emsp; &emsp; &emsp; </u>. I <u> &emsp; &emsp; &emsp; </u> a uniform every day.<br />
                네, 그렇습니다. 저는 매일 유니폼을 입습니다. <br />
            </li>
            <li>
              <u> &emsp; &emsp; &emsp; </u> you work on weekends?<br />
                당신은 주말에 일을 하십니까? <br />
            </li>
            <li>
              No, I <u> &emsp; &emsp; &emsp; </u>.<br />
                아니요, 안합니다. <br />
            </li>
          </ol>

        <p>
          Free response:<br />
            Play the game – think of a job and answer (or ask) questions.<br />
            (게임을 해보세요 - 직업에 대해 생각하고 답 혹은 질문을 하세요)<br />

            Vocabulary (어휘): electrician = 전기기사, teacher = 선생님, artist 예술가,<br />
            secretary = 비서, ballet dancer = 발레댄서, bank manager = 은행관리자<br />
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
                      일반동사의 의문문에 대한 답변: Do you...? Yes, I do / No, I don't <br />
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
          name:'Host:',
          speech:'Good evening, ladies and gentlemen. Welcome to What’s My Job? We have a very famous person here today – Dr. K. Walter Eisenstein, the scientist. He’s going to ask the questions. Now here’s our first contestant. OK, Dr. Eisenstein…'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Dr. Eisenstein:',
          speech:'Umm, do you work outside?'
        },
        {
          name:'Contestant',
          speech:'No, I don’t.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'I see. Do you work in an office?'
        },
        {
          name:'Contestant',
          speech:'Well, yes. Yes, I do.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'Do you wear a uniform?'
        },
        {
          name:'Contestant',
          speech:'No, I don’t.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'Oh, is your job important?.'
        },
        {
          name:'Contestant',
          speech:'Yes, it is.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'Do you get a big salary?'
        },
        {
          name:'Contestant',
          speech:'Yes, I do.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'Do you have any special diplomas?'
        },
        {
          name:'Contestant',
          speech:'Yes, I do.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'Do you work with your hands?'
        },
        {
          name:'Contestant',
          speech:'Yes, I do.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'Do you work on weekends?'
        },
        {
          name:'Contestant',
          speech:'No, I don’t.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'Do you travel in your work?'
        },
        {
          name:'Contestant',
          speech:'No, I don’t.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Host:',
          speech:'That’s the ninth question! Now, you can ask one last question.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'Are you a doctor?'
        },
        {
          name:'Contestant',
          speech:'No, I’m not. I’m a dentist.'
        },
        ],

        translations:[
        {
          name:'사회자:',
          speech:'신사숙녀 여러분, 안녕하세요. "What’s My Job?" 에 오신 걸 환영합니다. 오늘 이 곳에는 매우 유명한 분이 계십니다. - 과학자 Dr. K. Walter Eisenstein이십니다. 그는 질문을 할 것입니다. 지금 여기 첫번째 참가자가 있습니다. 됐어요, Dr. Eisenstein...'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Dr. Eisenstein:',
          speech:'음, 당신은 밖에서 일하십니까?'
        },
        {
          name:'Contestant',
          speech:'아니요, 그렇지 않습니다.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'그렇군요. 당신은 사무실에서 일하십니까?'
        },
        {
          name:'Contestant',
          speech:'글쎄요, 네, 네 그렇습니다.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'당신은 유니폼을 입으십니까?'
        },
        {
          name:'Contestant',
          speech:'아니요, 그렇지 않습니다.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'오, 당신의 직업은 중요합니까?'
        },
        {
          name:'Contestant',
          speech:'네, 그렇습니다.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'당신은 월급을 많이 받습니까?'
        },
        {
          name:'Contestant',
          speech:'네, 그렇습니다.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'당신은 월급을 많이 받습니까?'
        },
        {
          name:'Contestant',
          speech:'네, 그렇습니다.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'당신은 직접 일하십니까?'
        },
        {
          name:'Contestant',
          speech:'네, 그렇습니다.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'당신은 주말에 일하십니까?'
        },
        {
          name:'Contestant',
          speech:'아니요, 안합니다.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'당신은 일하면서 여행을 합니까?'
        },
        {
          name:'Contestant',
          speech:'아니요, 그렇지 않습니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Host:',
          speech:'9번째 질문입니다! 이제, 당신은 마지막 하나의 질문을 할 수 있습니다.'
        },
        {
          name:'Dr. Eisenstein:',
          speech:'당신은 의사입니까?'
        },
        {
          name:'Contestant',
          speech:'아니요, 그렇지 않습니다. 저는 치과의사입니다.'
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
