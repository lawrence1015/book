<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/alarm-clock-hundred-dollar-currency-notes-wooden-textured-background_23-2147943439.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          color: black;">What are your salary expectations?
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
            I am willing to accept whatever amount will be offered to me.<br />
            ( 저는 어떤 금액을 제시하시든지 기꺼이 받아들이겠습니다.. )
          </li>
          <li>
            I am more interested in the job itself.<br />
            ( 저는 그 일 자체에 더 관심이 있습니다. )
          <li>
            To be able to work in this company is already a reward for me.<br />
            ( 이 회사에서 일할 수 있다는 것은 이미 나에게 보상이다. )
          </li>
          <li>
            Money is not that important on my list and I'm sure that we can reach an agreeable level.<br />
            ( 돈은 제 리스트에서 그다지 중요하지 않으며 저는 우리가 만족할 만한 수준에 도달할 수 있다고 확신합니다. )
          </li>
          <li>
            I would like to be compensated fairly for my experience and flexibility.<br />
            ( 제 경험과 유연성에 대해 공정하게 보상받고 싶습니다. )
          </li>
          <li>
            I am open to negotiation for the compensation structure for this position.<br />
            ( 저는 이 직책에 대한 보상은 협상할 수 있습니다. )
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
            What are your salary expectations? ( Make your own answer. )
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
            speech:"I am willing to accept whatever amount will be offered. I am more interested in the job itself and to be able to work in this company is already a reward for me. Money is not that important on my list and I'm sure that we can reach an agreeable level."
          },
          {
            name:'B.',
            speech:"I'm eager to prove myself if ever given a chance to work in your company. I would like to be compensated fairly for my experience and flexibility, but I am open to negotiation for the compensation for this position."
          },
          ],
  
          translations:[
          {
            name:'A.',
            speech:'저는 어떤 금액을 제시하시든지 기꺼이 받아들이겠습니다. 저는 그 직업 자체에 더 관심이 있고 이 회사에서 일할 수 있다는 것은 이미 나에게 보상이다.. 돈은 제 리스트에서 그다지 중요하지 않으며 저는 우리가 만족할 만한 수준에 도달할 수 있다고 확신합니다.'
          },
          {
            name:'B.',
            speech:'귀사에서 일할 기회가 주어진다면 제 자신을 증명하고 싶습니다. 제 경험과 유연성에 대해 공정하게 보상받고 싶지만, 이 직책에 대한 보상은 협상할 수 있습니다.'
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
  