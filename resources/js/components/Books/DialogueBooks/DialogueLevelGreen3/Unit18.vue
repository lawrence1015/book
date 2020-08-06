<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/negatives-stripes-with-clapperboard-film-reels-wooden-desk_23-2148188184.jpg">

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
        padding-bottom: 10px;">That's my business
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">That's my business</li><br />

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
          ( 질문에 답하시오 )
        </p>

        <ol style="margin: 12px;">
          <li>
            What’s the name of Angela Joule’s new movie?<br />
              Angela Joule의 새영화 제목은 무엇입니까?<br />
          </li>
          <li>
            Why is the father worried?<br />
              왜 아버지는 걱정을 합니까?<br />
          </li>
          <li>
            How do you think the story ends?<br />
              당신은 그 이야기의 끝이 어떨거라고 생각하십니까?<br />
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
 
            What’s your favorite movie?<br />
            What’s the story in the movie?<br />

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
                      play the part of : ~의 역할을 하다<br />                  
                    </li>
                    <li>
                      a young woman who fights to save the family business :  <br />
                        who가 이끄는 절(who fights to save <br /> 
                        the family business)이 woman을 수식하는 형용사의 역할을 합니다.<br />
                         _____하는 젊은 여자라고 해석합니다. <br />                  
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
          speech:'Miss Joule, it’s so nice of you to give me this interview.'
        },
        {
          name:'B:',
          speech:'My pleasure.'
        },
        {
          name:'A:',
          speech:'Everyone’s dying to hear about your new movie. Is it a romance?'
        },
        {
          name:'B:',
          speech:'No, it’s a drama. I play the part of a young woman who fights to save the family business.'
        },
        {
          name:'A:',
          speech:'What’s the name of the movie?'
        },
        {
          name:'B:',
          speech:'That’s My Business.'
        },
        {
          name:'A:',
          speech:'Come on, you can tell me.'
        },
        {
          name:'B:',
          speech:'I just told you, That’s My Business.'
        },
        {
          name:'A:',
          speech:'Oh, I get it. That’s My Business is the name of the movie.'
        },
        {
          name:'B:',
          speech:'That’s right. Would you like to see some stills of the movie?'
        },
        {
          name:'A:',
          speech:'I’d love to.'
        },
        {
          name:'B:',
          speech:'OK, the first picture shows me with my father at the balloon factory. He’s the president of the company.'
        },
        {
          name:'A:',
          speech:'What’s happening in the second picture?'
        },
        {
          name:'B:',
          speech:'He’s having an argument with the manager of the loan company. My father has to repay the loan in five days or lose his business.'
        },
        {
          name:'A:',
          speech:'Does he have the money?'
        },
        {
          name:'B:',
          speech:'No, and he’s very worried. See, he’s having a heart attack in the next picture.'
        },
        {
          name:'A:',
          speech:'The poor man.'
        },
        {
          name:'B:',
          speech:'It’s a desperate situation. Somehow I have to find the money to save the company and my father’s life.'
        },
        {
          name:'A:',
          speech:'What a story! How does it end?'
        },
        {
          name:'B:',
          speech:'I can’t tell you. You have to see the movie.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'Joule씨, 이 인터뷰에 응해 주셔서 고맙습니다.'
        },
        {
          name:'B:',
          speech:'별 말씀을요.'
        },
        {
          name:'A:',
          speech:'모든 이들이 당신의 새 영화에 대해 듣고 싶어합니다. 로맨스인가요?'
        },
        {
          name:'B:',
          speech:'아니오, 드라마입니다. 저는 가업을 구하기 위해 싸우는 젊은 여자 역할을 했습니다.'
        },
        {
          name:'A:',
          speech:'영화 제목이 뭔가요?'
        },
        {
          name:'B:',
          speech:'That’s My Business입니다.'
        },
        {
          name:'A:',
          speech:'제발요, 말해주세요.'
        },
        {
          name:'B:',
          speech:'제가 방금 말씀드렸습니다. That’s My Business입니다.'
        },
        {
          name:'A:',
          speech:'아, 알겠습니다. That’s My Business가 영화제목이군요.'
        },
        {
          name:'B:',
          speech:'맞습니다. 영화 사진을 조금 보시겠어요?'
        },
        {
          name:'A:',
          speech:'네 보고 싶습니다.'
        },
        {
          name:'B:',
          speech:'좋아요, 첫 번째 사진은 제가 아버지와 함께 풍선 공장에 있는 사진입니다. (풍선 공장에서 아버지와 함께 있는 저를 보여줍니다) 그는 회사의 책임자입니다.'
        },
        {
          name:'A:',
          speech:'두번째 사진에서는 무슨 일이 일어납니까'
        },
        {
          name:'B:',
          speech:'그는 대출회사의 메니저와 논쟁을 하고 있습니다. 제 아버지는 5일안에 대부금을 갚아야 합니다. 그렇지 않으면 그의 일을 잃게 됩니다.'
        },
        {
          name:'A:',
          speech:'그는 돈이 있습니까?'
        },
        {
          name:'B:',
          speech:'아니오, 그래서 그는 매우 걱정합니다. 보세요. 다음 사진에 보면 그에게 심장병이 있습니다.'
        },
        {
          name:'A:',
          speech:'불쌍하네요.'
        },
        {
          name:'B:',
          speech:'절망적인 상황입니다. 어쨌든 저는 회사와 아버지의 목숨을 구하기 위해 돈을 구해야만 합니다.'
        },
        {
          name:'A:',
          speech:'재밌는 이야기네요! 끝은 어떤가요?'
        },
        {
          name:'B:',
          speech:'말해줄 수 없습니다. 영화를 보셔야만 합니다. '
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
