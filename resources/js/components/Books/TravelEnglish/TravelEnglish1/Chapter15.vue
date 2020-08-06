<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://e3expo.discoverlosangeles.com/sites/default/files/styles/poi_detail/public/poi_images/los_angeles_visitor_information_center_-_hollywood_highland/h_2000crmlavic10_790642d8-5056-a36f-23db9b4a18a3d3c1.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Information Center
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
            <i>destination</i>목적지, 도착지
          </p>
          <p>
            <i>sidewalk</i>보도 , 인도
          </p>
          <p>
            <i>accessible</i>접근[입장/이용] 가능한, 이해하기 쉬운,
          </p>
          <p>
            <i>light rail</i>경철도
          </p>
          <p>
            <i>transportation</i>귀양, 유배
          </p>
          <p>
            <i>kiosk</i>키오스크, 공중전화 박스
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
              What are the forms of transportation people can use in going to their destination?
            </li>
            <li>
              When you’re travelling what ways of transportation you always use?
            </li>
            <li>
              Do you think an information center is really helpful for tourists? Why?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              I will take time.<br />
              How can I get there?<br />
              Could you tell me the way to the station?<br />
              Can I go there on foot?
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
            speech:'Hi, Excuse me. Where is the nearest information center?'
          },
          {
            name:'H.Staff:',
            speech:'Yes, There is.'
          },
          {
            name:'Matt:',
            speech:'Could you tell me the way to the station? How can I get there?'
          },
          {
            name:'H.Staff:',
            speech:'If your destination is close by, you might want to just grab a taxicab.'
          },
          {
            name:'Matt:',
            speech:'Can I go there on foot?'
          },
          {
            name:'H.Staff:',
            speech:'It’s a little bit impossible. It will take time.'
          },
          {
            name:'Matt:',
            speech:'How long does it take by taxi?'
          },
          {
            name:'H.Staff:',
            speech:'It will take 20 to 30 minutes by taxi.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'안녕하세요, 실례합니다. 가장 가까운 안내소가 어디죠?'
          },
          {
            name:'호텔 직원:',
            speech:'네, 여기 있습니다.'
          },
          {
            name:'매트:',
            speech:'역으로 가는 길을 알려 주시겠어요?거기까지 어떻게 가죠?'
          },
          {
            name:'호텔 직원:',
            speech:'목적지가 가까우면 택시에 타세요.'
          },
          {
            name:'매트:',
            speech:'걸어서 갈 수 있나요?'
          },
          {
            name:'호텔 직원:',
            speech:'그건 좀 불가능해요. 시간이 걸릴거에요.'
          },
          {
            name:'매트:',
            speech:'택시로 얼마나 걸려요?'
          },
          {
            name:'호텔 직원:',
            speech:'택시로 20~30분 정도 걸립니다.'
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
  