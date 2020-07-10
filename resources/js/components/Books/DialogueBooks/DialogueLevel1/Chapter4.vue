<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv8RmfkY/6/screen_2x/canva-man-and-woman-sitting-on-chair-in-front-of-desk-MADGv8RmfkY.jpg">

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
        padding-bottom: 10px;">Are you French?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Are you French?</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs">
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
          <u>Fill the blanks. Always answer with a whole sentence</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)<br />
        </p>

        <ol style="margin: 12px;">
          <li>
              저는 중국인이 아닙니다. 저는 한국인입니다.<br />
                I'm <u> &emsp; &emsp; &emsp; </u> Chinese, <u> &emsp; &emsp; &emsp; </u>. <br />
          </li>
          <li>
              도쿄는 일본에 있습니다.<br />
                Tokyo <u> &emsp; &emsp; &emsp; </u> in Japan.<br />
          </li>
          <li>
              당신은 필리핀 사람입니까?<br />
                <u> &emsp; &emsp; &emsp; </u> you Filipino?<br />
          </li>
        </ol>

        <p>
          Free response:<br />
            Are you French?<br />

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

          <tr v-for="translation in translations">
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
                    <li>
                      1) 의문사가 있는 be동사의 의문문 : 의문사(What, Who, Where, How,Why등) + be동사 +주어...?<br />
                          대답은 Yes나 No으로 하지 않습니다. <br />
                    </li>
                    <li>
                      2) I am from Korea : 저는 한국에서 왔습니다. (Korea : 나라이름) <br />
                          I am Korean : 저는 한국인입니다. (Korean : 한국인, 한국어) <br />
                    </li>
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
          name:'Peter:',
          speech:'Good evening. My name is Peter. What`s your name?'
        },
        {
          name:'Jane:',
          speech:'Hello. My name is Jane. Nice to meet you.'
        },
        {
          name:'Peter:',
          speech:'It`s a pleasure. This is a great party!'
        },
        {
          name:'Jane:',
          speech:'Yes, it is. Where are you from?'
        },
        {
          name:'Peter:',
          speech:'I`m from Frankfurt.'
        },
        {
          name:'Jane:',
          speech:'Frankfurt? Are you French?'
        },
        {
          name:'Peter:',
          speech:'No, I`m not French. Frankfurt is in Germany.'
        },
        {
          name:'Jane:',
          speech:'Oh, you`re German. Sorry about that.'
        },
        {
          name:'Peter:',
          speech:'That`s OK. Where are you from?'
        },
        {
          name:'Jane:',
          speech:'I`m from London, England, but I`m not British.'
        },
        {
          name:'Peter:',
          speech:'No? What are you?'
        },
        {
          name:'Jane:',
          speech:'Well, my parents are from Spain, so I`m Spanish, too.'
        },
        {
          name:'Peter:',
          speech:'That`s very interesting. Spain is a beautiful country.'
        },
        {
          name:'Jane:',
          speech:'Thank you. It is a wonderful place.'
        },
        ],

        translations:[
        {
          name:'Peter:',
          speech:'안녕. 내 이름은  Peter야. 너의 이름은 뭐니?'
        },
        {
          name:'Jane:',
          speech:'안녕. 내 이름은 Jane이야. 만나서 반가워.'
        },
        {
          name:'Peter:',
          speech:'만나서 즐거워. 이 파티 대단하구나!'
        },
        {
          name:'Jane:',
          speech:'응 그래. 너는 어디에서 왔니?'
        },
        {
          name:'Peter:',
          speech:'나는 Frankfurt에서 왔어.'
        },
        {
          name:'Jane:',
          speech:'Frankfurt? 너는 프랑스인이니?'
        },
        {
          name:'Peter:',
          speech:'아니, 나는 프랑스인이 아니야. Frankfurt는 독일에 있어.'
        },
        {
          name:'Jane:',
          speech:'오, 너는 독일 사람이구나. 미안해.'
        },
        {
          name:'Peter:',
          speech:'괜찮아. 너는 어디에서 왔니?'
        },
        {
          name:'Jane:',
          speech:'나는 영국, London 에서 왔어. 하지만 나는 영국 사람이 아니야.'
        },
        {
          name:'Peter:',
          speech:'아니야? 그럼?'
        },
        {
          name:'Jane:',
          speech:'글쎄, 내 부모님은 스페인에서 오셨어, 그래서 나도 스페인 사람이야.'
        },
        {
          name:'Peter:',
          speech:'흥미롭구나. 스페인은 아름다운 나라야.'
        },
        {
          name:'Jane:',
          speech:'흥미롭구나. 스페인은 아름다운 나라야.'
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
