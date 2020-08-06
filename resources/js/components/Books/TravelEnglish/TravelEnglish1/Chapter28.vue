<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://media.cntraveler.com/photos/5d72707dafaa3e00087d64dc/16:9/w_2560%2Cc_limit/Airport-Security_GettyImages-107077503.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">At the Airport, <i>Going Through Security</i>
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
            <i>metal detector</i>금속 탐지 장치, 금속[총기] 탐지기
          </p>
          <p>
            <i>conveyor belt</i>컨베이어 벨트
          </p>
          <p>
            <i>X-ray machine</i>X선 기기, 속도 측정 장치
          </p>
          <p>
            <i>Pocket</i>주머니, 포켓, 주머니[포켓], 주머니, 주머니 사정
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
              What would you do if the metal detector alarmed?
            </li>
            <li>
              Do you usually wear shoes when traveling?
            </li>
            <li>
              Do you think security checks take time?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              Okay, come on through.<br />
              Please step back<br />
              Please take off your shoes<br />
              Please empty your pockets<br />
              Boarding passes
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
            name:'Agent:',
            speech:'Please lay your bags flat on the conveyor belt, and use the bins for small objects.'
          },
          {
            name:'Matt:',
            speech:'Do I need to take my laptop out of the bag?'
          },
          {
            name:'Agent:',
            speech:'Yes, you do. Take off your hat and your shoes, too.'
          },
          {
            name:' ',
            speech:' '
          },
          {
            name:' ',
            speech:'(he walks through the metal detector)'
          },
          {
            name:' ',
            speech:'[BEEP BEEP BEEP BEEP]'
          },
          {
            name:'Agent:',
            speech:'Please step back. Do you have anything in your pockets – keys, cell phone, loose change?'
          },
          {
            name:'Matt:',
            speech:'I don’t think so. Let me try taking off my belt.'
          },
          {
            name:'Agent:',
            speech:'Okay, come on through.'
          },
          {
            name:' ',
            speech:' '
          },{
            name:' ',
            speech:'(he goes through the metal detector again)'
          },
          {
            name:'Agent:',
            speech:'You’re all set! Have a nice flight.'
          },
          ],
  
          translations:[
          {
            name:'요원:',
            speech:'가방을 컨베이어 벨트 위에 평평하게 놓고, 작은 물체는 통을 사용해 주세요.'
          },
          {
            name:'매트:',
            speech:'가방에서 노트북을 꺼내야 하나요?'
          },
          {
            name:'요원:',
            speech:'네, 그렇습니다. 모자와 신발도 벗으세요.'
          },
          {
            name:' ',
            speech:' '
          },
          {
            name:'' ,
            speech:'(그는 금속 탐지기를 통해 걸어갑니다)'
          },
          {
            name:' ',
            speech:'[삐삐삐삐삐삐삐삐삐삐삐삐삐삐삐삐삐삐삐삐삐]'
          },
          {
            name:'요원',
            speech:'물러서 주세요. 주머니 안에 열쇠, 휴대폰, 헐렁한 거스름돈 같은 것이 있습니까?'
          },
          {
            name:'매트:',
            speech:'그런것 같지 않은데요. 벨트를 풀어볼게요.'
          },
          {
            name:'요원',
            speech:'좋아요, 지나가세요.'
          },
          {
            name:' ',
            speech:' '
          },
          {
            name:' ',
            speech:'(그는 금속탐지기를 다시 통과합니다)'
          },
          {
            name:'요원',
            speech:'됐습니다! 즐거운 비행 되세요.'
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
  