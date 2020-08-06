<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://cdn.theculturetrip.com/wp-content/uploads/2016/08/1200px-alcatraz_island_photo_d_ramey_logan.jpg">

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
        padding-bottom: 10px;">In prison
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">In prison</li><br />

      <p>
        Tim and Fred are on the Alcatraz Island.<br />
        They were in prison for a long time, but they’re going to leave tomorrow. <br />
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
          <u>Answer the questions</u><br />
          (질문에 답하시오.) <br />
        </p>

        <ol style="margin: 12px;">
          <li>
            What is Tim going to do? <br />
              Tim은 무엇을 하려고 합니까?<br />
          </li>
          <li>
            What is Fred going to do?<br />
              Fred는 무엇을 하려고 합니까?</u> the bookstore.<br />
          </li>
          <li>
            What is Tim going to do? Is Tim going to wash dishes? <br />
              Tim은 접시를 닦으려고 합니까?<br />
          </li>
          <li>
            Why is Fred going to rob a bank?<br />
              왜 Fred는 은행을 털려고 합니까?<br />
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
            Imagine you’re going to retire tomorrow. What are your plans? What are you going to do?<br />


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
          Tim과 Fred는 Alcatraz Island에 있습니다. <br />
          그들은 오랫동안 감옥에 있었습니다. 하지만 그들은 내일 떠날 것입니다.<br />
        </p>

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
                      to be going to 동사원형의 의문문 만들기 :<br />
                        to be + 주어 + going to + 동사원형....?<br />
                        의문사 + be + 주어 + going to + 동사원형....?<br />
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
          name:'Tim:',
          speech:'Tomorrow we’re going to leave this place!'
        },
        {
          name:'Fred:',
          speech:'Yeah. What are you going to do first?'
        },
        {
          name:'Tim:',
          speech:'Well, I’m going to rent a big car, meet my girlfriend, and take her to an expensive restaurant. We’re going to have lobster and caviar. What about you, Fred?'
        },
        {
          name:'Fred:',
          speech:'My wife’s going to meet me outside the prison. Then we’re going to visit her mother.'
        },
        {
          name:'Tim:',
          speech:'Your mother-in-law? You’re kidding!'
        },
        {
          name:'Fred:',
          speech:'No, I’m not. I’m going to work for my wife’s mother.'
        },
        {
          name:'Tim:',
          speech:'Really? You’re not going to work for your mother-in-law!'
        },
        {
          name:'Fred:',
          speech:'Well, she has a little diner in Chicago.'
        },
        {
          name:'Tim:',
          speech:'What are you going to do there?'
        },
        {
          name:'Fred:',
          speech:'I’m going to be a dishwasher.'
        },
        {
          name:'Tim:',
          speech:'What? Wash dishes? Well, I’m not going to work. I’m going to have a good time!'
        },
        {
          name:'Fred:',
          speech:'You’re lucky. I’m going to rob a bank next week.'
        },
        {
          name:'Tim:',
          speech:'Are you crazy? Why?'
        },
        {
          name:'Fred:',
          speech:'Because I’m happy here in prison!'
        },
        ],

        translations:[
        {
          name:'Tim:',
          speech:'내일이면 우리는 이 곳을 떠날거야'
        },
        {
          name:'Fred:',
          speech:'응. 넌 먼저 무엇을 할거니?'
        },
        {
          name:'Tim:',
          speech:'글쎄, 나는 큰 차를 빌려서 내 여자친구를 만날 거야. 그리고 그녀를 비싼 레스토랑에 데리고 갈 거야. 우리는 바닷가재와 캐비어를 먹을거야. Fred, 너는?'
        },
        {
          name:'Fred:',
          speech:'내 부인은 감옥 밖에서 나를 만날 거야. 그리고나서 우리는 그의 어머니를 방문할 거야.'
        },
        {
          name:'Tim:',
          speech:'너의 장모? 장난치지마!'
        },
        {
          name:'Fred:',
          speech:'장난아니야. 나는 내 부인의 어머니를 위해 일 할 거야.'
        },
        {
          name:'Tim:',
          speech:'정말? 너는 장모를 위해 일하지 않을 거잖아.'
        },
        {
          name:'Fred:',
          speech:'글쎄, 그녀는 Chicago에 작은 간이식당이 있어.'
        },
        {
          name:'Tim:',
          speech:'그곳에서 뭘 할건데?'
        },
        {
          name:'Fred:',
          speech:'접시를 닦을 거야. '
        },
        {
          name:'Tim:',
          speech:'뭐라고? 접시를 닦는다고? 음, 나는 일하지 않을 거야. 나는 좋은 시간을 보낼 거야!'
        },
        {
          name:'Fred:',
          speech:'너는 운이 좋다. 나는 다음주에 은행을 털 거야.'
        },
        {
          name:'Tim:',
          speech:'너 미쳤어? 왜?'
        },
        {
          name:'Fred:',
          speech:'감옥이 행복하기 때문이지!'
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
