<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/sunset-view-from-google-s-office-chelsea-ny_181624-447.jpg">

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
        padding-bottom: 10px;">City and country
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">City and country</li><br />

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
          What’s it like in your city?<br />
            당신의 도시는 어떻습니까?<br />
        </p>
        <br />
        <p>
          Example:<br />
            There’s too much noise. 소음이 너무 많다.<br />
            There isn’t enough fresh air. 신선한 공기가 충분히 있지 않다.<br />
            There are too many people. 너무 많은 사람들이 있다.<br />
            There aren’t enough apartments. 아파트가 충분히 있지 않다.<br />
        </p>

        <ol style="margin: 12px;">
          <li>
            <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u> pollution. <br />
          </li>
          <li>
            <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u> parking. <br />
          </li>
          <li>
            <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u> people. <br />
          </li>
          <li>
            <u> &emsp; &emsp; &emsp; </u><u> &emsp; &emsp; &emsp; </u> libraries. <br />
          </li>
        </ol>

        <p>
          Free response:<br />
          Where would you like to live? Why? What’s the city like?<br />
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
                      too many + 셀 수 있는 명사 : 너무 많은<br/>
                      too much + 셀 수 없는 명사 : 너무 많은<br />                 
                    </li>
                    <li>
                      that's why .... : 그것이 ~한 이유이다.<br />                 
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
          name:'Gina:',
          speech:'Jeff! I’ve got a new job! I’m going to live in New York.'
        },
        {
          name:'Jeff:',
          speech:'You are? I lived in New York five years ago.'
        },
        {
          name:'Gina:',
          speech:'Did you like it?'
        },
        {
          name:'Jeff:',
          speech:'Not very much.'
        },
        {
          name:'Gina:',
          speech:'Why not?'
        },
        {
          name:'Jeff:',
          speech:'Well, there were too many people, and there was too much noise.'
        },
        {
          name:'Gina:',
          speech:'I love crowds and noise!'
        },
        {
          name:'Jeff:',
          speech:'Well, I don’t. And I don’t like pollution.'
        },
        {
          name:'Gina:',
          speech:'What do you mean?'
        },
        {
          name:'Jeff:',
          speech:'There isn’t enough fresh air in New York.'
        },
        {
          name:'Gina:',
          speech:'But you can go to concerts and the ballet and Broadway and…'
        },
        {
          name:'Jeff:',
          speech:'I never had enough money for all that. The rents are very high.'
        },
        {
          name:'Gina:',
          speech:'Why is that?'
        },
        {
          name:'Jeff:',
          speech:'Because there aren’t enough apartments.'
        },
        {
          name:'Gina:',
          speech:'Well, I still prefer big cities.'
        },
        {
          name:'Jeff:',
          speech:'But why?'
        },
        {
          name:'Gina:',
          speech:'I was born in a small town. It was too quiet and too dull.'
        },
        {
          name:'Jeff:',
          speech:'You were lucky.'
        },
        {
          name:'Gina:',
          speech:'I don’t think so. There wasn’t much to do. That’s why young people go to New York.'
        },
        {
          name:'Jeff:',
          speech:'But New York’s too expensive for young people.'
        },
        {
          name:'Gina:',
          speech:'They still go. They want excitement.'
        },
        {
          name:'Jeff:',
          speech:'Well, I don’t want excitement. I just want a quiet life, that’s all.'
        },
        ],

        translations:[
        {
          name:'Gina:',
          speech:'Jeff! 나는 새로운 직장이 생겼어! 나는 뉴욕에서 살거야.'
        },
        {
          name:'Jeff:',
          speech:'그래? 나 5년 전에 New York에 살았어.'
        },
        {
          name:'Gina:',
          speech:'너는 그 곳이 좋았어?'
        },
        {
          name:'Jeff:',
          speech:'그렇게 좋지 않았어.'
        },
        {
          name:'Gina:',
          speech:'왜 안 좋았어?'
        },
        {
          name:'Jeff:',
          speech:'글쎄, 사람들이 너무 많았고 소음도 너무 많았어.'
        },
        {
          name:'Gina:',
          speech:'나는 북적이고 시끄러운 것을 좋아해!'
        },
        {
          name:'Jeff:',
          speech:'글쎄, 난 안 그런데. 그리고 나는 공해를 좋아하지 않아.'
        },
        {
          name:'Gina:',
          speech:'무슨 의미야?'
        },
        {
          name:'Jeff:',
          speech:'New York에는 신선한 공기가 충분히 있지 않아.'
        },
        {
          name:'Gina:',
          speech:'하지만 너는 콘서트나 발레, Broadway에 갈 수 있어.'
        },
        {
          name:'Jeff:',
          speech:'나는 그것을 위한 돈을 충분히 가져본 적이 없어. 집세도 너무 비싸.'
        },
        {
          name:'Gina:',
          speech:'왜 그런데?'
        },
        {
          name:'Jeff:',
          speech:'아파트가 충분히 있지 않기 때문이야.'
        },
        {
          name:'Gina:',
          speech:'그런데, 나는 여전히 큰 도시가 좋아.'
        },
        {
          name:'Jeff:',
          speech:'왜 그런데?'
        },
        {
          name:'Gina:',
          speech:'나는 작은 도시에서 태어났어. 그 곳은 무척 조용하고 한산했어.'
        },
        {
          name:'Jeff:',
          speech:'행운이었네.'
        },
        {
          name:'Gina:',
          speech:'나는 그렇게 생각하지 않아. 할 일이 거의 없었어. 그렇기 때문에 젊은 이들이 New York으로 가는 거야.'
        },
        {
          name:'Jeff:',
          speech:'하지만 New York은 젊은이들에게는 너무 비싸.'
        },
        {
          name:'Gina:',
          speech:'그들은 여전히 가잖아. 그들은 자극을 원해.'
        },
        {
          name:'Jeff:',
          speech:'글쎄, 나는 자극을 원하지 않아. 나는 단지 조용한 삶을 원해, 그것이 전부야.'
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
