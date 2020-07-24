<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://media.defense.gov/2008/Dec/09/2000653042/-1/-1/0/081208-F-8178N-003.JPG">

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
        padding-bottom: 10px;">Miami Police Department
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Miami Police Department</li><br />

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
          <u>Answer the questions</u><br />
          (질문에 답하세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            What does Jack have to do? <br />
              사과있습니까?<br />
          </li>
          <li>
            Which passport does he have to use? <br />
              그는 어떤 여권을 사용해야 합니까?<br />
          </li>
          <li>
            Can Carmen contact her boss often? <br />
              Carmen은 그녀의 상관과 자주 연락할 수 있습니까?<br />
          </li>
          <li>
            Which accent does she have to speak with? <br />
              그녀는 어떤 악센트로 말해야 합니까?<br />
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
                      의문문 : Do(Does) 주어 have to 동사....? <br />
                        Do I (we/they/you) have to verb...? <br />
                        Does she(he/it) have to verb...?<br />
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
          name:'The bad guys',
          speech:' '
        },
        {
          name:'A:',
          speech:'This is a very important job, Jack.'
        },
        {
          name:'B:',
          speech:'Right, boss. What do I have to do?'
        },
        {
          name:'A:',
          speech:'You have to fly to Bermuda tonight.'
        },
        {
          name:'B:',
          speech:'Bermuda, huh? I have a girlfriend there.'
        },
        {
          name:'A:',
          speech:'I know that! But you can’t visit her.'
        },
        {
          name:'B:',
          speech:'Sure, boss. Where do I have to stay?'
        },
        {
          name:'A:',
          speech:'You have to go to the Palm Tree Hotel. Stay in your room and wait for Eric. Eric has the Picasso painting.'
        },
        {
          name:'B:',
          speech:'Which passport do I have to use?'
        },
        {
          name:'A:',
          speech:'The British one. And don’t forget, you have to speak with a British accent. They can’t know your real nationality!'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'The cops',
          speech:' '
        },
        {
          name:'C:',
          speech:'OK, Carmen. We have to get that painting. Here’s the plan. Go to the Palm Tree Hotel…'
        },
        {
          name:'D:',
          speech:'Do I have to reserve a room?'
        },
        {
          name:'C:',
          speech:'No, you don’t. We reserved a room for you… next to Jack Skinner’s room.'
        },
        {
          name:'D:',
          speech:'Do I have to stay in the room?'
        },
        {
          name:'C:',
          speech:'No, you don’t, but you have to watch Skinner all the time. You have to find that painting!'
        },
        {
          name:'D:',
          speech:'Do I have to contact you every day?'
        },
        {
          name:'C:',
          speech:'No, you can’t! It’s too dangerous for you.'
        },
        {
          name:'D:',
          speech:'Why?'
        },
        {
          name:'C:',
          speech:'Because Jack Skinner is a very dangerous guy.'
        },
        {
          name:'D:',
          speech:'OK. Is that everything?.'
        },
        {
          name:'C:',
          speech:'Oh, and you have to speak with a British accent. He can’t discover that you’re an American police officer.'
        },
        ],

        translations:[
        {
          name:'나쁜 사람들',
          speech:' '
        },
        {
          name:'A:',
          speech:'이것은 매우 중요한 일이야, Jack.'
        },
        {
          name:'B:',
          speech:'네, 사장님. 제가 무엇을 해야 합니까?'
        },
        {
          name:'A:',
          speech:'자네는 오늘밤 Bermuda로 가야만 하네.'
        },
        {
          name:'B:',
          speech:'Bermuda, 헉? 그 곳에 제 여자친구가 있습니다.'
        },
        {
          name:'A:',
          speech:'알고 있네! 하지만 자네는 그녀를 방문할 수 없어.'
        },
        {
          name:'B:',
          speech:'물론입니다, 사장님. 저는 어디에 머물러야 합니까?'
        },
        {
          name:'A:',
          speech:' Palm Tree Hotel로 가야 하네. 자네 방에 머무르면서 Eric을 기다리게. Eric은 Picasso그림을 갖고 있네.'
        },
        {
          name:'B:',
          speech:'저는 어떤 여권을 사용해야 합니까?'
        },
        {
          name:'A:',
          speech:'영국여권. 그리고 잊지 말게, 자네는 영국 악센트로 말해야만 하네. 그들은 자네의 진짜 국적을 알 수 없다네!'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'경찰들',
          speech:' '
        },
        {
          name:'C:',
          speech:'좋아, Carmen. 우리는 그 그림을 가져와야 해. 여기 계획이 있어. Palm Tree Hotel로 가.'
        },
        {
          name:'D:',
          speech:'제가 방을 예약해야 합니까?'
        },
        {
          name:'C:',
          speech:'아니, 그렇지 않아. 우리가 자네를 위한 방을 예약했어... Jack Skinner의 방 옆이야.'
        },
        {
          name:'D:',
          speech:'그 방에 머물러야 합니까?'
        },
        {
          name:'C:',
          speech:'아니, 그렇지 않아. 하지만 항상 Skinner를 주시해야 해. 자네는 그 그림을 찾아내야만 해!'
        },
        {
          name:'D:',
          speech:'제가 매일 당신과 연락해야 합니까?'
        },
        {
          name:'C:',
          speech:'아니, 자네는 할 수 없어! 그것은 자네에게 너무 위험해'
        },
        {
          name:'D:',
          speech:'왜 그렇습니까?'
        },
        {
          name:'C:',
          speech:'왜냐하면 Jack Skinner는 매우 위험한 사람이기 때문이야.'
        },
        {
          name:'D:',
          speech:'알겠습니다. 그것이 전부입니까?'
        },
        {
          name:'C:',
          speech:'오, 그리고 자네는 영국 악센트로 말을 해야해. 그는 자네가 미국 경찰이라는 것을 발견할 수 없을거야.'
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
