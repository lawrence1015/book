<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/secretary-working-with-statistical-documents_1098-3363.jpg">

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
        padding-bottom: 10px;">In the office
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

    <li style="list-style-type: none;">In the office</li><br />


    <table style = "border-collapse: collapse;">
    
      <tr v-for="dialog in dialogs"  :key="dialog">
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
          <u>Answer the questions</u><br />
          (질문에 답하시오.)
        </p>

        <ol style="margin: 12px;">
          <li>
            Who mailed the letters? <br />
              누가 편지를 보냈습니까?<br />
          </li>
          <li>
            What time did Jane arrive?<br />
              Jane은 몇시에 도착했습니까? <br />
          </li>
          <li>
            What did Mr. Thompson want?<br />
              Thompson씨는 무엇을 원했습니까?<br />
          </li>
        </ol>


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

          <tr v-for="translation in translations"  :key="translation">
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
                      일반동사의 과거형(규칙변화) : <br />
                        A. 대부분의 동사 뒤: -ed / ex)wanted, talked, opened <br />
                        B. 자음+e로 끝나는 동사: 동사 + -d / ex) liked, lived, loved <br />
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
          name:'Jane:',
          speech:'Hello, Gloria.'
        },
        {
          name:'Gloria:',
          speech:'Hi, Jane. Did you enjoy lunch?'
        },
        {
          name:'Jane:',
          speech:'Yes, I did. Did you finish those reports?'
        },
        {
          name:'Gloria',
          speech:'Yes, I typed them. They’re on your desk.'
        },
        {
          name:'Jane:',
          speech:'Did you photocopy them?'
        },
        {
          name:'Gloria:',
          speech:'Yes, I photocopied everything. And I mailed the letters too.'
        },
        {
          name:'Jane:',
          speech:'Good. Thank you.'
        },
        {
          name:'Gloria',
          speech:'You’re welcome. Oh, Mr. Thompson was here.'
        },
        {
          name:'Jane:',
          speech:'Mr. Thompson? Did he call for an appointment first?'
        },
        {
          name:'Gloria:',
          speech:'No, he didn’t.'
        },
        {
          name:'Jane:',
          speech:'What time did he arrive?'
        },
        {
          name:'Gloria',
          speech:'About two o’clock. But he only waited about five minutes.'
        },
        {
          name:'Jane:',
          speech:'That’s strange. What did he want?'
        },
        {
          name:'Gloria:',
          speech:'He probably wanted some free advice.'
        },
        {
          name:'Jane:',
          speech:'Did anybody telephone?'
        },
        {
          name:'Gloria',
          speech:'No, nobody.'
        },
        {
          name:'Jane:',
          speech:'Oh, no!'
        },
        {
          name:'Gloria:',
          speech:'What’s the matter?'
        },
        {
          name:'Jane:',
          speech:'You mailed the letters…'
        },
        {
          name:'Gloria',
          speech:'Yes, of course.'
        },
        {
          name:'Jane:',
          speech:'But I didn’t sign them!'
        },
        {
          name:'Gloria:',
          speech:'I signed them… with my name.'
        },
        {
          name:'Jane:',
          speech:'Phew! Thank you, Gloria. That was great.'
        },
        ],

        translations:[
        {
          name:'Jane:',
          speech:'안녕하세요, Gloria.'
        },
        {
          name:'Gloria:',
          speech:'안녕하세요, Jane. 점심 잘 드셨나요?'
        },
        {
          name:'Jane:',
          speech:'네, 잘 먹었어요. 이 보고서들 다 끝냈나요?'
        },
        {
          name:'Gloria',
          speech:'네, 타이핑했습니다. 당신 책상 위에 놓았습니다.'
        },
        {
          name:'Jane:',
          speech:'그것을 사진복사했나요?'
        },
        {
          name:'Gloria:',
          speech:'네, 모두 사진복사했습니다. 그리고 편지도 보냈습니다.'
        },
        {
          name:'Jane:',
          speech:'잘했어요. 고마워요.'
        },
        {
          name:'Gloria',
          speech:'천만해요. 아, Thompson씨가 여기 왔습니다.'
        },
        {
          name:'Jane:',
          speech:'Thompson씨가요? 그가 먼저 전화로 약속했나요?'
        },
        {
          name:'Gloria:',
          speech:'아니요, 하지 않았습니다.'
        },
        {
          name:'Jane:',
          speech:'그는 몇 시에 도착했나요?'
        },
        {
          name:'Gloria',
          speech:'2시경에요. 그런데 5분 정도 기다리셨습니다.'
        },
        {
          name:'Jane:',
          speech:'이상하네요. 그가 무엇을 원했나요?'
        },
        {
          name:'Gloria:',
          speech:'그는 아마도 무료 조언 좀 원했던 것 같습니다.'
        },
        {
          name:'Jane:',
          speech:'전화 온 것 있나요?'
        },
        {
          name:'Gloria',
          speech:'아니오, 아무도 전화하지 않았습니다.'
        },
        {
          name:'Jane:',
          speech:'오, 이런!'
        },
        {
          name:'Gloria:',
          speech:'무슨 일이세요?'
        },
        {
          name:'Jane:',
          speech:'편지 보냈지요.'
        },
        {
          name:'Gloria',
          speech:'네, 물론입니다.'
        },
        {
          name:'Jane:',
          speech:'그런데 서명하지 않았습니다!'
        },
        {
          name:'Gloria:',
          speech:'제가 서명했습니다... 제 이름으로요.'
        },
        {
          name:'Jane:',
          speech:'휴! 고마워요, Gloria. 잘했습니다.'
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
