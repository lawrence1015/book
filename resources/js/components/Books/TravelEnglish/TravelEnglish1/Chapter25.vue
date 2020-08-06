<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://photos.wikimapia.org/p/00/00/29/02/34_big.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">In an Emergency 2
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
            <i>Pickpocket</i>소매치기
          </p>
          <p>
            <i>Passport</i>여권, 열쇠
          </p>
          <p>
            <i>Stolen</i>STEAL의 과거분사, 훔친, 은밀한
          </p>
          <p>
            <i>Embassy</i>대사관, 대사관
          </p>
          <p>
            <i>Temporary</i>일시적인, 임시의
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
              Have you ever lost your passport during your trip?
            </li>
            <li>
              Do you also ask for the emergency number of the country you visit?
            </li>
            <li>
              If you will experience an emergency situation like this what will you do?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              I’m sure a pickpocket took it.<br />
              How can I get to the embassy?<br />
              You need to take a cab to the embassy to report that right away.<br />
              to apply for a temporary passport.
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
            speech:'I think I lost my wallet and passport.I’m sure a pickpocket took it.'
          },
          {
            name:'Man:',
            speech:'If your passport has been stolen, you need to go to the U.S. embassy.'
          },
          {
            name:'Matt:',
            speech:'How can I get to the embassy?'
          },
          {
            name:'Man:',
            speech:'You need to take a cab to the embassy to report that right away. They will help you.'
          },
          {
            name:'Matt',
            speech:'I think I need to apply for a temporary passport.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'지갑과 여권을 잃어버린 것 같아요.소매치기가 가져갔을 거예요.'
          },
          {
            name:'남자:',
            speech:'여권을 도난 당했다면, 미국 대사관에 가야 해요.'
          },
          {
            name:'매트:',
            speech:'대사관에 가려면 어떻게 해야 하나요?'
          },
          {
            name:'남자:',
            speech:'바로 신고하려면 택시를 타고 대사관에 가셔야 합니다. 그들은 당신을 도울 것입니다.'
          },
          {
            name:'매트:',
            speech:'임시 여권을 신청해야 할 것 같아요.'
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
  