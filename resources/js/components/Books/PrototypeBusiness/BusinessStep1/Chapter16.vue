<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGyfFpOLk/4/screen_2x/canva-man-having-a-phone-call-in-front-of-a-laptop-MADGyfFpOLk.jpg">

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
        padding-bottom: 10px;">Talking About Life at Work
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

      <p>Add the words in brackets to the sentences.</p>

      <ol style="margin: 12px;">
        <li>
          I get up at 6.30 (usually)
        </li>
        <li>
          I take work home. (never)
        </li>
        <li>
          Do you go to trade fairs? (sometimes)
        </li>
      </ol>

      <p>
        Free response:<br />
        Do you go to conferences?<br />
        Do you have a lot of meetings?<br />
        Do you give presentations?<br />
        Do you go on business trips?<br />
        Do you go to trade fairs?
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
                    Adverbs of frequency
                  </p>
                  <p>
                    He <b>often</b> goes to the head office.<br />
                    They’re <b>always</b> late for meetings.
                  </p>

                  <v-container grid-list-md text-xs-center>
                    <v-layout wrap align-content-center>

                      <v-flex xs12 md6 >
                        <v-card hover>

                          <v-img src="images/alwaysnever.jpg" />

                        </v-card>
                      </v-flex>

                    </v-layout>
                  </v-container>

                  <p>
                    A lot (of)/lots (of) = a large number<br />
                    A lot of/lots of +noun<br />
                    We have a lot of customers in France.
                  </p>
                  <p>
                    Verb+a lot<br />
                    I go abroad a lot(=often)
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
          name:'Jacky:',
          speech:'Good meeting?'
        },
        {
          name:'Stuart:',
          speech:'Yeah, OK. But a bit long, Jacky. Five hours!'
        },
        {
          name:'Jacky:',
          speech:'Five hours?'
        },
        {
          name:'Stuart:',
          speech:'Yeah. I don’t have a lot of meetings, but when I do…'
        },
        {
          name:'Jacky:',
          speech:'They’re long.'
        },
        {
          name:'Stuart:',
          speech:'Yeah.'
        },
        {
          name:'Jacky:',
          speech:'Do you have a lot of meetings at head office?'
        },
        {
          name:'Stuart:',
          speech:'No. I don’t often go to the head office now. I don’t travel a lot, really. I never go abroad on business.'
        },
        {
          name:'Jacky:',
          speech:'No?'
        },
        {
          name:'Stuart:',
          speech:'No. I don’t need to. With the new job, It’s… It’s just phone calls and emails. A lot of phone calls…'
        },
        ],

        translations:[
        {
          name:'재키:',
          speech:'좋은 미팅이었어요?'
        },
        {
          name:'스튜어트:',
          speech:'네 하지만 좀 길었어요, 재키 5시간!'
        },
        {
          name:'재키:',
          speech:'5시간?'
        },
        {
          name:'스튜어트:',
          speech:'네. 회의가 많지는 않지만, 할때는…'
        },
        {
          name:'재키:',
          speech:'기네요.'
        },
        {
          name:'스튜어트:',
          speech:'네.'
        },
        {
          name:'재키:',
          speech:'본사에서는 회의가 많나요?'
        },
        {
          name:'스튜어트:',
          speech:'아니요. 지금은 본사에 자주 가지 않아요. 난 여행을 많이 하지 않아요, 정말. 나는 업무상 해외에 나가지 않아요.'
        },
        {
          name:'재키:',
          speech:'없어요?'
        },
        {
          name:'스튜어트:',
          speech:'그럴 필요도 없어요. 새로운 직장, 그것은… 그냥 전화와 이메일뿐이에요. 많은 전화들…'
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
