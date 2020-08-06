<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/listening-co-worker_1098-13110.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          color: black;">What did you like or dislike about your previous job?
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
            However, the work wasn't challenging anymore and that is what triggered me to leave my position.<br />
            ( 하지만, 그 일은 더 이상 도전적이지 않았고 그것이 제가 제 자리를 떠나는 계기가 되었습니다. )
          </li>
          <li>
            I have been in the company for years and I felt like I have to do more that will allow growth in my career.<br />
            ( 저는 몇 년 동안 회사에 다녔고, 제 경력을 성장시킬 수 있는 일을 더 많이 해야 한다고 느꼈습니다. )
          <li>
            I want to take on a new responsibility that will help me achieve my full potential.<br />
            ( 제 잠재력을 최대한 발휘할 수 있는 새로운 책무를 맡고 싶습니다. )
          </li>
          <li>
            I believe that if given the chance, I can perform better and become an excellent employee.<br />
            ( 기회가 주어진다면 더 좋은 성과를 낼 수 있고 훌륭한 직원이 될 수 있다고 생각합니다. )
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
            What did you like or dislike about your previous job? ( Make your own answer. )
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
            speech:"There's something in the aura of my previous workplace that made me feel good. I had fun working with my colleagues and my boss was very sensible in making decisions. However, the work wasn't challenging anymore and that is what triggered me to leave my position. I have been in the company for years and I felt like I have to do more that will allow growth in my career. I want to take on a new responsibility that will help me achieve my full potential."
          },
          {
            name:'B.',
            speech:"My previous job molded me to be a better employee, I learned to discipline myself more, work under pressure, and with less supervision. It also taught me to be considerate when it comes to dealing with others. I do thank my previous employer for all the good traits I have acquired. Nonetheless, I am looking for a job that is more challenging. I believe that if given the chance, I can perform better and become an excellent employee."
          },
          ],
  
          translations:[
          {
            name:'A.',
            speech:'이전 직장에서의 분위기는 좋았었습니다. 저는 동료들과 함께 일하는 것이 즐거웠고 제 상사는 결정을 내리는 데 매우 현명했습니다. 하지만, 그 일은 더 이상 도전적이지 않았고 그것이 제가 제 자리를 떠나는 계기가 되었습니다. 저는 몇 년 동안 회사에 있었고, 제 경력을 성장시킬 수 있는 일을 더 많이 해야 한다고 느꼈고, 제 잠재력을 최대한 발휘할 수 있는 새로운 책무를 맡고 싶습니다.'
          },
          {
            name:'B.',
            speech:'이전의 제 직업은 저를 더 좋은 직원으로 만들었고, 저는 스스로를 더 잘 단련하고, 압박감 속에서 일하고, 감독을 덜 받는 것을 배웠습니다. 또한 다른 사람을 대할 때 배려를 해야 한다는 것을 가르쳐주었습니다. 제가 획득한 모든 좋은 특징에 대해 이전 고용주에게 감사를 표합니다. 그럼에도 불구하고 저는 더 도전적인 직업을 찾고 있습니다. 기회가 주어진다면 더 좋은 성과를 낼 수 있고 훌륭한 직원이 될 수 있다고 생각합니다.'
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
  