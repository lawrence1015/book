<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv8RmfkY/6/screen_2x/canva-man-and-woman-sitting-on-chair-in-front-of-desk-MADGv8RmfkY.jpg">

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
        padding-bottom: 10px;">Do you like rap?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Do you like rap?</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs">
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
          <u>Fill the blanks. Always answer with a whole sentence</u><br />
          (빈칸에 알맞은 말을 채우세요. 답은 항상 전체 문장으로 말해주세요)
        </p>

        <ol style="margin: 12px;">
          <li>
            1. <u> &emsp; &emsp; &emsp; </u> you <u> &emsp; &emsp; &emsp; </u> comedy? <br />
            코미디를 좋아하십니까?
          </li>
          <li>
            2. What kind of movies <u> &emsp; &emsp; &emsp; </u> ? <br />
            당신은 무슨 종류의 영화를 좋아하십니까?
          </li>
          <li>
            3. <u> &emsp; &emsp; &emsp; </u> action movies the most. <br />
            저는 액션 영화를 가장 좋아합니다.
          </li>
        </ol>

        <p>
          Free response:<br />
          What kind of music do you like? Who is your favorite singer/group?<br />
          당신은 무슨 종류의 음악을 좋아하십니까? 당신이 가장 좋아하는 가수/그룹은 누구입니까?<br />
          Musical styles: classical, rock, pop, hip-hop, rap, jazz, country, gospel.<br />
          클래식, 락, 팝, 힙합, 랩, 재즈, 컨추리, 가스펠



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

        <tr v-for="translation in translations">
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
                    <li>
                      1) I guess나 I think는 개인적인 의견을 표현할 때 사용됨 <br />
                    </li>
                    <li>
                      2) What kind of....do you like? 너는 무슨 종류의 (   )을 좋아하니? / 대답: I like....<br />
                      Do you like...? 너는 ...을 좋아하니? / 대답: Yes, I do. or No, I don't.<br />
                      I like....(나는 ....을 좋아한다) / I don't like....(나는 ....을 좋아하지 않는다) <br />
                 
                    </li>
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
          name:'Tom:',
          speech:'Do you like rap, Liz?'
        },
        {
          name:'Liz:',
          speech:'No, I don’t like it very much. Do you?'
        },
        {
          name:'Tom:',
          speech:'Yeah, I do. I’m a big fan of Eminem.'
        },
        {
          name:'Liz:',
          speech:'I think I know him. Does he play the piano?'
        },
        {
          name:'Tom:',
          speech:'The piano? No, he doesn’t. He’s a singer.'
        },
        {
          name:'Liz:',
          speech:'Oh, I guess I don’t know much about rap.'
        },
        {
          name:'Tom:',
          speech:'So, what kind of music do you like?'
        },
        {
          name:'Liz:',
          speech:'I really like pop music.'
        },
        {
          name:'Tom:',
          speech:'Who’s your favorite singer?'
        },
        {
          name:'Liz:',
          speech:'Celine Dion. I love her voice. Do you like her?'
        },
        {
          name:'Tom:',
          speech:'No, I don’t. I don’t like pop music very much.'
        },
        {
          name:'Liz:',
          speech:'I see.'
        },
        {
          name:'Tom:',
          speech:'What about groups, Liz? Who do you like?'
        },
        {
          name:'Liz:',
          speech:'Oh, I like a lot of different groups. I (1) guess my favorite group is the Beatles.'
        },
        {
          name:'Tom:',
          speech:'The Beatles? You must be kidding!'
        },
        {
          name:'Liz:',
          speech:'Why? Don’t you like them?'
        },
        {
          name:'Tom:',
          speech:'No, I don’t. I (1) guess they have some good songs, but I think their music isn’t very interesting anymore.'
        },
        ],

        translations:[
        {
          name:'Tom:',
          speech:'너는 랩을 좋아하니,Liz?'
        },
        {
          name:'Liz:',
          speech:'아니, 난 별로 좋아하지 않아. 너는?'
        },
        {
          name:'Tom:',
          speech:'응 나는 좋아해. 나는 Eminem의 확실한 팬이야.'
        },
        {
          name:'Liz:',
          speech:'나도 그를 알것 같은데. 그는 피아노를 치니?'
        },
        {
          name:'Tom:',
          speech:'피아노? 아니, 그는 피아노를 안쳐. 그는 가수야!'
        },
        {
          name:'Liz:',
          speech:'오, 나는 랩에 대해서 자세히 몰라'
        },
        {
          name:'Tom:',
          speech:'너는 무슨 종류의 음악을 좋아하니?'
        },
        {
          name:'Liz:',
          speech:'나는 팝송을 정말 좋아해.'
        },
        {
          name:'Tom:',
          speech:'너가 가장 좋아하는 가수는 누구니?'
        },
        {
          name:'Liz:',
          speech:'Celine Dion이야. 나는 그녀의 목소리를 좋아해. 너도 그녀를 좋아하니?'
        },
        {
          name:'Tom:',
          speech:'아니, 나는 안 좋아해. 난 팝송을 그렇게 좋아하지 않아.'
        },
        {
          name:'Liz:',
          speech:'그렇구나'
        },
        {
          name:'Tom:',
          speech:'그룹은 어때, Liz? 너는 누구를 좋아하니?'
        },
        {
          name:'Liz:',
          speech:'오, 많은 다른 그룹을 좋아해. 내가 가장 좋아하는 그룹은 비틀즈인 것 같애.'
        },
        {
          name:'Tom:',
          speech:'비틀즈? 농담이지!'
        },
        {
          name:'Liz:',
          speech:'왜? 넌 그들을 좋아하지 않니?'
        },
        {
          name:'Tom:',
          speech:'아니, 안 좋아해. 그들의 노래 중 몇 곡은 좋다고 생각해. 하지만 그들의 음악은 더 이상 흥미롭지 않아.'
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
