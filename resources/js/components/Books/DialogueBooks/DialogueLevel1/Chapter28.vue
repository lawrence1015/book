<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/delicious-birthday-cake-with-copy-space_23-2148351943.jpg">

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
        padding-bottom: 10px;">She wants a new car
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">She wants a new car</li><br />

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
            What kind of present <u> &emsp; &emsp; &emsp; </u> Emily <u> &emsp; &emsp; &emsp; </u> for her graduation?<br />
              Emily는 그녀의 졸업으로 무슨 종류의 선물을 원합니까?
          </li>
          <li>
            <u> &emsp; &emsp; &emsp; </u> she want earrings? <br />
              그녀는 귀걸이를 원합니까?
          </li>
          <li>
            No, she <u> &emsp; &emsp; &emsp; </u> them. She <u> &emsp; &emsp; &emsp; </u> wants a watch.<br />
              아니요, 그녀는 그것을 원하지 않습니다. 그녀는 시계를 원합니다.
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
                    <ol style="margin: 12px;">
                    <li>
                      He/she wants / What does she want? / Does she want?
                    </li>
                    <li>
                      What kind of... does she want?<br />
                        What kind of... do they want?                  
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
          speech:'Listen, it’s Emily’s birthday on Sunday.'
        },
        {
          name:'B:',
          speech:'How old is she?'
        },
        {
          name:'A:',
          speech:'She’s turning eighteen.'
        },
        {
          name:'B:',
          speech:'Is there a party?'
        },
        {
          name:'A:',
          speech:'Yeah. Her parents are making a huge party.'
        },
        {
          name:'B:',
          speech:'What does she want for her birthday?'
        },
        {
          name:'A:',
          speech:'She wants a big party with many people.'
        },
        {
          name:'B:',
          speech:'What kind of present does she want?'
        },
        {
          name:'A:',
          speech:'She wants a new car from her parents.'
        },
        {
          name:'B:',
          speech:'A new car? Wow! She’s lucky that she’s from a rich family.'
        },
        {
          name:'A:',
          speech:'Yes, but don’t worry. She’s not expecting anything expensive from us.'
        },
        {
          name:'B:',
          speech:'Does she want some of my paintings?'
        },
        {
          name:'A:',
          speech:'That’s a great idea! She likes your paintings a lot.'
        },
        {
          name:'B:',
          speech:'I have a new interesting piece.'
        },
        {
          name:'A:',
          speech:'I think she will love it.'
        },
        {
          name:'B:',
          speech:'I really hope so.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'들어봐, 일요일은 Emily의 생일이야'
        },
        {
          name:'B:',
          speech:'그녀는 몇살이니?'
        },
        {
          name:'A:',
          speech:'만18살이야 (생일에 18살이 되는거야)'
        },
        {
          name:'B:',
          speech:'파티 있니?'
        },
        {
          name:'A:',
          speech:'응, 그녀의 부모님들은 지금 거대한 파티를 만들고 계셔.'
        },
        {
          name:'B:',
          speech:'그녀는 생일 선물로 무엇을 원하니?'
        },
        {
          name:'A:',
          speech:'많은 사람들이 함께 하는 큰 파티를 원해'
        },
        {
          name:'B:',
          speech:'그녀는 어떤 종류의 선물을 받고 싶어하니?'
        },
        {
          name:'A:',
          speech:'그녀의 부모님으로부터 새로운 차를 받고 싶어해.'
        },
        {
          name:'B:',
          speech:'새차? 와우! 그녀는 부잣집에서 태어나서 행운이다.'
        },
        {
          name:'A:',
          speech:'응, 하지만 걱정하지 마. 그녀는 우리에게는 비싼 어떤 것도 기대하지 않아.'
        },
        {
          name:'B:',
          speech:'그녀는 내 그림을 좋아할까?'
        },
        {
          name:'A:',
          speech:'좋은 생각이야! 그녀는 너의 그림을 정말 좋아해.'
        },
        {
          name:'B:',
          speech:'나는 재밌는 새 그림 한 점이 있어.'
        },
        {
          name:'A:',
          speech:'그녀가 좋아할 것 같아.'
        },
        {
          name:'B:',
          speech:'정말 그랬으면 좋겠어.'
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
