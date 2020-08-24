<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/friends-singing-karaoke-party_23-2148115680.jpg">

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
        padding-bottom: 10px;">Karaoke
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Karaoke</li><br />

      <p>
        Lemon Computers, Inc., always has an end-of-the-year party for its workers.<br />
        They usually have dinner and then they dance. This year they’re doing something different. <br />
        They’re having a karaoke party.<br />
      </p>

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
            I <u> &emsp; &emsp; &emsp; </u> in the shower.<br />
              저는 샤워할 때 주로 노래를 합니다.<br />
          </li>
          <li>
            I don't like jazz. I <u> &emsp; &emsp; &emsp; </u> listen to jazz. <br />
              저는 재즈를 좋아하지 않습니다. 저는 재즈 거의 재즈를 듣지 않습니다. <br />
          </li>
          <li>
            Why do you <u> &emsp; &emsp; &emsp; </u> lie to me? <br />
              왜 당신은 항상 저에게 거짓말을 합니까? <br />
          </li>
          <li>
            I <u> &emsp; &emsp; &emsp; </u> lie, but not always! <br />
              전 때때로 거짓말을 합니다만 항상 그렇지는 않아요! <br />
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
          주식회사 Lemon Computer는 항상 직원을 위한 연말 파티를 가집니다.<br />
          그들은 주로 저녁을 먹고 그리고 나서 그들은 춤을 춥니다. 올 해에 그들은 뭔가 다른 것을 하려고 합니다.<br />
          가라오케 파티를 가질 예정입니다. <br />
        </p>

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
                      빈도부사 : 어떤 일이 얼마나 자주 일어나는가를 나타내는 말로 be동사, 조동사 뒤에 일반동사 앞에 쓰입니다.<br />
                        always(항상) > usually(대개,보통) > often(종종) > sometimes(때때로) > rarely(드물게, 좀처럼~않다) > never(결코~않다) <br />
                    </li>
                    <li>
                      ever : 의문문에서 언젠가,일찍이 / 부정문에서 not ever 로 never의 뜻이 되어 결코~않다긍정문에서 언제나, 항상으로 해석이 됩니다.<br />
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
          speech:'Come on, Brittany. Sing us a song!'
        },
        {
          name:'B:',
          speech:'No way!'
        },
        {
          name:'A:',
          speech:'Why not?'
        },
        {
          name:'B:',
          speech:'I never sing in public!'
        },
        {
          name:'A:',
          speech:'But you CAN sing.'
        },
        {
          name:'B:',
          speech:'Well, I often sing in the car. But that’s different. I’m on my own then.'
        },
        {
          name:'A:',
          speech:'Only in the car?'
        },
        {
          name:'B:',
          speech:'Well, I sometimes sing in the shower.'
        },
        {
          name:'A:',
          speech:'Well, there you go. You CAN sing.'
        },
        {
          name:'B:',
          speech:'Travis, I really don’t want to.'
        },
        {
          name:'A:',
          speech:'What’s your favorite song?'
        },
        {
          name:'B:',
          speech:'I don’t know. I hardly ever listen to rock music. I usually listen to opera.'
        },
        {
          name:'A:',
          speech:'They don’t have opera Brittany. You know that. Come on! Think of a song.'
        },
        {
          name:'B:',
          speech:'Oh, all right!'
        },
        {
          name:'A:',
          speech:'Ladies and gentlemen! Our next singer is Brittany Young from the Sales Division…'
        },
        {
          name:'B:',
          speech:'You always ask me questions. I never tell you lies…'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'이봐, Brittany. 우리에게 노래 좀 불러줘!'
        },
        {
          name:'B:',
          speech:'절대로 안돼!'
        },
        {
          name:'A:',
          speech:'왜 안돼?'
        },
        {
          name:'B:',
          speech:'나는 절대로 대중 앞에서 노래하지 않아!'
        },
        {
          name:'A:',
          speech:'하지만 넌 노래할 수 있어.'
        },
        {
          name:'B:',
          speech:'글쎄, 나는 주로 차 안에서 노래해. 하지만 그것은 다르잖아. 나는 혼자서만 한단 말이야.'
        },
        {
          name:'A:',
          speech:'차 안에서만?'
        },
        {
          name:'B:',
          speech:'글쎄, 나는 가끔 샤워할 때 노래해.'
        },
        {
          name:'A:',
          speech:'그럼, 하면 되지. 넌 노래할 수 있어.'
        },
        {
          name:'B:',
          speech:'Travis, 난 정말로 하고 싶지 않아.'
        },
        {
          name:'A:',
          speech:'너가 가장 좋아하는 노래가 뭐니'
        },
        {
          name:'B:',
          speech:'모르겠어. 난 거의 락음악을 들어본 적이 없어. 나는 주로 오페라를 들어.'
        },
        {
          name:'A:',
          speech:'오페라는 없어 Brittany. 너 그거 알잖아. 자! 곡 좀 생각해봐.'
        },
        {
          name:'B:',
          speech:'오, 알았어!'
        },
        {
          name:'A:',
          speech:'신사숙녀 여러분! 다음 노래할 사람은 판매부 출신의 Brittany Young입니다.'
        },
        {
          name:'B:',
          speech:'넌 항상 나에게 질문을 해. 난 절대 거짓말 할 수 없어. (노래중)'
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
