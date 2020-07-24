<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://www.travelweek.ca/wp-content/uploads/2019/05/Suppliers-say-%E2%80%98Thank-You%E2%80%99-with-long-list-of-Travel-Agent-Day-incentives.jpg">

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
        padding-bottom: 10px;">Where do you work?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Where do you work?</li><br />

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
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)<br />
        </p>

        <ol style="margin: 12px;">
          <li>
            Where <u> &emsp; &emsp; &emsp; </u> work, Paul?<br />
              (Paul, 당신은 어디에서 일하십니까?) <br />
          </li>
          <li>
            I <u> &emsp; &emsp; &emsp; </u> at a bank. <br />
              (저는 은행에서 일합니다.)<br />
          </li>
          <li>
            <u> &emsp; &emsp; &emsp; </u> your wife have a job, too?<br />
              (당신의 부인도 직업이 있습니까?)<br />
          </li>
          <li>
            Yes, she <u> &emsp; &emsp; &emsp; </u> at a kindergarten. <br />
              (네, 그녀는 유치원에서 일합니다.)<br />
          </li>
        </ol>

        <p>
          Free response:<br />
          Talk about your job / part time job.<br />
          What's your dream job?<br />

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
                      의문사가 있는 의문문의 어순 : 의문사 + do + 주어(you,we,they)...?<br />
                        who (누구) / what (무엇) / which(어느 것) / where (어디)<br />
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
          speech:'Where do you work, Andrea?'
        },
        {
          name:'B:',
          speech:'I work at a travel agency.'
        },
        {
          name:'A:',
          speech:'Oh, really? What do you do there?'
        },
        {
          name:'B:',
          speech:'I’m a guide. I take people on tours to countries in South America, like Peru.'
        },
        {
          name:'A:',
          speech:'How interesting!'
        },
        {
          name:'B:',
          speech:'Yes, it’s a great job. I love it. And what do you do?'
        },
        {
          name:'A:',
          speech:'I’m a student, and I have a part-time job, too.'
        },
        {
          name:'B:',
          speech:'Where do you work?'
        },
        {
          name:'A:',
          speech:'In a fast-food restaurant.'
        },
        {
          name:'B:',
          speech:'Which restaurant?'
        },
        {
          name:'A:',
          speech:'Hamburger Heaven.'
        },
        {
          name:'B:',
          speech:'What do you do exactly? Do you make hamburgers?'
        },
        {
          name:'A:',
          speech:'No, I don’t. I just take orders.'
        },
        {
          name:'B:',
          speech:'And what’s it like there? Do you like your job?'
        },
        {
          name:'A:',
          speech:'Yes, I do. It’s fun. And I get free hamburgers, too!'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'Andrea, 당신은 어디에서 일하십니까?'
        },
        {
          name:'B:',
          speech:'저는 여행사에서 일합니다.'
        },
        {
          name:'A:',
          speech:'오, 정말요? 그 곳에서 무엇을 하십니까?'
        },
        {
          name:'B:',
          speech:'저는 가이드 입니다. 저는 Peru같은 남아메리카에 있는 나라들로 사람들을 데리고 여행을 합니다.'
        },
        {
          name:'A:',
          speech:'재밌겠어요!'
        },
        {
          name:'B:',
          speech:'네, 그것은 멋진 직업입니다. 저는 이 일을 무척 좋아합니다. 그런데 당신의 직업은 무엇입니까?'
        },
        {
          name:'A:',
          speech:'저는 학생입니다. 또한 아르바이트도 합니다.'
        },
        {
          name:'B:',
          speech:'어디서 일하십니까?'
        },
        {
          name:'A:',
          speech:'패스트푸드 식당에서 일합니다.'
        },
        {
          name:'B:',
          speech:'어떤 레스토랑인가요?'
        },
        {
          name:'A:',
          speech:'Hamburger Heaven입니다.'
        },
        {
          name:'B:',
          speech:'정확히 무엇을 하십니까? 햄버거를 만드십니까?'
        },
        {
          name:'A:',
          speech:'아니요, 그렇지 않습니다. 저는 단지 주문을 받습니다.'
        },
        {
          name:'B:',
          speech:'그곳은 어떻습니까? 당신은 당신의 일을 좋아합니까?'
        },
        {
          name:'A:',
          speech:'네, 좋아합니다. 재밌습니다. 그리고 햄버거도 자유롭게 먹을 수 있습니다.'
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
