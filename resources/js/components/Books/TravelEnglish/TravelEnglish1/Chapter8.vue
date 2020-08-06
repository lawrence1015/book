<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/hands-holding-banknotes_176474-7111.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Exchange
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
            <i>Money Exchange</i>여행경비의 환전을 말한다.
          </p>
          <p>
            <i>exchange rate</i>[the ~] 외환 시세; 환율
          </p>
          <p>
            <i>small change</i>잔돈, 하찮은 것
          </p>
          <p>
            <i>receipt</i>영수증, 받기, 수령, 인수, 수령액
          </p>
          <p>
            <i>currency</i>통화, 통용
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
              Do you usually exchange money before going on a trip, or after you arrive at the destination?
            </li>
            <li>
              Are you ever worried about big fees and unfair exchange rates when you are traveling? Why? Why not?
            </li>
            <li>
              Are you sometimes confused when using foreign currency?
            </li>
            <li>
              Do you use cash or credit cards more often when traveling? Why?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              Where can I exchange my money? <br />
              Can I see the exchange rate?<br />
              Could you include some small changes?<br />
              Can I have a receipt?
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
            speech:'Hello. I’d like to exchange my money to US dollars.'
          },
          {
            name:'Clerk:',
            speech:'Certainly. What currency are you exchanging?'
          },
          {
            name:'Matt',
            speech:'Korean won. Can I see the exchange rate?'
          },
          {
            name:'Clerk:',
            speech:'Sure, you can find it here. How much would you like to exchange?'
          },
          {
            name:'Matt',
            speech:'₩500,000, all in US  dollars. Could you include some small changes as well?'
          },
          {
            name:'Clerk:',
            speech:'Sure. That’ll be $418.11. Here you are.'
          },
          {
            name:'Matt',
            speech:'Thanks. Can I have a receipt, too?'
          },
          {
            name:'Clerk:',
            speech:'Here’s the receipt. Thank you very much!'
          },
          
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'안녕하세요. 미국 달러로 환전하고 싶어요.'
          },
          {
            name:'점원:',
            speech:'물론이죠. 어떤 화폐를 환전하려고 하십니까?'
          },
          {
            name:'매트:',
            speech:'한국 원입니다. 환율을 볼 수 있을까요?'
          },
          {
            name:'점원:',
            speech:'그럼요, 여기서 찾으실 수 있습니다. 얼마를 환전해 드릴까요?'
          },
          {
            name:'매트:',
            speech:'50만원이요, 모두 미국 달러로요. 잔돈도 좀 포함시켜 주시겠어요?'
          },
          {
            name:'점원:',
            speech:'그럼요. 418.11달러입니다. 여기 있습니다.'
          },
          {
            name:'매트:',
            speech:'고마워요. 영수증도 주시겠어요?'
          },
          {
            name:'점원:',
            speech:'영수증 여기 있습니다. 정말 감사합니다!'
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
  