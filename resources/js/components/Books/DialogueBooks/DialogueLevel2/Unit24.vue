<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/plenty-collectible-coins_1426-1741.jpg">

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
        padding-bottom: 10px;">How can I help you??
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br />( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">How can I help you?</li><br />

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
          <u>Is there a post office/bank/restaurant near your home? Give directions.</u><br />
          (당신의 집 근처에 우체국/은행/식당이 있습니까? 방향을 지시해 보세요)
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
                      a quarter = 25 센트짜리 동전 (US) <br />
                    </li>
                    <li>
                      a dollar bill = 1달러 지폐  / a five-dollar bill = 5달러 지폐<br />
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
          name:'1',
          speech:' '
        },
        {
          name:'A:',
          speech:'Excuse me.'
        },
        {
          name:'B:',
          speech:'Yes?'
        },
        {
          name:'A:',
          speech:'Do you have any change?'
        },
        {
          name:'B:',
          speech:'What do you need?'
        },
        {
          name:'A:',
          speech:'I need some quarters.'
        },
        {
          name:'B:',
          speech:'Sure. How many do you want?'
        },
        {
          name:'A:',
          speech:'Can you change a dollar bill?'
        },
        {
          name:'B:',
          speech:'Yes, I think so. Here are four quarters.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'2',
          speech:' '
        },
        {
          name:'C:',
          speech:'Hello.'
        },
        {
          name:'D:',
          speech:'Hello. How can I help you?'
        },
        {
          name:'C:',
          speech:'Can you repair these boots?'
        },
        {
          name:'D:',
          speech:'Sure. What’s the problem?'
        },
        {
          name:'C:',
          speech:'They need new heels.'
        },
        {
          name:'D:',
          speech:'No problem. When do you need them?'
        },
        {
          name:'C:',
          speech:'As soon as possible.'
        },
        {
          name:'D:',
          speech:'Is Thursday afternoon OK?'
        },
        {
          name:'C:',
          speech:'Yes. That’s great.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'3',
          speech:' '
        },
        {
          name:'E:',
          speech:'Excuse me.'
        },
        {
          name:'G:',
          speech:'Yes?'
        },
        {
          name:'E:',
          speech:'Is there a parking lot near here?'
        },
        {
          name:'G:',
          speech:'Yes, there is.'
        },
        {
          name:'E:',
          speech:'Is it far?'
        },
        {
          name:'G:',
          speech:'No, it’s not. Turn right at the first traffic light. It’s on the left.'
        },
        {
          name:'E:',
          speech:'Thank you.'
        },
        {
          name:'G:',
          speech:'You’re welcome.'
        },
        ],

        translations:[
        {
          name:'1',
          speech:' '
        },
        {
          name:'A:',
          speech:'실례합니다.'
        },
        {
          name:'B:',
          speech:'네?'
        },
        {
          name:'A:',
          speech:'잔돈 좀 있으세요?'
        },
        {
          name:'B:',
          speech:'뭐가 필요하신데요?'
        },
        {
          name:'A:',
          speech:'저는 쿼터(25센트짜리 동전)가 좀 필요해요.'
        },
        {
          name:'B:',
          speech:'물론이에요. 얼마나 필요하세요?'
        },
        {
          name:'A:',
          speech:'1달러 지폐 바꿀 수 있을까요?'
        },
        {
          name:'B:',
          speech:'네, 그럴 수 있어요. 여기 쿼터(25센트짜리 동전) 4개 있습니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'2',
          speech:' '
        },
        {
          name:'C:',
          speech:'안녕하세요.'
        },
        {
          name:'D:',
          speech:'안녕하세요. 어떻게 도와드릴까요?'
        },
        {
          name:'C:',
          speech:'이 부츠를 고칠 수 있나요?'
        },
        {
          name:'D:',
          speech:'물론입니다. 뭐가 문제인가요?'
        },
        {
          name:'C:',
          speech:'부츠에 새 굽이 필요합니다.'
        },
        {
          name:'D:',
          speech:'문제 없습니다. 언제 이 신발이 필요하십니까?'
        },
        {
          name:'C:',
          speech:'가능한 빨리요.'
        },
        {
          name:'D:',
          speech:'목요일 오전은 괜찮으신가요?'
        },
        {
          name:'C:',
          speech:'네, 좋습니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'3',
          speech:' '
        },
        {
          name:'E:',
          speech:'실례합니다.'
        },
        {
          name:'G:',
          speech:'네?'
        },
        {
          name:'E:',
          speech:'여기 주차 공간이 있나요?'
        },
        {
          name:'G:',
          speech:'네, 있습니다.'
        },
        {
          name:'E:',
          speech:'먼가요?'
        },
        {
          name:'G:',
          speech:'아니오, 멀지 않습니다. 첫번째 신호등에서 오른쪽으로 도세요. 왼쪽에 있습니다.'
        },
        {
          name:'E:',
          speech:'고맙습니다.'
        },
        {
          name:'G:',
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
