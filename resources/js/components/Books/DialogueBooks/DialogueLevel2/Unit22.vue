<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/new-york-city-skyline-cloudy-day_23-2148287829.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgb(59, 105, 120, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">What do I have to do?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">What do I have to do?</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs" :key="dialog">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Exercise</h3>
        <div style="padding : 16px;">

        <p>
          <u>Look at the pictures. Complete the sentences and practice dialogs</u><br />
          (그림을 보고 문장을 완성하고 대화를 연습해 보세요)<br />
        </p>
        <br />
        <p>
          Example:<br />
            A: Can you go to a movie today?<br />
            B: No, I can’t. I have to do my homework.<br />
            (A: 오늘 영화보러 갈 수 있니? / B: 아니, 못가. 숙제해야 해.)<br />
        </p>
        
     
        <v-container justify-center grid-list-xl text-xs-center>
          <v-layout wrap justify-center>

            <v-flex xs12 md5 >
              <v-card hover>

                <v-img src="images/dialogue-clothes-unit22.jpg" />
                <v-card-text>
                1. _________ my clothes.
                </v-card-text>

              </v-card>
            </v-flex>
           
    
            <v-flex xs12 md5 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-dentist-unit22.jpg" />
                <v-card-text>
                2. _________ the dentist.
                </v-card-text>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

        <v-container justify-center grid-list-xl text-xs-center>
          <v-layout wrap justify-center>

            <v-flex xs12 md5 >
              <v-card hover>

                <v-img src="images/dialogue-market-unit22.jpg" />
                <v-card-text>
                3. _________ the market.
                </v-card-text>

              </v-card>
            </v-flex>
           
    
            <v-flex xs12 md5 >
              <v-card hover height="100%">

                <v-img src="images/dialogue-apartment-unit22.jpg" />
                <v-card-text>
                4. _________ my apartment.
                </v-card-text>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>


<br />
        <p>
          Free response:<br />
            What do you have to do today?<br />
            What do you have to do every day?<br />
            Do you have to clean your room?<br />
            How often do you have to cook?<br />
        </p>



      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Translation</h3>
      <div style="padding : 16px;">

        <table style = "border-collapse: collapse;">

          <tr v-for="translation in translations" :key="translation">
            <td class = "uppertable" >{{translation.name}}</td>
            <td class = "lowertable" >{{translation.speech}}</td>
          </tr>
  
        </table>

</div>
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
        </div>
        <h3 class = "border white--text" style="padding-top: 7px;
                                                margin-left: -18px;
                                                margin-right: -18px;
                                                padding-left: 10px;
                                                padding-bottom: 10px;
                                                padding-top: 10px;
                                                margin-top: 0px;
                                                background-color: #204051;">Self Study</h3>
        <div style="padding : 16px;">

          <p>

            <v-container grid-list-md text-xs-left>
              <v-layout row wrap>


                <v-flex xs12>
                  <v-card light color="#cae8d5">
                    <v-card-text class="px-10">
                    <li>
                      Notes
                    </li>
                    <ol style="margin: 12px;">
                    <li>
                      조동사 have to : <br />
                        필요에 의해서 또는 규칙  때문에 ~해야 한다 라고 할 때 쓰이고 must와 바꿔쓸 <br />
                        수 있습니다 <br />                 
                    </li>
                    <li>
                      I'm afraid so : <br />
                        앞에 언급된 절을 긍정하면서 아쉽지만 그렇다라고 할 때 쓰입니다 <br />
                    </li>
                    </ol>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>

          </p>

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
          name:'A:',
          speech:'What are you looking at?'
        },
        {
          name:'B:',
          speech:'The sky. It’s getting cloudy.'
        },
        {
          name:'A:',
          speech:'Do you think it’s going to rain?'
        },
        {
          name:'B:',
          speech:'I hope not. I have to go to the store.'
        },
        {
          name:'A:',
          speech:'Do you have to go today?'
        },
        {
          name:'B:',
          speech:'Yes, I have to buy something.'
        },
        {
          name:'A:',
          speech:'Can’t you go tomorrow?'
        },
        {
          name:'B:',
          speech:'No, I have to go now. I have to get some food for dinner.'
        },
        {
          name:'A:',
          speech:'Don’t worry about the dinner. We can go to a restaurant tonight.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'C:',
          speech:'Can you go out today, Susan?'
        },
        {
          name:'D:',
          speech:'I don’t think so, Dave. I have to paint this room.'
        },
        {
          name:'C:',
          speech:'Do you have to do it now?'
        },
        {
          name:'D:',
          speech:'I’m afraid so. I’m expecting some guests this weekend.'
        },
        {
          name:'C:',
          speech:'I can help you. I’m pretty good with a brush.'
        },
        {
          name:'D:',
          speech:'That’s nice of you. We can go out afterwards.'
        },
        {
          name:'C:',
          speech:'All right. What do I have to do?'
        },
        {
          name:'D:',
          speech:'Here, take the brush and start painting this wall.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'넌 뭘 보고 있니?'
        },
        {
          name:'B:',
          speech:'하늘. 날씨가 흐려지고 있어.'
        },
        {
          name:'A:',
          speech:'비가 올 것 같니?'
        },
        {
          name:'B:',
          speech:'그러지 않기를 바래. 가게 가야하거든.'
        },
        {
          name:'A:',
          speech:'오늘 가야 하니?'
        },
        {
          name:'B:',
          speech:'응, 뭔가를 사야해.'
        },
        {
          name:'A:',
          speech:'내일은 갈 수 없니?'
        },
        {
          name:'B:',
          speech:'아니, 지금 가야 해. 저녁 식사를 위해 음식을 좀 사야해.'
        },
        {
          name:'A:',
          speech:'저녁 식사에 대해서는 걱정하지 마. 우리는 오늘 밤에 식당으로 가도 돼.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'C:',
          speech:'Susan, 오늘 외출할 수 있니?'
        },
        {
          name:'D:',
          speech:'외출 못할 것 같아 Dave. 이 방을 페인트칠 해야 돼'
        },
        {
          name:'C:',
          speech:'지금 그것을 해야 해?'
        },
        {
          name:'D:',
          speech:'아쉽지만 그래야 해. 이번 주에 손님 몇 명이 오기로 했어.'
        },
        {
          name:'C:',
          speech:'내가 널 도와줄 수 있어. 나는 붓질을 꽤 잘 해.'
        },
        {
          name:'D:',
          speech:'고마워. 그 후에 외출할 수 있어.'
        },
        {
          name:'C:',
          speech:'좋아. 내가 뭘 해야 할까?'
        },
        {
          name:'D:',
          speech:'여기, 붓을 가지고 이 벽을 칠하는 것을 시작해.'
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

.border:before {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 40px 40px 0px 0px;
  transform: rotate(180deg);
  border-color: transparent #204051 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #204051;
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
