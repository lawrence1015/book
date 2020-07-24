<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/dentists-from-perspective-patient_23-2148104942.jpg">

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
        padding-bottom: 10px;">At a dentist
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">At a dentist</li><br />
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
          <u>Answer the questions</u><br />
          (질문에 답하세요.)
        </p>

        <ol style="margin: 12px;">
          <li>
            Where’s Mr. Wilson?<br />
              (Wilson씨는 어디에 있습니까?)<br />
          </li>
          <li>
            Who is Miss Tracy?<br />
              (Tracy씨는 누구입니까?)<br />
          </li>
          <li>
            What is aspirin good for?<br />
              (아스피린은 무엇에 좋습니까?)<br />
          </li>
          <li>
            How are Mr. Wilson’s teeth?<br />
             (Wilson씨의 이는 어떻습니까?)<br />
          </li>
        </ol>

        <p>
          Free response:<br />
            Is your dentist like Dr. Molar? Is he a good or a bad dentist?<br />
            Is going to the dentist expensive in Korea? Are your teeth healthy or not?<br />

            (당신의 치과선생님은 Molar선생님 같습니까? 그는 좋은 선생님입니까 나쁜 선생님입니까?<br />
             한국에서 치과는 비쌉니까? 당신의 이는 건강합니까 그렇지 않습니까?)<br />
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
                      you are in good hands : 직역을 하면 환자가 좋은 손들 안에 놓여 있다라는 뜻인데, 이 표현에서<br />
                        전치사는 on이 아니라 in을 씁니다.<br />
                        on good hands라고 하면 마치 손바닥 위에 올려놓은 것 같은 느낌을 주는데 그다지 안정감이<br />
                        없습니다. 그보다는 두 손 안에 들어가 있을 때 좀 더 안정감을 느낍니다.<br />
                        손도 하나가 아니라 둘을 써서 hands라는 복수를 쓰는 것입니다.<br />
                    </li>
                    <li>
                      명사의 복수형: 대부분의 명사 뒤에는 s 혹은 es가 붙지만 불규칙적으로 변하는 명사도 있습니다. <br />
                         ex)  man-men; woman-women; foot-feet; tooth-teeth; child-children; mouse-mice<br />
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
          name:'Nurse:',
          speech:'Come in Mr. Wilson. Give me your coat. This is Dr. Molar.'
        },
        {
          name:'Mr. Wilson',
          speech:'Hello, Doctor.'
        },
        {
          name:'Dr. Molar:',
          speech:'Hi, Mr. Wilson. Sit down, please. Open your mouth. Come here Tracy. Look at those teeth.'
        },
        {
          name:'Nurse:',
          speech:'Oh, my…'
        },
        {
          name:'Dr. Molar:',
          speech:'Bring me the aspirin, Tracy. It’s next to the mouth wash. Take two of these, Mr. Wilson. They’re good for pain. Now, don’t be afraid.'
        },
        {
          name:'Mr. Wilson:',
          speech:'Help… nurse…!'
        },
        {
          name:'Dr. Molar:',
          speech:'Miss Tracy, please hold the patient. Don’t move Mr. Wilson.'
        },
        {
          name:'Mr. Wilson:',
          speech:'Doctor, I’m …'
        },
        {
          name:'Dr. Molar:',
          speech:'Don’t worry. You’re in good hands.'
        },
        {
          name:'Mr. Wilson:',
          speech:'Eeeyahh!'
        },
        {
          name:'Dr. Molar:',
          speech:'OK, that’s it. Your teeth are perfect now. Get up, Mr. Wilson. Pay Miss Tracy at the front desk.'
        },
        {
          name:'Nurse:',
          speech:'Here’s your bill. Five hundred dollars.'
        },
        {
          name:'Mr. Wilson:',
          speech:'Oh'
        },
        {
          name:'Nurse:',
          speech:'More aspirin, Mr. Wilson? Don’t forget to brush your teeth every day. Bye and have a nice day.'
        },
        ],

        translations:[
        {
          name:'Nurse:',
          speech:'Wilson씨 들어오세요. 당신의 코트를 저에게 주세요. 이 분은 Molar 선생님이십니다.'
        },
        {
          name:'Mr. Wilson',
          speech:'안녕하세요, 선생님'
        },
        {
          name:'Dr. Molar:',
          speech:'안녕하세요, Wilson씨. 앉으세요. 입을 벌리세요. Tracy 이곳에 와서 이들좀 보세요'
        },
        {
          name:'Nurse:',
          speech:'오, 이런...'
        },
        {
          name:'Dr. Molar:',
          speech:'Tracy, 아스피린을 가지고 오세요. 양치질 물약 옆에 있어요. Wilson씨 약 두알 드세요. 그 약은 통증에 좋습니다. 두려워하지 마세요.'
        },
        {
          name:'Mr. Wilson:',
          speech:'도와주세요...간호사...!'
        },
        {
          name:'Dr. Molar:',
          speech:'Tracy, 환자를 잡아주세요. 움직이지 마세요 Wilson씨.'
        },
        {
          name:'Mr. Wilson:',
          speech:'의사선생님, 저는...'
        },
        {
          name:'Dr. Molar:',
          speech:'걱정마세요. 당신은 잘 돌봐질 것입니다.'
        },
        {
          name:'Mr. Wilson:',
          speech:'아야!'
        },
        {
          name:'Dr. Molar:',
          speech:'됐습니다. 당신의 이는 지금 완벽합니다. 일어나세요,  Wilson씨. 데스크에 있는 Tracy씨에게 계산하세요.'
        },
        {
          name:'Nurse:',
          speech:'여기 청구서이구요. 500달러입니다.'
        },
        {
          name:'Mr. Wilson:',
          speech:'오!'
        },
        {
          name:'Nurse:',
          speech:' 더 많은 아스피린을 원하세요 Wilson씨? 매일 이 닦는 것 잊지 마세요. 안녕히 가세요. 좋은 하루 되세요.'
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
