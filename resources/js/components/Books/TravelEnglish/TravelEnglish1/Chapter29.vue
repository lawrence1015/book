<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://www.travelsignposts.com/Netherlands/files/2012/09/IMG_1791.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">At the Airport, <i>Tax Refund</i>
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
            <i>claim a refund</i>전액 환불을 요구하다
          </p>
          <p>
            <i>voucher</i>상품권
          </p>
          <p>
            <i>cancel</i>해지,해약
          </p>
          <p>
            <i>entitled</i>등기권리를가진
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
              Have you ever been able to get a refund?
            </li>
            <li>
              What will you do if they refuse to give you a refund?
            </li>
            <li>
              What do we need in order to get a refund?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              Just a moment<br />
              Can I have a refund for my ticket?<br />
              Can I see your ticket?<br />
              You are entitled to a full refund<br />
              Is it OK if we pay you by voucher?<br />
              Can I just have it in cash?
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
            speech:'Can I have a refund for my ticket?'
          },
          {
            name:'Tax Agent:',
            speech:'Just a moment I will check it in our system.'
          },
          {
            name:'Matt:',
            speech:'The Airline canceled my original flight.'
          },
          {
            name:'Tax Agent:',
            speech:'Can I see your ticket?'
          },
          {
            name:'Matt:',
            speech:'Here it is.'
          },
          {
            name:'Tax Agent:',
            speech:'Since the airline canceled your flight you are entitled to a full refund. Is it OK if we pay you by voucher?'
          },
          {
            name:'Matt:',
            speech:'I’m sorry but it will be hard for me. Can I just have it in cash?'
          },
          {
            name:'Tax Agent:',
            speech:'I will try my best to process it now. Thank you.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'제 표를 환불받을 수 있을까요?'
          },
          {
            name:'세무사:',
            speech:'잠시만요. 저희 시스템에서 확인해 보겠습니다.'
          },
          {
            name:'매트:',
            speech:'잠시만요. 저희 시스템에서 확인해 보겠습니다.'
          },
          {
            name:'세무사:',
            speech:'티켓 좀 보여주시겠어요?'
          },
          {
            name:'매트:',
            speech:'여기 있습니다.'
          },
          {
            name:'세무사:',
            speech:'항공사에서 항공편을 취소했으므로 전액 환불받을 수 있습니다. 바우처로 드려도 괜찮을까요?'
          },
          {
            name:'매트:',
            speech:'죄송하지만, 힘들 것 같아요. 그냥 현금으로 가능할까요?'
          },
          {
            name:'세무사:',
            speech:'지금 처리하도록 최선을 다하겠습니다. 감사합니다.'
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
  