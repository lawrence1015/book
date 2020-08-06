<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/cropped-doctor-checking-up-heartbeat-senior-patient_1098-20679.jpg">

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
        padding-bottom: 10px;">Health problems
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Health problems</li><br />
      
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
          <u>Have similar conversations. Use the following information</u><br />
          (자료를 이용해서 비슷한 대화를 해보세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            Bad headache / dance lesson<br />
              (심한두통/댄스수업)<br />
          </li>
          <li>
            Bad cold / date<br />
              (독감/데이트)<br />
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
          <br />
              Do you often have a cold in the winter?<br />
              How often do you have a headache?<br />

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
                        make an appointment : ~와 만날 장소, 시간을 정하다<br />
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
          speech:'Doctor Feelgood reception. How can I help you?'
        },
        {
          name:'B:',
          speech:'Hello, I want to make an appointment with Dr. Feelgood.'
        },
        {
          name:'A:',
          speech:'What’s your name?'
        },
        {
          name:'B:',
          speech:'Anthony Green.'
        },
        {
          name:'A:',
          speech:'What’s the matter?'
        },
        {
          name:'B:',
          speech:'I feel sick. I have a bad stomach ache.'
        },
        {
          name:'A:',
          speech:'Can you come in this afternoon?'
        },
        {
          name:'B:',
          speech:'No, I have a business meeting this afternoon.'
        },
        {
          name:'A:',
          speech:'A business meeting?'
        },
        {
          name:'B:',
          speech:'Yes, it’s very important. I can’t miss the meeting.'
        },
        {
          name:'A:',
          speech:'Well, when can you come?'
        },
        {
          name:'B:',
          speech:'I can come tomorrow.'
        },
        {
          name:'A:',
          speech:'OK. The doctor can see you tomorrow at two o’clock.'
        },
        {
          name:'B:',
          speech:'That’s fine. See you tomorrow.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'Doctor Feelgood 접수구입니다. 어떻게 도와드릴까요?'
        },
        {
          name:'B:',
          speech:'안녕하세요, Dr. Feelgood과 약속 시간을 정하고 싶습니다.'
        },
        {
          name:'A:',
          speech:'이름이 어떻게 되시나요?'
        },
        {
          name:'B:',
          speech:'Anthony Green입니다.'
        },
        {
          name:'A:',
          speech:'무엇때문에 그러시나요?'
        },
        {
          name:'B:',
          speech:'아파서요. 복통이 심합니다.'
        },
        {
          name:'A:',
          speech:'오늘 오후에 오실 수 있나요?'
        },
        {
          name:'B:',
          speech:'아니오, 오늘 오후에는 업무 회의가 있습니다.'
        },
        {
          name:'A:',
          speech:'업무 회의요?'
        },
        {
          name:'B:',
          speech:'네, 매우 중요한 회의라서 빠질 수가 없습니다.'
        },
        {
          name:'A:',
          speech:'그럼, 언제 오실 수 있나요?'
        },
        {
          name:'B:',
          speech:'내일 올 수 있습니다.'
        },
        {
          name:'A:',
          speech:'좋아요. 선생님은 내일 2시 정각에 당신을 만날 수 있습니다.'
        },
        {
          name:'B:',
          speech:'좋습니다. 내일 뵙겠습니다.'
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
