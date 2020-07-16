<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/picture-young-guy-talking-smartmobile-while-looking-his-watch-being-late_171337-5224.jpg">

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
        padding-bottom: 10px;">Talking about daily routines 
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

        <p>doesn’t / don’t / isn’t / aren’t / not / isn’t</p>

        <ol style="margin: 12px;">
          <li>
             It ( &emsp; ) late.
          </li>
          <li>
             I’m ( &emsp; ) a morning person.
          </li>
          <li>
             We ( &emsp; ) work late.
          </li>
          <li>
             We ( &emsp; ) evening people.
          </li>
          <li>
             My boss ( &emsp; &emsp; ) a morning person.
          </li>
          <li>
             He ( &emsp; &emsp; ) have lunch.
          </li>
        </ol>

        <p>
          Free response:<br />
          What time do you start work? Do you start early?<br />
          What time do you have lunch?<br />
          Do you have coffee breaks?<br />
          What time do you finish work? Do you work late?<br />
          What time do you have dinner?
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
                      부정문<br />
                      be동사: I’m not…, You aren’t…, He isn’t…<br />\
                      일반동사: They don’t work…, She doesn’t start….
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
          speech:'Good morning.'
        },
        {
          name:'B:',
          speech:'Morning. Sorry I’m late.'
        },
        {
          name:'A:',
          speech:'Oh, you’re not late. It’s only five past eight.'
        },
        {
          name:'B:',
          speech:'Five minutes late.'
        },
        {
          name:'A:',
          speech:'No problem. Would you like a coffee?'
        },
        {
          name:'B:',
          speech:'Oh, yes please. Five past eight. It isn’t late for me, it’s early!'
        },
        {
          name:'A:',
          speech:'What time do you start work then?'
        },
        {
          name:'B:',
          speech:'Nine o’clock. I’m not a morning person'
        },
        {
          name:'A:',
          speech:'We start at seven-thirty.'
        },
        {
          name:'B:',
          speech:'Seven-thirty!'
        },
        {
          name:'A:',
          speech:'But we don’t work late… We aren’t evening people!'
        },
        {
          name:'B:',
          speech:'My boss isn’t a morning person or an evening person! He starts at nine and finishes at four… But he doesn’t have lunch.'
        },
        {
          name:'A:',
          speech:'Right. He doesn’t have time!'
        },
        {
          name:'B:',
          speech:'No!'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'좋은 아침이에요.'
        },
        {
          name:'B:',
          speech:'안녕하세요. 늦어서 미안해요.'
        },
        {
          name:'A:',
          speech:'아, 늦지 않았군요. 8시 5분밖에 안 됐어요.'
        },
        {
          name:'B:',
          speech:'5분 늦었어요.'
        },
        {
          name:'A:',
          speech:'문제없습니다. 커피 한 잔 드릴까요?'
        },
        {
          name:'B:',
          speech:'아, 네, 그래요. 8시 5분입니다. 저한텐 늦지 않았어요, 아직 일러요!'
        },
        {
          name:'A:',
          speech:'그럼 몇 시에 일을 시작하세요?'
        },
        {
          name:'B:',
          speech:'9시에요. 저는 아침형 인간이 아니에요!'
        },
        {
          name:'A:',
          speech:'우리는 7시 30분에 시작해요.'
        },
        {
          name:'B:',
          speech:'7시 30분!'
        },
        {
          name:'A:',
          speech:'하지만 우리는 늦게까지 일하지 않아요. 우린 저녁형 인간이 아닙니다!'
        },
        {
          name:'B:',
          speech:'제 상사는 아침형도 저녁형도 아닌데요! 그는 9시에 시작해서 4시에 끝납니다… 하지만 그는 점심을 먹지 않습니다.'
        },
        {
          name:'A:',
          speech:'맞아요. 그는 시간이 없어요!'
        },
        {
          name:'B:',
          speech:'말도 안돼요!'
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
