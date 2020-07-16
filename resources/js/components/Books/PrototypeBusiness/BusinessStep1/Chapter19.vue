<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/female-worker-consulting-client-phone_1163-3977.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgba(72, 87, 125, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Arranging To Meet
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #43464C; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <table style = "border-collapse: collapse;">
    
      <tr v-for="dialog in dialogs" :key="dialog">
        <td class = "uppertable" >{{dialog.name}}</td>
        <td class = "lowertable" >{{dialog.speech}}</td>
      </tr>

    </table>


<div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Translation</h3>
    <div style="padding : 16px;">

      <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations" :key="translation">
          <td class = "uppertable" >{{translation.name}}</td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>

      </table>

    </div>
      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
      <div style="padding : 16px;">

        <p>
          Write the dates as words.
        </p>
        <ol style="margin: 12px;">
          <li>
             10.05 ( &emsp; &emsp; &emsp; &emsp; )
          </li>
          <li>
             14.07 ( &emsp; &emsp; &emsp; &emsp; )
          </li>
        </ol>
        <p>
          Fill in the gaps with in,on,at
        </p>
        <ol style="margin: 12px;">
          <li>
            I can make it ( &emsp; ) the fifteenth.
          </li>
          <li>
            Can we meet ( &emsp; ) the beginning of the month?
          </li>
          <li>
            I’m going to the Toronto office the last week ( &emsp; ) March.
          </li>
        </ol>
        <p>
          Free response:<br />
          Arrange a date and time. You are busy on the highlighted dates.
        </p>
        <p>
          Are you free/busy…?<br />
          Can you make it…?
        </p>

        <v-container grid-list-md text-xs-center>
          <v-layout wrap align-content-center>

            <v-flex xs10 md4 >
              <v-card hover>

                <v-img src="images/calendar.jpg" />

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Self Study</h3>
      <div style="padding : 16px;">


          <p>
            Notes
          </p>

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card light color="#9197A6">
                  <v-card-text class="px-10">
                    <p>
                    On :Tuesday, July9th(dates)<br />
                    In: March(months), summer(seasons), the middle of…, the morning/afternoon/evening<br />
                    At: ten o’clock(times), the beginning, end of night, the weekend, Christmas
                    </p>
                    <p>
                      May 11th: May the eleventh<br />
                      11th May: The eleventh of May
                    </p>
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
          speech:'So, we need to have a meeting about this new project.'
        },
        {
          name:'B:',
          speech:'Yeah.'
        },
        {
          name:'A:',
          speech:'When can we meet? I`m free at the end of January.'
        },
        {
          name:'B:',
          speech:'The end of January? Um...yeah.'
        },
        {
          name:'A:',
          speech:'What about the twenty-eighth?'
        },
        {
          name:'B:',
          speech:'Um... Yes, I can make it on the twenty-eighth.'
        },
        {
          name:'A:',
          speech:'OK. The twenty-eighth of January, then.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'I`m free in February. Can we visit the factory then?'
        },
        {
          name:'B:',
          speech:'I`m busy at the beginning of February. What about the last week in February?'
        },
        {
          name:'A:',
          speech:'Yeah.'
        },
        {
          name:'B:',
          speech:'Monday the twenty-second?'
        },
        {
          name:'A:',
          speech:'Yes, that`s fine'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'We need to arrange a date for the meeting.'
        },
        {
          name:'B:',
          speech:'Yes. Um...'
        },
        {
          name:'A:',
          speech:'Can you make it on the fifth of April?'
        },
        {
          name:'B:',
          speech:'Yes. I`m free on the fifth. What time?'
        },
        {
          name:'A:',
          speech:'In the morning?'
        },
        {
          name:'B:',
          speech:'Yeah.'
        },
        {
          name:'A:',
          speech:'At nine o`clock?'
        },
        {
          name:'B:',
          speech:'OK. Yes, That`s fine.'
        },
        {
          name:'A:',
          speech:'OK. So, the fifth of April at nine a.m.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'그래서 이 새로운 프로젝트에 대해 회의를 해야 해요.'
        },
        {
          name:'B:',
          speech:'네.'
        },
        {
          name:'A:',
          speech:'우리 언제 만날 수 있을까요? 저는 1월 말에 한가해요.'
        },
        {
          name:'B:',
          speech:'1월 말이요? 음...그래요.'
        },
        {
          name:'A:',
          speech:'28일은 어때요?'
        },
        {
          name:'B:',
          speech:'음... 네, 28일에 가능해요.'
        },
        {
          name:'A:',
          speech:'그럼 1월 28일로.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'2월에는 한가해요. 그럼 우리가 공장에 방문할 수 있나요?'
        },
        {
          name:'B:',
          speech:'2월 초에 바빠요. 2월 마지막 주는 어때요?'
        },
        {
          name:'A:',
          speech:'그래요.'
        },
        {
          name:'B:',
          speech:'22일 월요일요?'
        },
        {
          name:'A:',
          speech:'네, 괜찮아요.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'회의 날짜를 잡아야 해요.'
        },
        {
          name:'B:',
          speech:'네. 음...'
        },
        {
          name:'A:',
          speech:'4월 5일에 가능한가요?'
        },
        {
          name:'B:',
          speech:'네. 전 5일에 자유에요. 몇시에요?'
        },
        {
          name:'A:',
          speech:'아침에?'
        },
        {
          name:'B:',
          speech:'네.'
        },
        {
          name:'A:',
          speech:'9시에?'
        },
        {
          name:'B:',
          speech:'그래요, 괜찮아요.'
        },
        {
          name:'A:',
          speech:'네, 그러면 4월 5일 오전 9시 입니다.'
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
  border-color: transparent #43464C transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #43464C;
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
