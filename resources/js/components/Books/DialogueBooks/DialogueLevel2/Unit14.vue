<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/young-females-talking-sitting-couch_23-2148143188.jpg">

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
        padding-bottom: 10px;">My boyfriend can do everything!
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">My boyfriend can do everything!</li><br />
  
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
          <u>Answer the questions.</u><br />
          (질문에 답하세요.)
        </p>

        <ol style="margin: 12px;">
          <li>
            What languages can Mary’s boyfriend speak?<br />
              ( Mary의 남자친구는 무슨 언어를 할 줄 압니까? )<br />
          </li>
          <li>
            Can Mary’s boyfriend cook?<br />
              ( Mary의 남자친구는 요리를 할 줄 압니까? )<br />
          </li>
          <li>
            Which instrument can Ruth’s boyfriend play?<br />
              ( Ruth의 남자친구는 어떤 악기를 칠 줄 압니까? )<br />
          </li>
        </ol> 
        <br />
        <p>
          Free response:<br />
            What languages can you speak?<br />
            What sports can you play?<br />
            Can you sing?<br />
            Can you dance?<br />
            What can you cook?<br />        

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
                      조동사 Can: 조동사는 말 그대로 동사를 도와주는 동사, 즉 본동사를 도와 본동사만으로는<br />
                        나타내기 어려운 가능, 추측, 허가, 의무 등의 말하는 사람의 심적태도를 나타내는 말입니다.<br />
                        can은 능력을 나타낼 때 주로 사용됩니다.<br />
                    </li>
                    <li>
                      조동사가 있는 문장의 의문문과 대답: 조동사 + 주어 + 동사...?<br />
                        -> Yes, 주어 + 조동사  / No, 주어 + 조동사 not<br />
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
          name:'Mary:',
          speech:'My boyfriend is really wonderful. He’s tall, strong and handsome.'
        },
        {
          name:'Ruth:',
          speech:'Really? Well, my boyfriend can do everything.'
        },
        {
          name:'Mary:',
          speech:'Can he? What?'
        },
        {
          name:'Ruth:',
          speech:'He’s really smart. He can speak ten languages.'
        },
        {
          name:'Mary:',
          speech:'Ten! What languages can he speak?'
        },
        {
          name:'Ruth:',
          speech:'Well, he can speak Spanish, Italian, French, German, Japanese, Arabic, and, uh, a lot more.'
        },
        {
          name:'Mary:',
          speech:'Well, my boyfriend is very athletic.'
        },
        {
          name:'Ruth:',
          speech:'Athletic?'
        },
        {
          name:'Mary:',
          speech:'Uh-huh. He can swim, ski, and play football, tennis, and baseball.'
        },
        {
          name:'Ruth:',
          speech:'My boyfriend can play chess very well.'
        },
        {
          name:'Mary:',
          speech:'Chess is not really a sport.'
        },
        {
          name:'Ruth:',
          speech:'Oh, well, can your boyfriend cook?'
        },
        {
          name:'Mary:',
          speech:'Cook? No, he can’t.'
        },
        {
          name:'Ruth:',
          speech:'My boyfriend is a wonderful cook.'
        },
        {
          name:'Mary:',
          speech:'Really? What can he cook?'
        },
        {
          name:'Ruth:',
          speech:'He can cook Italian food. He makes delicious pasta.'
        },
        {
          name:'Mary:',
          speech:'Wow! Really?'
        },
        {
          name:'Ruth:',
          speech:'Yes, and he can paint and play the piano, too.'
        },
        {
          name:'Mary:',
          speech:'Oh. My boyfriend can’t do that.'
        },
        ],

        translations:[
        {
          name:'Mary:',
          speech:'내 남자 친구는 정말 굉장해. 그는 키가 크고 강하며 얼굴도 잘 생겼어.'
        },
        {
          name:'Ruth:',
          speech:'정말? 그런데, 내 남자 친구는 뭐든지 할 수 있어.'
        },
        {
          name:'Mary:',
          speech:'그래? 뭘 할 수 있는데?'
        },
        {
          name:'Ruth:',
          speech:'그는 정말 똑똑해. 그는 10가지의 언어를 말할 줄 알아.'
        },
        {
          name:'Mary:',
          speech:'10가지! 그는 무슨 언어를 말할 줄 아는데?'
        },
        {
          name:'Ruth:',
          speech:'음, 스페인어, 이탈리아어, 프랑스어, 독일어, 일본어, 아라비아어, 그리고 음, 더 많은 언어를 할 줄 알아'
        },
        {
          name:'Mary:',
          speech:'그런데, 내 남자 친구는 운동을 매우 잘 해.'
        },
        {
          name:'Ruth:',
          speech:'운동을?'
        },
        {
          name:'Mary:',
          speech:'우-어. 그는 수영, 스키, 축구, 테니스, 야구를 할 줄 알아.'
        },
        {
          name:'Ruth:',
          speech:'내 남자친구는 체스를 참 잘 해.'
        },
        {
          name:'Mary:',
          speech:'체스는 실은 운동이 아니야.'
        },
        {
          name:'Ruth:',
          speech:'오, 그런데, 네 남자 친구는 요리 할 줄 아니?'
        },
        {
          name:'Mary:',
          speech:'요리? 아니, 할 줄 몰라.'
        },
        {
          name:'Ruth:',
          speech:'내 남자 친구는 훌륭한 요리사야.'
        },
        {
          name:'Mary:',
          speech:'정말? 무슨 요리를 할 줄 아는데?'
        },
        {
          name:'Ruth:',
          speech:'그는 이탈리아 요리를 할 수 있어. 그는 맛있는 파스타를 만들어.'
        },
        {
          name:'Mary:',
          speech:'와우! 정말?'
        },
        {
          name:'Ruth:',
          speech:'응, 그리고 그는 그림을 그릴 줄 알고 피아노도 칠 줄 알아.'
        },
        {
          name:'Mary:',
          speech:'오. 내 남자친구는 그것은 할 줄 몰라.'
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
