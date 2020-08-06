<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/group-volunteers-checking-clothes_1170-1813.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          color: black;">What are you passionate about?
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
            I like to help street children to mold them to be better persons.<br />
            ( 저는 길거리 아이들이 더 나은 사람이 되도록 돕는 것을 좋아합니다. )
          </li>
          <li>
            I want to endorse opportunities to make good use of my time.<br />
            ( 저는 저의 시간을 잘 활용할 수 있는 기회를 보증하고 싶습니다. )
          <li>
            I love being creative.<br />
            ( 저는 창조적인 것을 좋아합니다. )
          </li>
          <li>
            I get a rush when I make something out of something.<br />
            ( 저는 무언가를 만들어 낼 때 서두릅니다. )
          </li>
          <li>
            I love music. It calms me down when I'm in deep trouble.<br />
            ( 저는 음악을 좋아합니다. 제가 곤경에 처했을 때 마음이 진정시켜줍니다. )
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
            What are you passionate about? ( Make your own answer. )
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
            speech:"Before I applied for this job, I've been involved in various community activities. I like to help street children to mold them to be better persons because I believe that they will be the future of our country. I want to endorse  them to opportunities to make good use of my time."
          },
          {
            name:'B.',
            speech:"I love being creative, I get a rush when I make something out of nothing. I also tend to keep my old stuff because I value my things. I also love music. It calms me down when I'm in deep trouble."
          },
          ],
  
          translations:[
          {
            name:'A.',
            speech:'이 직장에 지원하기 전에 저는 여러 가지 지역 사회 활동에 참여했습니다. 저는 거리의 아이들이 더 나은 사람이 되도록 돕고 싶습니다. 왜냐하면 아이들이 우리나라의 미래가 될 것이라고 믿기 때문입니다. 저는 제 시간을 잘 활용할 수 있는 기회를 그들에게 보증하고 싶습니다'
          },
          {
            name:'B.',
            speech:'저는 창의적인 것을 좋아합니다. 저는 무언가를 만들어 낼 때 서두릅니다. 저는 또한 제 물건들을 소중히 여기기 때문에 제 오래된 물건들을 보관하는 경향이 있습니다. 저는 음악을 사랑하는 것 뿐만 아니라, 제가 깊은 곤경에 처했을 때 마음을 진정시켜 줍니다.'
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
  