<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/business-strategy-success-target-goals_1421-33.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">What challenges are you looking for?
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
          I want to be challenged in a way that I will be able to utilize my skills to complete a certain task or duty.<br />
          ( 어떤 업무나 의무를 완수하기 위해 제 능력을 활용할 수 있는 방법으로 도전을 받고 싶습니다. )
        </li>
        <li>
          I like time limits because it is when I tell myself that I should not commit mistakes.<br />
          ( 저는 시간 제한을 좋아합니다. 왜냐하면 그것은 제가 실수를 하지 말아야 한다고 스스로 말할 때이기 때문입니다. )
        </li>
        <li>
          I would love to undergo any sharpening that could enhance my abilities to provide exemplary service to the company.<br />
          ( 저는 회사에 모범적인 서비스를 제공할 수 있는 능력을 향상시킬 수 있는 첨삭도 받고 싶습니다. )
        </li>
        <li>
          This time, I want to be more versatile and challenge myself to work in a team.<br />
          ( 이번에는 좀 더 다재다능해지고 팀워크에 도전하고 싶습니다. )
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
            What kind of job do you have an eye for?
          </li>
          <li>
            Do you have any unforgettable experiences related to meeting deadlines?
          </li>
          <li>
            How would you give exemplary service to your company?
          </li>
          <li>
            What's good about being versatile at work?
          </li>
          <li>
            What challenges are you looking for?
          </li>
          <li>
            What are some job-related challenges that you have encountered before?
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
          speech:"I have always believed that companies have an eye for an employee who can take on new challenges. I want to be challenged in a way that I will be able to utilize my skills to complete a certain task or duty. Some people do not want to work under pressure but I take it as a motivation to do my job accurately. I like time limits because it is when I tell myself that I should not commit mistakes. I want to surpass possible obstacles that will hinder me to meet deadlines, and would love to undergo any sharpening that could enhance my abilities to provide exemplary service to the company."
        },
        {
          name:'B.',
          speech:" I have already overcome numerous challenges from my previous employment experiences. Frankly, I have been used to making decisions and working on projects alone. I must admit that I've been pretty complacent for the past few years. This time, I want to be more versatile and challenge myself to work in a team. I want to be confronted with complex group tasks, deal with different opinions and working styles, and at the same time respect what others have to say. After all, a successful workforce will only lead the company nowhere but up."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'저는 항상 기업들이 새로운 도전을 할 수 있는 직원들을 위한 안목이 있다고 믿어왔습니다. 어떤 업무나 의무를 완수하기 위해 제 능력을 활용할 수 있는 방법으로 도전을 받고 싶습니다. 어떤 사람들은 압박감 속에서 일하고 싶어하지 않지만, 저는 그것을 제 일을 정확하게 하려는 동기로 받아들입니다. 저는 시간 제한을 좋아합니다. 왜냐하면 그것은 제가 실수를 하지 말아야 한다고 스스로 말할 때이기 때문입니다. 저는 마감일을 맞추는데 방해가 될 수 있는 장애물을 뛰어넘고 싶고, 회사에 모범적인 서비스를 제공할 수 있는 능력을 향상시킬 수 있는 첨삭도 받고 싶습니다.'
        },
        {
          name:'B.',
          speech:'저는 이미 이전 직장 경험에서 얻은 수많은 도전들을 극복했습니다. 솔직히, 저는 혼자서 결정을 내리고 프로젝트를 하는 것에 익숙했습니다. 지난 몇 년 동안 제가 상당히 현실에 안주해 왔다는 것을 인정하는 바입니다. 이번에는 좀 더 다재다능해지고 팀워크에 도전하고 싶습니다. 저는 복잡한 그룹 과제에 직면하고, 다른 의견과 작업 방식을 다루며, 동시에 다른 사람들이 말하는 것을 존중하고 싶습니다. 결국, 성공적인 인력은 회사를 완전히 발전시킬 수 있게 됩니다.'
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
