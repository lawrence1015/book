<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/handsome-guy-study-library_1157-22194.jpg">

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
        padding-bottom: 10px;">Buying a book
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Buying a book</li><br />
      <p>
        George is at the bookshop. He wants to get Elizabeth a book for her birthday.<br />
        The other day Nancy recommended a book called The Return of the Prince.<br />
        But George was in a hurry and now he can’t remember anything she told him.<br />
        One of the salespeople is trying to help George.<br />
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
          <u>Answer the question</u><br />
          ( 질문에 답하시오 )
        </p>

        <ol style="margin: 12px;">
          <li>
            Does George want to buy a book for his mother?<br />
          </li>
          <li>
            What’s the title of the book Nancy recommended?<br />
          </li>
          <li>
            Do you think the saleswoman is smart? Why?<br />
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
 
            Do you read books a lot?<br />
            What book are you reading now?<br />
            Who’s the author and what’s the title of the book?<br />
            What is it about?<br />
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
          조지는 서점에 있어요. 그는 엘리자베스의 생일에 책을 사주고 싶어 합니다.<br/>
          요전 날 낸시는 "왕자의 귀환"이라는 책을 추천했습니다.<br />
          하지만 조지는 서두르고 있었고 지금은 그녀가 말한 어떤 것도 기억하지 못합니다.<br />
          판매원 중 한 명이 조지를 도우려고 노력하고 있습니다.<br />
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
                      수여동사 get  : get + 간접목적어 + 직접목적어 (= get + 직접목적어 + for + 간접목적어)<br />
                    </li>
                    <li>
                      긍정과 부정 : <br />
                        둘 중에서 - 전체 긍정 : both (둘 다 ~이다)<br />
                        전체 부정 : neither (둘 다 ~이 아니다)<br />
                        셋 이상에서 - 전체 긍정 : all (모두 다 ~이다)<br />
                        전체 부정 : none (어느 것도 ~이 아니다)<br />
                    </li>
                    <li>
                      must : 어떤 분명한 근거로 보아 '~임에 틀림없다'라고 확신할 때에도 쓰입니다.<br />
                        ex) She must be intelligent : 그녀는 영리함에 틀림없다<br />
                    </li>
                    <li>
                      on second thought : 다시 생각해보고<br />
                    </li>
                    <li>
                      whatever you say : 너가 말하는 것은 무엇이든지<br />
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
          speech:'Is it some kind of historical book?'
        },
        {
          name:'B:',
          speech:'No, it isn’t anything historical. It’s a new book by someone with a funny name.'
        },
        {
          name:'A:',
          speech:'Well, all new books are on this shelf. Is it one of these?'
        },
        {
          name:'B:',
          speech:'No, it’s none of those. But now I remember. The author’s name is Tom Katz.'
        },
        {
          name:'A:',
          speech:'Of course. We have two books by Tom Katz in the window. Which one do you want?'
        },
        {
          name:'B:',
          speech:'I still can’t remember.'
        },
        {
          name:'A:',
          speech:'Why don’t you take both of them?'
        },
        {
          name:'B:',
          speech:'I can’t, they’re too expensive and perhaps neither one of them is the one she wants.'
        },
        {
          name:'A:',
          speech:'Whatever you say. I think your girlfriend is very lucky. She must be intelligent, too.'
        },
        {
          name:'B:',
          speech:'You’re right, she is. But how did you know?'
        },
        {
          name:'A:',
          speech:'It’s obvious. She has such a pleasant, good-looking boyfriend.'
        },
        {
          name:'B:',
          speech:'Well, thank you. On second thought, I’ll take both books.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'역사책 같은 건가요?'
        },
        {
          name:'B:',
          speech:'아니요, 역사적인 건 없어요. 재미있는 이름을 가진 사람이 쓴 새 책이에요.'
        },
        {
          name:'A:',
          speech:'음, 모든 새 책들이 이 선반에 있어요. 이것들 중 하나인가요?'
        },
        {
          name:'B:',
          speech:'아뇨, 그런 건 없어요. 하지만 이제 기억나요. 그 작가의 이름은 Tom Katz입니다.'
        },
        {
          name:'A:',
          speech:'물론이죠. 창문에 Tom Katz가 쓴 책이 두 권 있습니다. 어떤 걸 원하세요?'
        },
        {
          name:'B:',
          speech:'아직도 기억이 안 나요.'
        },
        {
          name:'A:',
          speech:'두 개 다 사시지 그러세요?'
        },
        {
          name:'B:',
          speech:'안 돼요. 너무 비싸서 아마 둘 다 원하는 게 아닐 거예요.'
        },
        {
          name:'A:',
          speech:'당신이 뭐라고 하든요. 당신 여자친구는 정말 운이 좋은 것 같아요. 그녀도 똑똑해야 해요.'
        },
        {
          name:'B:',
          speech:'맞아요. 그런데 어떻게 알았어요?'
        },
        {
          name:'A:',
          speech:'뻔해요. 그녀는 정말 상냥하고 잘생긴 남자친구가 있잖아요.'
        },
        {
          name:'B:',
          speech:'음, 고마워요. 다시 생각해 보니, 두 권 다 가져갈게요.'
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
