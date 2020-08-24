 <template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/young-couple-love-boyfriend-playing-guitar_1157-35428.jpg">

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
        padding-bottom: 10px;">Can you play the guitar?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Can you play the guitar?</li><br />

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
          <u>Fill the blanks. Always answer with a whole sentence.</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            I can play the piano, but I <u> &emsp; &emsp; &emsp; </u> sing. <br />
              나는 피아노를 칠 수 있지만 노래는 할 줄 모릅니다.<br />
          </li>
          <li>
            Oh, all shops are closed. Where <u> &emsp; &emsp; &emsp; </u> we buy some food now? <br />
              오, 모든 가게들이 문을 닫았어. 지금 어디에서 음식을 살 수 있을까?<br />
          </li>
          <li>
            <u> &emsp; &emsp; &emsp; </u> you help <u> &emsp; &emsp; &emsp; </u>? I don't know what to do... <br />
              나 좀 도와줄래요? 뭘 해야 좋을지 모르겠어요.<br />
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
            Can you play a musical instrument?<br />
            What can you play? (guitar, piano, violin, drums, flute)<br />
            How well can you play it? (a little, quite well)<br />
            Do you have a friend who can play the piano? Who?<br />

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
                      I can do... / I can't do... (할 수 있다/할 수 없다)<br />                  
                    </li>
                    <li>
                      can you 동사..? Yes, I can / No, I can't [조동사의 의문문에서 대답을 할 경우 본동사는 말하지 않습니다 - Yes, I can play (x)]<br />                  
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
          speech:'Wow! You can play the guitar really well.'
        },
        {
          name:'B:',
          speech:'Thanks. Can you play the guitar?'
        },
        {
          name:'A:',
          speech:'No, I can’t play the guitar, but I can play the piano a little.'
        },
        {
          name:'B:',
          speech:'Really?'
        },
        {
          name:'A:',
          speech:'Yeah, but it’s horrible. So, what else can you play?'
        },
        {
          name:'B:',
          speech:'I can play the violin, too.'
        },
        {
          name:'A:',
          speech:'Oh, yeah? I can’t play the violin. I think it’s pretty hard.'
        },
        {
          name:'B:',
          speech:'It’s not hard. You just need to practice.'
        },
        {
          name:'A:',
          speech:'Can I hear you play some time?'
        },
        {
          name:'B:',
          speech:'Sure.'
        },
        {
          name:'A:',
          speech:'Actually, I can’t play the instruments well, but I can sing.'
        },
        {
          name:'B:',
          speech:'That’s great! We can make a band. I can play and you can sing.'
        },
        {
          name:'A:',
          speech:'Yeah, and we can have a concert!'
        },
        {
          name:'B:',
          speech:'That’s a great idea. Can you invite your friends?'
        },
        {
          name:'A:',
          speech:'Yes, I have many friends. I can invite everyone.'
        },
        {
          name:'B:',
          speech:'Where can we practice?'
        },
        {
          name:'A:',
          speech:'My parents have a garage. We can practice there.'
        },
        {
          name:'B:',
          speech:'Hmm, I have a friend who can play drums. I think he can join us.'
        },
        {
          name:'A:',
          speech:'Can we become famous? What do you think?'
        },
        {
          name:'B:',
          speech:'Sure we can.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'와우! 기타를 정말 잘 치시네요.'
        },
        {
          name:'B:',
          speech:'고맙습니다. 기타 칠 줄 아세요?'
        },
        {
          name:'A:',
          speech:'아니요, 저는 기타칠 줄 몰라요. 하지만 피아노는 조금 칠 수 있어요.'
        },
        {
          name:'B:',
          speech:'정말요?'
        },
        {
          name:'A:',
          speech:'네, 하지만 정말 못칩니다. 그런데, 또 어떤 것을 칠 줄 아세요?'
        },
        {
          name:'B:',
          speech:'바이올린도 켤 수 있어요.'
        },
        {
          name:'A:',
          speech:'오, 그래요? 저는 바이올린은 못 켜요. 그건 꽤 어려운 것 같아요.'
        },
        {
          name:'B:',
          speech:'어렵지 않아요. 연습만 하면 되요.'
        },
        {
          name:'A:',
          speech:'당신이 연주하는 것을 언젠가 들을 수 있을까요?'
        },
        {
          name:'B:',
          speech:'물론이에요.'
        },
        {
          name:'A:',
          speech:'사실, 저는 악기는 잘 다룰 줄 몰라요. 하지만 노래는 할 줄 알아요.'
        },
        {
          name:'B:',
          speech:'대단하네요! 우리는 밴드를 만들 수 있겠어요. 저는 치고 당신은 노래할 수 있어요.'
        },
        {
          name:'A:',
          speech:'네, 그리고 콘서트를 가질 수 있구요!'
        },
        {
          name:'B:',
          speech:'좋은 생각이에요. 당신의 친구들을 초대할 수 있나요?'
        },
        {
          name:'A:',
          speech:'네, 저는 친구들이 많아요. 모두 초대할 수 있어요.'
        },
        {
          name:'B:',
          speech:'어디서 연습할 수 있나요?'
        },
        {
          name:'A:',
          speech:'제 부모님께 차고가 있어요. 그곳에서 연습할 수 있어요.'
        },
        {
          name:'B:',
          speech:'음, 저에게 드럼을 치는 친구가 있어요. 그가 우리와 함께할 수 있을 것 같아요.'
        },
        {
          name:'A:',
          speech:'우리 유명해질 수 있을까요? 어떻게 생각하세요?'
        },
        {
          name:'B:',
          speech:'물론 유명해질 수 있어요.'
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
