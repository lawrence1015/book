<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://i.pinimg.com/originals/2b/cd/d1/2bcdd155c526acbd18b154048c7d13c8.jpg">

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
        padding-bottom: 10px;">The Life of Bob Moore – Lucky day
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br />( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">The Life of Bob Moore – Lucky day</li><br />

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
            Is Bob going to take the apartment? What is he going to do?<br />
          </li>
          <li>
            Is Bob happy that Peg knows his uncle?<br />
          </li>
          <li>
            Is Ed an old schoolmate of Peggy’s?<br />
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
                      without ~ : ~없이<br />
                    </li>
                    <li>
                      "this sure is my lucky day" : 정말 운 좋은 날이다 (바라는대로 되지 않고 반대로 일이 일어날 때 빈정대며 하는 말)<br />
                        “That was smart of me.”(뭔가를 잃어버렸을 때 자신에게 하는 말)<br />
                        “Don’t work too hard.”(게으른 사람에게 빈정대며 하는 말)<br />
                    </li>
                    <li>
                      "I can't wait to see him again" : 그가 다시 보고 싶어 참을 수가 없다<br />
                    </li>
                    <li>
                      in fact : 실은, 실제로<br />
                    </li>
                    <li>
                      "isn’t it a small world" : 세상이 좁지 않아?<br />
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
          speech:'Well, how do you like the apartment?'
        },
        {
          name:'Bob:',
          speech:'Hmm… I don’t think this is the right apartment for me.'
        },
        {
          name:'Peg:',
          speech:'Why not?'
        },
        {
          name:'Bob:',
          speech:'Well, six hundred dollars is a lot of money. I don’t think I can afford to pay the rent.'
        },
        {
          name:'Peg:',
          speech:'Look, the water only drips during the rainy season, and it only drips in the living room. The rest of the apartment is dry. Why didn’t you think of that before you came here?'
        },
        {
          name:'Bob:',
          speech:'Well, to be honest, this apartment isn’t very good. In fact, it’s terrible. I’m going to stay with my uncle Ed. Good-bye.'
        },
        {
          name:'Peg:',
          speech:'Wait a minute. Your uncle’s name is Ed? Ed Moore?'
        },
        {
          name:'Bob:',
          speech:'That’s right. Why?'
        },
        {
          name:'Peg:',
          speech:'This is unbelievable. Ed Moore is my old boyfriend. We were high school sweethearts.'
        },
        {
          name:'Bob:',
          speech:'Oh, no, you’re mistaken. It must be different Ed Moore. You see, my uncle is a bum. He never does anything.'
        },
        {
          name:'Peg:',
          speech:'That’s him! And you’re his nephew. Isn’t it a small world?'
        },
        {
          name:'Bob:',
          speech:'I’m sorry. I have to go now.'
        },
        {
          name:'Peg:',
          speech:'You can’t leave without giving me your address.'
        },
        {
          name:'Bob:',
          speech:'Hmm, I don’t know if this is a good idea…'
        },
        {
          name:'Peg:',
          speech:'Come on, you can tell me.'
        },
        {
          name:'Bob:',
          speech:'Oh, all right. It’s 105 Lounger Street.'
        },
        {
          name:'Peg:',
          speech:'I’m so happy. I can’t wait to see Eddie again. I’m going to come and visit you.'
        },
        {
          name:'Bob:',
          speech:'Oh, wonderful. This sure is my lucky day…'
        },
        ],

        translations:[
        {
          name:'Peg:',
          speech:'음, 아파트는 어때요?'
        },
        {
          name:'Bob:',
          speech:'음…이 아파트는 제게 맞지 않는 것 같아요.'
        },
        {
          name:'Peg:',
          speech:'왜요?'
        },
        {
          name:'Bob:',
          speech:'음, 600달러는 많은 돈이에요. 집세를 낼 형편이 안 될 것 같아요.'
        },
        {
          name:'Peg:',
          speech:'왜 여기 오기 전에 그런 생각을 안 했나요?'
        },
        {
          name:'Bob:',
          speech:'음, 솔직히 말해서, 이 아파트는 별로 좋지 않아요. 사실, 끔찍해요. Ed 삼촌과 함께 지낼 거예요. 안녕히 계세요.'
        },
        {
          name:'Peg:',
          speech:'잠깐만요. 삼촌 이름이 Ed예요? Ed Moore요?'
        },
        {
          name:'Bob:',
          speech:'맞아요. 왜요?'
        },
        {
          name:'Peg:',
          speech:'믿을 수 없어요. Ed Moore는 내 오랜 남자친구예요. 우리는 고등학교 때 애인이었어요.'
        },
        {
          name:'Bob:',
          speech:'아, 아뇨, 잘못 아신 거예요. Ed Moore랑은 달라요 있잖아요, 우리 삼촌은 부랑자에요. 그는 아무것도 하지 않아요.'
        },
        {
          name:'Peg:',
          speech:'그 사람이에요! 그리고 당신은 그의 조카죠. 세상 좁지 않아요?'
        },
        {
          name:'Bob:',
          speech:'죄송합니다. 저는 지금 가야 해요.'
        },
        {
          name:'Peg:',
          speech:'You can’주소를 알려주지 않으면 나갈 수 없어요.'
        },
        {
          name:'Bob:',
          speech:'흠, 이게 좋은 생각인지 모르겠네요…'
        },
        {
          name:'Peg:',
          speech:'어서요, 말해도 돼요.'
        },
        {
          name:'Bob:',
          speech:'아, 알았어요. 105 라운지거 거리입니다.'
        },
        {
          name:'Peg:',
          speech:'정말 행복해요. 빨리 Ed를 다시 보고 싶어요. 제가 찾아뵙겠습니다.'
        },
        {
          name:'Bob:',
          speech:'오, 멋지군요. 오늘은 정말 운이 좋은 날이에요.'
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
