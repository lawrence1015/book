<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/surprise-friend_1098-14044.jpg">

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
        padding-bottom: 10px;">How do you spell that?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br>( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

    <li style="list-style-type: none;">How do you spell that?</li><br />

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
              죄송합니다만, 당신의 이름이 뭐라고 하셨죠?<br />
                Sorry, what's your <u> &emsp; &emsp; &emsp; </u> again?<br />
          </li>
          <li>
              그는 서울에서 왔습니다.<br />
                <u> &emsp; &emsp; &emsp; </u> from Seoul. <br />
          </li>
          <li>
              선희가 누구입니까?<br />
                Who <u> &emsp; &emsp; &emsp; </u> Sun Hee? <br />
          </li>
        </ol>

        <p>
          Free response:<br />
            What’s your last name? – It’s … <br />
            How do you spell that? – …



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
                    <li>
                      1) be동사와 인칭대명사 : We are (We're) / He is (He's) / She is (She's) <br />
                          / It is (it's) / They are (They're)<br />
                    </li>
                    <li>
                      2) Name : 공식적인 자리에서는 성과 이름을 다 말하지만 격식을 차리지 않아도 되는 자리에서는 <br />
                          성은 말하지 않고 이름만 말해도 됩니다. <br />
                    </li>
                    <li>
                      3) First name은 이름이고 Last name 은 성입니다. 영어에서는 이름을 먼저 말하고 성을 나중에 말합니다. <br />
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
          name:'David:',
          speech:'Hi, I’m David Garza. I’m a new club member.'
        },
        {
          name:'Beth:',
          speech:'Hello. My name is Elizabeth Silva, but please call me Beth.'
        },
        {
          name:'David:',
          speech:'OK. Where are you from, Beth?'
        },
        {
          name:'Beth:',
          speech:'Brazil. How about you?'
        },
        {
          name:'David:',
          speech:'I’m from Mexico.'
        },
        {
          name:'Beth:',
          speech:'Sorry, what’s your last name again?'
        },
        {
          name:'David:',
          speech:'It’s Garza.'
        },
        {
          name:'Beth:',
          speech:'How do you spell that?'
        },
        {
          name:'David:',
          speech:'G-A-R-Z-A.'
        },
        {
          name:'Beth:',
          speech:'Oh, Sun Hee is here.'
        },
        {
          name:'David:',
          speech:'Who’s Sun Hee?'
        },
        {
          name:'Beth:',
          speech:'She’s my classmate. We’re in the same math class.'
        },
        {
          name:'David:',
          speech:'Where’s she from?'
        },
        {
          name:'Beth:',
          speech:'She’s from Korea. Let’s go and say hello.'
        },
        ],

        translations:[
        {
          name:'David:',
          speech:'안녕, 나는 David Garza야. 나는 클럽의 새로운 회원이야.'
        },
        {
          name:'Beth:',
          speech:'안녕. 내 이름은 Elizabeth Silva야. 하지만 Beth라고 불러줘.'
        },
        {
          name:'David:',
          speech:'좋아. 너는 어디에서 왔니? Beth?'
        },
        {
          name:'Beth:',
          speech:'Brazil에서 왔어. 그러는 너는?'
        },
        {
          name:'David:',
          speech:'나는 Mexico에서 왔어.'
        },
        {
          name:'Beth:',
          speech:'미안한데, 너의 성이 뭐라고 했었지?'
        },
        {
          name:'David:',
          speech:'Garza야.'
        },
        {
          name:'Beth:',
          speech:'철자가 어떻게 돼?'
        },
        {
          name:'David:',
          speech:'G-A-R-Z-A.'
        },
        {
          name:'Beth:',
          speech:'오, Sun Hee가 여기 있어.'
        },
        {
          name:'David:',
          speech:'Sun Hee가 누구야?'
        },
        {
          name:'Beth:',
          speech:'나의 반 친구야. 우리는 같은 수학반에 있어.'
        },
        {
          name:'David:',
          speech:'그녀는 어디에서 왔니?'
        },
        {
          name:'Beth:',
          speech:'서울에서 왔어. 가서 인사하자.'
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
