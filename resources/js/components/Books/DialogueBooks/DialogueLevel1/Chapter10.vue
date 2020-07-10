<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv8RmfkY/6/screen_2x/canva-man-and-woman-sitting-on-chair-in-front-of-desk-MADGv8RmfkY.jpg">

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
        padding-bottom: 10px;">Busy street
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Busy street</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs">
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
          <u>Fill the blanks. Always answer with a whole sentence</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
              Some people <u> &emsp; &emsp; &emsp; </u> waiting <u> &emsp; &emsp; &emsp; </u> a bus on a chair.<br />
          </li>
          <li>
              He <u> &emsp; &emsp; &emsp; </u> <u> &emsp; &emsp; &emsp; </u> coffee into a small white cup. <br />
                (pour) <br />
          </li>
          <li>
              We <u> &emsp; &emsp; &emsp; </u> <u> &emsp; &emsp; &emsp; </u> Kimchi in November or December. <br />
                (make) <br />
          </li>
        </ol>


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

          <tr v-for="translation in translations">
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
                    <li>
                      1) 이미 예정되어 있는 가까운 미래의 일을 표현할 때 현재진행형을 쓸 수 있습니다. <br />
                          ex) What are you doing tonight? - I'm meeting David for dinner.<br />
                            ( David과 같이 저녁을 먹을 예정임 ) <br />
                    </li>
                    <li>
                      2)  come : 오다라고 주로 해석을 하지만 상대방에게 또는 상대방이 가는 쪽으로<br />
                                '가다'라고 표현 할 때에도 쓰입니다.<br />
                          ex) I’m going to the movie. Are you coming, too?<br />
                            ( 난 영화보러 갈 거야. 너도 갈 거지? ) <br />
                    </li>
                    <li>
                      1) wait for ~ : ~를 기다리다<br />
                          wave at ~ : ~에게 손을 흔들다<br />
                    </li>
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
          speech:'Jim, what are you doing?'
        },
        {
          name:'B:',
          speech:'I’m looking out of the window.'
        },
        {
          name:'A:',
          speech:'Are there many people on the street?'
        },
        {
          name:'B:',
          speech:'Yes. There’s Jenny, too.'
        },
        {
          name:'A:',
          speech:'What is Jenny wearing?'
        },
        {
          name:'B:',
          speech:'She’s wearing a beige blouse and a purple skirt.'
        },
        {
          name:'A:',
          speech:'What is she doing?'
        },
        {
          name:'B:',
          speech:'She’s sitting on a bench with Marty. They are waving at the passerby’s.'
        },
        {
          name:'B:',
          speech:'Barbara and Matt are riding a red bicycle. They’re waving back at Jenny and Marty.'
        },
        {
          name:'B:',
          speech:'Johnnie is waiting for a bus, eating an apple.'
        },
        {
          name:'B:',
          speech:'Suzie is buying a ticket to the cinema. There’s an interesting movie tonight.'
        },
        {
          name:'B:',
          speech:'I’m going to the movie. Are you coming, too?'
        },
        {
          name:'A:',
          speech:'All right. Let’s go'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'Jim, 너 뭐하고 있니?'
        },
        {
          name:'B:',
          speech:'창 밖을 보고 있어..'
        },
        {
          name:'A:',
          speech:'거리에 사람들이 많니? '
        },
        {
          name:'B:',
          speech:'응. Jenny도 있어.'
        },
        {
          name:'A:',
          speech:'Jenny는 무엇을 입고 있니?'
        },
        {
          name:'B:',
          speech:'베이지색 블라우스와 보라색 치마를 입고 있어.'
        },
        {
          name:'A:',
          speech:'그녀는 무엇을 하고 있니?'
        },
        {
          name:'B:',
          speech:'Marty와 같이 벤치에 앉아 있어. 그들은 지나가는 사람들에게 손을 흔들고 있어. '
        },
        {
          name:'B:',
          speech:'Barbara와 Matt는 빨간색 자전거를 타고 있어. 그들은 답례로 Jenny와 Marty에게 손을 흔들어 주고 있어.'
        },
        {
          name:'B:',
          speech:'Johnnie는 사과를 먹으면서 버스를 기다리고 있어.'
        },
        {
          name:'B:',
          speech:'Suzie는 영화관에서 티켓을 사고 있어. 오늘 밤에 재미있는 영화가 있어. '
        },
        {
          name:'B:',
          speech:'난 영화보러 갈 거야. 너도 갈 거지?'
        },
        {
          name:'A:',
          speech:'좋아. 같이 가자.'
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
