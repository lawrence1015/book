<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/smiling-beautiful-girl-her-handsome-boyfriend-casual-summer-clothes-happy-family-taking-selfie-self-portrait-themselves-smartphone-camera-shows-peace-sign-winking-street_158538-5459.jpg">

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
        padding-bottom: 10px;">On a date
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">On a date</li><br />

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
          <u>Answer the questions:</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            Where are Mark and Mary? <br />
              Mark와 Mary는 어디에 있습니까?<br />
          </li>
          <li>
            What does Mark smell? <br />
              Mark는 무슨 냄새를 맡습니까?<br />
          </li>
          <li>
            What does the sign say? <br />
              그 표지는 뭐라고 말합니까?<br />
          </li>
        </ol>

        <p>
          Free response:<br />
            Do you often go out on a date?<br />
            Where do you go?<br />
            What do people in Korea usually do on a date?<br />

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
                      can : ~ 할 수 있다 (= be able to) <br />
                          ~ 해도 좋다 (= may) <br />                
                    </li>
                    <li>
                      any : 몇몇, 조금의 뜻이 있고 의문문이나 부정문에 사용이 됩니다.<br />
                          ~ not ~ any 는 조금도 없다는 뜻입니다.<br />                  
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
          name:'Mark:',
          speech:'What a beautiful day!'
        },
        {
          name:'Mary:',
          speech:'Yes, it’s marvelous.'
        },
        {
          name:'Mark:',
          speech:'Mmm, I can smell the flowers.'
        },
        {
          name:'Mary:',
          speech:'That’s my perfume.'
        },
        {
          name:'Mark:',
          speech:'It’s very nice.'
        },
        {
          name:'Mary:',
          speech:'I’m glad you like it.'
        },
        {
          name:'Mark:',
          speech:'How much time do we have before the movie starts?'
        },
        {
          name:'Mary:',
          speech:'Half an hour.'
        },
        {
          name:'Mark:',
          speech:'Let’s go by the lake and look at the catfish.'
        },
        {
          name:'Mary:',
          speech:'Oh, look. The water’s very clear. You can see the fish. There are lots of them.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Mark:',
          speech:'Hey, boy! Any fish in the bucket?'
        },
        {
          name:'Boy:',
          speech:'No. I’m not having any luck today.'
        },
        {
          name:'Mark:',
          speech:'Luck has nothing to do with it. A good fisherman always catches fish.'
        },
        {
          name:'Boy:',
          speech:'Not these fish. They’re too smart.'
        },
        {
          name:'Mark:',
          speech:'Here, give me that pole.'
        },
        {
          name:'Boy:',
          speech:'Sure, mister. You can have the worms, too.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Police Officer:',
          speech:'Sir! The sign says no fishing. Can’t you read?'
        },
        {
          name:'Mark:',
          speech:'Uh… No, I don’t have my glasses. I can’t see a thing without them.'
        },
        {
          name:'Police Officer:',
          speech:'All right. You can go this time.'
        },
        {
          name:'Mark:',
          speech:'Thank you, officer.'
        },
        {
          name:'Police Officer:',
          speech:'But next time, wear your glasses.'
        },
        {
          name:'Mark:',
          speech:'Yes, sir… Come on, Mary. We’re late for the movie.'
        },
        ],

        translations:[
        {
          name:'Mark:',
          speech:'날씨가 좋아요!'
        },
        {
          name:'Mary:',
          speech:'네, 놀라워요.'
        },
        {
          name:'Mark:',
          speech:'음. 꽃 냄새가 나네요.'
        },
        {
          name:'Mary:',
          speech:'제 향수예요.'
        },
        {
          name:'Mark:',
          speech:'참 좋아요.'
        },
        {
          name:'Mary:',
          speech:'당신 좋다니 기뻐요.'
        },
        {
          name:'Mark:',
          speech:'영화 시작하기 전까지 우리는 시간이 얼마나 있나요?'
        },
        {
          name:'Mary:',
          speech:'30분 있어요.'
        },
        {
          name:'Mark:',
          speech:'호수 근처로 가서 같이 메기 봐요.'
        },
        {
          name:'Mary:',
          speech:'오, 보세요. 물이 정말 맑아요. 물고기가 보여요. 정말 많네요.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Mark:',
          speech:'이봐, 소년! 양동이 안에 물고기 좀 있니?'
        },
        {
          name:'Boy:',
          speech:'아니요, 오늘은 운이 전혀 없어요.'
        },
        {
          name:'Mark:',
          speech:'그것은 행운으로 하는 게 아니지. 좋은 낚시꾼은 항상 고기를 잡아.'
        },
        {
          name:'Boy:',
          speech:'이 물고기들은 아니예요. 너무 똑똑해요.'
        },
        {
          name:'Mark:',
          speech:'여기, 그 낚시대를 줘봐.'
        },
        {
          name:'Boy:',
          speech:'물론입니다. 벌레도 가질 수 있습니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'Police Officer:',
          speech:'선생님, 표지에 낚시금지라고 되어있습니다. 읽을 줄 모르십니까?'
        },
        {
          name:'Mark:',
          speech:'어... 아니오, 안경이 없어서요. 안경 없이 물체를 볼 수 없습니다.'
        },
        {
          name:'Police Officer:',
          speech:'좋습니다. 이번에는 가십시요.'
        },
        {
          name:'Mark:',
          speech:'고맙습니다. 관리자님.'
        },
        {
          name:'Police Officer:',
          speech:'하지만 다음 번에는 안경을 착용하십시요.'
        },
        {
          name:'Mark:',
          speech:'네, Mary이리와요. 영화에 늦겠어요.'
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
