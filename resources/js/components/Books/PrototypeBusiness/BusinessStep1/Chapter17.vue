<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/pXoRM/MADyQ8pXoRM/1/s2/canva-two-men-talking-on-focus-photography-MADyQ8pXoRM.jpg">

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
        padding-bottom: 10px;">Saying What You’re Doing at the Moment
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

      <p>Make sentences. Use the present continuous.</p>

      <ol style="margin: 12px;">
        <li>
          he/ have/ coffee at the moment. ( &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          you/ leave/ now? ( &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          i/ not/ read/ the report now. ( &emsp; &emsp; &emsp; &emsp; )
        </li>
        <li>
          they/ not/ have/ a meeting this morning. ( &emsp; &emsp; &emsp; &emsp; )
        </li>
      </ol>
      <p>
        Free response:<br />
        What are you working on at the moment?
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
                    긍정문: I’m working on the report now.<br />
                    부정문: He isn’t making a phone call.<br />
                    의문형: What are you doing? / Are they working on the project?
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
          speech:'Hello. Is Steve there, please?'
        },
        {
          name:'B:',
          speech:'No, he’s having lunch at the moment.'
        },
        {
          name:'A:',
          speech:'OK, no problem. I can call back later.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'Hello.'
        },
        {
          name:'B:',
          speech:'Hello, Olivia. It’s Rick'
        },
        {
          name:'A:',
          speech:'Hi, Rick. Can I phone you later? I’m driving.'
        },
        {
          name:'B:',
          speech:'Yes, OK.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'Could I speak to Colin, please?'
        },
        {
          name:'B:',
          speech:'He’s having a meeting this morning.'
        },
        {
          name:'A:',
          speech:'Oh, right.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'Hi, it’s Mitch. Is Nadia there'
        },
        {
          name:'B:',
          speech:'No. she’s not here, Mitch. She’s visiting a customer this week in Australia.'
        },
        {
          name:'A:',
          speech:'Australia!'
        },
        {
          name:'B:',
          speech:'Yeah.'
        },
        ],
        
        translations:[
        {
          name:'A:',
          speech:'여보세요. 스티브 거기 있나요?'
        },
        {
          name:'B:',
          speech:'아니요, 지금 점심 먹고 있어요.'
        },
        {
          name:'A:',
          speech:'그래요, 괜찮습니다. 나중에 다시 전화할게요.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'여보세요.'
        },
        {
          name:'B:',
          speech:'안녕, 올리비아. 릭이야.'
        },
        {
          name:'A:',
          speech:'안녕, 릭. 나중에 전화해도 될까? 나 운전하고 있어.'
        },
        {
          name:'B:',
          speech:'그래, 알았어.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'콜린과 통화할 수 있을까요?'
        },
        {
          name:'B:',
          speech:'오늘 아침에 회의가 있어요.'
        },
        {
          name:'A:',
          speech:'아, 알겠어요'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'안녕하세요, 전 미치에요. 나디아 거기 있어요?'
        },
        {
          name:'B:',
          speech:'아니요, 그녀는 여기 없어요, 미치. 그녀는 이번 주에 호주에 있는 고객을 방문하고 있어요.'
        },
        {
          name:'A:',
          speech:'호주요!'
        },
        {
          name:'B:',
          speech:'네.'
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
