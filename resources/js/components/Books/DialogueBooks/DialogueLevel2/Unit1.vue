<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://img.freepik.com/free-photo/healthy-school-lunch-box-with-beef-sandwich-fresh-vegetables-bottle-water-fruits-blue-table-top-view-flat-lay_2829-17291.jpg?size=626&ext=jpg">

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
        padding-bottom: 10px;">Help yourself
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

    <li style="list-style-type: none;">Help yourself</li><br />

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
            What do you  <u> &emsp; &emsp; &emsp; </u> for breakfast? <br />
            아침식사로 무엇을 원하십니까?<br />
          </li>
          <li>
            I want an omelet. It's my <u> &emsp; &emsp; &emsp; </u> breakfast dish. <br />
            저는 오믈렛을 원합니다. 그것은 제가 가장 좋아하는 아침식사 요리입니다.<br />
          </li>
          <li>
            I <u> &emsp; &emsp; &emsp; </u> like omelets. I like bacon. <br />
            저는 오믈렛을 좋아하지 않습니다. 저는 베이컨을 좋아합니다.<br />
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

          <tr v-for="translation in translations"  :key="translation">
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
                      What's your favorite...? 너가 가장 좋아하는 (  )는 뭐니?<br />
                    </li>
                    <li>
                      enjoy oneself : 즐거운 시간을 보내다 / make yourself at home : 맘 편히 쉬세요<br />
                        help yourself to : ~을 마음대로 먹다 / Do I make myself clear? : 내 말 똑바로 알아들었지?<br />
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
          speech:'Hi, Andrew. Are you thirsty? Do you want a glass of water?'
        },
        {
          name:'B:',
          speech:'Yes, please. Do you have some ice?'
        },
        {
          name:'A:',
          speech:'Here, help yourself. Are you hungry?'
        },
        {
          name:'B:',
          speech:'What do you have?'
        },
        {
          name:'A:',
          speech:'I have a sandwich. Do you want a sandwich?'
        },
        {
          name:'B:',
          speech:'What kind of sandwich is it?'
        },
        {
          name:'A:',
          speech:'Let’s see. It’s a tuna sandwich.'
        },
        {
          name:'B:',
          speech:'Fine. I like tuna. What about you? Are you not hungry?'
        },
        {
          name:'A:',
          speech:'Oh, I’m OK. Don’t worry about me.'
        },
        {
          name:'B:',
          speech:'Listen, do you like baseball?'
        },
        {
          name:'A:',
          speech:'Of course, it’s my favorite sport! Why?'
        },
        {
          name:'B:',
          speech:'I have two tickets for tonight’s game. Do you want them?'
        },
        {
          name:'A:',
          speech:'Wow, thanks a lot!'
        },
        {
          name:'B:',
          speech:'You’re welcome.'
        },
        {
          name:'A:',
          speech:'But, why don’t you go to the game?'
        },
        {
          name:'B:',
          speech:'I don’t like baseball very much.'
        },
        {
          name:'A:',
          speech:'I see. So what’s your favorite sport?'
        },
        {
          name:'B:',
          speech:'I love tennis. It’s very exciting.'
        },
        {
          name:'A:',
          speech:'Who’s your favorite athlete?'
        },
        {
          name:'B:',
          speech:'Federer. He’s amazing on the court.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'안녕, Andrew. 목 마르니? 물 한 컵 마실래?'
        },
        {
          name:'B:',
          speech:'응, 부탁해. 얼음 좀 있니?'
        },
        {
          name:'A:',
          speech:'여기 있어. 마음껏 마셔. 너 배고프니?'
        },
        {
          name:'B:',
          speech:'뭐가 있는데?'
        },
        {
          name:'A:',
          speech:'샌드위치 있어. 샌드위치 먹을래?'
        },
        {
          name:'B:',
          speech:'무슨 종류의 샌드위치야?'
        },
        {
          name:'A:',
          speech:'어디보자. 참치 샌드위치야.'
        },
        {
          name:'B:',
          speech:'좋아. 나는 참치를 좋아해. 너는 어때? 배 안 고파?'
        },
        {
          name:'A:',
          speech:'오, 난 괜찮아. 나는 걱정하지마.'
        },
        {
          name:'B:',
          speech:'들어봐, 너 야구 좋아하니?'
        },
        {
          name:'A:',
          speech:' 물론이야, 야구는 내가 가장 좋아하는 스포츠야! 왜?'
        },
        {
          name:'B:',
          speech:'오늘 밤 경기 티켓이 두 장 있어. 너 갖고 싶니?'
        },
        {
          name:'A:',
          speech:'와우, 너무 고마워'
        },
        {
          name:'B:',
          speech:'천만에'
        },
        {
          name:'A:',
          speech:'게임하러 가는것 어때?'
        },
        {
          name:'B:',
          speech:'나는 야구를 그렇게 좋아하지 않아.'
        },
        {
          name:'A:',
          speech:'그렇구나. 그럼 너가 가장 좋아하는 스포츠는 뭐니?'
        },
        {
          name:'B:',
          speech:'나는 테니스를 좋아해. 그건 매우 흥미 진진해.'
        },
        {
          name:'A:',
          speech:'너가 가장 좋아하는 선수가 누구니?'
        },
        {
          name:'B:',
          speech:'Ferderer야. 그는 코트에서 놀라워'
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
