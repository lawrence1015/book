<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv4SUQ4g/6/screen_2x/canva-group-oo-people-having-a-meeting--MADGv4SUQ4g.jpg">

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
        padding-bottom: 10px;">Asking About Business Facilities
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

      <p>Fill in the gaps.</p>

      <ol style="margin: 12px;">
        <li>
          There ( &emsp; &emsp; ) meeting rooms.
        </li>
        <li>
          There ( &emsp; &emsp; ) a photocopier.
        </li>
        <li>
          ( &emsp; &emsp; ) there power sockets?
        </li>
      </ol>

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
                    There is/are
                  </p>
                  <p>
                    단수: There is…<br />
                    복수: There are…<br />
                    의문문: Is there…? Are there…?<br />
                    부정문: There isn’t/aren’t…
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
          name:'Customer:',
          speech:'So, there are meeting rooms at the hotel.'
        },
        {
          name:'Receptionist:',
          speech:'Yes, we have a business center with four rooms.'
        },
        {
          name:'Customer:',
          speech:'Right. So for a meeting with three people, um…'
        },
        {
          name:'Receptionist:',
          speech:'Oh yes, that’s no problem. There are six chairs in each room, so…'
        },
        {
          name:'Customer:',
          speech:'OK. That’s fine, then.'
        },
        {
          name:'Receptionist:',
          speech:'Then in reception there’s a photocopier, if you need to make copies.'
        },
        {
          name:'Customer:',
          speech:'Right.'
        },
        {
          name:'Receptionist:',
          speech:'There’s a fax machine, um… a drinks machine… Do you need a telephone?'
        },
        {
          name:'Customer:',
          speech:'Er, no.'
        },
        {
          name:'Receptionist:',
          speech:'OK. It’s just we don’t have phones in the rooms. Most people have mobiles, so…'
        },
        {
          name:'Customer:',
          speech:'Of course, yeah. No, that’s no problem. Er…Just a question about computers. Um…'
        },
        {
          name:'Receptionist:',
          speech:'We don’t have computers, I’m afraid.'
        },
        {
          name:'Customer:',
          speech:'No,no,that’s OK. It’s just I have a laptop. Um…'
        },
        {
          name:'Receptionist:',
          speech:'Oh, I see.'
        },
        {
          name:'Customer:',
          speech:'Are there power sockets?'
        },
        {
          name:'Receptionist:',
          speech:'Yes.'
        },
        {
          name:'Customer:',
          speech:'Great. And is there a phone socket, for an Internet connection? So I can send emails.'
        },
        {
          name:'Receptionist:',
          speech:'Um… We don’t have phone sockets in the meeting rooms, so…no. Um…'
        },
        {
          name:'Customer:',
          speech:'Well, no. It’s not a problem. I can connect to the phone socket in the bedroom.'
        },
        {
          name:'Receptionist:',
          speech:'Oh, yes. The bedrooms all have phones, so…'
        },
        {
          name:'Customer:',
          speech:'OK. That’s fine then. Um…OK, so can I book…'
        },
        ],

        translations:[
        {
          name:'고객:',
          speech:'그래서 호텔에는 미팅룸이 있군요.'
        },
        {
          name:'접수 담당자:',
          speech:'네, 방이 네 개 있는 비즈니스 센터가 있답니다.'
        },
        {
          name:'고객:',
          speech:'네, 그럼 세 사람과의 미팅을 위해서, 음...'
        },
        {
          name:'접수 담당자:',
          speech:'오 그건 문제없어요. 각 방마다 의자가 여섯 개씩 있어서…'
        },
        {
          name:'고객:',
          speech:'네. 그럼 괜찮아요.'
        },
        {
          name:'접수 담당자:',
          speech:'그리고 복사해야 한다면 접수처에 복사기가 있습니다.'
        },
        {
          name:'고객:',
          speech:'그렇군요.'
        },
        {
          name:'접수 담당자:',
          speech:'팩스기가 있는데 음... 음료수 기계가... 전화기 필요하십니까?'
        },
        {
          name:'고객:',
          speech:'어, 아니에요.'
        },
        {
          name:'접수 담당자:',
          speech:'네. 방에 전화기가 없어서 그래요. 대부분의 사람들은 모바일을 가지고 있기 때문에…'
        },
        {
          name:'고객:',
          speech:'물론 그렇죠. 그래. 아니, 그건 문제 없어요. 어… 그냥 컴퓨터에 대한 질문이 있습니다. 음…'
        },
        {
          name:'접수 담당자:',
          speech:'유감스럽게도 우리는 컴퓨터가 없습니다.'
        },
        {
          name:'고객:',
          speech:'아니, 아니, 괜찮아요. 그냥 노트북이 있어요. 음…'
        },
        {
          name:'접수 담당자:',
          speech:'아, 그렇군요.'
        },
        {
          name:'고객:',
          speech:'전원 소켓이 있나요?'
        },
        {
          name:'접수 담당자:',
          speech:'네.'
        },
        {
          name:'고객:',
          speech:'좋네요. 그리고 인터넷 연결을 위한 전화 소켓이 있나요? 그러면 전 이메일을 보낼 수 있습니다.'
        },
        {
          name:'접수 담당자:',
          speech:'음… 회의실에 전화 소켓이 없어서… 음…'
        },
        {
          name:'고객:',
          speech:'저, 아닙니다. 그건 문제가 아닙니다. 나는 침실에 있는 전화 소켓에 연결할 수 있어요.'
        },
        {
          name:'접수 담당자:',
          speech:'아 네 침실에는 모두 전화기가 있어서…'
        },
        {
          name:'고객:',
          speech:'네. 그럼 괜찮아요. 음…그래요, 제가 예약할 수 있을까요…'
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
