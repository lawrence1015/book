<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/man-queue-receiving-passport-boarding-pass_107420-63583.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">At the Airport, check-in
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
            <i>Overweight</i>과체중의, 비만의, 중량 초과의
          </p>
          <p>
            <i>carry-on luggage</i>수하물
          </p>
          <p>
            <i>Through</i>...을 통해[관통하여], … 사이로, ~을 사이에 두고[~의 건너편에서] 보다, 듣다 등
          </p>
          <p>
            <i>Booking</i>예약, 출연 예약[계약], 반칙 기록
          </p>
          <p>
            <i>Confirmation</i>확인, 견진 성사, 유대교에서 16세 이상의 청소년을 위한 종교 의식
          </p>
          <p>
            <i>Suitcase</i>여행 가방
          </p>
          <p>
            <i>Depart</i>떠나다[출발하다], 떠나다[그만두다]
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
              Do you usually bring heavy luggage?
            </li>
            <li>
              How many bags do you usually carry-on inside the plane?
            </li>
            <li>
              Have you ever experienced overweight luggage?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              overweight baggage.<br />
              I need your booking confirmation and passport.<br />
              carry-on<br />
              go straight through<br />
              Here you go<br />
              Put your suitcase here, please.
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
            name:'Airline Staff:',
            speech:'Welcome to Los Angeles Airlines. How can I assist you today?'
          },
          {
            name:'Matt:',
            speech:'My name is Matt Hwang.I’m flying to Seoul. South Korea.'
          },
          {
            name:'Airline Staff:',
            speech:'All right Mr. Hwang, I need your booking confirmation and passport.'
          },
          {
            name:'Matt:',
            speech:'Here they are.'
          },
          {
            name:'Airline Staff:',
            speech:'Okay. Do you have any luggage you’d like to check-in?'
          },
          {
            name:'Matt:',
            speech:'Yes, one bag.'
          },
          {
            name:'Airline Staff:',
            speech:'Put your suitcase here, please.'
          },
          {
            name:'Matt:',
            speech:'Here you go.'
          },
          {
            name:'Airline Staff:',
            speech:'Okay, everything appears to be in order.'
          },
          {
            name:'Matt:',
            speech:'Excellent.'
          },
          {
            name:'Airline Staff:',
            speech:'Here is your passport and boarding pass, Sir. Your flight departs from gate 32 and your seat is 10A. Boarding will commence at 12:30 pm. Enjoy your flight.'
          },
          {
            name:'Matt:',
            speech:'Thank you. Have a good day.'
          },
          ],
  
          translations:[
          {
            name:'항공사 직원:',
            speech:'로스앤젤레스 항공에 오신 것을 환영합니다. 오늘은 어떻게 도와드릴까요?'
          },
          {
            name:'매트:',
            speech:'제 이름은 매트 황입니다.저는 서울로 비행기를 타고 갑니다. 대한민국.'
          },
          {
            name:'항공사 직원:',
            speech:'알겠습니다, 황 선생님, 예약 확인서와 여권을 주세요.'
          },
          {
            name:'매트:',
            speech:'여기 있습니다.'
          },
          {
            name:'항공사 직원:',
            speech:'알겠습니다. 체크인하실 짐이 있으신가요?'
          },
          {
            name:'매트:',
            speech:'네, 가방 하나요.'
          },
          {
            name:'항공사 직원:',
            speech:'여행 가방을 여기에 갖다 놓으세요.'
          },
          {
            name:'매트:',
            speech:'여기 있습니다.'
          },
          {
            name:'항공사 직원:',
            speech:'좋아요, 모든 게 제대로 된 것 같아요.'
          },
          {
            name:'매트:',
            speech:'훌륭합니다.'
          },
          {
            name:'항공사 직원:',
            speech:'여기 여권과 탑승권 여기 있습니다. 항공편은 32번 게이트에서 출발하고 좌석은 10A입니다. 12시 30분에 탑승이 시작됩니다. 즐거운 비행 되세요.'
          },
          {
            name:'매트:',
            speech:'고마워요. 좋은 하루 되세요.'
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
  