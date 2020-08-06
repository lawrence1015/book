<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/side-view-couple-during-dinner_23-2148060557.jpg">

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
        padding-bottom: 10px;">Dinner with a star
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Dinner with a star</li><br />
      <p>
        Harriet Dormer won a magazine contest. The prize was dinner in Hollywood with a movie star.<br />
        She's having dinner with Kevin Costley, an actor.<br />
      </p>
      <br />
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
          ( 질문에 답하시오 )<br />
        </p>

        <ol style="margin: 12px;">
          <li>
            What does Harriet usually eat on Mondays? <br />
              Harriet는 월요일마다 주로 무엇을 먹습니까? <br />
          </li>
          <li>
            What’s she eating tonight? <br />
              그녀는 오늘밤 무엇을 먹고 있습니까? <br />
          </li>
          <li>
            What’s her husband doing now?<br />
              그녀는 남편은 지금 무엇을 하고 있습니까? <br />
          </li>
        </ol>
        <br />
        <p>
          Free response: <br />
          <br />
            Would you like to meet a movie star? Who?<br />
            What would you ask him/her?<br />
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
        <p>
          Harriet Dormer는 잡지 경연에서 이겼습니다. 상은 Hollywood에서 영화배우와 함께 저녁식사를 하는 것이었습니다. <br />
          그녀는 배우 Kevin Costley와 함께 저녁을 먹고 있습니다.<br />Harriet Dormer는 잡지 경연에서 이겼습니다. 상은 Hollywood에서 영화배우와 함께 저녁식사를 하는 것이었습니다. 그녀는 배우 Kevin Costley와 함께 저녁을 먹고 있습니다.
        </p>
        <br />
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
                      on Sundays : <br />
                        on Sunday는 일요일에 이지만 on Sundays처럼 뒤에 s가 붙으면 every Sunday(매주 일요일)와 같은 뜻이 됩니다.<br />
                    </li>
                    <li>
                      on Sundays : <br />
                        ex) I want to buy a car (나는 자동차를 사기를 원한다) <br />
                    </li>
                    <li>
                      want to + verb; would like to + verb : ~ 하고 싶다<br />
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
          name:'Harriet:',
          speech:'Why, Mr. Costley, this is a change. I don’t usually eat in restaurants, you know.'
        },
        {
          name:'Kevin:',
          speech:'Well, you’re eating in a restaurant tonight. Do you like it?'
        },
        {
          name:'Harriet:',
          speech:'Ooh, yes, Mr. Costley. It’s wonderful.'
        },
        {
          name:'Kevin:',
          speech:'Please don’t call me Mr. Costley. My friends always call me Kevin.'
        },
        {
          name:'Harriet:',
          speech:'All right… Kevin. And we’re having filet mignon. I normally have franks and beans on Mondays. You see, my husband doesn’t like restaurants.'
        },
        {
          name:'Kevin:',
          speech:'Would you like a drink? Champagne, maybe?'
        },
        {
          name:'Harriet:',
          speech:'Oh, I never drink alcohol. A diet soda, please.'
        },
        {
          name:'Kevin:',
          speech:'Fine. I’d like a diet soda, too. I’m filming tonight.'
        },
        {
          name:'Harriet:',
          speech:'Uh, Kevin… can I ask you a question?'
        },
        {
          name:'Kevin:',
          speech:'Sure, Harriet.'
        },
        {
          name:'Harriet:',
          speech:'Well, it’s very difficult.'
        },
        {
          name:'Kevin:',
          speech:'Go ahead. Ask me.'
        },
        {
          name:'Harriet:',
          speech:'Well, I read some stories in The National Questioner about you, and you’re my favorite actor and all, and I just wanted to ask you…'
        },
        {
          name:'Kevin:',
          speech:'Yes?'
        },
        {
          name:'Harriet:',
          speech:'Well, is that really your hair or is it a wig? Oh, I’m sorry. That wasn’t very polite.'
        },
        {
          name:'Kevin:',
          speech:'That’s OK. It’s all mine. You can try it. Give it a good pull… Argh!'
        },
        {
          name:'Harriet:',
          speech:'Yes, it’s yours. I’m very sorry.'
        },
        ],

        translations:[
        {
          name:'Harriet:',
          speech:'어머, 코스틀리씨. 이것은 변화예요. 저는 보통 식당에서 식사를 하지않아요.'
        },
        {
          name:'Kevin:',
          speech:'그럼, 오늘 밤 당신은 식당에서 식사를 하고 있군요. 좋으세요?'
        },
        {
          name:'Harriet:',
          speech:'아, 예, 코스틀리씨. 멋져요.'
        },
        {
          name:'Kevin:',
          speech:'코스틀리씨라고 부르지 마세요. 제 친구들은 저를 항상 케빈이라고 불어요.'
        },
        {
          name:'Harriet:',
          speech:'좋아요... Kevin. 우리는 필레 살을 먹고 있네요. 저는 보통 월요일마다 후랑크 소시지와 콩을 먹어요. 아실지 모르겠지만, 제 남편은 식당을 좋아하지 않아요.'
        },
        {
          name:'Kevin:',
          speech:'뭐 좀 마실래요? 샴페인?'
        },
        {
          name:'Harriet:',
          speech:'오, 저는 술을 전혀 안해요. 다이어트 소다 부탁해요.'
        },
        {
          name:'Kevin:',
          speech:'좋아요. 저도 다이어트 소다로 하고 싶습니다. 저는 오늘밤 촬영할거예요.'
        },
        {
          name:'Harriet:',
          speech:'어, 케빈... 뭐 하나 물어봐도 되요?'
        },
        {
          name:'Kevin:',
          speech:'물론이에요, Harriet.'
        },
        {
          name:'Harriet:',
          speech:'이건 좀 어려운건데요'
        },
        {
          name:'Kevin:',
          speech:'괜찮아요. 물어봐요.'
        },
        {
          name:'Harriet:',
          speech:'저, National Questioner라는 잡지에서 당신에 대한 기사를 읽었는데 당신은 제가 좋아하는 배우이고 해서, 그냥 물어보고 싶은 것이 있었는데요.'
        },
        {
          name:'Kevin:',
          speech:'네?'
        },
        {
          name:'Harriet:',
          speech:'어, 그거 정말 당신 머리예요 아니면 가발이예요? 오, 죄송해요. 무례했죠.'
        },
        {
          name:'Kevin:',
          speech:'괜찮아요. 다 제 머리예요. 해 보세요. 당겨보세요... 아!'
        },
        {
          name:'Harriet:',
          speech:'네, 당신 것이 맞네요. 죄송해요.'
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
