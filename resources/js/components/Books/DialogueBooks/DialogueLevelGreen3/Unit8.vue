<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/young-beautiful-working-with-laptop-table-office_1150-15421.jpg">

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
        padding-bottom: 10px;">Secretary
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Secretary</li><br />
      <p>
        Mr. Thompson has two secretaries. <br />
      </p>
      <br />
      <p>
        Barbara is a good secretary. She types quickly and accurately.<br />
        She listens carefully and doesn’t make mistakes. Barbara works very well.<br />
      </p>
      <br />
      <p>
        Anne is a bad secretary. She types slowly and makes a lot of mistakes. <br />
        She doesn’t listen carefully and works badly.<br />
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
          <u>Look at the pictures and use the following words to make a sentence</u><br />
          Loud, soft, dangerous, careful, good, beautiful, quick, slow <br />
          (소리가 큰, 부드러운, 위험한, 주의깊은, 좋은, 아름다운, 빠른, 느린)<br />
          Ex) Mrs. Smith speaks loudly.<br />
        </p>
        <br />

        <v-container justify-center grid-list-xl text-xs-center>
          <v-layout wrap justify-center>

            <v-flex xs12 md5 >
              <v-card hover height="100%">

                <v-img src="images/Dialogue-unit8-1.jpg" />
                <v-card-text>
                1. Mrs. Smith
                </v-card-text>

              </v-card>
            </v-flex>
           
    
            <v-flex xs12 md5 >
              <v-card hover height="100%">

                <v-img src="images/Dialogue-unit8-2.jpg" />
                <v-card-text>
                2. Barbara
                </v-card-text>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

        <v-container justify-center grid-list-xl text-xs-center>
          <v-layout wrap justify-center>

            <v-flex xs12 md5 >
              <v-card hover height="100%">

                <v-img src="images/Dialogue-unit8-3.jpg" />
                <v-card-text>
                3. Jack 
                </v-card-text>

              </v-card>
            </v-flex>
           
    
            <v-flex xs12 md5 >
              <v-card hover height="100%">

                <v-img src="images/Dialogue-unit8-4.jpg" />
                <v-card-text>
                4. Joe
                </v-card-text>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

        <v-container justify-center grid-list-xl text-xs-center>
          <v-layout wrap justify-center>

            <v-flex xs12 md5 >
              <v-card hover>

                <v-img src="images/Dialogue-unit8-5.jpg" />
                <v-card-text>
                5. Jason and Laura
                </v-card-text>

              </v-card>
            </v-flex>
           
    
            <v-flex xs12 md5 >
              <v-card hover height="100%">

                <v-img src="images/Dialogue-unit8-6.jpg" />
                <v-card-text>
                6. Patricia
                </v-card-text>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

        <v-container justify-center grid-list-xl text-xs-center>
          <v-layout wrap justify-center>

            <v-flex xs12 md5 >
              <v-card hover>

                <v-img src="images/Dialogue-unit8-7.jpg" />
                <v-card-text>
                7. Albert 
                </v-card-text>

              </v-card>
            </v-flex>
           
    
            <v-flex xs12 md5 >
              <v-card hover height="100%">

                <v-img src="images/Dialogue-unit8-8.jpg" />
                <v-card-text>
                8. Fred
                </v-card-text>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

          <br />
        <p>
          Free response:<br />
            How do you read? – I read … (quickly, slowly, carefully, …)<br />
            Can you drive? Are you a good driver?<br />
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
          Thompson씨는 두 명의 비서가 있습니다. <br />
        </p>
        <br />
        <p>
          Barbara는 좋은 비서입니다. 그녀는 빠르고 정확하게 타이프를 칩니다.<br />
          그녀는 신중하게 듣고 실수를 하지 않습니다. Barbara는 일을 매우 잘합니다.<br />
        </p>
        <br />
        <p>
          Anne은 나쁜 비서입니다. 그녀는 타자를 천천히 치고 실수도 많습니다. <br />
          그녀는 주의 깊게 듣지 않고 일도 못합니다.<br />
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
                      many, much, a lot of(lots of) : <br />
                            many (수가 많은) + 셀 수 있는 명사<br />
                            much (양이 많은) + 셀 수 없는 명사<br />
                            a lot of(lots of) + 셀 수 있는 명사나 셀 수 없는 명사<br />
                      many와 much는 긍정문에 쓰이기도 하지만 대개 부정문과 의문문에 쓰입니다. <br />
                      긍정문에는 a lot of(lots of)를 많이 씁니다. 그러나 부정문이나 의문문에도 쓰입니다.<br />
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
          speech:'You’re working slowly, Miss Jones.'
        },
        {
          name:'B:',
          speech:'That’s because I’m working carefully.'
        },
        {
          name:'A:',
          speech:'But you make a lot of mistakes.'
        },
        {
          name:'B:',
          speech:'I know, Mr. Thompson.'
        },
        {
          name:'A:',
          speech:'Perhaps I don’t speak clearly.'
        },
        {
          name:'B:',
          speech:'No, you speak clearly and fluently, sir.'
        },
        {
          name:'A:',
          speech:'Do I?'
        },
        {
          name:'B:',
          speech:'Yes, I understand you perfectly.'
        },
        {
          name:'A:',
          speech:'Then what’s the problem?'
        },
        {
          name:'B:',
          speech:'I don’t know, Mr. Thompson.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'당신은 천천히 일하고 있어요, Jones.'
        },
        {
          name:'B:',
          speech:'그것은 제가 일을 신중하게 하고 있기 때문에 그래요.'
        },
        {
          name:'A:',
          speech:'하지만 당신은 실수를 많이 하잖아요.'
        },
        {
          name:'B:',
          speech:'저도 알아요, Thompson씨.'
        },
        {
          name:'A:',
          speech:'제가 아마도 말을 분명하게 하지 않나봐요.'
        },
        {
          name:'B:',
          speech:'아니에요, 당신은 분명하고 정확하게 말해요.'
        },
        {
          name:'A:',
          speech:'제가 그런가요?'
        },
        {
          name:'B:',
          speech:'네, 저는 당신을 정확하게 이해할 수 있어요.'
        },
        {
          name:'A:',
          speech:'저도 모르겠어요, Thompson씨.'
        },
        {
          name:'B:',
          speech:'I don’t know, Mr. Thompson.'
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
