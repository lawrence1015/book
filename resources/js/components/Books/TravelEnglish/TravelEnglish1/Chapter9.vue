<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://sx-content-labs.sixt.io/_processed_/2/2/csm_airport-transfer_1_86c6f1c624.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Going to the Hotel
        </h1>
      </v-layout>
    </v-img>
  
  
    <hr style="border: 3px solid rgba(119, 216, 216, 1);" width="100%">
    <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue</h3>
    <hr width="60%">
    <div style = "padding : 16px;">
  
      <table style = "border-collapse: collapse;">
      
        <tr v-for="dialog in dialogs" :key ="dialog" >
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
            <i>pick-up</i>픽업
          </p>
          <p>
            <i>taxi stand</i>택시 승차장
          </p>
          <p>
            <i>nearby</i>인근의, 가까운 곳의, 인근에, 가까운 곳에차장
          </p>
          <p>
            <i>arrival</i>도착, 도착한 사람[것], 도래, 도입
          </p>
          <p>
            <i>avail</i>도움이 되다, 소용에 닿다
          </p>
          <p>
            <i>personal service</i>[법] 교부 송달; 개인적 노무 제공
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
              According to the transport agent, how much does it cost if Ryan will get their fare package?
            </li>
            <li>
              Is Ryan in a hurry to get into the hotel?
            </li>
            <li>
              Do you already reserve a pick-up service before your flight or do you find some taxi right after you arrive?
            </li>
            <li>
              Do you think the fare cost is much more expensive if Ryan will avail the service?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              How long will/would it take to get there?<br />
              How much do I owe you?<br />
              (You may) Keep the change.<br />
              Do you have any idea on how long does it take to get to
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
  
                <tr v-for="translation in translations" :key ="translation">
                  <td class = "uppertable" >{{translation.name}}</td>
                  <td class = "lowertable" >{{translation.speech}}</td>
                </tr>
        
              </table>
  
  
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
            name:'Transport Agent:',
            speech:'Is there someone who will pick you up, Sir?'
          },
          {
            name:'Matt',
            speech:'Actually, No one. Is there any bus stop or taxi stand nearby?'
          },
          {
            name:'Transport Agent:',
            speech:'We can offer you a personal service if you want to?'
          },
          {
            name:'Matt',
            speech:'No, It’s OK. I just need to know where the taxi stand is.'
          },
          {
            name:'Transport Agent:',
            speech:'Outside the arrival gate on the right side you can see a Taxi stand in there.'
          },
          {
            name:'Matt',
            speech:'Do you have any idea how long it takes to get to the Millennium Biltmore Hotel?'
          },
          {
            name:'Transport Agent:',
            speech:'I’m sorry Sir but only the taxi driver can answer your question.'
          },
          {
            name:'Matt',
            speech:'I’ll just find a taxi because I’m not really in a hurry. Thank you.'
          },
          {
            name:'Transport Agent:',
            speech:'Thank you too, Sir.'
          },
          ],
  
          translations:[
          {
            name:'운송업자:',
            speech:'손님 ,데리러 올 사람이 있으신가요?'
          },
          {
            name:'매트:',
            speech:'사실, 아무도 없습니다. 근처에 버스 정류장이나 택시 정류장이 있나요?'
          },
          {
            name:'운송업자:',
            speech:'원하신다면 개인 서비스를 제공해 드릴 수 있습니다.'
          },
          {
            name:'매트:',
            speech:'아니요, 괜찮아요. 택시 승강장이 어디 있는지 알고 싶어요.'
          },
          {
            name:'운송업자:',
            speech:'오른쪽 입국장 밖에는 택시 승강장이 있습니다.'
          },
          {
            name:'매트:',
            speech:'밀레니엄 빌트모어 호텔까지 얼마나 걸리는지 아세요?'
          },
          {
            name:'운송업자:',
            speech:'죄송합니다 손님,  택시 기사님만 질문에 대답할 수 있습니다.'
          },
          {
            name:'매트:',
            speech:'별로 급하지 않으니까 그냥 택시나 찾아볼게요. 감사합니다.'
          },
          {
            name:'운송업자:',
            speech:'감사합니다.'
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
  
  
  body{
  
    font-size: 16px;
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
  