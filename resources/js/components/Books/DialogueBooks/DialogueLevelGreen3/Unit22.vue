<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/spacious-hall-with-big-couch_1203-1483.jpg">

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
        padding-bottom: 10px;">The life of Bob Moore – Looking for new apartment
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">The life of Bob Moore – Looking for new apartment</li><br />
      <p>
        Bob came home after working hard the whole day.<br/>
        He’s very hungry but the refrigerator is empty. Ed and Brutus ate everything.<br/>
        Bob is very upset because Ed never buys any food by himself.<br />
        Bob packed his suitcase and walked out of the apartment angrily.<br />
        He bought a newspaper and he’s trying to find an apartment now.<br />
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
        </p>

        <ol style="margin: 12px;">
          <li>
            Why is Bob upset?<br />
          </li>
          <li>
            What is he trying to do now?<br />
          </li>
          <li>
            How much is the rent of the new apartment?<br />
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
        <p>
          Bob은 하루 종일 열심히 일하고 집에 왔다.<br/>
          그는 매우 배가 고픈데 냉장고가 비어 있다. Ed와 Brutus가 모든 것을 먹었어요.<br/>
          Bob은 Ed가 혼자서 어떤 음식도 사지 않기 때문에 매우 화가 났다.<br />
          Bob은 여행 가방을 싸서 화가 나서 아파트를 걸어나갔다.<br />
          그는 신문을 사서 지금 아파트를 찾으려 하고 있다.<br />
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
                      to take a look at … : ~을 보다<br />                 
                    </li>
                    <li>
                      to try to find : ~을 찾아 보다<br />
                    </li>
                    <li>
                      by himself (by myself / by yourself / by themselves / ...) : 혼자서<br />
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
          name:'Bob:',
          speech:'Hello, can I speak to Miss Blake, please?'
        },
        {
          name:'Blake:',
          speech:'Yes, this is Peg Blake speaking.'
        },
        {
          name:'Bob:',
          speech:'Are you the manager of the Sherwood Oaks Apartments?'
        },
        {
          name:'Blake:',
          speech:'That’s right. What can I do for you?'
        },
        {
          name:'Bob:',
          speech:'I’m calling about the apartment you have for rent. Is it still available?'
        },
        {
          name:'Blake:',
          speech:'Yes, it is. Why don’t you come and take a look?'
        },
        {
          name:'Bob:',
          speech:'OK, but I want to ask you some questions first.'
        },
        {
          name:'Blake:',
          speech:'Sure, what do you want to know?'
        },
        {
          name:'Bob:',
          speech:'Your ad says the rent is six hundred dollars a month. Does that include utilities?'
        },
        {
          name:'Blake:',
          speech:'The water is included. But you have to pay for gas and electricity.'
        },
        {
          name:'Bob:',
          speech:'Is the apartment furnished?'
        },
        {
          name:'Blake:',
          speech:'Yes. There’s a bed, sofa, dining table and two chairs.'
        },
        {
          name:'Bob:',
          speech:'That’s good. Does the apartment have a view?'
        },
        {
          name:'Blake:',
          speech:'Yes. There’s an interesting view from the bedroom window.'
        },
        {
          name:'Bob:',
          speech:'Great. When can I see the apartment?'
        },
        {
          name:'Blake:',
          speech:'I’m here all day. Come anytime you like.'
        },
        {
          name:'Bob:',
          speech:'I’m coming now.'
        },
        {
          name:'Blake:',
          speech:'Wait a minute. What’s your name?'
        },
        {
          name:'Bob:',
          speech:'Robert Moore.'
        },
        {
          name:'Blake:',
          speech:'See you soon, Robert. Bye-Bye.'
        },
        ],

        translations:[
        {
          name:'Bob:',
          speech:'여보세요, Blake 양 좀 바꿔 주시겠어요?'
        },
        {
          name:'Blake:',
          speech:'네, 저는 Peg Blake입니다.'
        },
        {
          name:'Bob:',
          speech:'셔우드 오크스 아파트 관리인이신가요?'
        },
        {
          name:'Blake:',
          speech:'맞습니다. 무엇을 도와드릴까요?'
        },
        {
          name:'Bob:',
          speech:'집세 때문에 가지고 계신 아파트 때문에 전화드렸습니다. 아직 이용할 수 있나요?'
        },
        {
          name:'Blake:',
          speech:'네, 그렇습니다. 와서 한 번 봐보는 건 어때요?'
        },
        {
          name:'Bob:',
          speech:'네, 하지만 먼저 몇 가지 질문을 드리고 싶습니다.'
        },
        {
          name:'Blake:',
          speech:'그럼요, 뭘 알고 싶으세요?'
        },
        {
          name:'Bob:',
          speech:'당신 광고에 의하면 집세는 한 달에 600달러라고 하던데요. 공공요금이 포함되어 있나요?'
        },
        {
          name:'Blake:',
          speech:'물이 포함되어 있습니다. 하지만 당신은 가스와 전기료를 지불해야 합니다.'
        },
        {
          name:'Bob:',
          speech:'그 아파트는 가구가 비치되어 있나요?'
        },
        {
          name:'Blake:',
          speech:'그래요. 침대, 소파, 식탁, 의자 두 개가 있습니다.'
        },
        {
          name:'Bob:',
          speech:'잘됐군요. 그 아파트는 전망이 좋습니까?'
        },
        {
          name:'Blake:',
          speech:'그래요. 침실 창문에서 흥미로운 경치가 보입니다.'
        },
        {
          name:'Bob:',
          speech:'좋아요. 그 아파트는 언제 볼 수 있나요?'
        },
        {
          name:'Blake:',
          speech:'하루 종일 여기 있어요. 아무 때나 좋으실 때 오세요.'
        },
        {
          name:'Bob:',
          speech:'지금 갑니다.'
        },
        {
          name:'Blake:',
          speech:'잠깐만요. 성함이 어떻게 되세요?'
        },
        {
          name:'Bob:',
          speech:'로버트 무어입니다.'
        },
        {
          name:'Blake:',
          speech:'곧 만나요, 로버트.'
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
