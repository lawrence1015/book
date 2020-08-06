<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/arabic-teapot-with-cups-beads-table_23-2148074834.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Shopping 2
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
            <i>duty-free shop</i>면세점
          </p>
          <p>
            <i>Liquor</i>독한 술, 독주, 술
          </p>
          <p>
            <i>Wrapwrap</i>싸다, 포장하다, 싸다[둘러싸
          </p>
          <p>
            <i>Ribbon</i>리본, 끈[띠], 띠 같은 것, 리본], 두르다
          </p>
          <p>
            <i>traveler's check</i> 여행자 수표
          </p>
          <p>
            <i>Souvenir</i>기념품[선물]
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
              Do you usually buy souvenirs during your trip or just before you go back home?
            </li>
            <li>
              What is your opinion about spending a lot of money on souvenirs?
            </li>
            <li>
              Have you ever used a traveler’s check? If so, where and why did you use it?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              Could you wrap them separately? <br />
              Will you pay in cash or by credit card?<br />
              Could you put your signature here?<br />
              Do you want me to wrap it?<br />
              Do you want me to wrap it?
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
            speech:'Excuse me, I’d like to buy this one.'
          },
          {
            name:'Clerk:',
            speech:'Very well, sir.'
          },
          {
            name:'Matt:',
            speech:'Could you wrap them separately if possible?'
          },
          {
            name:'Clerk:',
            speech:'Sure, no problem. Will you pay in cash or by credit card?'
          },
          {
            name:'Matt:',
            speech:'Do you accept international credit cards?'
          },
          {
            name:'Clerk:',
            speech:'Of course. Could you put your signature here?'
          },
          {
            name:'Matt:',
            speech:'Alright.'
          },
          {
            name:'Clerk:',
            speech:'Thank you. Would you like to pay in Korean won or dollars? You can choose.'
          },
          {
            name:'Matt:',
            speech:'In that case, I’d like to pay in won, please.'
          },
          {
            name:'Clerk:',
            speech:'Here you are. Thank you for shopping with us, and have a safe trip!'
          },
          {
            name:'Matt:',
            speech:'Thanks.'
          },
          
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'실례하겠습니다. 이걸 사고 싶어서요.'
          },
          {
            name:'점원:',
            speech:'알겠습니다.'
          },
          {
            name:'매트:',
            speech:'가능하면 따로 포장해 주시겠어요?'
          },
          {
            name:'점원:',
            speech:'그럼요, 문제없습니다. 결제는 현금으로 하시겠어요, 카드로 하시겠어요?'
          },
          {
            name:'매트:',
            speech:'국제 신용카드를 받나요?'
          },
          {
            name:'점원:',
            speech:'물론이죠. 여기에 서명해 주시겠어요?'
          },
          {
            name:'매트:',
            speech:'좋아요.'
          },
          {
            name:'점원:',
            speech:'감사합니다. 원화로 하시겠어요, 달러로 하시겠어요? 선택할 수 있습니다.'
          },
          {
            name:'매트:',
            speech:'그렇다면, 원화로 지불하고 싶습니다.'
          },
          {
            name:'점원:',
            speech:'여기 있습니다. 저희와 함께 쇼핑해주셔서 감사하고, 안전한 여행 되세요!'
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
  