<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/business-brainstorming-graph-chart-report-data-concept_53876-31213.jpg" style="max-width: 100%; display:block; height: auto;">
  
          <v-layout
          align-end
          fill-height
          pa-0
          white--text
          >
          <h1 style="background-color: rgb(222, 227, 226, 0.7);
          width: 100%;
          padding-top : 10px;
          padding-left : 10px;
          padding-bottom: 10px;
          color: black;">What are your goals for the next three or five years?
        </h1>
      </v-layout>
    </v-img>
  
    <hr style="border: 3px solid rgba(17, 105, 121, 1);" width="100%">
    <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Example Answers</h3>
    <hr width="60%">
        <div style="padding : 15px;">
  
          <table style = "border-collapse: collapse;">
      
            <tr v-for="dialog in dialogs">
              <td class = "uppertable" >{{dialog.name}}</td>
              <td class = "lowertable" >{{dialog.speech}}</td>
            </tr>
      
          </table>
  
        <h3 class = "border white--text"
            style="border-radius: 0px 70px 70px 0px;
                   padding-top: 7px;
                   margin-left: -18px;
                   margin-right: -18px;
                   padding-left: 15px;
                   padding-bottom: 10px;
                   padding-top: 10px;
                   margin-top: 0px;">Key Expressions</h3>
  
        <div style="padding : 16px;">
  
        <ol style="margin: 12px;">
          <li>
            I would focus on my job so that I can have opportunities to work on larger projects.<br />
            ( 저는 더 큰 프로젝트에서 일할 기회를 가질 수 있도록 제 일에 집중할 것입니다. )
          </li>
          <li>
            I will work hard to meet or exceed your expectations.<br />
            ( 당신의 기대를 충족시키거나 넘어설 수 있도록 열심히 노력하겠습니다. )
          <li>
            I want to contribute as much as I can to this company with my position.<br />
            ( 제 직책을 가지고 이 회사에 최대한 기여하고 싶습니다. )
          </li>
          <li>
            I can see myself in a supervisory or managerial role.<br />
            ( 저는 감독 또는 관리 역할을 수행 할 수 있습니다. )
          </li>
          <li>
            I have the ability to be a good leader in the right possible time.<br />
            ( 저는 적절한 시기에 좋은 지도자가 될 수 있는 능력이 있습니다. )
          </li>
        </ol>
  
  
        </div>
  
        <h3 class = "border white--text"
            style="border-radius: 0px 70px 70px 0px;
                   padding-top: 7px;
                   margin-left: -18px;
                   margin-right: -18px;
                   padding-left: 15px;
                   padding-bottom: 10px;
                   padding-top: 10px;
                   margin-top: 0px;
                   width: 150px;">Activity</h3>
  
        <div style="padding : 16px;">
  
          <p>
            What are your goals for the next three or five years? ( Make your own answer. )
          </p>
  
          <p>
  
            <v-container grid-list-md text-xs-left>
              <v-layout row wrap>
  
  
                <v-flex xs12>
                  <v-card outlined light color="#E9E9E9" height="200%">
                    <v-card-text class="px-10">
                      <p>
  
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
  
          </p>
  
  
        </div>
  
        <h3 class = "border white--text"
            style="border-radius: 0px 70px 70px 0px;
                   padding-top: 7px;
                   margin-left: -18px;
                   margin-right: -18px;
                   padding-left: 15px;
                   padding-bottom: 10px;
                   padding-top: 10px;
                   margin-top: 10px;
                   width: 180px;">Translation</h3>
  
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
            name:'A.',
            speech:"I would focus on my job so that I can have opportunities to work on larger projects and to continue to develop my skills. I will work hard to meet or exceed your expectations in the position I'm applying for."
          },
          {
            name:'B.',
            speech:"First, I want to contribute as much as I can to this company with my position, with all my ability, I will give my best performance so that I can see myself in a supervisory or managerial role. I know that I have the ability to be a good leader in the right possible time."
          },
          ],
  
          translations:[
          {
            name:'A.',
            speech:'저는 더 큰 프로젝트를 하고 제 능력을 계속 발전시킬 수 있는 기회를 가질 수 있도록 제 일에 집중할 것입니다. 제가 지원하는 포지션에서 당신의 기대를 충족시키거나 넘어설 수 있도록 노력하겠습니다.'
          },
          {
            name:'B.',
            speech:'우선 제 직책을 가지고 이 회사에 최대한 기여하고 싶습니다. 저는 제 능력을 최대한 발휘해서 감독이나 경영자 역할을 잘 수행하도록 최선을 다하고 싶습니다. 저는 제가 적절한 시기에 좋은 지도자가 될 수 있는 능력이 있다는 것을 알고 있습니다.'
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
  
  
  .border {
    position: relative;
    left: 0px;
    width: 230px;
    height: 40px;
    background: #116979;
    padding-left: 10px;
    line-height: 20px;
  
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
  