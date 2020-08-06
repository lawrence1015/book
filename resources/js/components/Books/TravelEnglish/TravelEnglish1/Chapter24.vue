<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/flights-information-board-airport_447-19326860.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">In an Emergency 1
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
            <i>connecting</i>이음, 접속, 연결하는.
          </p>
          <p>
            <i>flights</i>플라이츠
          </p>
          <p>
            <i>cover</i>씌우다[가리다], 덮다, 바르다[뒤덮다], 다루다; 포함시키다
          </p>
          <p>
            <i>fault</i>잘못, 책임, 단점, 결점, 결함, 흠; 고장, 폴트, 서브 실수
          </p>
          <p>
            <i>delay</i>지연, 지체, 미룸, 연기, 미루다, 연기하다
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
              What do you usually do when you miss your flight?
            </li>
            <li>
              Have you ever experienced this kind of situation?
            </li>
            <li>
              Do you like connecting flights? Why?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              I need to know what to do.<br />
              Do I have to call anyone?<br />
              What if I can't find another flight out of here tonight?<br />
              Will the airline pay for my room
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
            speech:'My flight just arrived late, and I need to know what to do.'
          },
          {
            name:'Airline Staff:',
            speech:'That’s okay.'
          },
          {
            name:'Matt:',
            speech:'Do I have to call anyone?'
          },
          {
            name:'Airline Staff:',
            speech:'We can fix this Sir.'
          },
          {
            name:'Matt:',
            speech:'What if there are no more connecting flights?'
          },
          {
            name:'Airline Staff:',
            speech:'We will check it on our computer.'
          },
          {
            name:'Matt:',
            speech:'What if I can`t find another flight out of here tonight?'
          },
          {
            name:'Airline Staff:',
            speech:'We can help you find transportation to a local hotel.'
          },
          {
            name:'Matt:',
            speech:'Will the airline pay for my room if I have to spend the night at the airport?'
          },
          {
            name:'Airline Staff:',
            speech:'Since the flight delay was our fault and you are with our airline, we will cover the cost of a hotel room.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'제 비행기가 막 늦게 도착했는데, 제가 어떻게 해야 할지 알아야겠어요.'
          },
          {
            name:'항공사 직원:',
            speech:'괜찮아요.'
          },
          {
            name:'매트:',
            speech:'누구한테 전화해야 하나요?'
          },
          {
            name:'항공사 직원:',
            speech:'우리가 조정할 수 있습니다'
          },
          {
            name:'매트:',
            speech:'더 이상 연결 항공편이 없다면요?'
          },
          {
            name:'항공사 직원:',
            speech:'컴퓨터로 확인해 보겠습니다.'
          },
          {
            name:'매트:',
            speech:'오늘 밤 여기서 나가는 다른 비행기를 못 찾으면 어떡하죠?'
          },
          {
            name:'항공사 직원:',
            speech:'지역 호텔까지의 교통편을 알아봐 드릴 수 있습니다.'
          },
          {
            name:'매트:',
            speech:'공항에서 밤을 보내야 한다면 항공사가 내 방을 지불할까요?'
          },
          {
            name:'항공사 직원:',
            speech:'비행기 연착은 저희 잘못이고 저희 항공사에 계셨기 때문에 호텔 객실 비용은 저희가 부담하겠습니다'
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
  