<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGvoQQFPQ/7/screen_2x/canva-four-people-playing-basketball-MADGvoQQFPQ.jpg">

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
        padding-bottom: 10px;">Saying What You Do in Your Spare Time
      </h1>
    </v-layout>
  </v-img>

  <div style=" border-color: #43464C; border-style: solid; border-width: 2px;">
  </div>
  <h3  class = "border white--text" >Today's topic</h3>
  <div style = "padding : 16px;">

    <table style = "border-collapse: collapse;">
    
      <tr v-for="dialog in dialogs">
        <td class = "uppertable" >{{dialog.name}}</td>
        <td class = "lowertable" >{{dialog.speech}}</td>
      </tr>

    </table>


<div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #899857; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #899857;">Translation</h3>
    <div style="padding : 16px;">

      <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations">
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
          <u>Underline</u> the correct form of the verbs.
        </p>
        <ol style="margin: 12px;">
          <li>
             I love (swim/<u>swimming</u>). I go every morning.
          </li>
          <li>
             I like (watch/watching) football, but I can’t (play/playing) very well.
          </li>
          <li>
             I hate (run/running). I much prefer (cycle/cycling).
          </li>
          <li>
             What do you like (do/doing) in your spare time?
          </li>
          <li>
             I can’t (ski/skiing) very well. It’s very difficult.
          </li>
        </ol>
        <p>
          Free response:<br />
          What do you do in your spare time?
        </p>
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
                    Gerund (동명사)<br />
                    I hate walking.<br />
                    I like skiing.
                    </p>
                    <p>
                      go/play/do<br />
                      I go+noun with –ing<br />
                      I play +sports, games, musical instruments<br />
                      I do +aerobics, weight training
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
          speech:'So, what do you do when you’re not at work?'
        },
        {
          name:'B:',
          speech:'Um… I play basketball.'
        },
        {
          name:'A:',
          speech:'Basketball?'
        },
        {
          name:'B:',
          speech:'Yeah, I’m in a local team.'
        },
        {
          name:'A:',
          speech:'Right.'
        },
        {
          name:'B:',
          speech:'I do aerobics, as well. Um… What about you'
        },
        {
          name:'A:',
          speech:'I go cycling sometimes.'
        },
        {
          name:'B:',
          speech:'Oh, I go cycling as well.'
        },
        {
          name:'A:',
          speech:'Right.'
        },
        {
          name:'B:',
          speech:'Yeah. Where do you go?'
        },
        {
          name:'A:',
          speech:'Er…'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'So, you play football?'
        },
        {
          name:'B:',
          speech:'I play football, I do weight training two or three times a week, I go fishing…'
        },
        {
          name:'A:',
          speech:'What sort of fish do you catch?'
        },
        {
          name:'B:',
          speech:'Big ones! I have some photos I can show you…'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'So, What do you do in your spare time?'
        },
        {
          name:'B:',
          speech:'Um… I play chess, um… I play the guitar.'
        },
        {
          name:'A:',
          speech:'Oh. Are you good?'
        },
        {
          name:'B:',
          speech:'At chess or the guitar? Well, actually I’m not very good at either, so…'
        },
        {
          name:'A:',
          speech:'Right.'
        },
        {
          name:'B:',
          speech:'I go running.'
        },
        {
          name:'A:',
          speech:'Yeah.'
        },
        {
          name:'B:',
          speech:'What about you?'
        },
        {
          name:'A:',
          speech:'Um…well…'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'그럼, 일하지 않을 때는 뭐해?'
        },
        {
          name:'B:',
          speech:'음… 나는 농구를 해.'
        },
        {
          name:'A:',
          speech:'농구?'
        },
        {
          name:'B:',
          speech:'응, 난 지역 팀이야.'
        },
        {
          name:'A:',
          speech:'그렇구나.'
        },
        {
          name:'B:',
          speech:'에어로빅도 해. 음… 너는?'
        },
        {
          name:'A:',
          speech:'난 가끔 자전거 타러 가.'
        },
        {
          name:'B:',
          speech:'나도 자전거 타러 가.'
        },
        {
          name:'A:',
          speech:'그렇구나.'
        },
        {
          name:'B:',
          speech:'응. 어디로 가?'
        },
        {
          name:'A:',
          speech:'음…'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'그래, 너 축구하는 거야?'
        },
        {
          name:'B:',
          speech:'축구도 하고, 일주일에 두세 번 웨이트 트레이닝도 하고, 낚시도 하고…'
        },
        {
          name:'A:',
          speech:'어떤 종류의 물고기를 잡니?'
        },
        {
          name:'B:',
          speech:'큰 것! 보여줄 수 있는 사진이 몇 장 있는데…'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'그래, 여가 시간에 뭐해?'
        },
        {
          name:'B:',
          speech:'음… 나는 체스를, 음… 기타를 연주해.'
        },
        {
          name:'A:',
          speech:'오, 잘하니?'
        },
        {
          name:'B:',
          speech:'체스? 아님 기타? 음, 사실 둘다 엄청 잘하지는 않아. 그래서...'
        },
        {
          name:'A:',
          speech:'그렇구나!'
        },
        {
          name:'B:',
          speech:'난 열심히 해.'
        },
        {
          name:'A:',
          speech:'네.'
        },
        {
          name:'B:',
          speech:'너는?'
        },
        {
          name:'A:',
          speech:'음…글쎄…'
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
