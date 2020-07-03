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
        padding-bottom: 10px;">What's Seoul like?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">What's Seoul like?</li><br />

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
            1. 서울은 어떻습니까?<br />
                What <u> &emsp; &emsp; &emsp; </u> Seoul <u> &emsp; &emsp; &emsp; </u>?<br />
          </li>
          <li>
            2. 그곳은 크고 흥미진진합니다.<br />
                <u> &emsp; &emsp; &emsp; </u> ig and exciting. <br />
          </li>
        </ol>

        <p>
          Free response:<br />
            What city are you from? <br />
            What is it like?<br />

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
                      1) be동사의 의문문 : be동사 + 주어...? ...입니까? ...있습니까?)<br />
                        질문: Am I...? / Are you...? / Is he( she,it )...? / Are we( they )...?<br />
                        대답: Yes, I am ( No, I'm not ) / Yes, you are ( No, you aren't ) / Yes, he( she, it ) is ( No, he( she,it )<br />
                        isn't ) / Yes, we are ( No, we aren't ) / Yes, they are( No, they aren't )<br />

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
          name:'Beth:',
          speech:'Sun Hee, this is David Garza. He’s a new club member from Mexico.'
        },
        {
          name:'Sun Hee:',
          speech:'Nice to meet you, David. I’m Sun Hee Park.'
        },
        {
          name:'David:',
          speech:'Hi. So, you’re from Korea?'
        },
        {
          name:'Sun Hee:',
          speech:'That’s right. I’m from Seoul.'
        },
        {
          name:'David:',
          speech:'That’s cool. What’s Seoul like?'
        },
        {
          name:'Sun Hee:',
          speech:'It’s really nice. It’s big and very exciting.'
        },
        {
          name:'Sun Hee:',
          speech:'So David, where are you from?'
        },
        {
          name:'David:',
          speech:' I’m from Mexico.'
        },
        {
          name:'Sun Hee:',
          speech:'Really? What city?'
        },
        {
          name:'David:',
          speech:'Mexico city.'
        },
        {
          name:'Sun Hee:',
          speech:'Wow! What is it like there?'
        },
        {
          name:'David:',
          speech:'Oh, it’s a very interesting city.'
        },
        {
          name:'Sun Hee:',
          speech:'Is it big?'
        },
        {
          name:'David:',
          speech:'Oh yes. It’s really big.'
        },
        ],

        translations:[
        {
          name:'Beth:',
          speech:'Sun Hee야, 얘는 David Garza야. Mexico에서 온 클럽의 새로운 회원이야.'
        },
        {
          name:'Sun Hee:',
          speech:'만나서 반가워, David. 나는 박선희야.'
        },
        {
          name:'David:',
          speech:'안녕. 그럼, 한국에서 왔니?'
        },
        {
          name:'Sun Hee:',
          speech:'맞아. Seoul에서 왔어.'
        },
        {
          name:'David:',
          speech:'멋지다. Seoul은 어떻니?'
        },
        {
          name:'Sun Hee:',
          speech:'정말 좋아. 그 도시는 크고 매우 흥미로워.'
        },
        {
          name:'Sun Hee:',
          speech:'그런데 David, 너는 어디서 왔니?'
        },
        {
          name:'David:',
          speech:'Mexico에서 왔어.'
        },
        {
          name:'Sun Hee:',
          speech:'정말? 무슨 도시?'
        },
        {
          name:'David:',
          speech:'Mexico city.'
        },
        {
          name:'Sun Hee:',
          speech:'와우! 그곳은 어때?'
        },
        {
          name:'David:',
          speech:'오, 매우 흥미로운 도시야.'
        },
        {
          name:'Sun Hee:',
          speech:'그 도시는 커?'
        },
        {
          name:'David:',
          speech:'응. 아주 큰 도시야.'
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
