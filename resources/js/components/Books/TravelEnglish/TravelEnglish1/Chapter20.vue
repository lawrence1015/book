<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://coarchitects.com/wp-content/uploads/2015/05/NHM_07.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">At a Tourist Spot 2
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
            <i>purchase</i>구입, 구매, 매입, 
          </p>
          <p>
            <i>architectural</i>건축학[술]의
          </p>
          <p>
            <i>impressive</i>인상적인, 인상[감명] 깊은
          </p>
          <p>
            <i>museum</i>박물관; 미술관
          </p>
          <p>
            <i>unique</i>유일무이한, 독특한, 특별한, 고유의, 특유의
          </p>
          <p>
            <i>style</i>방식, 스타일, 유행, 우아함, 품격, 문체; 화풍, 유파; 양식
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
              Where do they buy a ticket?
            </li>
            <li>
              Do you like to see unique places?
            </li>
            <li>
              Why do you think people love to visit the National Museum?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              Where is it located? <br />
              How much does the ticket cost<br />
              Where can I buy a ticket?<br />
              Impressive! I will purchase a ticket later.
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
            speech:'What’s that unique building called?'
          },
          {
            name:'Guide:',
            speech:'Natural History Museum of Los Angeles'
          },
          {
            name:'Matt:',
            speech:'Where is it located?'
          },
          {
            name:'Guide:',
            speech:'900 W Exposition Blvd, Los Angeles, CA 90007, United States'
          },
          {
            name:'Matt:',
            speech:'How much does the ticket cost and Where can I buy the ticket?'
          },
          {
            name:'Guide:',
            speech:'You can purchase it online or inside the building.'
          },
          {
            name:'Matt:',
            speech:'Do you have any idea about the architectural style of that building?'
          },
          {
            name:'Guide:',
            speech:' It’s a Neoclassical architecture.'
          },
          {
            name:'Matt:',
            speech:'Impressive! I will purchase a ticket later.'
          },
          {
            name:'Guide:',
            speech:'OK, that’s great!'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'저 독특한 빌딩은 뭐라고 불려요?'
          },
          {
            name:'가이드:',
            speech:'로스앤젤레스의 자연사 박물관입니다.'
          },
          {
            name:'매트:',
            speech:'그것은 어디에 있나요?'
          },
          {
            name:'가이드:',
            speech:'900W 박람회 Blvd, 로스앤젤레스, CA 90007, 미국입니다.'
          },
          {
            name:'매트:',
            speech:'티켓 가격은 얼마이고 어디서 표를 살 수 있나요?'
          },
          {
            name:'가이드:',
            speech:'온라인이나 건물 내부에서 구입할 수 있습니다.'
          },
          {
            name:'매트:',
            speech:'저 건물의 건축 스타일에 대해 알고 있나요?'
          },
          {
            name:'가이드:',
            speech:'신고전주의 건축입니다.'
          },
          {
            name:'매트:',
            speech:'인상적이네요! 제가 나중에 표를 살게요.'
          },
          {
            name:'가이드:',
            speech:'좋아요, 잘됐네요!'
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
  