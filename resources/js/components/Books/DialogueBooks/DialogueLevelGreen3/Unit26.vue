 <template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/chinese-woman-wearing-face-mask-train-station-maintaining-social-distance-young-asian-woman-using-smartphone-looking-away-with-departure-arrivals-board-health-travel-concepts_108072-2568.jpg">

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
        padding-bottom: 10px;">Waiting for a friend
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Waiting for a friend</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs" :key="dialog">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>
      <br />
      <p>
        The next day <br />
      </p>
      <br />
      <table style = "border-collapse: collapse;">
    
        <tr v-for="nextdaydialog in nextdaydialogs" :key="nextdaydialog">
          <td class = "uppertable" >{{nextdaydialog.name}}</td>
          <td class = "lowertable" >{{nextdaydialog.speech}}</td>
        </tr>
  
      </table>
      <p>
        The next Monday<br />
      </p>
      <br />
      <table style = "border-collapse: collapse;">
    
        <tr v-for="nextMondaydialog in nextMondaydialogs" :key="nextMondaydialog">
          <td class = "uppertable" >{{nextMondaydialog.name}}</td>
          <td class = "lowertable" >{{nextMondaydialog.speech}}</td>
        </tr>
  
      </table>
      <br />
      <p>
        Ten minutes later<br />
      </p>
      <br />
      <table style = "border-collapse: collapse;">
    
        <tr v-for="tenMinutesdialog in tenMinutesdialogs" :key="tenMinutesdialog">
          <td class = "uppertable" >{{tenMinutesdialog.name}}</td>
          <td class = "lowertable" >{{tenMinutesdialog.speech}}</td>
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
          <u>Fill the blanks</u><br />
          Example:<br />
          a) He’ll be here tomorrow.<br />
          b) He won’t be here tomorrow.<br />
          c) Will he be here tomorrow?<br />
        </p>
        <br />
        <ol style="margin: 12px;">
          <li>
              a.) They'll be in New York next week.<br />
              b.) <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u><br />
              c.) <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u><br />
          </li>
          <li>
            a.) <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u><br />
            b.) <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u><br />
            c.) Will Peter be here next year?<br />
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

          <tr v-for="translation in translations" :key="translation">
            <td class = "uppertable" >{{translation.name}}</td>
            <td class = "lowertable" >{{translation.speech}}</td>
          </tr>
  
        </table>
        <br />
        <p>
          다음 날<br />
        </p>
        <br />
        <table style = "border-collapse: collapse;">

          <tr v-for="nextdaytranslation in nextdaytranslations" :key="nextdaytranslation">
            <td class = "uppertable" >{{nextdaytranslation.name}}</td>
            <td class = "lowertable" >{{nextdaytranslation.speech}}</td>
          </tr>
  
        </table>
        <br />
        <p>
          다음 주 월요일<br />
        </p>
        <br />
        <table style = "border-collapse: collapse;">

          <tr v-for="nextMondaytranslation in nextMondaytranslations" :key="nextMondaytranslation">
            <td class = "uppertable" >{{nextMondaytranslation.name}}</td>
            <td class = "lowertable" >{{nextMondaytranslation.speech}}</td>
          </tr>
  
        </table>
        <br />
        <p>
          10분 후<br />
        </p>
        <br />
        <table style = "border-collapse: collapse;">

          <tr v-for="tenMinutestranslation in tenMinutestranslations" :key="tenMinutestranslation">
            <td class = "uppertable" >{{tenMinutestranslation.name}}</td>
            <td class = "lowertable" >{{tenMinutestranslation.speech}}</td>
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
                      미래 : 미래를 나타낼 때 주로 조동사 will을 쓰고 미래에 대한 예정, 추측, 계획, 의지등을 나타냅니다.<br />
                      will 뒤에는 be동사, 일반동사 모두 원형을 씁니다.<br />
                        Example: It'll be here tomorrow : 그것은 내일 여기에 있을 것이다<br />
                                 The train won't be here for ten minutes : 기차는 10분동안 여기에 있지 않을거야<br />
                                 Where will you be? : 너는 어디에 있을거니?<br />
                    </li>
                    <li>
                      "What's the matter?" : 무슨 일이니?<br />
                    </li>
                    <li>
                      I hope so : 그렇기를 바래<br />
                    </li>
                    <li>
                      I think so : 그렇게 생각해<br />
                    </li>
                    <li>
                      say hello to ~ : ~에게 안부를 전해주세요<br />
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
          name:'Mrs. Katz:',
          speech:'What’s the matter, Debbie?'
        },
        {
          name:'Debbie:',
          speech:'I’m waiting for a letter from Nick. It wasn’t here yesterday, and it isn’t here today either.'
        },
        {
          name:'Mrs. Katz:',
          speech:'Don’t worry, honey. It’ll be here tomorrow.'
        },
        {
          name:'Debbie:',
          speech:'Will it? I hope so.'
        },
        ],

        nextdaydialogs:[
        {
          name:'Debbie:',
          speech:'Mom! It’s here! And Nick’s coming to Pittsburgh!'
        },
        {
          name:'Mrs. Katz:',
          speech:'Oh, really? When?'
        },
        {
          name:'Debbie:',
          speech:'He’ll be here next Monday.'
        },
        {
          name:'Mrs. Katz:',
          speech:'What time will he be here? You have classes on Monday.'
        },
        {
          name:'Debbie:',
          speech:'He’ll be on the 7:40 train. Oh, Mom, can he stay with us?'
        },
        {
          name:'Mrs. Katz:',
          speech:'Well, I don’t know... Oh, OK. Sure. I already heard so much about him. I’d like to meet him.'
        },
        ],

        nextMondaydialogs:[
        {
          name:'Mrs. Katz:',
          speech:'Debbie! The train won’t be here for ten minutes. Let’s get a soda or something.'
        },
        {
          name:'Debbie:',
          speech:'No, thanks, Mom. You guys get a soda.'
        },
        {
          name:'Mrs. Katz:',
          speech:'All right. Where will you be?'
        },
        {
          name:'Debbie:',
          speech:'I’ll be right here.'
        },
        ],

        tenMinutesdialogs:[
        {
          name:'Mrs. Katz:',
          speech:'Well, the train’s late.'
        },
        {
          name:'Debbie:',
          speech:'It’ll be here soon. Uh, Mom… can you and Sarah wait in the coffee shop?'
        },
        {
          name:'Mrs. Katz:',
          speech:'Why, dear?'
        },
        {
          name:'Debbie:',
          speech:'I want to say hello to Nick on my own. Is that OK?'
        },
        {
          name:'Mrs. Katz:',
          speech:'Sure. But we just had a soda. We’ll be in the bookstore right over there.'
        },
        {
          name:'Debbie:',
          speech:'Thanks, Mom. I won’t be long.'
        },
        ],

        translations:[
        {
          name:'Mrs. Katz:',
          speech:'왜 그래, Debbie?'
        },
        {
          name:'Debbie:',
          speech:'닉의 편지를 기다리고 있어요. 어제도 없었고, 지금도 없습니다. 오늘도 여기에도.'
        },
        {
          name:'Mrs. Katz:',
          speech:'걱정하지 마. 내일 여기 있을 거야.'
        },
        {
          name:'Debbie:',
          speech:'그럴까요? 그러길 바래요.'
        },
        ],

        nextdaytranslations:[
        {
          name:'Debbie:',
          speech:'엄마! 왔어요! 닉이 피츠버그로 오고 있어요!'
        },
        {
          name:'Mrs. Katz:',
          speech:'아, 그래? 언제?'
        },
        {
          name:'Debbie:',
          speech:'그는 다음 주 월요일에 여기 올 거예요.'
        },
        {
          name:'Mrs. Katz:',
          speech:'그는 몇 시에 여기 올까? 너는 월요일에 수업이 있어.'
        },
        {
          name:'Debbie:',
          speech:'그는 7시 40분 열차에 탈 거예요. 엄마, 우리랑 같이 있어도 돼요?'
        },
        {
          name:'Mrs. Katz:',
          speech:'글쎄, 잘 모르겠어... 오, 오케이. 이미 그에 대해 많이 들었어. 나는 그를 만나고 싶어.'
        },
        ],

        nextMondaytranslations:[
        {
          name:'Mrs. Katz:',
          speech:'Debbie! 기차는 10분 안에 도착할 거야. 음료수나 한잔 할까?'
        },
        {
          name:'Debbie:',
          speech:'괜찮아요, 엄마 음료수 사오세요'
        },
        {
          name:'Mrs. Katz:',
          speech:'좋아. 너는 어디에 있을 거야?'
        },
        {
          name:'Debbie:',
          speech:'금방 올게요.'
        },
        ],

        tenMinutestranslations:[
        {
          name:'Mrs. Katz:',
          speech:'기차가 늦네.'
        },
        {
          name:'Debbie:',
          speech:'곧 올 거예요. 엄마, 사라랑 커피숍에서 기다려 줄래요?'
        },
        {
          name:'Mrs. Katz:',
          speech:'왜?'
        },
        {
          name:'Debbie:',
          speech:'닉에게 나 혼자 인사하고 싶어요. 괜찮겠어요?'
        },
        {
          name:'Mrs. Katz:',
          speech:'물론. 하지만 방금 음료수를 마셨어. 우리는 바로 저기 서점에 있을게.'
        },
        {
          name:'Debbie:',
          speech:'고마워요, 엄마. 오래 걸리지 않을 거예요.'
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
