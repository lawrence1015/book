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
        padding-bottom: 10px;">I'm going out tonight
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br>( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">I'm going out tonight</li><br />

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
          <u>Fill the blanks. Always answer with a whole sentence</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
              Do you <u> &emsp; &emsp; &emsp; </u> music? - Yes, I <u> &emsp; &emsp; &emsp; </u>. <br />
                (당신은 음악을 좋아하십니까? - 네, 좋아합니다.)
          </li>
          <li>
              There's an interesting <u> &emsp; &emsp; &emsp; </u> tonight. <br />
                (오늘 밤에 재밌는 콘서트가 있습니다..)
          </li>
          <li>
              I'm sorry. I'm <u> &emsp; &emsp; &emsp; </u> tonight. <br />
                (죄송합니다. 저는 오늘밤 바쁩니다.)
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
                    <li>
                      1) I like v-ing : ~하는 것을 좋아하다.<br />
                      I like singing / I like cooking / I like dancing
                    </li>
                    <li>
                      2) why don't you...? ~하는게 어때?
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
          speech:'Hey, Joe. What’s up?'
        },
        {
          name:'B:',
          speech:'I’m going out tonight. Are you free?'
        },
        {
          name:'A:',
          speech:'Sure. What’s the plan?'
        },
        {
          name:'B:',
          speech:'Do you like boxing?'
        },
        {
          name:'A:',
          speech:'No, not really…'
        },
        {
          name:'B:',
          speech:'Boxing is very interesting. There’s an important fight tonight.'
        },
        {
          name:'A:',
          speech:'Actually, I don’t like watching fights very much.'
        },
        {
          name:'B:',
          speech:'It’s fun. Why don’t you come just once?'
        },
        {
          name:'A:',
          speech:'OK. Why not?'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'Do you like jazz?'
        },
        {
          name:'B:',
          speech:'Yes, very much.'
        },
        {
          name:'A:',
          speech:'There’s a good concert tonight. Are you free?'
        },
        {
          name:'B:',
          speech:'No, I’m sorry. I’m busy tonight.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'Do you like baseball?'
        },
        {
          name:'B:',
          speech:'Yes, I do. I like baseball very much.'
        },
        {
          name:'A:',
          speech:'Yes, I do. I like baseball very much.'
        },
        {
          name:'B:',
          speech:'Sure, let’s go.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'이봐, Joe. 무슨 일이야?'
        },
        {
          name:'B:',
          speech:'오늘 밤 외출해.너 시간있니?'
        },
        {
          name:'A:',
          speech:'물론이야. 계획이 뭐니?'
        },
        {
          name:'B:',
          speech:'너 복싱 좋아해?'
        },
        {
          name:'A:',
          speech:'아니, 그렇게 좋아하지 않아...'
        },
        {
          name:'B:',
          speech:'복싱은 매우 재밌어. 오늘 밤 중요한 대결이 있어.'
        },
        {
          name:'A:',
          speech:'사실, 나는 대결하는 것을 그렇게 보고 싶지 않아.'
        },
        {
          name:'B:',
          speech:'재밌어. 그냥 한 번만 가보는 것 어때?'
        },
        {
          name:'A:',
          speech:'좋아. 왜 안 가겠어.'
        },{
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'너 재즈 좋아하니?'
        },
        {
          name:'B:',
          speech:'응, 아주 좋아해.'
        },
        {
          name:'A:',
          speech:'오늘 밤 멋진 콘서트가 있어. 시간있니?'
        },
        {
          name:'B:',
          speech:'아니, 미안해. 난 오늘밤 바빠.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'너 야구 좋아해?'
        },
        {
          name:'B:',
          speech:'응, 좋아해. 나는 야구를 아주 좋아해.'
        },
        {
          name:'A:',
          speech:'이번 주 토요일에 아주 멋진 경기가 있어. 너 가고 싶니?'
        },
        {
          name:'B:',
          speech:'물론이야. 같이 가자.'
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
