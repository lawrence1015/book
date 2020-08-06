<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://www.elc.edu/assets/baggage-claim.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Baggage Claim
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
            <i>baggage claim</i>수하물 찾는 곳
          </p>
          <p>
            <i>itemized</i>항목별의
          </p>
          <p>
            <i>insurance</i>보험에 들다
          </p>
          <p>
            <i>description</i>설명
          </p>
          <p>
            <i>claim ticket</i>보관증
          </p>
          <p>
            <i>receipt</i>영수증
          </p>
          <p>
            <i>locate</i>의 정확한 위치를 찾아내다
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
                Where will you go if you have some trouble with your luggage?
            </li>
            <li>
                Do you also put a baggage name tag to your luggage when you travel?
            </li>
            <li>
                What actions do you think airlines should take if one of your bags does not arrive with your flight?
            </li>
            <li>
                Have you ever lost your luggage before?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
                My bag hasn’t arrived yet.<br />
                You’d better write one.<br />
                We’ll try to find it for you, sir.
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
            speech:'Excuse me. My bag hasn’t arrived yet.'
          },
          {
            name:'Airline Representative:',
            speech:'Which flight?'
          },
          {
            name:'Airline Representative:',
            speech:'Shinhwa Airlines from Seoul.'
          },
          {
            name:'Matt',
            speech:'RRA 438?'
          },
          {
            name:'Matt',
            speech:'Yes. Everyone else’s bags came off the baggage claim but not mine.'
          },
          {
            name:'Airline Representative:',
            speech:'UH huh. Did it have your name on it?'
          },
          {
            name:'Matt',
            speech:'It had my name, address, zip code and telephone number.'
          },
          {
            name:'Airline Representative:',
            speech:'We’ll try to find it for you, sir. Can you fill out this form? Description of the bag, flight number, the value of contents, etc.'
          },
          {
            name:'Matt',
            speech:'Oh. Yes.Thank you.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'실례합니다. 제 가방이 아직 도착하지 않았어요.'
          },
          {
            name:'항공사 직원:',
            speech:'어느 비행기입니까?'
          },
          {
            name:'매트:',
            speech:'서울에서 온 신화 항공입니다.'
          },
          {
            name:'항공사 직원:',
            speech:'RRA 438입니까?'
          },
          {
            name:'매트:',
            speech:'네.다른 모든 사람들의 가방은 수화물 찾는 곳에서 나왔지만 내 가방은 안 나왔어요.'
          },
          {
            name:'항공사 직원:',
            speech:'어, 그래요. 당신 이름이 적혀있었나요?'
          },
          {
            name:'매트:',
            speech:'제 이름, 주소, 우편번호, 전화번호가 적혀있습니다.'
          },
          {
            name:'항공사 직원:',
            speech:'고객님, 저희가 찾아 드리겠습니다. 이 양식을 작성해 주시겠어요? 가방, 항공편 번호, 내용물 가치 등에 대한 설명입니다.'
          },
          {
            name:'매트:',
            speech:'아, 그래요.감사합니다.'
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
  