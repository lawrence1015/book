<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/group-businesspeople-looking-business-plan-office_23-2147899904.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          color: black;">Where do you see yourself five years from now?
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
            Five years from now I will have enhanced my skill.<br />
            ( 앞으로 5년 후에는 제 실력이 늘었을 것입니다. )
          </li>
          <li>
            I see myself as a successful employee of this company.<br />
            ( 저는 제 자신을 이 회사의 성공적인 직원이라고 생각합니다. )
          <li>
            I have contributed to your improvement.<br />
            ( 저는 당신의 발전을 위해 기여했습니다. )
          </li>
          <li>
            In five years I’ll be more knowledgeable, gaining more techniques and well trained.<br />
            ( 5년 후에는 더 많은 기술을 습득하고 훈련을 잘 받을 수 있게 될 것입니다. )
          </li>
          <li>
            I'll make sure to be an asset of this company.<br />
            ( 반드시 이 회사의 자산이 되도록 하겠습니다. )
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
            Where do you see yourself five years from now ( Make your own answer. )
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
            speech:"I will do my best if given an opportunity to work here, and five years from now, I will have enhanced my skill. I see myself as a successful employee of this company that has  contributed to your improvement."
          },
          {
            name:'B.',
            speech:"In five years I'll be more knowledgeable, gaining more techniques, and well trained. I'll make sure to be an asset of this company, which I should be proud of because I know that I will give it all with my full support for the growth of this company."
          },
          ],
  
          translations:[
          {
            name:'A.',
            speech:'이곳에서 일할 수 있는 기회가 주어진다면 최선을 다할 것이고, 앞으로 5년 후에는 제 실력이 늘었을 것입니다. 저는 제가 이 회사의 성공적인 직원이고, 당신의 발전에 기여했다고 생각합니다.'
          },
          {
            name:'B.',
            speech:'5년 후에는 더 많은 지식을 쌓고, 더 많은 기술을 습득하고, 잘 훈련할 것입니다. 반드시 이 회사의 자산이 될 수 있도록 하겠습니다. 저는 이 회사의 성장을 위해 전폭적인 지원을 아끼지 않을 것을 알기 때문에 이를 자랑스러워 할 것입니다.'
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
  