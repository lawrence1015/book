<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/mixed-salad-bar_1339-8275.jpg">

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
        padding-bottom: 10px;">Which one?
        </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Which one?</li><br />

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
          (질문에 답하세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            What would you like? (cookie, ice-cream, pizza, apple)<br />
              Which one would you like? (small/big; vanilla/chocolate; hot/cold; red/green)<br />
              Ex) I’d like a cookie. I’d like the small one.<br />
          </li>

          <v-container grid-list-md text-xs-center>
            <v-layout wrap align-content-center>
            
            <v-flex xs12 md8>
            <v-card hover>
            
            <v-img src="images/dialogue-dessert-unit21.png" />
            
            </v-card>
            </v-flex>
            
            </v-layout>
            </v-container>
            
            <br />

          <li>
            What would you like? (some pens, envelopes, notepads, computers)<br />
              Which ones would you like? (small/large; plain/lined; black and white/color)<br />
              Ex) I’d like some computers. I’d like the black and white ones.<br />
          </li>

          <v-container grid-list-md text-xs-center>
            <v-layout wrap align-content-center>
            
            <v-flex xs12 md8 >
            <v-card hover>
            
            <v-img src="images/dialogue-office-unit21.png" />
            
            </v-card>
            </v-flex>
            
            </v-layout>
            </v-container>

        </ol>
<br />
        <p>
          Vocabulary: <br />
          hot, envelop, notepad, large, plain, lined, black and white<br />
          <br />
          어휘:<br />
          뜨거운, 봉투,  메모첩, 큰, 평의한(장식이없는), 줄을친, 흑백<br />
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
                      one : 앞에서 언급된 명사와 같은 종류임을 나타낼 때 쓰이고 복수 명사는 ones로 대신합니다.<br />
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
          speech:'Hi, George. It’s a great party.'
        },
        {
          name:'B:',
          speech:'Thank you. How about some more salad?'
        },
        {
          name:'A:',
          speech:'Thanks.'
        },
        {
          name:'B:',
          speech:'Which plate is yours?'
        },
        {
          name:'A:',
          speech:'That one’s mine.'
        },
        {
          name:'B:',
          speech:'Which one?'
        },
        {
          name:'A:',
          speech:'The empty one!'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'B:',
          speech:'Charles and Lucy would like some more coffee.'
        },
        {
          name:'C:',
          speech:'OK. Which mugs are theirs?'
        },
        {
          name:'B:',
          speech:'Uh, the blue one’s his, and the white one’s hers.'
        },
        {
          name:'C:',
          speech:'Are you sure?'
        },
        {
          name:'B:',
          speech:'Um, I don’t know.'
        },
        {
          name:'C:',
          speech:'George! Give them fresh mugs. There are some on the shelf.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'D:',
          speech:'Good night and thanks for a lovely evening.'
        },
        {
          name:'B:',
          speech:'Now, which coats are yours?'
        },
        {
          name:'D:',
          speech:'Those coats are ours.'
        },
        {
          name:'B:',
          speech:'Which ones?'
        },
        {
          name:'D:',
          speech:'The black one and the gray one.'
        },
        {
          name:'B:',
          speech:'Ah, yes...'
        },
        {
          name:'D:',
          speech:'Thanks. The gray one’s mine, and the black one’s hers.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'안녕, George. 훌륭한 파티야'
        },
        {
          name:'B:',
          speech:'고마워. 샐러드를 더 하는게 어때?'
        },
        {
          name:'A:',
          speech:'고마워.'
        },
        {
          name:'B:',
          speech:'어떤 것이 네 접시니?'
        },
        {
          name:'A:',
          speech:'그게 내 접시야.'
        },
        {
          name:'B:',
          speech:'어떤 접시?'
        },
        {
          name:'A:',
          speech:'비어있는 접시!'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'B:',
          speech:'Charles과 Lucy는 커피를 조금 더 원해요.'
        },
        {
          name:'C:',
          speech:'좋아요. 어떤 것이 그들의 컵인가요?'
        },
        {
          name:'B:',
          speech:'어, 파란색 컵이 그의 것이고 하얀색 컵이 그녀의 것이에요.'
        },
        {
          name:'C:',
          speech:'확실한가요?'
        },
        {
          name:'B:',
          speech:'음, 잘 모르겠어요.'
        },
        {
          name:'C:',
          speech:'George! 그들에게 새로운 컵을 주세요. 선반 위에 몇 개가 있어요.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'D:',
          speech:'잘 자 멋진 저녁 고마웠어.'
        },
        {
          name:'B:',
          speech:'그런데, 어떤 코트가 너희들 것이니?'
        },
        {
          name:'D:',
          speech:'그 코트들이 우리 거야.'
        },
        {
          name:'B:',
          speech:'어떤 코트?'
        },
        {
          name:'D:',
          speech:'검은색 코트와 회색 코트.'
        },
        {
          name:'B:',
          speech:'아, 그렇구나...'
        },
        {
          name:'D:',
          speech:'고마워.  회색 코트는 내 것이고 검정 코트는 그녀의 것이야 .'
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
