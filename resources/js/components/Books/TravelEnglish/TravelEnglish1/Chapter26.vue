<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/credit-card-payment-buy-sell-products-service_1150-16379.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">At a Hotel, <i>Check-out</i>
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
            <i>Checkout</i>계산대, 체크아웃
          </p>
          <p>
            <i>credit card</i>신용 카드
          </p>
          <p>
            <i>Valid</i>유효한[정당한], 타당한[근거 있는], 유효한
          </p>
          <p>
            <i>Expired</i>만료된, 기한이 지난
          </p>
          <p>
            <i>Check</i>check 살피다[점검하다], 알아보다[확인하다], 억제[저지]하다
          </p>
          <p>
            <i>Guarantee</i>굳은 약속, 확약, 품질 보증서, 보장, 담보, 보장[약속]하다
          </p>
          
          <p>
            <i>MasterCard</i>마스터카드
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
              Do you usually pay in cash or check?
            </li>
            <li>
              What do you think are the common problems in checking out?
            </li>
            <li>
              Is it convenient to use a credit card when traveling?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              Can I check out now, please? <br />
              Are you paying by credit card?<br />
              Can I write a check instead?<br />
              But I'm afraid this card is no longer valid.<br />
              It expired last month.
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
            speech:'Can I check out now, please?'
          },
          {
            name:'Clerk:',
            speech:'Certainly, sir. Here’s the bill. Are you paying by credit card?'
          },
          {
            name:'Matt:',
            speech:'Yes, by Master. Here you are.'
          },
          {
            name:'Clerk:',
            speech:'Thank you, sir. But I’m afraid this card is no longer valid. It expired last month.'
          },
          {
            name:'Matt:',
            speech:'Oh dear. Can I write a check instead?'
          },
          {
            name:'Clerk:',
            speech:'Yes sir. We can accept a personal check if you have a check guarantee card. Or if you’d like to wait a moment, we’ll clear it with your bank.'
          },
          {
            name:'Matt:',
            speech:'Actually that won’t be necessary. Here’s my new Mastercard.'
          },
          {
            name:'Clerk:',
            speech:'Oh well, that’s fine, sir.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'지금 체크아웃해도 될까요?'
          },
          {
            name:'점원:',
            speech:'그럼요, 손님. 계산서 여기 있습니다. 카드로 계산하시는 건가요?'
          },
          {
            name:'매트:',
            speech:'네, 여기 있습니다.'
          },
          {
            name:'점원:',
            speech:'감사합니다. 하지만 유감스럽게도 이 카드는 더 이상 유효하지 않습니다. 그것은 지난달에 만료되었습니다.'
          },
          {
            name:'매트:',
            speech:'오 이런. 대신 수표를 써도 될까요?'
          },
          {
            name:'점원:',
            speech:'네, 선생님. 수표 보증 카드가 있으시면 개인 수표를 받아드릴 수 있습니다. 아니면 잠시만 기다리시겠다면 은행과 함께 처리해 드리겠습니다.'
          },
          {
            name:'매트:',
            speech:'사실 그럴 필요는 없을 거예요. 제 새 마스터카드 여기 있습니다.'
          },
          {
            name:'점원:',
            speech:'아, 알겠습니다.'
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
  