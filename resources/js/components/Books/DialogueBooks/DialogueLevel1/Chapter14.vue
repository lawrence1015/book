<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/portrait-beautiful-cheerful-redhead-woman-with-flying-curly-hair-smiling-laughing_176420-14460.jpg">

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
        padding-bottom: 10px;">I have a new girlfriend
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">I have a new girlfriend</li><br />
  
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
            Who is Alicia?<br />
          </li>
          <li>
            What color is her hair?<br />
          </li>
          <li>
            How old is she?<br />
          </li>
        </ol>

        <p>
          Free response:<br />
            What do you look like? <br />
            What does your friend look like? <br />



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
                      6 feet 2 inches = 188cm<br />
                    </li>
                    <li>
                      Hair style: long(긴머리), short(짧은머리), straight(생머리),<br />
                        wavy(곱슬머리), curly(곱슬머리), a ponytail(뒤로묶은머리), bald(대머리);<br />
                    </li>
                    <li>
                      Hair color: black(검정의), brown(갈색의), red(붉은색의), blond(금발의), gray(회색의)<br />
                        Ex) She has long blond hair. Jim is bald.(그녀의 머리는 긴 금발이다. 짐은 대머리이다)<br />
                    </li>
                    <li>
                      Age: young(젊은), middle-aged(중년의), elderly(나이가 지긋한) / about twenty(약20), <br />
                            in one’s (my, your, his, her) the fifties(50대)<br />
                        Ex) How old are your parents? – They are elderly.<br />
                          (네 부모님의 연세는 어떻게 되니? - 그들은 나이가 지긋하셔)<br />
                    </li>
                    <li>
                      Looks: handsome (잘생긴, 남자에 사용), good-looking (잘생긴, 남자와 여자에 둘 다 사용),<br />
                            pretty (예쁜, 여자에 사용), beautiful(아름다운), cute(귀여운), heavy(무거운), thin(마른)<br />
                        Ex) Is your teacher good-looking? – Yes, she’s very pretty.(네 선생님은 예쁘시니? - 응, 매우 예쁘셔)<br />
                    </li>
                    <li>
                      Eyes: black eyes(검정눈), dark eyes(짙은눈), blue eyes(파란눈), green eyes(초록색눈)<br />
                        Ex) He has blues eyes and blond hair.(그의 눈은 파랗고 머리는 금색이다)<br />
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
          name:'Emily:',
          speech:'I hear you have a new girlfriend, Jack.'
        },
        {
          name:'Jack:',
          speech:'Yes. Her name’s Alicia, and she’s gorgeous!'
        },
        {
          name:'Emily:',
          speech:'Really? What does she look like?'
        },
        {
          name:'Jack:',
          speech:'Well, she’s very tall.'
        },
        {
          name:'Emily:',
          speech:'How tall is she?'
        },
        {
          name:'Jack:',
          speech:'About 6 feet 2, I suppose.'
        },
        {
          name:'Emily:',
          speech:'Wow, that is tall. What color is her hair?'
        },
        {
          name:'Jack:',
          speech:'She has beautiful red hair.'
        },
        {
          name:'Emily:',
          speech:'And how old is she?'
        },
        {
          name:'Jack:',
          speech:'Who knows? She’s probably in her thirties.'
        },
        ],

        translations:[
        {
          name:'Emily:',
          speech:'Jack, 너 새로운 여자 친구 있다던데'
        },
        {
          name:'Jack:',
          speech:'응, 그녀의 이름은 Alicia야. 그리고 그녀는 매력적이야!'
        },
        {
          name:'Emily:',
          speech:'정말? 어떻게 생겼는데?'
        },
        {
          name:'Jack:',
          speech:'글쎄, 키가 매우 커.'
        },
        {
          name:'Emily:',
          speech:'얼마나 큰데?'
        },
        {
          name:'Jack:',
          speech:'내 추측으로는 대략 6피트 2인치야.'
        },
        {
          name:'Emily:',
          speech:'와우, 크구나. 그녀의 머리카락은 무슨 색이야?'
        },
        {
          name:'Jack:',
          speech:'아름다운 붉은 색이야'
        },
        {
          name:'Emily:',
          speech:'그녀는 몇 살이니?'
        },
        {
          name:'Jack:',
          speech:'누가 알까? 그녀는 아마도 30대야'
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
