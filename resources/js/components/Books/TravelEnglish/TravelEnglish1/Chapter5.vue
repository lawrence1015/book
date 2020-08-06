<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://i.dailymail.co.uk/i/pix/2016/12/21/10/3B8ECA7800000578-0-image-a-6_1482316492220.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">At The Airport
        </h1>
      </v-layout>
    </v-img>
  
  
    <hr style="border: 3px solid rgba(119, 216, 216, 1);" width="100%">
    <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue</h3>
    <hr width="60%">
    <div style = "padding : 16px;">
  
        <p>
            Matt was waiting for his time going to Immigration Counter at the Airport when an American stranger standing next to him started to make small talk.
        </p>
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
            <i>small talk</i>한담
          </p>
          <p>
            <i>stranger</i>낯선[모르는] 사람, 처음 온 사람
          </p>
          <p>
            <i>first time</i>첫번, 처음에는
          </p>
          <p>
            <i>quite</i>꽤, 상당히, 지극히
          </p>
          <p>
            <i>long time</i>오래.
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
                What is your idea about small talk?
            </li>
            <li>
                Do you also like to have a small talk with strangers?
            </li>
            <li>
                Why do you think the stranger started a small talk with Matt?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
                Yeah, it’s my first time here. <br />
                How long have you been waiting here?<br />
                standing here for quite a long time<br />
                By the way, where do you come from?
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
  
                <p>
                    매트는 공항 입국 심사대에 가는 시간을 기다리고 있었는데 옆에 서 있던 미국인 낯선 사람이 이야기를 하기 시작했습니다.
                </p>
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
            name:'Stranger:',
            speech:'How long have you been waiting here?'
          },
          {
            name:'Matt',
            speech:'What?'
          },
          {
            name:'Stranger:',
            speech:'I notice that you’re standing here for quite a long time already.'
          },
          {
            name:'Matt',
            speech:'Yeah. That’s true. I’m going to the Immigration Counter.'
          },
          {
            name:'Stranger:',
            speech:'Is it your first time here in Los Angeles? By the way, where do you come from?'
          },
          {
            name:'Matt',
            speech:'Yeah, it’s my first time here. I came from South Korea.'
          },
          {
            name:'Stranger:',
            speech:'Wow! Really?  You see that man on the right side? You can go next to him. Welcome to Los Angeles.'
          },
          {
            name:'Matt',
            speech:'Thank you so much.'
          },
          ],
  
          translations:[
          {
            name:'낯선 사람:',
            speech:'여기서 얼마나 기다렸어요?'
          },
          {
            name:'매트:',
            speech:'네?'
          },
          {
            name:'낯선 사람:',
            speech:'꽤 오래 서 계시는 거 같아서요.'
          },
          {
            name:'매트:',
            speech:'그래요. 맞아요. 출입국 관리소에 갈 거예요.'
          },
          {
            name:'낯선 사람:',
            speech:'여기 LA는 처음이신가요? 그런데 당신은 어디서 왔나요?'
          },
          {
            name:'매트:',
            speech:'네, 여기 처음 왔어요. 저는 한국에서 왔습니다.'
          },
          {
            name:'낯선 사람:',
            speech:'와우! 정말요? 오른쪽에 있는 저 남자 보이세요? 그 사람 옆에 가시면 돼요. 로스앤젤레스에 오신 것을 환영합니다.'
          },
          {
            name:'매트:',
            speech:'정말 감사합니다.'
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
  