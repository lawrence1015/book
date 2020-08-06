<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/medicines-medical-supplies-placed-blue_1150-19155.jpg">

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
        padding-bottom: 10px;">At the drugstore
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">At the drugstore</li><br />
  
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
          <u>Answer the questions.</u><br />
          (질문에 답하세요.)
        </p>

        <ol style="margin: 12px;">
          <li>
            What’s good for dry skin?<br />
            건성피부에 무엇이 좋습니까?<br />
          </li>
          <li>
            What’s good for sore feet?<br />
            쓰라린 발에는 무엇이 좋습니까?<br />
          </li>
          <li>
            What’s good for jet lag?<br />
            시차에는 무엇이 좋습니까?<br />
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />

          What do you take when you have a headache?<br />
          What do you use for stomach ache?<br />
          Do people in Korea take pills often? What kind of pills do they take?<br />
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
                      I'm looking for : ~을 찾고 있다.<br />
                    </li>
                    <li>
                      I'm having trouble.. : ~로 애를 먹고 있다. ~로 어려움을 겪고 있다.<br />
                    </li>
                    <li>
                      It's getting ... : ~해지다. 뒤에 비교급이 붙으면 점점 더 ~해지다.<br />
                    </li>
                    <li>
                      for의 쓰임 :<br />
                          it’s good for your health = 그것은 너의 건강에 좋다.<br />
                          it’s good for headache = 그것은 너의 두통에 좋다.<br />
                          I’m looking for … = 나는 찾고 있는 중이다.<br />
                    </li>
                    <li>
                      something : 긍정의 대답을 기대하거나 상대방에게 무엇을 권할 때 사용이 되고 정해지진<br />
                        않았지만 구체적인 무언가를 의미합니다.<br />
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
          name:'1:',
          speech:' '
        },
        {
          name:'A:',
          speech:'Hi. Can I help you?'
        },
        {
          name:'B:',
          speech:'Yes, please. Can I have something for a cough? I think I’m getting a cold.'
        },
        {
          name:'A:',
          speech:'Well, I suggest a box of these cough drops.'
        },
        {
          name:'B:',
          speech:'Thank you. And what do you suggest for dry skin?'
        },
        {
          name:'A:',
          speech:'Try some of this new lotion. It’s very good.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'2',
          speech:' '
        },
        {
          name:'C:',
          speech:'May I help you?'
        },
        {
          name:'D:',
          speech:'Yes, I’d like something for my feet. I went on a long hike yesterday and my feet are really sore.'
        },
        {
          name:'C:',
          speech:'I see. Why don’t you try some of this ointment? You can put it on at night. It’s very good for sore feet.'
        },
        {
          name:'D:',
          speech:'All right, thanks.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'3',
          speech:' '
        },
        {
          name:'E:',
          speech:'Excuse me. I’m looking for something for a stomach ache.'
        },
        {
          name:'F:',
          speech:'I see. How long do you have this problem?'
        },
        {
          name:'E:',
          speech:'A few days, and it’s getting worse.'
        },
        {
          name:'F:',
          speech:'Here, take these pills for a few days. Take two of these, three times a day, with meals.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'4',
          speech:' '
        },
        {
          name:'G:',
          speech:'Can I help you?'
        },
        {
          name:'H:',
          speech:'Yes. I just came back from London on a long flight, and I’m having trouble sleeping.'
        },
        {
          name:'G:',
          speech:'We have several things for that, including sleeping pills. But I suggest you try some of this herbal tea. It’s very good for jet lag.'
        },
        {
          name:'H:',
          speech:'Thank you very much.'
        },
        ],

        translations:[
        {
          name:'1:',
          speech:' '
        },
        {
          name:'A:',
          speech:'안녕하세요. 도와 드릴까요?'
        },
        {
          name:'B:',
          speech:'네, 기침약 있나요? 제가 감기에 걸린 것 같아서요.'
        },
        {
          name:'A:',
          speech:'그럼, 이 기침 시럽 한 상자를 권해 드릴께요.'
        },
        {
          name:'B:',
          speech:'고맙습니다. 그런데 건성 피부에는 뭐가 좋을까요?'
        },
        {
          name:'A:',
          speech:'이 새로운 로션을 발라보세요. 그것 좋습니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'2',
          speech:' '
        },
        {
          name:'C:',
          speech:'도와드릴까요?'
        },
        {
          name:'D:',
          speech:'네, 발에 뭔가를 원합니다. 어제 장시간 하이킹을 갔더니 발이 너무 쓰라립니다.'
        },
        {
          name:'C:',
          speech:'그렇군요. 이 연고 좀 발라보는게 어떨까요? 그것을 밤에 바르셔도 됩니다. 그 약은 쓰라린 발에 좋습니다.'
        },
        {
          name:'D:',
          speech:'그렇군요, 고맙습니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'3',
          speech:' '
        },
        {
          name:'E:',
          speech:'실례합니다. 복통 때문에 뭔가를 찾고 있는데요.'
        },
        {
          name:'F:',
          speech:'그러시군요. 복통이 얼마나 오래 되었습니까?'
        },
        {
          name:'E:',
          speech:'며칠 됐습니다. 그런데 점점 악화되고 있습니다.'
        },
        {
          name:'F:',
          speech:'여기요, 며칠동안 이 약을 드세요. 식사하시고 하루에 세 번씩, 두 알을 드시면 됩니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'4',
          speech:' '
        },
        {
          name:'G:',
          speech:'도와드릴까요?'
        },
        {
          name:'H:',
          speech:'네. 저는 장시간 비행을 하고 London에서 막 돌아왔는데요 수면에 어려움을 겪고 있습니다.'
        },
        {
          name:'G:',
          speech:'수면제를 포함해서 그 문제에 대한 몇 가지가 있긴 한데요. 저는 이 허브차를 조금 마셔볼 것을 권합니다. 그 차는 시차에 매우 좋습니다.'
        },
        {
          name:'H:',
          speech:'정말 고맙습니다.'
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
