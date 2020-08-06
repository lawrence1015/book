<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/row-young-people-sitting-by-wall-while-waiting-their-turn-interview_23-2148087438.jpg" style="max-width: 100%; display:block; height: auto;">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgb(222, 227, 226, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;
        color: black;">How do you handle criticism?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(17, 105, 121, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Example Answers</h3>
  <hr width="60%">
      <div style="padding : 15px;">


        <table style = "border-collapse: collapse;">

          <tr v-for="dialog in dialogs">
            <td class = "uppertable" >{{dialog.name}}</td>
            <td class = "lowertable" >{{dialog.speech}}</td>
          </tr>

        </table>


      <h3 class = "border white--text"
          style="border-radius: 0px 70px 70px 0px;
                 padding-top: 7px;
                 margin-left: -18px;
                 margin-right: -18px;
                 padding-left: 15px;
                 padding-bottom: 10px;
                 padding-top: 10px;
                 margin-top: 0px;">Key Expressions</h3>

      <div style="padding : 16px;">

      <ol style="margin: 12px;">
        <li>
          I try to see them as opportunities to improve myself and my work ethics.<br />
          ( 저는 그것들을 제 자신과 직업윤리를 향상시키는 기회로 보려고 노력합니다. )
        </li>
        <li>
          I believe that criticisms, especially constructive ones are important parts of my professional career.<br />
          ( 저는 비판, 특히 건설적인 비판은 제 직업 경력의 중요한 부분이라고 생각합니다. )
        </li>
        <li>
          I'll have to set my ego aside and listen to other people's advice and feedback.<br />
          ( 저는 자존심을 버리고 다른 사람들의 조언과 피드백을 들어야 할 것입니다. )
        </li>
        <li>
          I have learned that others may have a different view of a certain situation and they probably have more experience than I do.<br />
          ( 저는 다른 사람들이 어떤 상황에 대해 다른 관점을 가지고 있을 수 있고 아마도 저보다 더 많은 경험을 가지고 있을 것이라는 것을 배웠습니다. )
        </li>
        <li>
          I tried to ponder upon his words and checked on my reports and found out that he's actually right.<br />
          ( 저는 그의 말을 곰곰이 생각해 보려 했고 제 보고서를 확인했고 그가 실제로 옳다는 것을 알아냈습니다. )
        </li>
      </ol>


      </div>

      <h3 class = "border white--text"
          style="border-radius: 0px 70px 70px 0px;
                 padding-top: 7px;
                 margin-left: -18px;
                 margin-right: -18px;
                 padding-left: 15px;
                 padding-bottom: 10px;
                 padding-top: 10px;
                 margin-top: 0px;
                 width: 150px;">Activity</h3>

      <div style="padding : 16px;">

        <p>
          Answer the following questions
        </p>

        <ol style="margin: 12px;">
          <li>
            What can you say about criticisms?
          </li>
          <li>
            Describe a good report.
          </li>
          <li>
            What would you do if your efforts have come to nothing?
          </li>
          <li>
            How do you handle criticism?
          </li>
          <li>
            Was there a time that you have been criticized by your colleagues?
          </li>
        </ol>


      </div>

      <h3 class = "border white--text"
          style="border-radius: 0px 70px 70px 0px;
                 padding-top: 7px;
                 margin-left: -18px;
                 margin-right: -18px;
                 padding-left: 15px;
                 padding-bottom: 10px;
                 padding-top: 10px;
                 margin-top: 10px;
                 width: 180px;">Translation</h3>

      <div style="padding : 16px;">

        <table style = "border-collapse: collapse;">

          <tr v-for="translation in translations">
            <td class = "uppertable" >{{translation.name}}</td>
            <td class = "lowertable" >{{translation.speech}}</td>
          </tr>

        </table>

      </div>


    </div>


  </v-layout>
</v-container>
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
          name:'A.',
          speech:"Just like any other employee, I try to take criticism positively. I try to see them as opportunities to improve myself and my work ethics. I believe that criticisms, especially the constructive ones are important parts of my professional career. I must admit that it wouldn't feel good to receive criticism, but I’ll have to set my ego aside and listen to other people's advice and feedback."
        },
        {
          name:'B.',
          speech:"Everyone must be prepared to accept and handle criticism. I have learned that others may have a different view or perspective of a certain situation and they probably have more experience than I do. There was once a time when my immediate supervisor told me that I made hasty and unorganized reports. I really felt sad at first because it made me think that all my hard work had come to nothing. However, I tried to ponder upon his words and checked on my reports and found out that he's actually right. I went to him and asked for his suggestions to improve on my report making strategy. I followed his advice and everything went smoothly after that."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'다른 직원들과 마찬가지로, 저는 비판을 긍정적으로 받아들이려고 노력합니다. 저는 그것들을 제 자신과 직업윤리를 향상시키는 기회로 보려고 노력합니다. 저는 비판, 특히 건설적인 비판은 제 직업 경력의 중요한 부분이라고 생각합니다. 비난을 받으면 기분이 좋지 않다는 것을 인정하지만, 제 자존심을 버리고 다른 사람들의 조언과 피드백을 들어야 합니다.'
        },
        {
          name:'B.',
          speech:'모든 사람들은 비평을 받아들이고 다룰 준비가 되어 있어야만 합니다. 다른 사람들은 어떤 상황에 대해 다른 관점과 관점을 가지고 있을 수 있고, 그들은 아마도 저보다 더 많은 경험을 가지고 있을 것이라는 것을 배웠습니다. 한때는 제 직속 슈퍼맨이 있던 시절이 있었습니다. 바이저는 제가 성급하고 조직적이지 않은 보고를 했다고 말했습니다. 저는 처음에 정말 슬펐습니다. 왜냐하면 그것은 제 모든 노력이 수포로 돌아갔다는 생각이 들었기 때문입니다. 하지만, 그의 말을 곰곰이 생각해 보았고, 제 보고서를 확인했고, 그가 실제로 옳다는 것을 알아냈습니다. 저는 그에게 가서 제 보고서 작성 전략을 개선하기 위해 그의 제안을 요청했습니다. 저는 그의 충고를 따랐고 그 후 모든 일이 순조롭게 진행되었습니다.'
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


.border {
  position: relative;
  left: 0px;
  width: 230px;
  height: 40px;
  background: #116979;
  padding-left: 10px;
  line-height: 20px;

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
