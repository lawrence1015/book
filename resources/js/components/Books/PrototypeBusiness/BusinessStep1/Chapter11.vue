<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGxqzFFmw/4/screen_2x/canva-black-and-gray-digital-device-MADGxqzFFmw.jpg">

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
        padding-bottom: 10px;">Coping with Difficult Language
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


    <ol style="margin: 12px;">
      <li>
        <p>
          To: all managers and assistants<br />
          From: Susanne Flore-Training Manager-CC Software International (Geneva)<br />
          Subject: English training course
        </p>
        <hr />
        <p>
          Do you send and receive emails in English?<br />
          Do you read and write reports in English?<br />
          'Write English' is a training course for CC Software's managers and their assistants.<br />
          The course is at our head office in Geneva.<br />
          <br />
          Best regards,<br />
          <br />
          Susan Flore<br />
          Training Manager-CC Software International s.flore@cc-s.ch<br />
          Tel: +41 2290887250, extension 165
        </p>
      </li>
      <li>
        <p>
          To: Susanne Flore<br />
          From: Mario Toro<br />
          Subject: English training course
        </p>
        <hr />
        <p>
          Dear Ms Flore,<br />
          Two people from CC Software Italy would like to go to the 'Write English' training course.<br />
          They are Silvia Lardi, an assistant at our office in Milan, and Antonio Amato, the manager of the Rome office.<br />
          <br />
          Best regards,<br />
          <br />
          Mario Toro<br />
          Human Resources Manager-CC Software Italy m.toro@cc-s.it<br />
          Tel: +39 02449690791, extension 22
        </p>
      </li>
    </ol>

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


    <ol style="margin: 12px;">
      <li>
        <p>
          받는 사람: 모든 관리자 및 보조자<br />
          출처:수잔 플로어-교육 관리자-CC 소프트웨어 인터내셔널 (제네바)<br />
          과목:영어교육과정
        </p>
        <hr />
        <p>
          당신은 영어로 이메일을 주고 받나요?<br />
          당신은 영어로 보고서를 읽고 쓰나요?<br />
          '영어 쓰기'는 CC Software의 관리자 및 보조자를 위한 교육 과정입니다.<br />
          본 코스는 제네바에 있는 저희 본사에 있습니다.<br />
          <br />
          감사합니다.<br />
          <br />
          수잔 플로어<br />
          교육 관리자-CC 소프트웨어 인터내셔널 s.flore@cc-s.ch<br />
          전화: +41 2290887250, 내선 번호 165
        </p>
      </li>
      <li>
        <p>
          수신: 수잔 플로어<br />
          보낸 사람: 마리오 토로<br />
          과목:영어교육과정
        </p>
        <hr />
        <p>
          친애하는 플로어 씨에게,<br />
          CC Software Italy에서 온 두 사람이 '영어 쓰기' 훈련 코스에 가고 싶어 합니다.<br />
          그들은 밀라노에 있는 우리 사무소의 조수 실비아 라르디와 로마 사무소의 부장 안토니오 아마토 입니다.<br />
          <br />
          안부 전합니다,<br />
          <br />
          마리오 토로<br />
          인사담당자-CC 소프트웨어 이탈리아 m.toro@cc-s.it<br />
          전화: +39 02449690791, 내선 22
        </p>
      </li>
    </ol>
    </div>

    <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #43464C; border-style: solid; border-width: 2px;">
    </div>
    <h3 class = "border white--text" style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 0px; background-color: #43464C;">Exercise</h3>
    <div style="padding : 16px;">

      <p>Fill in the gaps.</p>

      <ol style="margin: 12px;">
        <li>
          Tom works here. This is  ( &emsp; )  office. (he)
        </li>
        <li>
          Where do you work? Where’s ( &emsp; ) office. (you)
        </li>
        <li>
          He’s the manager ( &emsp; ) the Rome office.
        </li>
      </ol>

      <p>
        Free response:<br />
        Do you send and receive emails in English?<br />
        Do you read and write reports in English?
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
                    Do you read and write reports in English?<br />
                    <font color="blue">I</font> => <font color="red">my</font> , <font color="blue">you</font> => <font color="red">your</font> ,
                    <font color="blue">she</font> => <font color="red">her</font> , <font color="blue">he</font> => <font color="red">his</font> ,
                    <font color="blue">it</font> => <font color="red">its</font><br />

                    <font color="blue">we</font> => <font color="red">our</font> , <font color="blue">you</font> => <font color="red">your</font> ,
                    <font color="blue">they</font> => <font color="red">their</font>
                  </p>
                  <p>
                    소유 ’S and of<br />
                    Where’s Andrew’s office?<br />
                    He’s the manager <b>of</b> the Rome office.
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
          speech:'Is this your book or Jan’s?'
        },
        {
          name:'B:',
          speech:'It’s Jan’s'
        },
        {
          name:'A:',
          speech:'Is it his book or your book?'
        },
        {
          name:'B:',
          speech:'It’s his book.'
        },
        {
          name:'A:',
          speech:'Is this your pen or Laura’s?'
        },
        {
          name:'B:',
          speech:'It’s my pen.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'What’s Tony’s email address?'
        },
        {
          name:'B:',
          speech:'His email is abd_12@fff.co'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'이게 네 책이니 아니면 잰 책이니?'
        },
        {
          name:'B:',
          speech:'잰의 거야.'
        },
        {
          name:'A:',
          speech:'그의 책이니 아니면 네 책이니?'
        },
        {
          name:'B:',
          speech:'그의 책이야.'
        },
        {
          name:'A:',
          speech:'이거 네 펜이니, 로라 펜이니?'
        },
        {
          name:'B:',
          speech:'내 펜이야.'
        },
        {
          name:'',
          speech:''
        },
        {
          name:'A:',
          speech:'토니의 이메일 주소가 뭐야?'
        },
        {
          name:'B:',
          speech:'그의 이메일은 abd_12@fff.com이야.'
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
