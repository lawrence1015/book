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
        padding-bottom: 10px;">Why aren't you working?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Why aren't you working?</li><br />

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
              What is your brother doing? He is <u> &emsp; &emsp; &emsp; </u> TV. <br />
                  ( watch ) <br />
          </li>
          <li>
              Grandmother is <u> &emsp; &emsp; &emsp; </u> radio and grandfather is <u> &emsp; &emsp; &emsp; </u> a book. <br />
                  ( listen, read ) <br />
          </li>
          <li>
              I'm <u> &emsp; &emsp; &emsp; </u> the sky and <u> &emsp; &emsp; &emsp; </u> about my friend.<br />
                  ( look, think ) <br />
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
                      1)  listen to(귀기울여 듣다)는 동사와 전치사가 함께 쓰이고 문장에서 부사구의 역할을 하여 뒤에<br />
                          반드시 목적어가 옵니다.<br />
                          listen music(X)/ listen to music(O) / listen to radio(O)<br />
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
          name:'A:',
          speech:'Hi, Jimmy. Where’s your sister?'
        },
        {
          name:'B:',
          speech:'At home. She’s helping my mother.'
        },
        {
          name:'A:',
          speech:'Is she washing the dishes?'
        },
        {
          name:'B:',
          speech:'No, she isn’t.'
        },
        {
          name:'A:',
          speech:'What’s she doing?'
        },
        {
          name:'B:',
          speech:'She’s cleaning the windows.'
        },
        {
          name:'A:',
          speech:'Is your father home?'
        },
        {
          name:'B:',
          speech:'Yes. He’s cutting the grass.'
        },
        {
          name:'A:',
          speech:'Why aren’t you working, too?'
        },
        {
          name:'B:',
          speech:'I worked hard the whole week... It’s Sunday, I’m resting today. I’m listening to the radio.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'Hi, Stephanie. What are you doing?'
        },
        {
          name:'B:',
          speech:'Hey, Mark. I’m standing in an elevator, and it’s stuck!'
        },
        {
          name:'A:',
          speech:'Oh, no! Are you OK?'
        },
        {
          name:'B:',
          speech:'Yeah. I … wait! It is moving now. Thank goodness!'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'안녕, Jimmy. 네 동생은 지금 어디에 있니?'
        },
        {
          name:'B:',
          speech:'집에 있어. 지금 엄마를 도와주고 있어.'
        },
        {
          name:'A:',
          speech:'그녀는 설거지하고 있니?'
        },
        {
          name:'B:',
          speech:'아니, 그렇지 않아.'
        },
        {
          name:'A:',
          speech:'그럼 뭐하고 있니?'
        },
        {
          name:'B:',
          speech:'창문을 닦고 있어.'
        },
        {
          name:'A:',
          speech:'너의 아버지는 집에 계시니?'
        },
        {
          name:'B:',
          speech:'응. 잔디 깎고 계셔.'
        },
        {
          name:'A:',
          speech:'너는 왜 일하지 않고 있니?'
        },
        {
          name:'B:',
          speech:'나는 일주일 내내 일했어... 일요일이쟎아. 나는 오늘 쉬고 있어. 라디오를 듣고 있어.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'안녕, Stephanie. 너 뭐하고 있니? '
        },
        {
          name:'B:',
          speech:'안녕, Mark. 엘리베이터 안에 서 있어. 엘리베이터가 멈췄어!'
        },
        {
          name:'A:',
          speech:'오, 이런! 너 괜찮니?'
        },
        {
          name:'B:',
          speech:'응. 난... 기다려! 지금 움직이고 있어. 잘됐다!'
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
