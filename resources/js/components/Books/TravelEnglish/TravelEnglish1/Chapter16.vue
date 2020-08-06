<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://i.ytimg.com/vi/tvDH4JM_gME/maxresdefault.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Tourist Books
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
            <i>assistance</i>도움, 원조, 지원
          </p>
          <p>
            <i>history</i>역사
          </p>
          <p>
            <i>town</i>(도시보다 작은) 도시, 읍, 도시[읍] 주민들, 시내, 번화가
          </p>
          <p>
            <i>Perhaps</i>아마, 어쩌면, 아마, 아마도
          </p>
          <p>
            <i>recommend</i>추천[천거]하다, 권고[권장]하다[권하다]
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
                Where did Matt go?
            </li>
            <li>
                Is it Matt’s first time in Los Angeles?
            </li>
            <li>
                How long will Matt stay in Los Angeles?
            </li>
            <li>
                What is the first thing that the immigration officer will ask you at the immigration counter?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              Welcome! How can I be of assistance? <br />
              Okay, go ahead<br />
              I'd like to learn more about the history of this town<br />
              That sounds great.
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
            name:'Clerk:',
            speech:'Welcome! How can I be of assistance?'
          },
          {
            name:'Matt:',
            speech:'Hello! I have a few questions.'
          },
          {
            name:'Clerk:',
            speech:'Okay, go ahead.'
          },
          {
            name:'Matt:',
            speech:'Do you have any pamphlets perhaps, or some books to recommend?'
          },
          {
            name:'Clerk:',
            speech:'Well... We have a few interesting tour books here!'
          },
          {
            name:'Matt:',
            speech:'That sounds great. Do you have these in Korean?'
          },
          {
            name:'Clerk:',
            speech:'Yes! Here you go!'
          },
          {
            name:'Matt:',
            speech:'Yes! Here you go!'
          },
          ],
  
          translations:[
          {
            name:'점원:',
            speech:'환영합니다! 어떻게 도와드릴까요?'
          },
          {
            name:'매트:',
            speech:'안녕하세요! 궁금한 것이 몇 가지 있어요'
          },
          {
            name:'점원:',
            speech:'네, 말씀하세요'
          },
          {
            name:'매트:',
            speech:'혹시 팜플렛이나 추천할 만한 책이 있나요?'
          },
          {
            name:'점원:',
            speech:'글쎄요... 여기 재미있는 여행 책이 몇 권 있어요!'
          },
          {
            name:'매트:',
            speech:'좋네요.이것들이 한국어로 되어 있나요?'
          },
          {
            name:'점원:',
            speech:'네! 여기 있습니다!'
          },
          {
            name:'매트:',
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
  