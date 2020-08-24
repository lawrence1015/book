<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/mother-daughter-watching-tv-living-room_1170-2698.jpg">

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
        padding-bottom: 10px;">Can you help me?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Can you help me?</li><br />
      <p>
        Carlos is a student from Mexico. He's staying with the Flynns, a family in Boston.
      </p>
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
          <u>Fill the blanks. Always answer with a whole sentence.</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
              A: I have <u> &emsp; &emsp; &emsp; </u> problem. <u> &emsp; &emsp; &emsp; </u> you help <u> &emsp; &emsp; &emsp; </u>? <br />
              B: I'm sorry, I <u> &emsp; &emsp; &emsp; </u>. I'm busy right now.<br />
              <br />
              A: 저에게 문제가 있습니다. 저 좀 도와주실 수 있으세요?<br />
              B: 죄송합니다만 그럴 수 없습니다. 저는 지금 바쁩니다.<br />
          </li>
          <br />
          <li>
              A: What <u> &emsp; &emsp; &emsp; </u> you <u> &emsp; &emsp; &emsp; </u>?<br />
              B: I <u> &emsp; &emsp; &emsp; </u> TV.<br />
            <br />
              A: 뭘 하고 계신데요?<br />
              B: 저는 TV를 보고 있습니다.<br /> 
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
            What are you doing right now?<br />
            What's your friend doing?<br />
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
        <p>
          Carlos는 Mexico출신의 학생입니다. 그는 Boston에 있는 Flynn씨 가족과 함께 머무르고 있습니다.<br />
        </p>

        <table style = "border-collapse: collapse;">

          <tr v-for="translation in translations" :key="translation">
            <td class = "uppertable" >{{translation.name}}</td>
            <td class = "lowertable" >{{translation.speech}}</td>
          </tr>
  
        </table>

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
          name:'Carlos:',
          speech:'Mrs. Flynn, can you help me? I’m doing my homework, and I can’t understand this word.'
        },
        {
          name:'Mrs. Flynn:',
          speech:'Which one? Oh, that’s difficult. I’m sorry, Carlos. I can’t help you now. I’m watching TV. I can help you later.'
        },
        {
          name:'Carlos:',
          speech:'Oh? What are you watching?'
        },
        {
          name:'Mrs. Flynn:',
          speech:'I’m watching an old Western with Clint Eastwood.'
        },
        {
          name:'Carlos:',
          speech:'Can Mr. Flynn help me?'
        },
        {
          name:'Mrs. Flynn:',
          speech:'Well, no, he can’t. Not now. He’s reading.'
        },
        {
          name:'Carlos:',
          speech:'What’s he reading?'
        },
        {
          name:'Mrs. Flynn:',
          speech:'He’s reading a magazine.'
        },
        {
          name:'Carlos:',
          speech:'What about Kate?'
        },
        {
          name:'Mrs. Flynn:',
          speech:'Oh, she can’t help you now. She’s talking on the phone.'
        },
        {
          name:'Carlos:',
          speech:'Who’s she talking to?'
        },
        {
          name:'Mrs. Flynn:',
          speech:'I don’t know. You’re asking a lot of questions tonight, Carlos!'
        },
        {
          name:'Carlos:',
          speech:'Yes, I know. I’m practicing my English.'
        },
        ],

        translations:[
        {
          name:'Carlos:',
          speech:'Flynn여사, 저 좀 도와주실 수 있으세요? 저는 숙제를 하고 있는데요. 이 단어는 이해를 못하겠어요.'
        },
        {
          name:'Mrs. Flynn:',
          speech:'어떤거? 오, 어렵구나. 미안해, Carlos. 나는 지금 너를 도와줄 수 없구나. 나는 지금 TV를 보고 있어. 나중에 도와줄게.'
        },
        {
          name:'Carlos:',
          speech:'오? 뭘 보시는 데요?'
        },
        {
          name:'Mrs. Flynn:',
          speech:'Clint Eastwood가 나오는 오래된 서부영화를 보고 있어.'
        },
        {
          name:'Carlos:',
          speech:'Flynn씨는 저를 도와주실 수 있나요?'
        },
        {
          name:'Mrs. Flynn:',
          speech:'글쎄. 아니, 그는 너를 도와줄 수 없어. 그는 독서중이야.'
        },
        {
          name:'Carlos:',
          speech:'뭘 읽고 있는데요?'
        },
        {
          name:'Mrs. Flynn:',
          speech:'그는 잡지를 읽고 있어. '
        },
        {
          name:'Carlos:',
          speech:'Kate는 어떤가요?'
        },
        {
          name:'Mrs. Flynn:',
          speech:'오, 그녀는 지금 너를 도울 수 없어. 그녀는 통화중이야.'
        },
        {
          name:'Carlos:',
          speech:'누구와 말하고 있는데요?'
        },
        {
          name:'Mrs. Flynn:',
          speech:'나도 몰라. 너는 오늘밤 정말 질문이 많구나, Carlos!'
        },
        {
          name:'Carlos:',
          speech:', 알아요. 저는 지금 영어를 연습하는 중이에요.'
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
