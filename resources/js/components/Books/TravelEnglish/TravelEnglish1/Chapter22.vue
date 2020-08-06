<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/vintage-leather-briefcase-blue_155003-735.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Shopping 1
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
            <i>Bargain</i>싸게 사는 물건, 합의, 흥정, 협상[흥정]하다
          </p>
          <p>
            <i>Discount</i>할인, 치부하다, 무시하다, 할인하다, 할인해서 팔다
          </p>
          <p>
            <i>Quality</i>질, 우수함, 고급, 양질, 자질, 특성, 특징, 고급[양질]의
          </p>
          <p>
            <i>designer's character brand (DC) </i>브랜드
          </p>
          <p>
            <i>Deal</i>돌리다[나누다], 마약을 거래하다, 많은; 많이, 거래, 합의
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
              Do you also ask for a discount when you go shopping?
            </li>
            <li>
              How much do you spend on buying gifts?
            </li>
            <li>
              Are you good at bargaining?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              Okay, okay. You've got a deal.<br />
              I don't know. I think I'll shop around.<br />
              It's a bargain at that price.<br />
              Can I have a discount?
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
            speech:'How much is this?'
          },
          {
            name:'Man:',
            speech:'That’s $30.'
          },
          {
            name:'Matt:',
            speech:'Can I have a discount?'
          },
          {
            name:'Man:',
            speech:'This is a designer’s bag and it’s good quality. It’s a bargain at that price.'
          },
          {
            name:'Matt:',
            speech:'Is that your best offer?'
          },
          {
            name:'Man:',
            speech:'That’s the best I can '
          },
          {
            name:'Matt:',
            speech:'Well, I don’t know. I think I’ll shop around.'
          },
          {
            name:'Man:',
            speech:'Okay, how about $28.'
          },
          {
            name:'Matt:',
            speech:'Okay.'
          },
          {
            name:'Man:',
            speech:'Okay, okay. You’ve got a deal.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'이건 얼마예요?'
          },
          {
            name:'남자:',
            speech:'30달러입니다.'
          },
          {
            name:'매트:',
            speech:'할인을 받을 수 있을까요?'
          },
          {
            name:'남자:',
            speech:'이건 명품 가방이고 품질도 좋아요. 그 가격이면 싼 거에요.'
          },
          {
            name:'매트:',
            speech:'그게 가장 좋은 제안인가요?'
          },
          {
            name:'남자:',
            speech:'그게 제가 할 수 있는 최선이에요.'
          },
          {
            name:'매트:',
            speech:'글쎄요, 잘 모르겠어요. 쇼핑 좀 해야겠어요.'
          },
          {
            name:'남자:',
            speech:'좋아요, 28달러는 어때요?'
          },
          {
            name:'매트:',
            speech:'알겠습니다.'
          },
          {
            name:'남자:',
            speech:'좋아요. 그렇게 할게요.'
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
  