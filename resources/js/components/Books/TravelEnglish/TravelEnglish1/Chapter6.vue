<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://ksyu.files.wordpress.com/2014/04/immigration-officer.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Immigration Counter
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
            <i>declare</i>선언[선포/공표]하다
          </p>
          <p>
            <i>purpose</i>목적
          </p>
          <p>
            <i>immigration officer </i>출입국 관리인
          </p>
          <p>
            <i>passport</i>여권
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
                Where did Matt go?
            </li>
            <li>
                Is it Matt’s first time in Los Angeles?
            </li>
            <li>
                How long will Matt stay in Los Angeles?
            </li>
            <li>
                What is the first thing that the immigration officer will ask you at the immigration counter?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
                Have you ever been to <br />
                May I see your passport, please?<br />
                What is the purpose of your visit?
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
            name:'Immigration officer:',
            speech:'Welcome to Los Angeles. May I see your passport, please?'
          },
          {
            name:'Matt',
            speech:'Sure. Here it is.'
          },
          {
            name:'Immigration officer:',
            speech:'Where are you coming from?'
          },
          {
            name:'Matt',
            speech:'I’m coming from Seoul.'
          },
          {
            name:'Immigration officer:',
            speech:'What is the purpose of your visit?'
          },
          {
            name:'Matt',
            speech:'I’m here on a trip'
          },
          {
            name:'Immigration officer:',
            speech:'How long are you planning to stay?'
          },
          {
            name:'Matt',
            speech:'I’ll be staying for three weeks.'
          },
          {
            name:'Immigration officer:',
            speech:'Where will you be staying'
          },
          {
            name:'Matt',
            speech:'I’ll be staying at a hotel.'
          },
          {
            name:'Immigration officer:',
            speech:'What is the name of the hotel?'
          },
          {
            name:'Matt',
            speech:'ABC Hotel.'
          },
          {
            name:'Immigration officer:',
            speech:'Have you ever been to Los Angeles before?'
          },
          {
            name:'Matt',
            speech:'No, this is my first time.'
          },
          {
            name:'Immigration officer:',
            speech:'Do you have anything to declare?'
          },
          {
            name:'Matt',
            speech:'None.'
          },
          {
            name:'Immigration officer:',
            speech:'Enjoy your stay.'
          },
          {
            name:'Matt',
            speech:'Thank you.'
          },
          ],
  
          translations:[
          {
            name:'출입국 관리인:',
            speech:'로스앤젤레스에 온 걸 환영합니다. 여권 좀 볼 수 있을까요?'
          },
          {
            name:'매트:',
            speech:'물론이죠. 여기 있습니다.'
          },
          {
            name:'출입국 관리인:',
            speech:'어디서 오셨어요?'
          },
          {
            name:'매트:',
            speech:'서울에서 왔습니다.'
          },
          {
            name:'출입국 관리인:',
            speech:'방문 목적이 무엇입니까?'
          },
          {
            name:'매트:',
            speech:'여행차 왔어요'
          },
          {
            name:'출입국 관리인:',
            speech:'얼마나 체류하실 예정입니까?'
          },
          {
            name:'매트:',
            speech:'호텔에 머무를 예정입니다.'
          },
          {
            name:'출입국 관리인:',
            speech:'호텔 이름이 뭔가요?'
          },
          {
            name:'매트:',
            speech:'ABC 호텔이요.'
          },
          {
            name:'출입국 관리인:',
            speech:'로스앤젤레스에 가본적 있으신가요?'
          },
          {
            name:'매트:',
            speech:'아니요, 이번이 처음입니다.'
          },
          {
            name:'출입국 관리인:',
            speech:'신고하실 물건이 있나요?'
          },
          {
            name:'매트:',
            speech:'아무것도 없어요.'
          },
          {
            name:'출입국 관리인:',
            speech:'즐거운 시간 보내세요.'
          },
          {
            name:'매트:',
            speech:'고마워요.'
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
  