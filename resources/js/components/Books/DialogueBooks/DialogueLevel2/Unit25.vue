<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/time-lapse-waterfalls_198523-2.jpg">

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
        padding-bottom: 10px;">Lost in Niagara Falls
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Lost in Niagara Falls</li><br />

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

            <v-container grid-list-md text-xs-center>
              <v-layout wrap align-content-center>

                <v-flex xs12 md6 >
                  <v-card hover>

                    <v-img src="images/dialogue-niagarafalls-unit25.png" />

                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>

            <ol style="margin: 12px;">
              <li>
                Match the conversations 1, 2, 3, 4 with A, B, C, D on the map. <br />
                  대화 1,2,3,4 와 지도위의 A,B,C,D를 연결해 보세요 <br />
              </li>
              <li>
                You are at C, give directions to:<br />
                  a) Rainbow Bridge<br />
                  b) Minolta Tower<br />
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
                      How do I get to 장소 : ~로 가는 길을 가르쳐 주시겠습니까?<br />
                        = Can you tell me how I get to 장소?<br />
                        = Can you show me the way to go to 장소?<br />
                        = How can I go to 장소?<br />

                    </li>
                    <li>
                      to the right/left : 방향 (오른쪽으로 / 왼쪽으로) around the bend/corner : 커브/코너에서 돌아서<br />
                        straight ahead : 앞으로 곧장  on your right/left : 당신의 오른쪽에 / 왼쪽에<br />
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
          name:'Bill:',
          speech:'Excuse me, I’m looking for the Skylon Tower.'
        },
        {
          name:'Woman:',
          speech:'Pardon me?'
        },
        {
          name:'Bill:',
          speech:'I’m looking for the Skylon Tower.'
        },
        {
          name:'Woman:',
          speech:'It’s right behind you. You’re standing right in front of it.'
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
          name:'Bill:',
          speech:'Where can I find the boat trip to the Falls?'
        },
        {
          name:'Man:',
          speech:'Ah, you want the Maid of the Mists Plaza. Walk along this street — it’s the Niagara Parkway. Stay near the river, the road goes around to the right. The entrance to the boat trips is just around the bend on your right. You can’t miss it.'
        },
        {
          name:'Bill:',
          speech:'Sorry. Can you repeat that?'
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
          name:'Bill:',
          speech:'Pardon me. How do I get to the United States?'
        },
        {
          name:'Woman:',
          speech:'Just go straight ahead. Go across the Rainbow Bridge and you’re there! This side’s Canada, that side’s the U.S.A.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'4',
          speech:' '
        },
        {
          name:'Bill:',
          speech:'Which are the Canadian Falls?'
        },
        {
          name:'Man:',
          speech:'They’re on our right. The Horseshoe Falls is another name for the Canadian Falls.'
        },
        {
          name:'Bill:',
          speech:'So, the American Falls are across the river on our left.'
        },
        {
          name:'Man:',
          speech:'That’s correct.'
        },
        ],

        translations:[
        {
          name:'1',
          speech:' ' 
        },
        {
          name:'Bill:',
          speech:'실례합니다, 저는 Skylon Tower를 찾고 있습니다.'
        },
        {
          name:'Woman:',
          speech:'한 번 더 말씀해 주시겠습니까?'
        },
        {
          name:'Bill:',
          speech:'저는 Skylon Tower를 찾고 있습니다.'
        },
        {
          name:'Woman:',
          speech:'당신 바로 뒤에 있습니다. 당신은 그 곳 바로 앞에 서 계십니다.'
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
          name:'Bill:',
          speech:'폭포로 가는 보트여행은 어디서 찾을 수 있습니까?'
        },
        {
          name:'Man:',
          speech:'아, Maid of the Mists Plaza를 원하시는군요. 이 길을 따라 걸어가세요 - 그 길은 Niagara Parkway입니다. 강 근처로 가세요, 그 길의 오른쪽으로 돌아 가세요. 보트 여행 입구는 당신의 오른 쪽에서 코너를 돌면 바로 있습니다. 꼭 찾을 수 있을겁니다.'
        },
        {
          name:'Bill:',
          speech:'죄송합니다. 다시 한 번 말씀해 주실래요?'
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
          name:'Bill:',
          speech:'죄송합니다. 미국에 어떻게 갈 수 있나요?'
        },
        {
          name:'Woman:',
          speech:'앞으로 곧장 가세요. Rainbow Bridge를 건너가세요. 그러면 당신은 그 곳에 있게 되요. 이 쪽이 Canada이고 저 쪽이 미국입니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'4',
          speech:' '
        },
        {
          name:'Bill:',
          speech:'어떤 것이 Canadian Falls입니까?'
        },
        {
          name:'Man:',
          speech:'우리 오른쪽에 있습니다. Horseshoe Falls는 Canadian Falls의 다른 이름입니다.'
        },
        {
          name:'Bill:',
          speech:'그럼, American Falls은 우리 왼쪽에서 강 건너편에 있군요.'
        },
        {
          name:'Man:',
          speech:'맞습니다.'
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
