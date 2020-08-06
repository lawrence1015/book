<template>

    <div :style = "{fontSize: fontSize + 'px'}">
  
      <v-container fluid ma-0 pa-0>
  
        <v-layout column>
          <v-img
          src="https://image.freepik.com/free-photo/frustrated-young-man-massaging-his-nose-keeping-eyes-closed-while-working_8353-5961.jpg" style="max-width: 100%; display:block; height: auto;">
  
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
          color: black;">What has been the greatest disappointment in your life?
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
            I felt like a fish out of water when we moved to the city.<br />
            ( 도시로 이사했을 때, 저는 물 밖으로 나온 물고기처럼 느껴집니다. )
          </li>
          <li>
            It was so disappointing to leave my friends behind.<br />
            ( 친구들을 두고 와서 너무 아쉬웠습니다. )
          <li>
            I tried to work out the situation by having good communication.<br />
            ( 저는 의사소통이 잘 되게 함으로써 상황을 해결하려고 노력했습니다. )
          </li>
          <li>
            One example of my disappointment is my performance during examinations, I could have done better.<br />
            ( 제 실망의 한 예시는 시험 기간 동안 제가 더 잘 할 수 있었다는 것입니다. )
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
            What has been the greatest disappointment in your life? ( Make your own answer. )
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
            speech:"There may be an instance in my life that I felt like a fish out of water; it was when we moved to the city with my parents. I felt that it was so disappointing to leave my friends behind where I've been comfortable. I tried to work out the situation by having good communication with them and it turned out we were still best buddies until now."
          },
          {
            name:'B.',
            speech:"I have enjoyed my stay in college but there were some disappointments that I can remember, one example would be about my performance during examinations. I know that I could have done better, but I was able to finish college with flying colors so it made me feel okay now."
          },
          ],
  
          translations:[
          {
            name:'A.',
            speech:'제 인생에 물 밖에 나온 물고기처럼 느껴진 사례가 있습니다; 그것은 부모님과 함께 도시로 이사했을 때입니다. 제가 편하게 지내던 곳에 친구들을 두고 온 것이 너무 실망스럽다고 느꼈습니다. 저는 그들과 좋은 의사소통을 하면서 상황을 해결하려고 노력했지만, 지금까지도 그들이 가장 친한 친구였던 것으로 밝혀졌습니다.'
          },
          {
            name:'B.',
            speech:'대학 생활을 즐겼지만, 제가 기억할 수 있는 몇 가지 실망스러운 점들이 있었습니다. 한 가지 예는 시험 동안의 제 성적에 관한 것입니다. 제가 더 잘할 수 있었다는 건 알지만, 대학을 의기양양하게 마칠 수 있었어서 지금은 괜찮아졌습니다.'
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
  