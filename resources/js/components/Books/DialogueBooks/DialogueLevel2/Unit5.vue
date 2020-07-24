<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/happy-young-couple-exchanging-love-messages_23-2147844586.jpg">

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
        padding-bottom: 10px;">Internet Dating
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Internet Dating</li><br />

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
          <u>What does Mary like? What doesn’t she like? Are they a good match?</u><br />
          Mary는 무엇을 좋아합니까? 그녀는 무엇을 좋아하지 않습니까? 그들은 잘 어울립니까? <br />
        </p>

        <v-container grid-list-md text-xs-center>
          <v-layout wrap align-content-center>

            <v-flex xs12 md8>
              <v-card hover>

                <v-img src="images/computerdating.png" />

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>
        
          

        <p>
            Vocabulary:<br />
            farmer, homemaker, single, married, divorced, widowed, military, astrology, chess<br />
            어휘:          농부, 주부, 독신의, 결혼한, 이혼한, 미망인이된, 군의, 점성학, 체스 <br />

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
                      like 좋아하다 / don't like 좋아하지 않다 Do you like ~~? Yes, I do / No, I don't<br />
                    </li>
                    <li>
                      fill in (out) the form : 서식에 기입하다<br />
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
          name:'Interviewer:',
          speech:'Hello. Come in, please.'
        },
        {
          name:'Mr. Jennson:',
          speech:'Good afternoon. My name’s Jennson… Magnus Jennson. I’m… uh… looking for a woman friend.'
        },
        {
          name:'Interviewer:',
          speech:'Please sit down, Mr. Jennson. May I ask you some questions?'
        },
        {
          name:'Mr. Jennson:',
          speech:'What about?'
        },
        {
          name:'Interviewer:',
          speech:'Well, about music, for example. Do you like music?'
        },
        {
          name:'Mr. Jennson:',
          speech:'Yes, I do. I like military band music and classical music.'
        },
        {
          name:'Interviewer:',
          speech:'Do you like rock music?'
        },
        {
          name:'Mr. Jennson:',
          speech:'No, I don’t! And I don’t like jazz.'
        },
        {
          name:'Interviewer:',
          speech:'Uh-huh. OK. Food… Do you like foreign food?'
        },
        {
          name:'Mr. Jennson:',
          speech:'No, I don’t. I like meat and potatoes.'
        },
        {
          name:'Interviewer:',
          speech:'OK. How old are you, Mr. Jennson?'
        },
        {
          name:'Mr. Jennson:',
          speech:'What? Listen here, young man. I don’t like these personal questions!'
        },
        {
          name:'Interviewer:',
          speech:'Oh, well, uh, can you fill out this form later and mail it to me?'
        },
        ],

        translations:[
        {
          name:'Interviewer:',
          speech:'안녕하세요. 들어오세요.'
        },
        {
          name:'Mr. Jennson:',
          speech:'좋은 오후입니다. 제 이름은 Jennson입니다. Magnus Jennson. 저는..어..여자 친구를 찾고 있습니다.'
        },
        {
          name:'Interviewer:',
          speech:'앉으세요, Jennson씨. 제가 몇 가지 질문을 해도 괜찮을까요?'
        },
        {
          name:'Mr. Jennson:',
          speech:'무엇에 대해서요?'
        },
        {
          name:'Interviewer:',
          speech:'음, 예를 들면 음악에 관해서요. 음악 좋아하세요?'
        },
        {
          name:'Mr. Jennson:',
          speech:'네, 좋아해요. 저는 군악대 음악과 고전 음악을 좋아합니다.'
        },
        {
          name:'Interviewer:',
          speech:'당신은 락음악을 좋아합니까?'
        },
        {
          name:'Mr. Jennson:',
          speech:'아니요, 좋아하지 않습니다. 그리고 재즈를 좋아하지 않습니다.'
        },
        {
          name:'Interviewer:',
          speech:'어-음. 좋아요. 음식... 당신은 외국 음식을 좋아합니까?'
        },
        {
          name:'Mr. Jennson:',
          speech:'아니요, 좋아하지 않습니다. 저는 고기와 감자를 좋아합니다.'
        },
        {
          name:'Interviewer:',
          speech:'좋아요. 연세가 어떻게 되십니까, Jennson씨?'
        },
        {
          name:'Mr. Jennson:',
          speech:'뭐라구요? 젊은이, 들어봐요. 나는 이런 개인적인 질문들을 좋아하지 않아요!'
        },
        {
          name:'Interviewer:',
          speech:'오, 음, 어, 후에 이 서식을 기입하셔서 저에게 메일로 보내주실 수 있으세요?'
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
