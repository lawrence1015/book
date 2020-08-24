<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/couple-training-gym_23-2148024316.jpg">

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
        padding-bottom: 10px;">Workout
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Workout</li><br />

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
          <u>Fill the blanks. Always answer with a whole sentence.</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            I <u> &emsp; &emsp; &emsp; </u> every weekend.   (exercise/usually)<br />
            나는 주로 매 주말마다 운동을 합니다.<br />
          </li>
          <li>
            I <u> &emsp; &emsp; &emsp; </u> go <u> &emsp; &emsp; &emsp; </u>.    (swimming/often)<br />
            나는 자주 수영하러 갑니다.<br />
          </li>
          <li>
            I <u> &emsp; &emsp; &emsp; </u> to music <u> &emsp; &emsp; &emsp; </u>.    (listen/all the time)<br />
            나는 항상 음악을 듣습니다.<br />
          </li>
          <li>
            I <u> &emsp; &emsp; &emsp; </u> very early in the morning.   (get up/always)<br />
            나는 항상 아침에 매우 일찍 일어납니다.<br />
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
          Do you exercise? <br />
          Do you exercise often? <br />
          How do you exercise? <br />
          

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
                      couch potato = 소파에 앉아 여가를 보내는 사람, 게으르고 비활동적인 사람을 일컬을 때 사용함.<br />
                    </li>
                    <li>
                      “It (he, she, …) drives me crazy” = 그것은 나를 미치게 한다. (drive + 목적어 + 목적보어 = ~ 한 상태에 빠뜨리다) <br />
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
          name:'Marie:',
          speech:'You’re really fit, Paul. Do you exercise a lot?'
        },
        {
          name:'Paul:',
          speech:'Well, I almost always get up early, and I lift weights for an hour.'
        },
        {
          name:'Marie:',
          speech:'Seriously?'
        },
        {
          name:'Paul:',
          speech:'Sure. And then I often go in-line skating.'
        },
        {
          name:'Marie:',
          speech:'Wow! Do you exercise often like that?'
        },
        {
          name:'Paul:',
          speech:'Yes, I work out about five times a week. What about you?'
        },
        {
          name:'Marie:',
          speech:'Oh, I hardly ever exercise. I usually just watch TV in my free time. I guess I’m a real (1)couch potato!'
        },
        {
          name:'Marie:',
          speech:'What else do you like to do, Paul?'
        },
        {
          name:'Paul:',
          speech:'Well, I like video games a lot. I play them every day. It (2)drives my mom crazy!'
        },
        {
          name:'Marie:',
          speech:'Hey, I play video games all the time, too.'
        },
        {
          name:'Paul:',
          speech:'Well, listen, I have some great new games. Why don’t we play some together today?'
        },
        {
          name:'Marie:',
          speech:'OK!'
        },
        ],

        translations:[
        {
          name:'Marie:',
          speech:'Paul, 넌 정말 튼튼해. 운동을 많이 하니?'
        },
        {
          name:'Paul:',
          speech:'글쎄, 나는 거의 항상 일찍 일어나, 그리고 한 시간 동안 웨이트를 들어올려'
        },
        {
          name:'Marie:',
          speech:'진심이야?'
        },
        {
          name:'Paul:',
          speech:'물론이야. 그리고나서 나는 주로 인라인 스케이트를 타러 가.'
        },
        {
          name:'Marie:',
          speech:'와우! 너는 주로 그렇게 운동해?'
        },
        {
          name:'Paul:',
          speech:'응, 나는 일주일에 약 다섯 번 운동해. 너는 어때?'
        },
        {
          name:'Marie:',
          speech:'오, 나는 거의 운동 안 해. 나는 그냥 여가 시간에 주로 TV를 봐. 나는 정말 카우치 포테이토라고 생각해!'
        },
        {
          name:'Marie',
          speech:'그 밖에 뭘 하는 것을 좋아하니, Paul?'
        },
        {
          name:'Paul:',
          speech:'글쎄, 나는 비디오게임을 무지 좋아해. 매일 게임해. 그것이 우리 엄마를 미치게 해!'
        },
        {
          name:'Marie:',
          speech:'아이고, 나도 온종일 비디오게임을 하는데.'
        },
        {
          name:'Paul:',
          speech:'그럼, 들어봐, 나에게 좋은 새로운 게임이 있어. 오늘 같이 게임을 해보는 게 어때?'
        },
        {
          name:'Marie?:',
          speech:'좋아!'
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
