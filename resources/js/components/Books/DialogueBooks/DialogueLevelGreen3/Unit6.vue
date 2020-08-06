<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/best-date-entertainment-cinema-young-couple-enjoying-movie-cinema_8353-6558.jpg">

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
        padding-bottom: 10px;">Going to movies
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Going to movies</li><br />

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
          (질문에 답하시오.)<br />
        </p>

        <ol style="margin: 12px;">
          <li>
            What are Jennifer and James going to do tonight?<br />
              (Jennifer와 James는 오늘밤 무엇을 하려고 합니까?)<br />
          </li>
          <li>
            What time does the show start?<br />
              (영화는 몇 시에 시작할 예정입니까?)<br />
          </li>
          <li>
            What’s Angela going to do after the show?<br />
              (Angela는 영화상영 후 무엇을 하려고 합니까?)<br />
          </li>
        </ol> 
    <br />
        <p>
          Free response:<br />
            What kind of movies do you like? Comedies, love stories, action, sci-fi, horror or drama?<br />
            What’s your favorite movie? Who’s in it? What’s the story about?<br />
            Do you have a favorite actor/actress? Why do you like him/her?<br />

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
                      제안,권유(~하는게 어때) : why don't you...? / why don't we...? / Let's... / what(how) about + 명사/v-ing<br />
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
          name:'A:',
          speech:'Hi, Jennifer.'
        },
        {
          name:'B:',
          speech:'Hello, James.'
        },
        {
          name:'A:',
          speech:'What are you going to do tonight?'
        },
        {
          name:'B:',
          speech:'I’m going to see a movie.'
        },
        {
          name:'A:',
          speech:'Oh, really? What’s the name of the movie?'
        },
        {
          name:'B:',
          speech:'It’s called Sweet Summer.'
        },
        {
          name:'A:',
          speech:'Is it a comedy?'
        },
        {
          name:'B:',
          speech:'No. It’s a love story.'
        },
        {
          name:'A:',
          speech:'Who’s in it?'
        },
        {
          name:'B:',
          speech:'Angela Joule is.'
        },
        {
          name:'A:',
          speech:'Is she a good actress?'
        },
        {
          name:'B:',
          speech:'Yes. She’s wonderful. I heard she’s coming, too.'
        },
        {
          name:'A:',
          speech:'To the movie?'
        },
        {
          name:'B:',
          speech:'Yes, it’s a premiere, actually.'
        },
        {
          name:'A:',
          speech:'Where’s the movie playing?'
        },
        {
          name:'B:',
          speech:'At the Odeon Theater.'
        },
        {
          name:'A:',
          speech:'Is it the theater on Maple Street?'
        },
        {
          name:'B:',
          speech:'No. It’s the one on 5th Avenue.'
        },
        {
          name:'A:',
          speech:'What time does the first show start?'
        },
        {
          name:'B:',
          speech:'The first show starts at 6 PM. Why don’t you come? There are going to be lots of people.'
        },
        {
          name:'A:',
          speech:'I’d love to. I like love stories, too.'
        },
        {
          name:'B:',
          speech:'Angela is also going to sign autographs in the evening.'
        },
        {
          name:'A:',
          speech:'That sounds exciting!'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'안녕, Jennifer.'
        },
        {
          name:'B:',
          speech:'안녕, James.'
        },
        {
          name:'A:',
          speech:'오늘 밤 뭐 할거니?'
        },
        {
          name:'B:',
          speech:'영화 보러 갈 거야.'
        },
        {
          name:'A:',
          speech:'오, 정말? 영화 제목이 뭐야?'
        },
        {
          name:'B:',
          speech:'Sweet Summer라고 해.'
        },
        {
          name:'A:',
          speech:'코메디야?'
        },
        {
          name:'B:',
          speech:'아니. 러브스토리야.'
        },
        {
          name:'A:',
          speech:'그 영화에 누가 나오니?'
        },
        {
          name:'B:',
          speech:'Angela Joule가 나와.'
        },
        {
          name:'A:',
          speech:'그녀는 훌륭한 여배우니?'
        },
        {
          name:'B:',
          speech:'응. 그녀는 훌륭해. 나는 또한 그녀가 곧 온다고 들었어.'
        },
        {
          name:'A:',
          speech:'영화관으로?'
        },
        {
          name:'B:',
          speech:'응, 사실 그것은 개봉작이야.'
        },
        {
          name:'A:',
          speech:'그 영화는 어디에서 상영하니?'
        },
        {
          name:'B:',
          speech:'Odeon Theater에서 해.'
        },
        {
          name:'A:',
          speech:'Maple Street에 있는 영화관이니?'
        },
        {
          name:'B:',
          speech:'아니. 그것은 5가에 있는 영화관이야.'
        },
        {
          name:'A:',
          speech:'첫번째 영화는 몇 시에 시작하니?'
        },
        {
          name:'B:',
          speech:'첫번째 영화는 오후 6시에 시작해. 너도 갈래? 그곳에 많은 사람들이 있을 거야.'
        },
        {
          name:'A:',
          speech:'나도 가고 싶다. 나는 러브스토리를 좋아해.'
        },
        {
          name:'B:',
          speech:'Angela는 또한 저녁에 사인을 할 예정이야.'
        },
        {
          name:'A:',
          speech:'재밌겠다!'
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
