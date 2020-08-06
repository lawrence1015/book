<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://prolinkedmag.com/wp-content/uploads/2016/05/How-To-Become-A-Good-Passenger-On-Flight.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">In-flight Service
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
            <i>seat pocket</i>좌석 포켓
          </p>
          <p>
            <i>nearest exit</i>가장 가까운 출구
          </p>
          <p>
            <i>life jacket</i>구명조끼
          </p>
          <p>
            <i>seat cushion</i>좌석 쿠션
          </p>
          <p>
            <i>flotation device</i>부양 장치
          </p>
          <p>
            <i>Ease</i>쉬움, 용이함, 편의성, 편안함
          </p>
          <p>
            <i>Trouble</i>애, 문제, 곤란, 골칫거리, 병, 통증, 문제[고장]
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
                Where can we find a life jacket?
            </li>
            <li>
                What is the purpose of the seat cushion?
            </li>
            <li>
                How can we find the nearest exit?
            </li>
            <li>
                What do you need to do if you want to be safe?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
                You ease my trouble<br />
                I would love to help clarify any questions you might have.<br />
                Always make sure that your seatbelt is fastened
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
            name:'Passenger:',
            speech:'Can I ask you some questions about the in-flight instructions?'
          },
          {
            name:'Stewardess',
            speech:'I would love to help clarify any questions you might have.'
          },
          {
            name:'Passenger:',
            speech:'Could you help me find out where my nearest exit is?'
          },
          {
            name:'Stewardess',
            speech:'There is a card in your seat pocket that shows you where your nearest exit is. Yours is two rows in front of you.'
          },
          {
            name:'Passenger:',
            speech:'Do we have any life jackets on this plane if we need them?'
          },
          {
            name:'Stewardess',
            speech:'You will find your life jacket under your seat if you need it. Also, you have a seat cushion that can be used as a flotation device.'
          },
          {
            name:'Passenger:',
            speech:'If I want to be safe, what can I do?'
          },
          {
            name:'Stewardess',
            speech:'Always make sure that your seatbelt is fastened when you are requested to fasten it.'
          },
          {
            name:'Passenger:',
            speech:'Thank you so much. You ease my trouble.'
          },
          ],
  
          translations:[
          {
            name:'승객:',
            speech:'기내 지시사항에 대해 몇 가지 물어봐도 될까요?'
          },
          {
            name:'스튜어디스:',
            speech:'저는 어떤 질문이라도 분명히 하는 것을 돕고 싶습니다.'
          },
          {
            name:'승객:',
            speech:'가장 가까운 출구가 어디 있는지 알아봐 주시겠습니까?'
          },
          {
            name:'스튜어디스:',
            speech:'좌석 주머니에 가장 가까운 출구가 어디에 있는지 알려주는 카드가 있습니다. 가장 가까운 출구는 두줄 앞에 있습니다.'
          },
          {
            name:'승객:',
            speech:'이 비행기에 구명조끼가 있나요?'
          },
          {
            name:'스튜어디스:',
            speech:'필요하면 좌석 아래에서 구명조끼를 찾을 수 있습니다. 또한, 부양 장치로 사용할 수 있는 좌석 쿠션이 있습니다.'
          },
          {
            name:'승객:',
            speech:'만약 제가 안전하기를 원한다면, 저는 무엇을 할 수 있을까요?'
          },
          {
            name:'스튜어디스:',
            speech:'안전 벨트를 착용하라는 요청이 있을 때는 항상 안전 벨트가 채워져 있는지 확인해주십시오.'
          },
          {
            name:'승객:',
            speech:'정말 고마워요. 당신은 저를 안심시켜줍니다.'
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
  