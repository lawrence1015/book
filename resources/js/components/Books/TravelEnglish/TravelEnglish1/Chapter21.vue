<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://extremetoursca.com/images/site/citadel-mobile.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          padding-bottom: 10px;">Shopping
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
            <i>size</i>크기, 크기[규모], 치수[사이즈], 크기[규모/치수]가 …한
          </p>
          <p>
            <i>jewelry</i>보석류, 보석 세공, 보석 장식; 장신구
          </p>
          <p>
            <i>souvenir</i>기념품[선물]
          </p>
          <p>
            <i>bracelet</i>팔찌
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
                
            </li>
            <li>
                
            </li>
            <li>
                
            </li>
            <li>
                
            </li>
          </ol>
          <h4>EXPRESSIONS</h4>
          <p style="margin: 15px;">
            <i>
              Here’s your change. Thanks for coming in!<br />
              Okay. I’ll take the T-shirt and the bracelet.<br />
              Can I help you find something?<br />
              How much is it?<br />
              Could you also recommend a gift<br />
              Do you have anything in another color or another style?
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
            speech:'Can I help you find something?'
          },
          {
            name:'Matt:',
            speech:'I’d like to get a T-shirt, but I’m not sure about the size.'
          },
          {
            name:'Clerk:',
            speech:'Well, in that case, you’ll need a large size.'
          },
          {
            name:'Matt:',
            speech:'Do you have anything in another color or another style?'
          },
          {
            name:'Clerk:',
            speech:'How about this one?'
          },
          {
            name:'Matt:',
            speech:'That’s great. Could you also recommend a souvenir for a young woman?'
          },
          {
            name:'Clerk:',
            speech:'But, how about some jewelry?'
          },
          {
            name:'Matt:',
            speech:'Oh, this bracelet is nice. How much is it?'
          },
          {
            name:'Clerk:',
            speech:'It’s on sale for $36.'
          },
          {
            name:'Matt:',
            speech:'Okay. I’ll take the T-shirt and the bracelet. Thank you.'
          },
          ],
  
          translations:[
          {
            name:'점원:',
            speech:'뭐 좀 찾아 드릴까요?'
          },
          {
            name:'매트:',
            speech:'티셔츠를 사고 싶은데 사이즈를 잘 모르겠어요.'
          },
          {
            name:'점원:',
            speech:'글쎄요, 그런 경우에는 라지가 필요하겠군요.'
          },
          {
            name:'매트:',
            speech:'다른 색이나 다른 스타일의 것이 있나요?'
          },
          {
            name:'점원:',
            speech:'이거 어때요?'
          },
          {
            name:'매트:',
            speech:'잘됐군요. 젊은 여자에게 줄 선물도 추천해 주시겠어요?'
          },
          {
            name:'점원:',
            speech:'근데, 보석은 어때요?'
          },
          {
            name:'매트:',
            speech:'아, 이 팔찌가 멋지군요. 얼마예요?'
          },
          {
            name:'점원:',
            speech:'36달러에 세일합니다.'
          },
          {
            name:'매트:',
            speech:'알겠습니다. 티셔츠랑 팔찌로 할게요. 감사합니다.'
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
  