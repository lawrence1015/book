<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/company-representatives-reading-applicant-resume-hiring_1163-4684.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          color: black;">What will you do if you don’t get this position?
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
            It will be disappointing on my part but I would move on and try to improve my personality.<br />
            ( 저로서는 실망스럽겠지만, 앞으로 나아가서 제 성격을 개선하려고 노력하겠습니다. )
          </li>
          <li>
            I would be very much willing to get some experience that would qualify me for this job.<br />
            ( 저는 이 일을 할 수 있는 자격을 얻을 수 있는 경험을 하고 싶습니다. )
          <li>
            I would respect your decision if ever I won't be hired for this position.<br />
            ( 만약 제가 이 직책에 채용되지 않는다면 저는 당신의 결정을 존중하겠습니다. )
          </li>
          <li>
            I understand that I may not be the perfect person and there is somebody that is the best fit for this job.<br />
            ( 저는 제가 완벽한 사람이 아닐 수도 있고 이 일에 가장 적합한 사람이 있다는 것을 이해합니다. )
          </li>
          <li>
            I will try to check what I need to improve for myself and will be very happy to listen for your constructive feedback.<br />
            ( 제가 스스로 개선해야 할 점이 무엇인지 확인해보도록 노력하겠으며, 여러분의 건설적인 피드백을 기꺼이 듣겠습니다. )
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
            What will you do if you don’t get this position? ( Make your own answer. )
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
            speech:"Honestly, it will be disappointing on my part, but life doesn't stop here. I would move on and try to improve my personality. I would  really love to be in this company, so I am very much willing to get some experience that would qualify me for this job vacancy."
          },
          {
            name:'B.',
            speech:" I would respect your decision if ever I won't be hired for this position. I understand that I may not be the perfect person and there is somebody that is best the fit for this job. But then I will try to check what I need to improve for myself and will be very happy to listen for your constructive feedback."
          },
          ],
  
          translations:[
          {
            name:'A.',
            speech:'솔직히 저로서는 실망스럽겠지만, 인생은 여기서 멈추지 않습니다. 저는 앞으로 나아가서 제 성격을 개선하려고 노력할 것입니다. 저는 이 회사에 있는 것을 정말 좋아하기 때문에, 이 직장에 취직할 수 있는 자격을 얻을 수 있는 경험을 하고 싶습니다.'
          },
          {
            name:'B.',
            speech:'만약 제가 이 직책에 채용되지 않는다면 저는 당신의 결정을 존중하겠습니다. 저는 그것이 완벽한 사람이 아닐 수도 있고 이 일에 가장 적합한 사람이 있다는 것을 이해합니다. 하지만 제가 스스로 개선해야 할 점이 무엇인지 확인해보도록 노력하겠습니다. 그리고 여러분의 건설적인 피드백을 기꺼이 듣겠습니다.'
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
  