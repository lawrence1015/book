<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/flat-lay-sushi-arrangement-slate-background_23-2148224566.jpg">

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
        padding-bottom: 10px;">Going out for dinner
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Going out for dinner</li><br />

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
            What food do they want to have for dinner today?<br />
              그들은 오늘 저녁식사로 무슨 음식을 먹고 싶어합니까?<br />
          </li>
          <li>
            What do they want to do after dinner?<br />
              그들은 저녁 식사 후에 무엇을 하고 싶어합니까?<br />
          </li>
          <li>
            What time do they meet?<br />
              그들은 몇 시에 만납니까? <br />
          </li>
        </ol>
        <br />
        <p>
          Free response: <br />
          <br />
            What food would you like to try? Do you want to try Indian food?<br />

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
                      want to + verb; would like to + verb : ~ 하고 싶다<br />
                    </li>
                    <li>
                      to be in the mood for … : ~하고픈 기분인<br />
                    </li>
                    <li>
                      so : 대화의 문장 시작에서 'so' 는 그러면 이라고 해석이 됩니다<br />
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
          speech:'Say, would you like to go out to dinner tonight?'
        },
        {
          name:'B:',
          speech:'Sure. Where do you want to go?'
        },
        {
          name:'A:',
          speech:'Well, what do you think of Indian food?'
        },
        {
          name:'B:',
          speech:'I love it, but I’m not in the mood for Indian food today…'
        },
        {
          name:'A:',
          speech:'Yeah, me neither, I guess. It’s a bit spicy.'
        },
        {
          name:'B:',
          speech:'Hmm. How do you like Japanese food?'
        },
        {
          name:'A:',
          speech:'Oh, I like it a lot.'
        },
        {
          name:'B:',
          speech:'I know a nice Japanese restaurant near here ? it’s called Iroha.'
        },
        {
          name:'A:',
          speech:'Oh, I’d like to go there. I heard they make great sushi.'
        },
        {
          name:'B:',
          speech:'Yes, they do.'
        },
        {
          name:'A:',
          speech:'I want to try some sushi.'
        },
        {
          name:'B:',
          speech:'Terrific! Let’s go..'
        },
        {
          name:'A:',
          speech:'So do you want to eat early or late?'
        },
        {
          name:'B:',
          speech:'Let’s eat early. Then maybe we can go to a movie afterward.'
        },
        {
          name:'A:',
          speech:'Good idea! Why don’t we have dinner around 6:00?'
        },
        {
          name:'B:',
          speech:'Six is good. And where do you want to meet?'
        },
        {
          name:'A:',
          speech:'Let’s meet at the restaurant, OK?'
        },
        {
          name:'B:',
          speech:'Yeah, that’s fine with me.'
        },
        {
          name:'A:',
          speech:'OK, see you at 6 o’clock at the restaurant.'
        },
        {
          name:'B:',
          speech:'Yeah, see you.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'말해봐, 너는 오늘 밤 외식하고 싶니?(저녁식사를 나가서 먹고 싶니?)'
        },
        {
          name:'B:',
          speech:'물론이야. 어디로 가고 싶니?'
        },
        {
          name:'A:',
          speech:'글쎄, 인도음식에 대해 어떻게 생각해?'
        },
        {
          name:'B:',
          speech:'좋아해, 하지만 오늘은 인도음식을 먹고 싶은 마음이 없어...'
        },
        {
          name:'A:',
          speech:'응, 나도 그래, 그것은 조금 맵다고 생각해.'
        },
        {
          name:'B:',
          speech:'음. 일본음식은 어때?'
        },
        {
          name:'A:',
          speech:'오, 나는 일본 음식을  좋아해.'
        },
        {
          name:'B:',
          speech:'여기 근처에 좋은 일본 식당을 알고 있어 - Iroha라고 불려.'
        },
        {
          name:'A:',
          speech:'오, 거기 가고 싶다. 거기 스시를 잘 만든다고 들었어.'
        },
        {
          name:'B:',
          speech:'응, 그래'
        },
        {
          name:'A:',
          speech:'스시 좀 먹어보고 싶다.'
        },
        {
          name:'B:',
          speech:'좋아! 가자.'
        },
        {
          name:'A:',
          speech:'그럼 일찍 먹고 싶니 아니면 늦게 먹고 싶니?'
        },
        {
          name:'B:',
          speech:'일찍 먹으러 가자. 그러면 나중에 영화보러 갈 수도 있을거야.'
        },
        {
          name:'A:',
          speech:'좋은 생각이야! 6시경에 저녁 식사 하는거 어때?'
        },
        {
          name:'B:',
          speech:'6시면 좋아. 어디서 만날까?'
        },
        {
          name:'A:',
          speech:'식당에서 만나자, 괜찮아?'
        },
        {
          name:'B:',
          speech:'응, 난 괜찮아.'
        },
        {
          name:'A:',
          speech:'좋아, 6시에 그 식당에서 만나.'
        },
        {
          name:'B:',
          speech:'응, 잘가'
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
