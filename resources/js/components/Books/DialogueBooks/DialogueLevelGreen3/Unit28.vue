
<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/luxury-motorboat_1426-389.jpg">

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
        padding-bottom: 10px;">Good luck, Waldo
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Good luck, Waldo</li><br />

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
          Listening exercise<br />
          Listen to the news report and answer the questions (article for news report)<br />
        </p>

        <ol style="margin: 12px;">
          <li>
            Where are Mr. and Mrs. Busby now?<br />
          </li>
          <li>
            What happened to the boat?<br />
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
                      미래 :  will + 동사원형<br />
                        Example:<br />
                          Tomorrow morning he will begin a fantastic voyage : 내일 아침 그는 환상적인 항해를 시작할 것입니다 <br />
                          we'll stop on the way : 우리는 도중에 멈출 것입니다<br />
                          How will you navigate? : 당신은 어떻게 항해할 것입니까?<br />
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
          name:'Interviewer:',
          speech:'Good evening, and welcome to Channel 35 News. A 66-year-old Monterey man, Mr. Walter Busby, is in the studio with us. Mr. Busby is a retired bank clerk. Tomorrow morning he will begin a fantastic voyage. He and his wife, Betty, are going to sail from Monterey, California, to Australia. That’s 7,000 miles across the ocean — in a small motorboat.'
        },
        {
          name:'  ',
          speech:' '
        },
        {
          name:'Int:',
          speech:'Now, Walter…'
        },
        {
          name:'Waldo:',
          speech:'Please, call me Waldo. All my friends call me Waldo.'
        },
        {
          name:'Int:',
          speech:'All right, Waldo. Why are you doing this?'
        },
        {
          name:'Waldo:',
          speech:'Well, I haven’t seen my son for ten years. He lives in Australia. And we couldn’t see our grandchildren either.'
        },
        {
          name:'Int:',
          speech:'But your boat isn’t very big, Waldo. Will it get to Australia?'
        },
        {
          name:'Waldo:',
          speech:'Oh, yes. I think so. It’ll get there all right. It’ll take a long time, of course. But we’re not in a hurry. I just retired, you see. And we’ll stop on the way.'
        },
        {
          name:'Int:',
          speech:'Where will you stop? Do you know?'
        },
        {
          name:'Waldo:',
          speech:'Oh, yes. We have a map. Here it is. We’ll stop at several places. We’ll need food and gas.'
        },
        {
          name:'Int:',
          speech:'Will you take a radio with you?'
        },
        {
          name:'Waldo:',
          speech:'No, no, no. We never listen to the radio. We don’t like pop music. We like some peace and quiet. We’ll take a lot of books.'
        },
        {
          name:'Int:',
          speech:'Well actually, I meant a two-way radio. How will you navigate? Will you use a GPS?'
        },
        {
          name:'Waldo:',
          speech:'A GPS? No. We won’t need a GPS or a radio. We’ll navigate by the sun and stars. I got a book from the library.'
        },
        {
          name:'Int:',
          speech:'Well, good luck, Waldo. You’ll certainly need it.'
        },
        ],

        translations:[
        {
          name:'인터뷰 진행자:',
          speech:'안녕하세요, 채널 35 뉴스에 오신 것을 환영합니다. 66세의 몬터레이 남성 Walter Busby가 저희와 함께 스튜디오에 있습니다. Busby씨는 은퇴한 은행원입니다. 내일 아침 그는 환상적인 항해를 시작할 것입니다. 그와 그의 아내 베티는 캘리포니아 몬테레이에서 호주로 항해할 예정입니다. 그것은 대양을 가로질러 7,000마일을 가로지르는 작은 모터보트입니다.'
        },
        {
          name:'  ',
          speech:' '
        },
        {
          name:'진행자:',
          speech:'자, Walter, 이제요…'
        },
        {
          name:'Waldo:',
          speech:'제발, 저를 Waldo라고 불러주세요. 내 친구들은 모두 나를 Waldo라고 부릅니다.'
        },
        {
          name:'진행자:',
          speech:'좋아요, Waldo. 왜 이러는 거예요?'
        },
        {
          name:'Waldo:',
          speech:'음, 저는 제 아들을 10년 동안 보지 못했어요. 그는 호주에 삽니다. 그리고 우리는 손주들도 볼 수 없었습니다.'
        },
        {
          name:'진행자:',
          speech:'하지만 당신의 보트는 그리 크지 않아요, Waldo. 호주까지 갈 수 있을까요?'
        },
        {
          name:'Waldo:',
          speech:'아, 그래요. 그런 것 같아요. 잘 될 거예요. 물론 시간이 오래 걸리겠죠. 하지만 우리는 서두르지 않아요. 전 방금 은퇴했어요 그리고 우리는 도중에 멈출 것입니다.'
        },
        {
          name:'진행자:',
          speech:'어디서 멈출 거예요? 당신은 알고 있나요?'
        },
        {
          name:'Waldo:',
          speech:'아, 그래요. 지도가 있어요. 여기 있습니다. 몇 군데에 들를 거예요. 음식과 가스가 필요할 거예요.'
        },
        {
          name:'진행자:',
          speech:'라디오를 가지고 가시겠어요?'
        },
        {
          name:'Waldo:',
          speech:'아뇨,아뇨,아닙니다. 우리는 라디오를 절대 듣지 않아요. 우리는 팝 음악을 좋아하지 않아요. 우리는 평화롭고 조용한 것을 좋아합니다. 우리는 많은 책을 가져갈 것입니다.'
        },
        {
          name:'진행자:',
          speech:'음, 사실, 저는 양방향 라디오를 의미했습니다. 어떻게 항해하실 겁니까? GPS를 사용하실 건가요?'
        },
        {
          name:'Waldo:',
          speech:'GPS요? 아니요. GPS나 라디오는 필요없어요. 우리는 태양과 별을 따라 항해할 것입니다. 도서관에서 책을 한 권 받았습니다.'
        },
        {
          name:'진행자:',
          speech:'음, 행운을 빌어요, Waldo. 꼭 필요할 거예요.'
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
