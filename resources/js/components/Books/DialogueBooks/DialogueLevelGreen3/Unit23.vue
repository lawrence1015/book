<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/crane-grab-scrap_1112-1220.jpg">

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
        padding-bottom: 10px;">The life of Bob Moore – Nice view
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Buying GroceriesThe life of Bob Moore – Nice view</li><br />
      <p>
        Five minutes after his telephone conversation with Miss Blake, Bob arrives at the Sherwood Oaks Apartments. <br />
        He meets Blake, and she shows him the apartment. It’s dark inside, with just one small light-bulb hanging from the ceiling. <br />
        He looks around the room and his mouth drops open. <br />
        Everything in the apartment is in bad condition – the furniture is broken, the walls have cracks and the roof leaks.<br />
        Bob looks down and sees a large bucket on the floor. It’s full of water.<br/>
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
            Why did Bob’s mouth drop when he saw the apartment? <br />
          </li>
          <li>
            Did Bob like the view? Why not?<br />
          </li>
          <li>
            Are there bad apartments like this in your city, too?<br />
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
          Blake 양과 전화 통화를 한 지 5분 후, Bob은 셔우드 오크스 아파트에 도착한다.<br />
          그는 Blake를 만나고, 그녀는 그에게 아파트를 보여준다. 천장에 작은 전구 하나만 매달려 있는, 안은 어둡다.<br />
          He looks around the room and his mouth drops open. 그가 방안을 둘러보더니 입이 딱 벌어진다.<br />
          가구는 부서지고 벽은 금이 가고 지붕은 새는 등 아파트의 모든 것이 좋지 않다.<br />
          Bob은 아래를 내려다보니 바닥에 커다란 양동이 하나가 놓여 있다. 물이 가득하다.<br/>
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
                        to be full of ~ : ~으로 가득찬<br />
                      </li>
                      <li>
                        "Here we go" : 자 여기 있습니다<br />
                      </li>
                      <li>
                        to look like ~ : ~처럼 보이다<br />
                      </li>
                      <li>
                        to be in bad condition : 건강하지 않다.(몸이 안 좋다)<br />
                      </li>
                      <li>
                        "his mouth drops open" : 놀라서 입이 벌어지다<br />
                      </li>
                      <li>
                        the rest of ~ : ~의 나머지 부분<br />
                      </li>
                      <li>
                        "it doesn't make any difference" : 아무런 상관이 없다<br />
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
          name:'Peg:',
          speech:'Don’t worry. We’re going to repair the roof.'
        },
        {
          name:'Bob:',
          speech:'When?'
        },
        {
          name:'Peg:',
          speech:'Soon. Maybe this summer. Anyway, it’s not a big problem.'
        },
        {
          name:'Bob:',
          speech:'What do you mean?'
        },
        {
          name:'Peg:',
          speech:'Look, the water only drips during the rainy season, and it only drips in the living room. The rest of the apartment is dry.'
        },
        {
          name:'Bob:',
          speech:'I’m glad to know that. Can I see the bedroom now?'
        },
        {
          name:'Peg:',
          speech:'Yes, of course. The bedroom is over here.'
        },
        {
          name:'Bob:',
          speech:'The bed doesn’t look very comfortable.'
        },
        {
          name:'Peg:',
          speech:'Well, it is a little soft. But when you’re tired, it doesn’t make any difference, right?'
        },
        {
          name:'Bob:',
          speech:'Why are the curtains closed? Are you trying to hide something?'
        },
        {
          name:'Peg:',
          speech:'Not at all. Do you want to see the view?'
        },
        {
          name:'Bob:',
          speech:'Please.'
        },
        {
          name:'Peg:',
          speech:'Here we go.'
        },
        {
          name:'Bob:',
          speech:'Oh my! It’s … it’s a junkyard. And there’s a big dog sitting on top of one of the cars. It looks like Brutus!'
        },
        {
          name:'Peg:',
          speech:'Well, it’s not that bad. The dog is very quiet, you know…'
        },
        ],

        translations:[
        {
          name:'Peg:',
          speech:'걱정하지 마세요. 우리는 지붕을 수리할 거예요.'
        },
        {
          name:'Bob:',
          speech:'언제요?'
        },
        {
          name:'Peg:',
          speech:'곧요. 아마 이번 여름일 거예요. 어쨌든 큰 문제는 아닙니다.'
        },
        {
          name:'Bob:',
          speech:'무슨 뜻이에요?'
        },
        {
          name:'Peg:',
          speech:'보세요, 물은 장마철에만 떨어지고, 비가 올 때만 내려요. 거실. 나머지 아파트는 건조합니다. (please double check the translation~~)'
        },
        {
          name:'Bob:',
          speech:'그걸 알게 되어 기뻐요. 지금 침실을 볼 수 있을까요?'
        },
        {
          name:'Peg:',
          speech:'네, 물론이죠. 침실은 이쪽에 있습니다.'
        },
        {
          name:'Bob:',
          speech:'침대가 별로 편안해 보이지 않아요.'
        },
        {
          name:'Peg:',
          speech:'음, 좀 부드러워요. 하지만 피곤할 때는 별 차이가 없어요 그렇죠?'
        },
        {
          name:'Bob:',
          speech:'왜 커튼이 닫혀 있죠? 뭔가 숨기려는 거예요?'
        },
        {
          name:'Peg:',
          speech:'전혀요. 경치를 보시겠어요?'
        },
        {
          name:'Bob:',
          speech:'제발요.'
        },
        {
          name:'Peg:',
          speech:'갑니다.'
        },
        {
          name:'Bob:',
          speech:'세상에!, 이런!, 이런!, 이런!, 이런!, 이런!, 폐차장이에요. 그리고 그 위에 커다란 개가 앉아 있습니다. 차들이요 브루투스처럼 생겼어요!'
        },
        {
          name:'Peg:',
          speech:'음, 그렇게 나쁘진 않아요. 그 개는 매우 조용해요.'
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
