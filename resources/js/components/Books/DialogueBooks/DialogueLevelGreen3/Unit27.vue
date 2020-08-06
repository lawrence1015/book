<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/woman-stressed-from-work_23-2148542210.jpg">

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
        padding-bottom: 10px;">Monday morning
      </h1>
    </v-layout>

  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Monday morning</li><br />

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
          <u>Look at Rosie’s Monday schedule and answer the questions</u><br />
        </p>
        <p>
          Rosie’s Monday<br />
          Rosie O'Connell, reporter<br />
          <br />
            7:30   - catch the train <br />
            8:30   - arrive at the office<br />
            10:00 - meet the president<br />
            12:00 - have lunch with Madonna<br />
            3:00   - interview Janet Jackson<br />
            4:00   - call Stephen Spielberg<br />
            5:00   - catch the train<br />
            6:00   - arrive home<br />
            7:30   - help kids with their homework <br />
            8:00   - have dinner<br />
            9:00   - watch TV<br />
            11:00 - go to bed<br />
        </p>
        <br />
        <ol style="margin: 12px;">
          <li>
            When will she arrive at the office?<br />
          </li>
          <li>
            What will she do at 10 AM?<br />
          </li>
          <li>
            What will she do at 7:30 PM? <br />
          </li>
          <li>
            What will she do at 7:30 PM? <br />
          </li>
          <li>
            When will she go to bed? <br />
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
                    <li>
                      미래 :  will + 동사원형<br />
                        Example:<br />
                        I'll leave in five minutes : 나는 5분 안에 떠날 거야<br />
                        Your day will be interesting and you'll meet people : 당신의 하루는 흥미 있을 것이고 당신은 많은 사람들을 만날 거야<br />
                        I'll be here in front of the computer screen all day : 나는 하루 종일 컴퓨터 스크린 앞 여기에 있을 거야<br />
                        Who will I meet today? : 나는 오늘 누구를 만날까?<br />
                        We'll do the same tomorrow : 우리는 내일 똑같은 것을 할 거야<br />
                    </li>
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
          name:'Dan:',
          speech:'What’s the matter, honey?'
        },
        {
          name:'Rosie:',
          speech:'Oh, I don’t know.'
        },
        {
          name:'Dan:',
          speech:'Come on! Something’s the matter! What is it?'
        },
        {
          name:'Rosie:',
          speech:'It’s just life. It’s so boring.'
        },
        {
          name:'Dan:',
          speech:'It’s not that bad. We have two wonderful children.'
        },
        {
          name:'Rosie:',
          speech:'That’s right. We do. And we never have any time with them.'
        },
        {
          name:'Dan:',
          speech:'Well, we both have to work, hon. We need the money.'
        },
        {
          name:'Rosie:',
          speech:'OK, but it’s all right for you. I’ll leave in five minutes, but you’ll be here all day. I won’t be home till six.'
        },
        {
          name:'Dan:',
          speech:'Sure, but your day will be interesting and you’ll meet people. I’ll be here in front of the computer screen all day. I won’t talk to anyone.'
        },
        {
          name:'Rosie:',
          speech:'You’re a computer programmer, Dan. That’s your job. You’re lucky. You can work at home.'
        },
        {
          name:'Dan:',
          speech:'Yeah, but you like your job, Rosie. You really do.'
        },
        {
          name:'Rosie:',
          speech:'What! Who will I meet today? Tell me that. What will I do? I’ll tell you, Dan. I’ll get on the same train, then I’ll go to the same office. I’ll speak to the same boring people and I’ll listen to the same stupid jokes. I’ll take the same train home, then I’ll get home and help the kids with their homework…'
        },
        {
          name:'Dan:',
          speech:'I’ll cook dinner, honey. I always do.'
        },
        {
          name:'Rosie:',
          speech:'Yeah? But I’ll wash the dishes. Then we’ll watch TV again. You’ll be tired and we won’t talk. Then we’ll do the same tomorrow. What a life! Today, tomorrow, this week, next week, this month, next month, next year — forever!'
        },
        {
          name:'Dan:',
          speech:'It’s just Monday morning, Rosie. You’ll feel OK tomorrow.'
        },
        {
          name:'Rosie:',
          speech:'Will I?'
        },
        ],

        translations:[
        {
          name:'Dan:',
          speech:'왜 그래요, 여보?'
        },
        {
          name:'Rosie:',
          speech:'아, 모르겠어요.'
        },
        {
          name:'Dan:',
          speech:'어서요! 뭔가가 문제가 있어요! 뭔데요?'
        },
        {
          name:'Rosie:',
          speech:'그냥 인생입니다. 정말 지루해요.'
        },
        {
          name:'Dan:',
          speech:'그렇게 나쁘진 않아요. 우리에게는 멋진 두 아이가 있어요.'
        },
        {
          name:'Rosie:',
          speech:'맞아요. 맞아요. 그렇지만 그들과 함께 있을 시간이 전혀 없어요.'
        },
        {
          name:'Dan:',
          speech:'음, 우리 둘 다 일을 해야 해요, 여보. 우리는 돈이 필요해요.'
        },
        {
          name:'Rosie:',
          speech:'알았어요, 하지만 당신에겐 괜찮아요. 5분 후에 출발할 건데, 당신은 종일 여기 있을 거예요. 6시까지는 집에 없을 거예요.'
        },
        {
          name:'Dan:',
          speech:'물론이죠, 하지만 당신의 하루는 재미있을 것이고 당신은 사람들을 만날 거예요. 저는 하루 종일 컴퓨터 화면 앞에 있을 거예요. 아무하고도 얘기하지 않을거예요.'
        },
        {
          name:'Rosie:',
          speech:'Dan, 당신은 컴퓨터 프로그래머예요. 그게 당신이 할 일이에요. 운이 좋네요. 당신은 집에서 일할 수 있어서요.'
        },
        {
          name:'Dan:',
          speech:'네, 하지만 당신은 당신의 일을 좋아해요, Rosie. 정말 그러네요.'
        },
        {
          name:'Rosie:',
          speech:'뭐라고요! 오늘 누구를 만날까요? 말해봐요. 어떻게 해야 할까요? 말해줄게요, 댄. 같은 기차를 타고 같은 사무실로 갈게요. 같은 지루한 사람들과 이야기하고 똑같은 바보 같은 농담을 들을 거예요. 같은 기차를 타고 집에 와서 아이들의 숙제를 도와줄 거예요.'
        },
        {
          name:'Dan:',
          speech:'여보, 저녁은 내가 만들게요. 내가  항상 해왔듯이.'
        },
        {
          name:'Rosie:',
          speech:'그래요? 하지만 설거지는 제가 할게요. 그리고 TV를 다시 봐요. 당신은 피곤할 것이고 우리는 이야기하지 않을 것입니다. 그럼 내일도 똑같이 할게요. 정말 멋진 인생이에요! 오늘, 내일, 이번 주, 다음 주, 이번 달, 다음 달, 내년 영원히요!'
        },
        {
          name:'Dan:',
          speech:'월요일 아침이에요, Rosie. 내일은 괜찮을 거예요.'
        },
        {
          name:'Rosie:',
          speech:'그럴까요?'
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
