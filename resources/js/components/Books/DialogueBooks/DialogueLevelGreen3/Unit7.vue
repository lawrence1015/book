<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://www.boothbayregister.com/sites/default/files/2020/01/field/image/IMG_9950%20(1)%20Firebird%20wiht%20Sophia%20Scott.jpg">

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
        padding-bottom: 10px;">Musical
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Musical</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs" :key="dialog">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>
      
      <p>
        Misha Botnick is the director of Fifth Avenue, a new musical.<br />
        It's the morning after the first performance. He's speaking to the performers.<br />
      </p>

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
            A.<br />
            Ex) He's a good dancer. > He usually dances well.<br />
          </p>
          <br/>
        <ol style="margin: 12px;">
          <li>
            1. She's a careless writer. > <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u><br />
              그녀는 경솔한 작가입니다. > 그녀는 경솔하게 글을 씁니다.<br />
          </li>
          <li>
            2. He's a bad soccer player. > <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u><br />
              그는 나쁜 축구 선수입니다. > 그는 축구를 못합니다.<br />
          </li>
          <li>
            3. They are hardworkers. > <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u><br />
              그들은 착실한 직원입니다. > 그들은 열심히 일합니다.<br />
          </li>
        </ol>
        <br />

        <p>
          B.<br />
          Ex) He usually dances well, but yesterday he danced badly.<br />
        </p>
        <br/>
      <ol style="margin: 12px;">
        <li>
          She usually types slowly, <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u><br />
            그녀는 보통 느리게 타이프를 칩니다. 하지만 그녀는 어제 타이프를 빨리 쳤습니다.<br />
        </li>
        <li>
          He usually works fast, <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u><br />
            그는 보통 빨리 일합니다. 하지만 그는 어제 일을 천천히 했습니다.<br />
        </li>
        <li>
          I usually drive carefully, <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u><br />
            나는 보통 조심스럽게 운전합니다. 하지만 나는 어제 부주의하게 운전했습니다.<br />
        </li>
      </ol>
      <br />
      <p>
        Free response:<br />
 
        Can you sing? Do you sing well?<br />
        Can you dance? How do you dance?<br />   
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
          Misha Botnick은 새로운 뮤지컬 Fifth Avenue의 감독입니다.<br />
          첫번째 공연 이후의 아침입니다. 그는 연기자들에게 말하고 있습니다.<br/>
        </p>
        <br/>
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
                      부사 : 동사, 형용사, 다른 부사 또는 문장 전체를 수식합니다.<br />
                    </li>
                    <li>
                      부사가 형용사의 형태가 같은 경우도 있습니다. fast, late, hard, early등<br />
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
          name:'Misha:',
          speech:'Well, guys, I worked hard … You worked hard. We all worked hard… What happened last night?!… YOU WERE TERRIBLE! The show was terrible! Whitney!'
        },
        {
          name:'Whitney:',
          speech:'Yes, Mr. Botnick?'
        },
        {
          name:'Misha:',
          speech:'Look, Whitney. You’re a good singer. You usually sing well.'
        },
        {
          name:'Whitney:',
          speech:'Thank you, Mr. Botnick.'
        },
        {
          name:'Misha:',
          speech:'But last night you sang really badly, Whitney. What happened?'
        },
        {
          name:'Whitney:',
          speech:'I don’t know, Mr. Botnick… I sang the last song well.'
        },
        {
          name:'Misha:',
          speech:'“I sang the last song well…” You forgot the words, Whitney!'
        },
        {
          name:' ',
          speech:'Why are you laughing, Jason?'
        },
        {
          name:'Jason:',
          speech:'Sorry, Mr. Botnick.'
        },
        {
          name:'Misha:',
          speech:'Jason, you’re famous. You’re a great dancer. I saw you dance in Boston. You danced very well. You’re the star of this show.'
        },
        {
          name:'Jason:',
          speech:'I’m sorry about last night, Mr. Botnick. I had one or two problems…'
        },
        {
          name:'Misha:',
          speech:'One or two! First you lost your shoe. Then you danced badly in the love scene…'
        },
        {
          name:'Jason:',
          speech:'I only had one shoe, Mr. Botnick.'
        },
        {
          name:'Misha:',
          speech:'And finally, Jason, finally... you fell into the orchestra pit!'
        },
        ],

        translations:[
        {
          name:'Misha:',
          speech:'자, 여러분, 저는 열심히 노력했습니다... 여러분도 열심히 노력했습니다. 우리는 모두 열심히 노력했습니다... 어젯밤에 무슨 일이 있었습니까?!... 여러분은 심했습니다! 쇼는 터무니 없었습니다! Whitney!'
        },
        {
          name:'Whitney:',
          speech:'네, Botnick씨?'
        },
        {
          name:'Misha:',
          speech:'이봐, Whitney. 너는 훌륭한 가수야. 너는 평소에는 노래를 잘해.'
        },
        {
          name:'Whitney:',
          speech:'감사합니다, Botnick씨.'
        },
        {
          name:'Misha:',
          speech:'하지만 지난 밤에 너는 노래를 정말 못했어, Whitney. 무슨 일이야?'
        },
        {
          name:'Whitney:',
          speech:'모르겠습니다, Botnick씨... 저는 마지막 노래를 잘 했습니다.'
        },
        {
          name:'Misha:',
          speech:'"저는 마지막 노래를 잘 했습니다."... 너는 가사를 잊어버렸어, Whitney!'
        },
        {
          name:' ',
          speech:'왜 웃는거야, Jason?'
        },
        {
          name:'Jason:',
          speech:'죄송합니다, Botnick씨.'
        },
        {
          name:'Misha:',
          speech:'Jason, 너는 유명해. 너는 훌륭한 댄서야. 나는 네가 Boston에서 춤추는 것을 봤어. 너는 춤을 정말 잘 춰. 너는 이 쇼의 스타야.'
        },
        {
          name:'Jason:',
          speech:'지난밤은 정말 죄송합니다, Botnick씨. 저는 한두 가지 문제가 있었습니다...'
        },
        {
          name:'Misha:',
          speech:'한두 가지! 먼저 너는 너의 신을 잃어버렸어. 그리고나서 너는 러브신에서 춤을 못 췄어.'
        },
        {
          name:'Jason:',
          speech:'저는 신 하나만 있었습니다, Botnick씨.'
        },
        {
          name:'Misha:',
          speech:'그리고 결국, Jason, 결국... 너는 오케스트라석 안으로 넘어졌어!'
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
