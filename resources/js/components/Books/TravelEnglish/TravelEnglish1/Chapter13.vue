<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/close-up-treadmill-console-with-settings_1262-2975.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Fitness Center
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
            <i>fitness facility</i>피트니스 시설
          </p>
          <p>
            <i>surcharge</i>추가 요금, 추가 요금을 부과하다
          </p>
          <p>
            <i>accommodate</i>공간을 제공하다, 수용하다, 
          </p>
          <p>
            <i>twenty-four hours</i>일주야
          </p>
          <p>
            <i>trainer</i>운동화, 교육[훈련]시키는 사람, 트레이너
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
              Why do you think many guests ask for a fitness center at the hotel?
            </li>
            <li>
              Where is the gym located?
            </li>
            <li>
              What time is the gym open, and what time does it close?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              We try to accommodate all needs of our patrons.<br />
              twenty-four hours a day.<br />
              an additional surcharge for the gym?<br />
              You can't miss it.
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
            name:'Matt:',
            speech:'Excuse me. Does this hotel have a fitness facility?'
          },
          {
            name:'Hotel Staff:',
            speech:'Yes, we have fitness.'
          },
          {
            name:'Matt:',
            speech:'Where is your fitness facility located?'
          },
          {
            name:'Hotel Staff:',
            speech:'The gym is just below the lobby. You can’t miss it.'
          },
          {
            name:'Matt:',
            speech:'Is there an additional surcharge for the gym?'
          },
          {
            name:'Hotel Staff:',
            speech:'No, the gym is free for guests.'
          },
          {
            name:'Matt:',
            speech:'What time is the gym open, and what time does it close?'
          },
          {
            name:'Hotel Staff:',
            speech:'The gym is open seven days a week, twenty-four hours a day.'
          },
          {
            name:'Matt:',
            speech:'Do you offer trainer services along with the gym?'
          },
          {
            name:'Hotel Staff:',
            speech:'If you want a trainer, you’ll have to use another gym.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'실례합니다. 이 호텔에 피트니스 시설이 있나요?'
          },
          {
            name:'호텔 직원:',
            speech:'네, 있습니다.'
          },
          {
            name:'매트:',
            speech:'피트니스 시설은 어디에 있나요?'
          },
          {
            name:'호텔 직원:',
            speech:'로비 바로 아래에 있습니다. 놓치면 안 돼요.'
          },
          {
            name:'매트:',
            speech:'헬스장에 추가 요금이 있나요?'
          },
          {
            name:'호텔 직원:',
            speech:'아니요, 헬스장은 손님들에게 무료입니다.'
          },
          {
            name:'매트:',
            speech:'헬스장은 몇 시에 문을 열고, 몇 시에 문을 닫나요?'
          },
          {
            name:'호텔 직원:',
            speech:'헬스장은 일주일에 7일, 하루 24시간 운영합니다.'
          },
          {
            name:'매트:',
            speech:'헬스장과 함께 트레이너 서비스를 제공하나요?'
          },
          {
            name:'호텔 직원:',
            speech:'불행히도, 아닙니다. 트레이너를 원하시면 다른 헬스장을 이용하셔야 합니다.'
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
  