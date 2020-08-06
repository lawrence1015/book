<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/multiethnic-business-partners-discussing-contract-terms_1262-21185.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          color: black;">What is your greatest strength?
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
            Being an open-minded person is one of the best qualities I have.<br />
            ( 개방적인 사람이 되는 것은 제가 가진 최고의 자질 중 하나입니다. )
          </li>
          <li>
            I always consider suggestions, especially from my superiors.<br />
            ( 저는 항상 상사의 제안을 고려합니다. )
          <li>
            I always have space for improvement.<br />
            ( 저는 항상 개선의 여지가 있습니다. )
          </li>
          <li>
            I am patient and a born winner.<br />
            ( 저는 인내심이 강하고 타고난 승리자이다. )
          </li>
          <li>
            I gain learning from losing, where it still makes me a winner because I see things in a positive way.<br />
            (  저는 긍정적으로 보기 때문에 패배에도 불구하고 저를 승자로 만드는 패배로부터 배움을 얻습니다. )
          </li>
          <li>
            I am patient and will make sure to finish any job on time.<br />
            ( 저는 참을성이 있고 어떤 일이든 제시간에 끝낼 것입니다. )
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
            What is your greatest strength? ( Make your own answer. )
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
            speech:"I may say that being an open-minded person is one of the best qualities I have. I always consider suggestions especially from my superiors, which I know is also showing respect to other people's opinions and ideas. I always have space for improvement I believe."
          },
          {
            name:'B.',
            speech:"I am patient and a born winner though I strongly believe that winning is not everything. There are situations that I gain learning from losing so I guess it still makes me a winner because I see things in a positive way. As for being patient I have good tolerance and will make sure to finish any job on time."
          },
          ],
  
          translations:[
          {
            name:'A.',
            speech:'개방적인 사람이 되는 것은 제가 가진 최고의 자질 중 하나라고 말할 수 있습니다. 저는 항상 상사의 제안을 고려하는데, 이 또한 다른 사람의 의견과 생각을 존중하는 것으로 알고 있습니다. 저는 항상 개선의 여지가 있다고 생각합니다.'
          },
          {
            name:'B.',
            speech:'우승이 전부는 아니지만, 저는 인내심이 강하고 타고난 우승자입니다. 지는 것으로부터 배우는 상황이 있는데, 그래도 긍정적으로 보기 때문에 승자가 되는 것 같습니다. 인내심에 대해서는,  저는 인내심이 강하고 어떤 일이든 제시간에 끝내도록 할 것입니다.'
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
  