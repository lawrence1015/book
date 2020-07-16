<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGyf0w7ZY/4/screen_2x/canva-mexico-flag-on-brown-2-storey-building-MADGyf0w7ZY.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(254, 183, 43, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Giving an update
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #899857; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border" >Today's topic</h3>
  <div style = "padding : 16px;">


    <table style = "border-collapse: collapse;">

      <tr v-for="dialog in dialogs" :key="dialog">
        <td class = "uppertable" >{{dialog.name}}</td>
        <td class = "lowertable" >{{dialog.speech}}</td>
      </tr>

    </table>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Translation</h3>
    <div style="padding : 16px;">

      <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations" :key="translation">
          <td class = "uppertable" >{{translation.name}}</td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>

      </table>


    </div>


    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Exercise</h3>
    <div style="padding : 16px;">

      <p>
        Make sentences in the past simple.
      </p>

      <ol style="margin: 12px;">
        <li>
          he/present/sales report/last Friday.<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          we/not discuss/prices/yesterday.<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          she/phone Gavin/last week?<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          they/email you/yesterday?<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          she/talk to Sally/yesterday.<br />
          ( &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; )
        </li>
      </ol>

      <p>
        Free response:<br />
        Talk to a partner. When did you last:<br />
        - work late?<br />
        - stay in a hotel?<br />
        - use a fax machine?<br />
        - travel by train?<br />
        - visit a client?<br />
        - travel abroad?
      </p>

    </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Self Study</h3>
    <div style="padding : 16px;">


      <p>
        Notes
      </p>

      <p>

        <v-container grid-list-md text-xs-left>
          <v-layout row wrap>


            <v-flex xs12>
              <v-card light color="#527318">
                <v-card-text class="px-10">
                  <p>
                    Past simple: regular verbs
                  </p>
                  <p>
                    긍정문(infinitive + -ed)<br />
                    I presented the business plan last week.<br />
                    의문문(did + subject + infinitive)<br />
                    Did you receive my email yesterday?<br />
                    부정문(didn't + infinitive)<br />
                    I didn't talk to Jenny
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
</div>



</template>



<script>
export default {

  props: ['fontSize'],

  data(){

    return{

      dialogs:[
        {
          name:'Hanna:',
          speech:'Martin, are you free for five minutes? Can we talk about your trip to Mexico?'
        },
        {
          name:'Martin:',
          speech:'Yeah, sure.'
        },
        {
          name:'Hanna:',
          speech:'So, how was it?'
        },
        {
          name:'Martin:',
          speech:'It was OK.'
        },
        {
          name:'Hanna:',
          speech:'When did you arrive?'
        },
        {
          name:'Martin:',
          speech:'Last Tuesday. Tuesday evening. I stayed Tuesday night, worked all day Wednesday and then travelled back Wednesday evening.'
        },
        {
          name:'Hanna:',
          speech:'Right. So where did you stay? What hotel were you in?'
        },
        {
          name:'Martin:',
          speech:'The Socorro Hotel. Near the office.'
        },
        {
          name:'Hanna:',
          speech:"Oh, yeah. It's good there."
        },
        {
          name:'Martin:',
          speech:"Yeah. Um... Yes, so I presented the business plan on Wednesday morning."
        },
        {
          name:'Hanna:',
          speech:"Right. Was Pedro happy?"
        },
        {
          name:'Martin:',
          speech:"Well... I wasn't sure at first. He didn't talk a lot after the presentation. We started at nine."+
          " I talked about the plan for thirty minutes, and ...that was it. There were no questions. We finished at half past nine."
        },
        {
          name:'Hanna:',
          speech:"Oh."
        },
        {
          name:'Martin:',
          speech:"Hmm... I think he wanted to look at the numbers in the report."
        },
        {
          name:'Hanna:',
          speech:"Hmm."
        },
        {
          name:'Martin:',
          speech:"He needed time to read it. Anyway, he phoned yesterday, with one or two questions. Just small points. "+
          "And, er... he's happy. No problems."
        },
        {
          name:'Hanna:',
          speech:"OK. That's fine, then. And did you talk about the cost of materials?"
        },
        {
          name:'Martin:',
          speech:"Yes. I talked to Miguel after the meeting. We discussed suppliers, as well, um... He's now talking to two new companies."+
          "I received an email this morning, saying he has a meeting with one company today, and one next Friday. So..."
        },
        {
          name:'Hanna:',
          speech:"OK. That's good. And did you visit the factory?"
        },
        {
          name:'Martin:',
          speech:"No. There was no time. So I didn't look at the new production line."
        },
        {
          name:'Hanna:',
          speech:"Well, you're going again next month."
        },
        {
          name:'Martin:',
          speech:"Yeah, that's right. I can see it then."
        },
        {
          name:'Hanna:',
          speech:"OK. So, a good trip, then?"
        },
        {
          name:'Martin:',
          speech:"Yeah. So, how was your trip to Delhi?"
        },
      ],


      translations:[
        {
          name:'한나:',
          speech:"마틴, 5분 동안 시간 있으세요? 멕시코 여행에 대해 얘기 좀 할 수 있을까요?"
        },
        {
          name:'마틴:',
          speech:"네, 물론이죠."
        },
        {
          name:'한나:',
          speech:"그래서, 어땠어요?"
        },
        {
          name:'마틴:',
          speech:"괜찮았어요."
        },
        {
          name:'한나:',
          speech:"언제 도착했어요?"
        },
        {
          name:'마틴:',
          speech:"지난 화요일입니다. 화요일 저녁입니다. 저는 화요일 밤을 지새우고, 수요일에는 하루종일 일하고, 수요일 저녁에는 돌아갔습니다."
        },
        {
          name:'한나:',
          speech:"맞아요. 그래서 어디에 머물렀나요? 어느 호텔에 있었습니까?"
        },
        {
          name:'마틴:',
          speech:"소코로 호텔입니다. 사무실 근처에요."
        },
        {
          name:'한나:',
          speech:"아, 그래요. 거기는 좋아요."
        },
        {
          name:'마틴:',
          speech:"그래요. 음... 네, 그래서 수요일 아침에 사업 계획을 발표했어요."
        },
        {
          name:'한나:',
          speech:"맞아요. 페드로는 좋아했나요?"
        },
        {
          name:'마틴:',
          speech:"글쎄요... 처음에는 확신이 없었어요. 그는 발표 후에 말을 많이 하지 않았어요. 우리는 9시에 시작했어요. 30분 동안 그 계획에 대해 얘기했는데..."+
          "그게 다였어요. 질문이 없었습니다. 우리는 9시 반에 끝냈어요."
        },
        {
          name:'한나:',
          speech:"아 그래요."
        },
        {
          name:'마틴:',
          speech:"음... 제 생각에 그는 보고서에 있는 숫자들을 보고 싶었던 것 같아요."
        },
        {
          name:'한나:',
          speech:"음."
        },
        {
          name:'마틴:',
          speech:"그는 그것을 읽을 시간이 필요했습니다. 어쨌든, 그는 어제 한 두 가지 질문으로 전화를 걸었습니다. 그냥 작은 포인트에요. 그리고, 음..."+
          "그리고요. 그는 좋아하는 것 같아요. 문제없어요."
        },
        {
          name:'한나:',
          speech:"알겠습니다. 그럼 괜찮아요. 그리고 자재 비용에 대해서 얘기했어요?"
        },
        {
          name:'마틴:',
          speech:"네. 회의가 끝난 후 미겔과 얘기했어요. 공급업체에 대해서도 논의했어요 그는 지금 두 개의 새로운 회사와 이야기를 나누고 있습니다."+
          "오늘 아침에 그가 오늘 한 회사와 다음 주 금요일에 미팅이 있다는 이메일을 받았습니다. 그래서요..."
        },
        {
          name:'한나:',
          speech:"알겠습니다. 잘됐네요. 그리고 공장은 방문했나요?"
        },
        {
          name:'마틴:',
          speech:"아니요 시간이 없었어요. 그래서 저는 새로운 생산 라인을 보지 않았습니다."
        },
        {
          name:'한나:',
          speech:"그럼, 다음 달에 또 가시는군요."
        },
        {
          name:'마틴:',
          speech:"네, 맞아요. 그때도 볼 수 있어요."
        },
        {
          name:'한나:',
          speech:"알겠습니다. 그럼, 좋은 여행이었네요?"
        },
        {
          name:'마틴:',
          speech:"그래요. 델리 여행은 어땠어요?"
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
  border-color: transparent #899857 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #899857;
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
