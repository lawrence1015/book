<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/girl-turns-off-alarm-clock-waking-up-morning-from-call_1421-505.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Wake Up Call
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
            <i>wake up call</i>(전화교환)지정 시간 호출
          </p>
          <p>
            <i>request </i>요청[신청], 요구[신청], 요청[요구/신청]하다
          </p>
          <p>
            <i>latter</i>후자의; 마지막의, 후반의[끝 무렵의], 후자; 마지막
          </p>
          <p>
            <i>certainly</i>틀림없이, 분명히, 그럼요, 물론이지요
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
              Why do you think some guests request a wake-up call?
            </li>
            <li>
              They need to make a wake-up call at what time?
            </li>
            <li>
              Do you also request a wake-up call in a hotel?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              I'll be sure to call again.<br />
              I need to request a wake-up call<br />
              We can certainly do that.
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
            speech:'I need to request a wake-up call for tomorrow morning.'
          },
          {
            name:'Receptionist:',
            speech:'What time do you want the call?'
          },
          {
            name:'Matt:',
            speech:'I need two calls, one at 7 and another at 7:15.'
          },
          {
            name:'Receptionist:',
            speech:'We can certainly do that. Expect a call from us at 7:00, and then again at 7:15.'
          },
          {
            name:'Matt:',
            speech:'Actually, can I change the latter wake-up call to 7:30 am?'
          },
          {
            name:'Receptionist:',
            speech:'I can certainly do that. Is there anything else?'
          },
          {
            name:'Matt:',
            speech:'I can’t think of anything. If I do think of something, I’ll be sure to call again.'
          },
          {
            name:'Receptionist:',
            speech:'Okay. Good night, sir.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'내일 아침에 모닝콜을 신청이 필요합니다.'
          },
          {
            name:'접수 담당자:',
            speech:'몇 시에 전화 드릴까요?'
          },
          {
            name:'매트:',
            speech:'한 통은 7시에, 또 다른 통화는 7시 15분에 두 통이 필요해요.'
          },
          {
            name:'접수 담당자:',
            speech:'우리는 확실히 그렇게 할 수 있습니다. 7시에 전화하고 7시 15분에 다시 전화 드리겠습니다.'
          },
          {
            name:'매트:',
            speech:'후자의 모닝콜을 오전 7시 30분으로 바꿀 수 있을까요?'
          },
          {
            name:'접수 담당자:',
            speech:'그렇게 할 수 있습니다. 다른 건 없으신가요?'
          },
          {
            name:'매트:',
            speech:'아무것도 생각나지 않네요. 뭔가 생각나면 꼭 다시 전화할게요.로스앤젤레스에 온 걸 환영합니다. 여권 좀 볼 수 있을까요?'
          },
          {
            name:'접수 담당자:',
            speech:'네, 안녕히 주무세요'
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
  