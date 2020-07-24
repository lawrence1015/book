<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/asian-man-with-professional-camera-peering-green-hedge-park-taking-photos_1098-17747.jpg">

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
        padding-bottom: 10px;">Where were you?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Where were you?</li><br />
        
      <p>
        Princess Amelia of Silvania is on a skiing trip to Aspen, Colorado.<br />
        Princess Amelia employs three security guards.<br />
        They're outside her hotel now. They're talking to a photographer.<br />
        The Princess has a lot of problems with photographers!<br />
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
          <u>Answer the questions</u><br />
          (질문에 답하세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            Where is the princess now?<br />
              공주는 지금 어디에 있습니까?<br />
          </li>
          <li>
            Where was the princess at seven o'clock this evening?<br />
              오늘 저녁 7시 정각에 공주는 어디에 있었습니까?
          </li>
          <li>
            Where was the photographer at that time?<br />
              그 때에 사진기자는 어디에 있었습니까?
          </li>
        </ol>
      <br />
        <p>
          Free response: <br />
            Where were you yesterday at one o’clock?<br />
            Where were you last Saturday?<br />
            When were you in the hospital last time?<br />
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
          Silvania의 Amelia공주는 Colorado주의 Aspen으로 스키여행 중입니다.<br />
          Amelia 공주는 세 명의 경호원을 고용했습니다.<br />
          그들은 지금 그녀의 호텔 밖에 있습니다. 그들은 사진기자에게 말하고 있습니다.<br />
          공주는 사진기자들 때문에 많은 문제를 겪고 있습니다.<br />
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
                      be동사의 과거형 : I was / You were
                    </li>
                    <li>
                      be동사 과거형의 부정문 : was not (wasn't) / were not (weren't)                  
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
          name:'Guard:',
          speech:'OK. Don’t move! What’s your name, bud?'
        },
        {
          name:'Justin:',
          speech:'Hanson. Justin Hanson. I work for The National Questioner.'
        },
        {
          name:'Guard:',
          speech:'Right! You were here yesterday.'
        },
        {
          name:'Justin:',
          speech:'No, I wasn’t.'
        },
        {
          name:'Guard:',
          speech:'Yes, you were. You were here yesterday afternoon.'
        },
        {
          name:'Justin:',
          speech:'I wasn’t! I was in Denver yesterday.'
        },
        {
          name:'Guard:',
          speech:'Yeah? What about Saturday? Where were you on Saturday?'
        },
        {
          name:'Justin:',
          speech:'Uh… what time?'
        },
        {
          name:'Guard:',
          speech:'Two o’clock. Where were you at two o’clock?'
        },
        {
          name:'Justin:',
          speech:'Uh, I was here, on the ski slope.'
        },
        {
          name:'Guard:',
          speech:'Right! And where were you on January 12th?'
        },
        {
          name:'Justin:',
          speech:'I can’t remember.'
        },
        {
          name:'Guard:',
          speech:'It was a Wednesday.'
        },
        {
          name:'Justin:',
          speech:'Oh, really? No, I can’t remember.'
        },
        {
          name:'Guard:',
          speech:'I can. You were in New York. Outside Princess Amelia’s hotel. And where were you at seven o’clock this evening?'
        },
        {
          name:'Justin:',
          speech:'I’m not answering any more questions.'
        },
        {
          name:'Guard:',
          speech:'Yes, you are, bud. You were outside the swimming pool. With your camera. And the Princess was in the pool.'
        },
        {
          name:'Justin:',
          speech:'OK. But there wasn’t any film in my camera.'
        },
        {
          name:'Guard:',
          speech:'Yeah, right. OK, open your camera!'
        },
        ],

        translations:[
        {
          name:'Guard:',
          speech:'좋아요. 움직이지 마세요! 이봐요,당신의 이름이 뭡니까?'
        },
        {
          name:'Justin:',
          speech:'Hanson입니다. Justin Hanson. 저는 National Questioner에서 일합니다.'
        },
        {
          name:'Guard:',
          speech:'맞아요. 당신은 어제 여기에 있었죠.'
        },
        {
          name:'Justin:',
          speech:'아니오, 없었습니다.'
        },
        {
          name:'Guard:',
          speech:'있었습니다. 당신은 어제 오후에 이곳에 있었습니다.'
        },
        {
          name:'Justin:',
          speech:'없었습니다. 저는 어제 Denver에 있었습니다.'
        },
        {
          name:'Guard:',
          speech:'그래요? 토요일은요? 토요일에 당신은 어디에 있었습니까?'
        },
        {
          name:'Justin:',
          speech:'음... 몇시요?'
        },
        {
          name:'Guard:',
          speech:'2시요. 2시에 당신은 어디에 있었습니까?'
        },
        {
          name:'Justin:',
          speech:'음, 저는 여기에 있었습니다. 스키타고 있었습니다.'
        },
        {
          name:'Guard:',
          speech:'맞아요! 그럼 당신은 1월 12일에 어디에 있었습니까?'
        },
        {
          name:'Justin:',
          speech:'기억이 나질 않습니다.'
        },
        {
          name:'Guard:',
          speech:'수요일이었습니다.'
        },
        {
          name:'Justin:',
          speech:'오, 정말요? 아니요. 저는 기억이 안 납니다.'
        },
        {
          name:'Guard:',
          speech:'저는 기억할 수 있습니다. 당신은 New York에 있었습니다. 공주 Amelia의 호텔 밖에 있었습니다. 그러면 당신은 저녁 7시 정각에 어디에 있었습니까?'
        },
        {
          name:'Justin:',
          speech:'더 이상 질문에 대답하지 않겠습니다.'
        },
        {
          name:'Guard:',
          speech:'그래요, 당신은 카메라를 들고 수영장 밖에 있었습니다. 그리고 공주님은 수영장 안에 있었습니다.'
        },
        {
          name:'Justin:',
          speech:'좋아요. 하지만 카메라 안에 필름은 없었습니다.'
        },
        {
          name:'Guard:',
          speech:'네, 좋아요. 당신의 카메라를 열어보세요!'
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
