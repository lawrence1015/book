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
        padding-bottom: 10px;">Hi! What's your name?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

    <li style="list-style-type: none;">Hi! What's your name?</li><br />

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
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
              안녕하세요. 제 이름은 Peter입니다. <br />
                Hello. My <u> &emsp; &emsp; &emsp; </u> Peter. <br />
          </li>
          <li>
              당신의 이름은 무엇입니까? <br />
                <u> &emsp; &emsp; &emsp; </u> Peter. <br />
          </li>
          <li>
              당신은 어디에서 오셨습니까? - 저는 한국에서 왔습니다 <br />
                <u> &emsp; &emsp; &emsp; </u> are you from> - <u> &emsp; &emsp; &emsp; </u> Korea. <br />
          </li>
        </ol>

        <p>
          Free response:<br />
            Hello. What’s your name? - Hello. …  …  … <br />
            Where are you from? – …  …  …


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
                      1) be동사와 인칭대명사 : be동사(...이다/있다), 인칭대명사(사람, 사물을 지칭하는 말)<br />
                          I am (I'm-축약형)  / You are (you're)<br />
                    </li>
                    <li>
                      2) please call me Ben : 사람들은 이름대신 애칭을 많이 사용합니다. <br />
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
          name:'Julia:',
          speech:'Hello, I’m Julia. What’s your name?'
        },
        {
          name:'Ben:',
          speech:'Hi, Julia. My name’s Benjamin. Please call me Ben.'
        },
        {
          name:'Julia:',
          speech:'OK. It’s nice to meet you, Ben.'
        },
        {
          name:'Ben:',
          speech:'Nice to meet you, too. What’s your last name, Julia?'
        },
        {
          name:'Julia:',
          speech:'It’s Banks. What’s your last name?'
        },
        {
          name:'Ben:',
          speech:'My last name is Lee.'
        },
        {
          name:'Julia:',
          speech:'Where are you from, Ben?'
        },
        {
          name:'Ben:',
          speech:'I’m from Vancouver, Canada. And you? Are you from Canada?'
        },
        {
          name:'Julia:',
          speech:'No, I’m from the United States.'
        },
        {
          name:'Ben:',
          speech:'What city are you from?'
        },
        {
          name:'Julia:',
          speech:'Miami, Florida.'
        },
        {
          name:'Ben:',
          speech:'I’m sorry. I have to go now. See you tomorrow, Julia.'
        },
        {
          name:'Julia:',
          speech:'See you. Bye.'
        },
        ],

        translations:[
        {
          name:'Julia:',
          speech:'안녕하세요, 저는 Julia입니다. 당신의 이름은 무엇입니까?'
        },
        {
          name:'Ben:',
          speech:'안녕하세요, Julia. 제 이름은 Benjamin 입니다. 저를 Ben이라고 불러주십시요.'
        },
        {
          name:'Julia:',
          speech:'좋아요. 만나서 반갑습니다, Ben.'
        },
        {
          name:'Ben:',
          speech:'저도 만나서 반갑습니다. 당신의 성은 무엇입니까, Julia?'
        },
        {
          name:'Julia:',
          speech:'Banks입니다. 당신의 성은 무엇입니까?'
        },
        {
          name:'Ben:',
          speech:'제 성은 Lee입니다.'
        },
        {
          name:'Julia:',
          speech:'어디에서 오셨습니까, Ben?'
        },
        {
          name:'Ben:',
          speech:'저는 Canada, Vancouver에서 왔습니다. 당신은요? Canada에서 오셨습니까?'
        },
        {
          name:'Julia:',
          speech:'아니요, 저는 미국에서 왔습니다.'
        },
        {
          name:'Ben:',
          speech:'어느 도시에서 오셨습니까?'
        },
        {
          name:'Julia:',
          speech:'Florida주에 있는 Miami에서 왔습니다.'
        },
        {
          name:'Ben:',
          speech:'죄송합니다. 저는 지금 가야합니다. 내일 봐요, Julia.'
        },
        {
          name:'Julia:',
          speech:'안녕히 가세요.'
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
