<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://www.planetware.com/wpimages/2019/06/california-santa-monica-top-attractions-santa-monica-state-beach.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">At a Tourist Spot 1
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
            <i>sightseeing</i>선언[선포/공표]하다
          </p>
          <p>
            <i>Narrowing</i>내로우잉, 그물코 줄이기
          </p>
          <p>
            <i>figure out</i>계산해 내다, 생각해 내다, 이해하다., ~을 이해하다[알아내다]
          </p>
          <p>
            <i>Relaxing</i>마음을 느긋하게 해 주는, 편한
          </p>
          <p>
            <i>Fantastic</i>기막히게 좋은, 환상적인, 엄청난, 굉장한, 기상천외한, 기이한
          </p>
          <p>
            <i>Suggestion</i>제안, 제의, 의견, 시사[암시], 기미, 기색, 연상
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
              What does Jinny want to do in the morning?
            </li>
            <li>
              Have you ever been to Santa Monica?
            </li>
            <li>
              If you have a chance to travel to Los Angeles where do you want to go?
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              end up being a great day!<br />
              That’s great! How far is it from here?<br />
              can't be missed.<br />
              It would be good to get out in the sun.<br />
              Let's figure out
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
            name:'Jinny:',
            speech:'Where do you want to go?'
          },
          {
            name:'Matt:',
            speech:'Let’s figure out what to do before lunch.'
          },
          {
            name:'Jinny:',
            speech:'I heard that the Sta. Monica beach is a place that can’t be missed.'
          },
          {
            name:'Matt:',
            speech:'That’s great! How far is it from here?'
          },
          {
            name:'Jinny:',
            speech:'Let’s just ride a taxi.'
          },
          {
            name:'Matt:',
            speech:'The Natural History Museum is close by, isn’t it?'
          },
          {
            name:'Jinny:',
            speech:'Let’s go there this afternoon.'
          },
          {
            name:'Matt:',
            speech:'We could check out the local amusement park.'
          },
          {
            name:'Jinny:',
            speech:'We could eat dinner and watch the sun go down at that restaurant by the park.'
          },
          {
            name:'Matt:',
            speech:'That could really end up being a great day!'
          },
          ],
  
          translations:[
          {
            name:'지니:',
            speech:'어디 가고 싶어요?'
          },
          {
            name:'매트:',
            speech:'점심 식사 전에 무엇을 해야 할지 생각해봐요.'
          },
          {
            name:'지니:',
            speech:'나는 산타 모니카 해변이 놓칠 수 없는 곳이라고 들었어요.'
          },
          {
            name:'매트:',
            speech:'잘됐군요! 여기서 얼마나 머나요?'
          },
          {
            name:'지니:',
            speech:'그냥 택시 타요.'
          },
          {
            name:'매트:',
            speech:'자연사 박물관이 가까이 있죠, 그렇죠?'
          },
          {
            name:'지니:',
            speech:'오늘 오후에 그곳에 가죠.'
          },
          {
            name:'매트:',
            speech:'우리는 그 지역의 놀이공원을 구경할 수 있어요.'
          },
          {
            name:'지니:',
            speech:'우리는 공원 옆에 있는 식당에서 저녁을 먹고 해가 지는 것을 볼 수 있어요.'
          },
          {
            name:'매트:',
            speech:'정말 멋진 날이 될 수 있을거에요!'
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
  