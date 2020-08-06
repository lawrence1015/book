<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/legs-soccer-football-player_155003-9421.jpg">

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
        padding-bottom: 10px;">What are you doing tonight?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">What are you doing tonight?</li><br />

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
          <u>Answer the questions</u><br />
          ( 질문에 답하시오. )
        </p>

        <ol style="margin: 12px;">
          <li>
            Where’s Michael going tonight?<br />
              오늘밤 Michael은 어디에 가려고 합니까?<br />
          </li>
          <li>
            Where are they going tomorrow?<br />
              그들은 내일 어디에 가려고 합니까?<br />
          </li>
          <li>
            Is Jason going with them?<br />
              Jason은 그들과 같이 가려고 합니까?<br />
          </li>
        </ol>
        <br />

        <p>
          Free response:<br />
          <br />
            What are you doing this weekend?<br />
            Are you going out?<br />
            Where are you going?<br />

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
                      be + v-ing (현재진행형) : 이미 예정되어 있는 가까운 미래의 일을 표현할 때에도 쓰입니다.
                    </li> 
                    <li>
                      I’d love to, but I can’t : 마음은 원이로되 할 수 없어서 사양할 때 쓰는 표현.
                    </li> 
                    <li>
                      anything : 의문문이나 조건문에서 anything은 무언가로 해석을 합니다.<br />
                       Ex) Did you say anything?(당신은 무언가를 말했습니까?)<br />

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
          speech:'Say, Michael, what are you doing tonight? Do you want to go bowling?'
        },
        {
          name:'B:',
          speech:'I’d love to, but I can’t. I’m going to a soccer match with my brother.'
        },
        {
          name:'A:',
          speech:'Oh, well maybe some other time.'
        },
        {
          name:'B:',
          speech:'Are you doing anything tomorrow? We could go then.'
        },
        {
          name:'A:',
          speech:'Tomorrow sounds fine. I’m going to work until five.'
        },
        {
          name:'B:',
          speech:'So let’s go around six.'
        },
        {
          name:'A:',
          speech:'OK. Afterward, maybe we can get some dinner.'
        },
        {
          name:'B:',
          speech:'Sounds great.'
        },
        {
          name:'A:',
          speech:'After we’re done bowling, do you want to go to The Chinese Palace for dinner?'
        },
        {
          name:'B:',
          speech:'Sure. I love Chinese food. We can go around 8:00. That’s not too late. You know, maybe Jason can join us. What do you think?'
        },
        {
          name:'A:',
          speech:'Yeah. Hey, Jason, what are you doing tomorrow night? Do you want to join Michael and me for dinner? We’re going to The Chinese Palace at 8:00.'
        },
        {
          name:'C:',
          speech:'I have to work till 8:30. But why don’t I meet you afterward?'
        },
        {
          name:'A:',
          speech:'That’d be great, Jason.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'말해봐, Michael, 오늘 밤 뭐 할 거야? 볼링 치러 갈래?'
        },
        {
          name:'B:',
          speech:'가고 싶은데 갈 수 없어. 형이랑 축구 시합을 보러 갈 거야.'
        },
        {
          name:'A:',
          speech:'오, 그럼 다음 기회에 가자.'
        },
        {
          name:'B:',
          speech:'내일 뭐 할 일 있어? 내일은 갈 수 있어.'
        },
        {
          name:'A:',
          speech:'내일 괜찮아. 나는 5시까지 일 할 거야.'
        },
        {
          name:'B:',
          speech:'그럼 6시경에 가자.'
        },
        {
          name:'A:',
          speech:'좋아. 그 후에 저녁 먹을 수도 있을거야.'
        },
        {
          name:'B:',
          speech:'좋아.'
        },
        {
          name:'A:',
          speech:'볼링 친 후에 저녁 먹으러 Chinese Palace에 갈래?'
        },
        {
          name:'B:',
          speech:'물론이야. 나는 중국 음식을 무지 좋아해. 8시경에 가도 돼. 그렇게 늦지 않아. Jason도 우리와 함께 갈 수 있을거야. 어떻게 생각해?'
        },
        {
          name:'A:',
          speech:'응. 이봐, Jason, 내일 밤에 뭐 할거니? Michael과 나랑 저녁 먹으러 갈래? 우리는 8시에 Chinese Palace에 갈거야.'
        },
        {
          name:'C:',
          speech:'나는 8시 30분까지 일해야 하는데 그 후에 만나는 것은 어때?'
        },
        {
          name:'A:',
          speech:'좋아, Jason.'
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
