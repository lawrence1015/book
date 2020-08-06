<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://www.enr.com/ext/resources/Issues/California_Issues/2019/10-October/07-Oct/Best-Projects/LAXSouthwestAirlinesTicketingcopy-Heliphoto-copy.jpg" style="max-width: 100%; display:block; height: auto;">
  
          <v-layout
          align-end
          fill-height
          pa-0
          white--text
          >
          <h1 style="background-color: rgb(76, 187, 185, 0.7);
          width: 100%;
          padding-top : 10px;
          padding-left : 10px;
          padding-bottom: 10px;">At the Airport, <i>Departing</i>
        </h1>
      </v-layout>
    </v-img>
  
  
    <hr style="border: 3px solid rgba(119, 216, 216, 1);" width="100%">
    <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue</h3>
    <hr width="60%">
    <div style = "padding : 16px;">
  
      <table style = "border-collapse: collapse;">
      
        <tr v-for="dialog in dialogs">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>
  
  
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
        </div>
        <h3 style="background-color: #4cbbb9;
                   padding-top : 10px;
                   padding-left : 10px;
                   padding-bottom: 10px;
                   padding-right : -16px;
                   margin-left: -18px;
                   margin-right: -18px;"
            class="underline">Words</h3>
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
        </div>
        <div style="padding : 16px;">
  
          <p>
            <i>Cheque</i>수표
          </p>
          <p>
            <i>Proceed</i>진행하다[되다], 계속해서[이어서] …을 하다, 나아가다[이동하다]
          </p>
          <p>
            <i>departure gate</i>출발 탑승구
          </p>
          <p>
            <i>airline counter</i>항공사 카운터
          </p>
          <p>
            <i>Boarding</i>길게 잇댄 판자, 기숙
          </p>
          <p>
            <i>Gate</i>문, 정문, 대문, 출입구, 수문, 게이트[탑승구], 관중 수
          </p>
         
        </div>
  
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
        </div>
        <h3 style="background-color: #4cbbb9;
                   padding-top : 10px;
                   padding-left : 10px;
                   padding-bottom: 10px;
                   padding-right : -16px;
                   margin-left: -18px;
                   margin-right: -18px;"
            class="underline">Activity</h3>
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
        </div>
        <div style="padding : 16px;">
          <h4>QUESTIONS:</h4>
          <p>
            <b>A.  Answer the following questions:</b>
          </p>
          <ol style="margin: 12px;">
            <li>
              Have you ever experienced messing up your flight because you didn’t know that they changed the gate number?
            </li>
            <li>
              What do you think you will do if that happens?
            </li>
            <li>
              Do you also check your flight number in English every time you travel abroad?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              There has been a gate change<br />
              We would now like to invite all passengers to board.<br />
              This is the final boarding call for<br />
              flight 880 to Seoul is now boarding
            </i>
          </p>
  
        </div>
  
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
        </div>
        <h3 style="background-color: #4cbbb9;
                   padding-top : 10px;
                   padding-left : 10px;
                   padding-bottom: 10px;
                   padding-right : -16px;
                   margin-left: -18px;
                   margin-right: -18px;"
            class="underline">Translation</h3>
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 0px; border-color: rgb(119, 216, 216, 0.5); border-style: solid; border-width: 3px;">
        </div>
             <div style="padding : 16px;">
  
              <table style = "border-collapse: collapse;">
  
                <tr v-for="translation in translations">
                  <td class = "uppertable" >{{translation.name}}</td>
                  <td class = "lowertable" >{{translation.speech}}</td>
                </tr>
        
              </table>
  
  
        </div>
  
  
      </div>
  
  
    </v-layout>
  </v-container>
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
            name:'Airport Speaker:',
            speech:'“Attention passengers of Los Angeles Airlines flight 880. There has been a gate change. Los Angeles Airlines flight 880 will now be leaving from gate 12.”'
          },
          {
            name:'Matt:',
            speech:'I should have checked my flight number in English.'
          },
          {
            name:'Man:',
            speech:'Don’t worry you can check it on the monitor.'
          },
          {
            name:'Airport Speaker',
            speech:'“Los Angeles Airlines flight 880 to Seoul is now boarding.”'
          },
          {
            name:' ',
            speech:'“Passenger Matt Hwang. Passenger Matt Hwang, please proceed to the Los Angeles Airlines desk at gate 12.”'
          },
          {
            name:'Matt:',
            speech:'Where is gate 12?'
          },
          {
            name:'Man:',
            speech:'Go straight then on your right side.'
          },
          {
            name:'Matt:',
            speech:'Thank you.'
          },
          ],
  
          translations:[
          {
            name:'공항 스피커:',
            speech:'"로스앤젤레스 항공 880편 승객 여러분, 주목해 주십시오. 탑승구가 변경되었습니다. 12번 게이트에서 로스앤젤레스 항공 880편이 지금 출발합니다."'
          },
          {
            name:'매트:',
            speech:'제 비행기 번호를 영어로 확인했어야 했어요.'
          },
          {
            name:'남자:',
            speech:'모니터에서 확인할 수 있으니까  걱정하지 마세요.'
          },
          {
            name:'매트:',
            speech:'서울에서 왔습니다.'
          },
          {
            name:'공항 스피커:',
            speech:'"서울로 가는 로스앤젤레스 항공 880편이 지금 탑승 중입니다."'
          },
          {
            name:' ',
            speech:'"승객 매트 황, 승객 매트 황, 12번 게이트의 로스앤젤레스 항공 데스크로 가십시오."'
          },
          {
            name:'매트:',
            speech:'12번 게이트가 어디죠?'
          },
          {
            name:'남자:',
            speech:'직진하다가 오른편으로 가세요.'
          },
          {
            name:'매트:',
            speech:'감사합니다'
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
  
  .underline {
  
  
  }
  
  .border {
    position: relative;
    left: 0px;
    width: 255px;
    height: 40px;
    background: #2F4674;
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
  