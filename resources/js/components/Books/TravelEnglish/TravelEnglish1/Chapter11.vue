<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://i.pinimg.com/originals/dc/c1/cf/dcc1cfc1e71f5ecfcee8a54909ff5b38.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Room Card
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
            <i>notice</i>신경씀, 주목, 알아챔,
          </p>
          <p>
            <i>confirmation</i>확인, 견진 성사,
          </p>
          <p>
            <i>Security</i>보안, 경비, 안보, 방위,
          </p>
          <p>
            <i>room service</i>룸서비스
          </p>
          <p>
            <i>press the button</i>버튼을 누르다
          </p>
          <p>
            <i>bedroom card</i>침실카드
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
              Why do we need to leave the key at the front desk?
            </li>
            <li>
              Do you think it's important to read the notice at the front desk?
            </li>
            <li>
              What are the things we need to do during our stay in hotels?
            </li>
            <li>
              What do you need to do if you want to have room service?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              For your security, please leave your key at the front desk when you go out.<br />
              Just press the button.<br />
              Can you call room service?<br />
              "For your security,  show your bedroom card when collecting your key."
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
            name:'Mr. Hwang:',
            speech:'143, please.'
          },
          {
            name:'Clerk:',
            speech:'Sir?'
          },
          {
            name:'Mr. Hwang:',
            speech:'Let me have the key for room 143. Mr. Hwang.'
          },
          {
            name:'Clerk:',
            speech:'Your card, please.'
          },
          {
            name:'Mr. Hwang:',
            speech:'Card?'
          },
          {
            name:'Clerk:',
            speech:'Your bedroom card. I can’t give you your key without your card. It’s a rule. You see the notice?'
          },
          {
            name:'Mr. Hwang:',
            speech:'(Reading the notice) "For your security show your bedroom card when collecting your key."'
          },
          {
            name:'Clerk:',
            speech:'Do you have your card?'
          },
          {
            name:'Mr. Hwang:',
            speech:'Oh, I don’t know. Is this it?'
          },
          {
            name:'Clerk:',
            speech:'No, Sir. That’s your confirmation of the booking. If you need something just press the button.'
          },
          {
            name:'Mr. Hwang:',
            speech:'Ah, this is it. There you are.'
          },
          ],
  
          translations:[
          {
            name:'황씨:',
            speech:'143번 부탁합니다.'
          },
          {
            name:'점원:',
            speech:'고객님?'
          },
          {
            name:'황씨:',
            speech:'143호실 열쇠를 주세요. 황 입니다.'
          },
          {
            name:'점원:',
            speech:'카드 주십시오.'
          },
          {
            name:'황씨:',
            speech:'카드요?'
          },
          {
            name:'점원:',
            speech:'침실 카드요. 카드 없이는 열쇠를 드릴 수 없습니다. 규칙이에요. 안내문이 보이시나요?'
          },
          {
            name:'황씨:',
            speech:'(고지문을 읽으면서) "보안상 열쇠를 수집할 때 침실 카드를 보여주세요.'
          },
          {
            name:'점원:',
            speech:'카드 있으세요?'
          },
          {
            name:'황씨:',
            speech:'아, 모르겠어요. 이거예요?'
          },
          {
            name:'점원:',
            speech:'아닙니다. 그것은 예약 확인서입니다. 필요한 것이 있으면 버튼을 누르세요.'
          },
          {
            name:'황씨:',
            speech:'아, 이게 다예요. 여기 있어요'
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
  