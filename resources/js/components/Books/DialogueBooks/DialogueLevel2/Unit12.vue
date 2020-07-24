<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/cheerful-woman-gesturing-talking-friend_23-2148143246.jpg">

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
        padding-bottom: 10px;">What's your day like?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">What's your day like?</li><br />
      
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
            <u>Fill the blanks. Always answer with a whole sentence</u><br />
            (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
          </p>
  
          <ol style="margin: 12px;">
            <li>
              I usually get up early <u> &emsp; &emsp; &emsp; </u> morning.<br />
                저는 주로 아침에 일찍 일어납니다.<br />
            </li>
            <li>
              I work <u> &emsp; &emsp; &emsp; </u> 9:00 A.M <u> &emsp; &emsp; &emsp; </u> 5:00 P.M. <br />
                저는 오전9시부터 오후5시까지 일합니다. <br />
            </li>
            <li>
              I'm a student, but I also <u> &emsp; &emsp; &emsp; </u> a <u> &emsp; &emsp; &emsp; </u> job. <br />
                저는 학생이지만 아르바이트 또한 합니다. <br />
            </li>
          </ol>
          <br />
          <p>
            Free response:<br />
                What’s your day like?  당신의 하루는 어떻습니까?<br />
                How do you go to work/school? 당신은 일을 합니까? 학교를 갑니까?<br />
                When do you get home? 당신은 언제 귀가합니까?<br />
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
                      부정의문문: ~하지 않습니까?<br />
                          일반동사의 경우 : don’t you (I, we, they) + 동사 +주어? / doesn’t he (she, it) + 동사+주어?<br />
                          Be동사의 경우 : Isn't(Aren't) + 주어?<br />
                    </li>
                    <li>
                      in the morning(오전에), in the afternoon(오후에), in the evening(저녁에), at night(밤에)<br />
                    </li>
                    <li>
                      from ~ until ~ (~부터 ~까지)<br />
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
          speech:'So, do you usually come to the gym in the morning?'
        },
        {
          name:'B:',
          speech:'Yeah, I do.'
        },
        {
          name:'A:',
          speech:'Really? What time do you go to work?'
        },
        {
          name:'B:',
          speech:'I work in the afternoon. I start work at five.'
        },
        {
          name:'A:',
          speech:'Wow, that’s late. When do you get home at night?'
        },
        {
          name:'B:',
          speech:'I usually get home at midnight.'
        },
        {
          name:'A:',
          speech:'Midnight? That is late. What do you do, exactly?'
        },
        {
          name:'B:',
          speech:'I’m a TV announcer. I do weather reports on KNTV. Don’t you recognize me?'
        },
        {
          name:'A:',
          speech:'Oh! You’re Helen Richardson. I love your show! By the way, I’m Daniel…'
        },
        {
          name:'B:',
          speech:'And you, Daniel? What’s your day like?'
        },
        {
          name:'A:',
          speech:'Well, right now I’m in school, so I just have a part-time job. But, I’m pretty busy. I get up early, around 6:00 A.M. Then I work from 7:00 until 9:00. I go to school and study until 4:00 P.M Then I work again from 5:00 until 7:00.'
        },
        {
          name:'B:',
          speech:'So, what do you do?'
        },
        {
          name:'A:',
          speech:'I’m a dog walker.'
        },
        {
          name:'B:',
          speech:'A what? What’s that?'
        },
        {
          name:'A:',
          speech:'A dog walker. I take people’s dogs for walks. It’s great, and it keeps me in shape, too.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'당신은 주로 아침에 체육관에 갑니까?'
        },
        {
          name:'B:',
          speech:'네, 그렇습니다.'
        },
        {
          name:'A:',
          speech:'정말입니까? 몇 시에 출근하십니까?'
        },
        {
          name:'B:',
          speech:'저는 오후에 일합니다. 5시에 일을 시작합니다.'
        },
        {
          name:'A:',
          speech:'와우, 늦군요. 밤에는 언제 귀가하십니까?'
        },
        {
          name:'B:',
          speech:'저는 주로 한밤중에 귀가합니다.'
        },
        {
          name:'A:',
          speech:'한밤중에요? 늦네요. 정확히 직업이 무엇입니까?'
        },
        {
          name:'B:',
          speech:'저는 TV아나운서입니다. 저는 KNTV에서 일기예보를 합니다. 저를 못 알아보겠어요?'
        },
        {
          name:'A:',
          speech:'오! 당신은 Helen Richardson이군요. 저는 당신의 쇼를 아주 좋아합니다. 그런데, 저는 Daniel입니다..'
        },
        {
          name:'B:',
          speech:'그럼, Daniel 당신은요? 당신의 하루는 어떻습니까?'
        },
        {
          name:'A:',
          speech:'글쎄요. 지금 저는 재학중입니다. 그래서 저는 아르바이트를 합니다. 하지만 저는 꽤 바쁩니다. 저는 오전 6시경, 일찍 일어납니다. 그리고 나서 저는 7시부터 9시까지 일을 합니다. 학교에 가서 오후4시까지 공부를 합니다. 그러고 나서 저는 다시 5시부터 7시까지 일합니다.'
        },
        {
          name:'B:',
          speech:'그러면 당신의 직업은 무엇입니까?'
        },
        {
          name:'A:',
          speech:'나는 개를 산책 시키는 일을 합니다.'
        },
        {
          name:'B:',
          speech:'뭐라구요? 그게 무엇인가요?'
        },
        {
          name:'A:',
          speech:' 개를 산책 시키는 사람이요. 나는 사람들의 개를 산책 시킵니다. 좋습니다. 좋은 체력을 유지할 수도 있습니다.'
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
