<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/indoor-swimming-pool-modern-equipped_23-2148326874.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Swimming Pool
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
            <i>full-size</i>일반 치수의, 축소하지 않은
          </p>
          <p>
            <i>individual</i>각각[개개]의, 개인의; 1인용[분]의,
          </p>
          <p>
            <i>swimming pool</i>수영장, 수영장
          </p>
          <p>
            <i>treadmill</i>다람쥐 쳇바퀴 같은 일[생활],
          </p>
          <p>
            <i>conserve electricity</i>전기를 절약하다
          </p>
          <p>
            <i>free access</i>프리 엑세스
          </p>`
         
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
              Do you also like to swim in the swimming pool at the hotel?
            </li>
            <li>
              What time do you usually prefer to swim day time or night time?
            </li>
            <li>
              Do you like public swimming pools or individual swim stations?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              What exactly does that mean?<br />
              I'll go down there as soon as I can!<br />
              I'll go down there as soon as I can!<br />
              Are the swim stations open 24 hours,
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
            speech:'Is there a swimming station in this hotel?'
          },
          {
            name:'H.Staff:',
            speech:'Yes we have a swimming pool area on the fifth floor.'
          },
          {
            name:'Matt:',
            speech:'That sounds great. Is there an extra charge for these swim stations?'
          },
          {
            name:'H.Staff:',
            speech:'If you’re a registered guest, you have free access to our swim stations.'
          },
          {
            name:'Matt:',
            speech:'Are the swim stations open 24 hours?'
          },
          {
            name:'H.Staff:',
            speech:'To conserve electricity, the stations operate only from 7:00 a.m. till 10:00 p.m.'
          },
          {
            name:'Matt:',
            speech:'I’ll go down there as soon as I can!'
          },
          {
            name:'H.Staff:',
            speech:'Enjoy your day, Sir.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'이 호텔에 수영장이 있나요?'
          },
          {
            name:'호텔 직원 :',
            speech:' 네, 5층에 수영장 공간이 있습니다.'
          },
          {
            name:'매트:',
            speech:'정말 좋네요. 이 수영장들은 추가 요금이 있나요?'
          },
          {
            name:'호텔 직원 :',
            speech:'투숙객이라면 저희 수영장까지 무료로 이용하실 수 있습니다.'
          },
          {
            name:'매트:',
            speech:'수영장은 24시간 운영하나요?'
          },
          {
            name:'호텔 직원 :',
            speech:'전기를 절약하기 위해, 오전 7시부터 밤 10시까지만 운행됩니다.'
          },
          {
            name:'매트:',
            speech:' 가능한 한 빨리 내려가겠습니다!'
          },
          {
            name:'호텔 직원 :',
            speech:'즐거운 하루 되세요.'
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
  