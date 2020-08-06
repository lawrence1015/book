<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/beautiful-stylish-staff-sitting-office-desk-using-laptop-listening-colleague_146671-15600.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          color: black;">Do you prefer to work independently or on a team?
        </h1>
      </v-layout>
    </v-img>
  
    <hr style="border: 3px solid rgba(17, 105, 121, 1);" width="100%">
    <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Example Answers</h3>
    <hr width="60%">
        <div style="padding : 15px;">
  
          <table style = "border-collapse: collapse;">
      
            <tr v-for="dialog in dialogs" :key="dialog">
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
            I am equally happy working as a member of a team or independently.<br />
            ( 저는 팀의 일원으로서 일하거나 독립적으로 일하는 것에 똑같이 만족합니다. )
          </li>
          <li>
            I am proud to say that I did not have trouble working as a member of a team or independently.<br />
            ( 저는 팀의 일원으로서 또는 독립적으로 일하는 데 어려움이 없었다고 말할 수 있어 자랑스럽게 생각합니다. )
          <li>
            I'm proud to say I didn't have a hard time working in a team or independently.<br />
            ( 저는 팀에서 일하거나 독립적으로 일하는데 어려움을 겪지 않았다고 자신있게 말할 수 있습니다. )
          </li>
          <li>
            Any of the two situations will not give me a problem working on.<br />
            ( 두 가지 상황 중 어느 것도 작업하는 데 문제가 되지 않습니다. )
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
            Do you prefer to work independently or in a team? ( Make your own answer. )
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
  
            <tr v-for="translation in translations" :key="translation">
              <td class = "uppertable" >{{translation.name}}</td>
              <td class = "lowertable" >{{translation.speech}}</td>
            </tr>
    
          </table>
  
        </div>
  
  
      </div>
  
  
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
            speech:"I am equally happy working as a member of a team or independently I am proud to say that with my previous job I did not have trouble working as a member of a team or even independently. I always try to finish my work on time whatever situation I am in."
          },
          {
            name:'B.',
            speech:"When I was taking up my major, I experienced working on a thesis with my team and I'm proud to say I didn't have a hard time working with my classmates. There are activities that we have to do independently as well, and for the record, I was able to do things well. So, I can say that I will not have any problem with any of the two."
          },
          ],
  
          translations:[
          {
            name:'A.',
            speech:'나는 팀의 일원으로 일하거나 독립적으로 일하는 것이 똑같이 행복하다. 나는 내가 이전 직장에서 팀의 일원으로 일하거나 심지어 독립적으로 일하는데 어려움을 겪지 않았다고 말하는 것이 자랑스럽다. 나는 어떤 상황에 처하든 항상 제 시간에 일을 끝내려고 노력한다.'
          },
          {
            name:'B.',
            speech:'전공에 들어갈 때 팀원들과 함께 논문 작업을 한 경험이 있고, 반 친구들과 함께 일하는데 힘들지 않았다고 말할 수 있어 뿌듯하다. 우리가 독자적으로 해야 할 활동도 있고, 공식적으로 나는 일을 잘 할 수 있었다. 그래서 둘 중 어느 쪽에도 문제가 없을 것이라고 말할 수 있다.'
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
  