7<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/filling-registration-form_1098-14557.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">At a Hotel
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
            <i>Check-in</i>탑승 수속대, 탑승 수속
          </p>
          <p>
            <i>front desk</i>프런트[안내 데스크]
          </p>
          <p>
            <i>Voucher</i>상품권, 할인권, 쿠폰
          </p>
          <p>
            <i>Signature</i>서명, 특징
          </p>
          <p>
            <i>Reservation</i>예약, 의구심[거리낌], 인디언[아메리카 원주민] 보호 구역
          </p>
          <p>
            <i>identification card</i>신분증명서, 신분증
          </p>
          <p>
            <i>fill out</i>더 커지다[둥그레지다/살찌다]
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
              When you're traveling do you reserve a hotel room in advance or you do it on the day you arrive in that place?
            </li>
            <li>
              Do you like staying in hotels? Why or why not?
            </li>
            <li>
              What do you need to do if you already reserve a room in a hotel?
            </li>
            <li>
              Why do you think we need a  confirmation from the hotel after our reservation?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              I’d like to check-in.<br />
              May I have your name?<br />
              I have a reservation.<br />
              Can I use the internet in my room?<br />
              Here is the key to your room.<br />
              Your room number is 〜<br />
              Can I have the voucher?<br />
              Can you write your name and signature here?
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
            name:'Matt',
            speech:'Good afternoon. I’d like to check-in. I have made a reservation under Matt Hwang'
          },
          {
            name:'Receptionist:',
            speech:'May I have your name, please?'
          },
          {
            name:'Matt',
            speech:'Matt Hwang'
          },
          {
            name:'Receptionist:',
            speech:'Could you spell your last name, please?'
          },
          {
            name:'Matt',
            speech:'H-W-A-N-G'
          },
          {
            name:'Receptionist:',
            speech:'Let me check... We have your reservation for two nights starting today. May I see your identification?'
          },
          {
            name:'Matt',
            speech:'Here’s my passport.'
          },
          {
            name:'Receptionist:',
            speech:'Thank you. Could you fill out this form, please?'
          },
          {
            name:'Matt',
            speech:'Sure.'
          },
          {
            name:'Receptionist:',
            speech:'Thank you. Your room number is 504. Here is the key to your room.'
          },
          {
            name:'Matt',
            speech:'All right.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'안녕하세요. 체크인하고 싶은데요. 저는 Matt Hwang으로 예약을 했습니다.'
          },
          {
            name:'접수 담당자:',
            speech:'성함을 말씀해 주시겠습니까?'
          },
          {
            name:'매트:',
            speech:'Matt Hwang 입니다.'
          },
          {
            name:'접수 담당자:',
            speech:'성의 철자를 말씀해 주세요.'
          },
          {
            name:'매트:',
            speech:'H-W-A-N-G입니다.'
          },
          {
            name:'접수 담당자:',
            speech:'확인해 보겠습니다... 오늘부터 2박으로 예약하셨습니다. 신분증 좀 보여 주시겠어요?'
          },
          {
            name:'매트:',
            speech:'여기 제 여권입니다.'
          },
          {
            name:'접수 담당자:',
            speech:'감사합니다. 이 양식을 작성해 주시겠습니까?'
          },
          {
            name:'매트:',
            speech:'그럼요.'
          },
          {
            name:'접수 담당자:',
            speech:'감사합니다. 방 번호는 504호입니다. 여기 방 열쇠가 있습니다.'
          },
          {
            name:'매트:',
            speech:'알았어요.'
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
  