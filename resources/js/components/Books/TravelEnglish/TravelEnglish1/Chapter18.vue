<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://images.techhive.com/images/idge/imported/imageapi/2014/03/best-hollywood-tours-1-100257080-orig.jpg style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">At Tourist Spots
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
            <i>downtown</i>시내에[로]
          </p>
          <p>
            <i>walk-in</i>사람이 서서 드나들 수 있는, 예약이 안 된; 예약이 필요 없는
          </p>
          <p>
            <i>amenities</i>오락시설
          </p>
          <p>
            <i>private</i>사유의, 개인 소유의, 전용의, 사적인[사사로운/비공개의]
          </p>
          <p>
            <i>entrance</i>입구, 문, 입장, 등장, 입장, 가담, 등장, 입회, 가입; 입학, 입사 등

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
              What kind of tours do they have?
            </li>
            <li>
              What did the Tour Agent recommend to Matt?
            </li>
            <li>
              Do you have any idea about Santa Monica Beach and Hollywood Sign?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              I would like to recommend<br />
              What's the best place to see?<br />
              How can we go there?<br />
              What kind of tours do you have?<br />
              What about other tourist spots?
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
            speech:'What’s the best place to see?'
          },
          {
            name:'Tour Agent:',
            speech:'I would like to recommend Santa Monica beach.'
          },
          {
            name:'Matt:',
            speech:'Is there an entrance fee?'
          },
          {
            name:'Tour Agent:',
            speech:'Yes, there is.'
          },
          {
            name:'Matt:',
            speech:'How can we go there?'
          },
          {
            name:'Tour Agent:',
            speech:'By Walking & Biking or by Bus.'
          },
          {
            name:'Matt:',
            speech:'What about other tourist spots?'
          },
          {
            name:'Tour Agent:',
            speech:'Do you want to go to Hollywood Sign?'
          },
          {
            name:'Matt:',
            speech:'What kind of tours do you have?'
          },
          {
            name:'Tour Agent:',
            speech:'We have, Los Angeles Private Tour - Group Price $599 and Two Day Los Angeles & Las Vegas Private Tour - Group Price $1,899'
          },
          {
            name:'Matt:',
            speech:'OK, I will think about it and thank you for the information.'
          },
          ],
  
          translations:[
          {
            name:'매트:',
            speech:'어디가 가장 보기 좋은 곳인가요?'
          },
          {
            name:'여행사 직원:',
            speech:'산타모니카 해변을 추천하고 싶습니다.'
          },
          {
            name:'매트:',
            speech:'입장료가 있나요?'
          },
          {
            name:'여행사 직원:',
            speech:'네, 있습니다.'
          },
          {
            name:'매트:',
            speech:'우리가 어떻게 그곳에 갈 수 있을까요?'
          },
          {
            name:'여행사 직원:',
            speech:'걷거나 자전거를 타거나 버스를 타면 됩니다.'
          },
          {
            name:'매트:',
            speech:'다른 관광지는요?'
          },
          {
            name:'여행사 직원:',
            speech:'헐리우드 싸인에 가고 싶나요?'
          },
          {
            name:'매트:',
            speech:'어떤 종류의 투어가 있습니까?'
          },
          {
            name:'여행사 직원:',
            speech:'로스앤젤레스 개인 투어 - 단체 가격 599달러입니다.이틀간의 로스앤젤레스 & 라스베이거스 개인 투어 - 단체 가격 1,899달러입니다.'
          },
          {
            name:'매트:',
            speech:'네, 생각해 볼게요. 알려줘서 고마워요.'
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
  