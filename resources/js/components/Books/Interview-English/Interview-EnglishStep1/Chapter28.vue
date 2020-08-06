<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/concerned-male-thinking-about-company-problem-solution_1163-4097.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">What have you learned from mistakes on the job?
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
          You have to try again until you get the job done right.<br />
          ( 당신은 그 일을 제대로 할 때까지 다시 시도해야 합니다. )
        </li>
        <li>
          I learned that the only thing worse than falling is staying down.<br />
          ( 저는 넘어지는 것보다 더 나쁜 것은 가만히 있는 것이라는 것을 배웠습니다. )
        </li>
        <li>
          Mistakes are like salt, they add meaning to your success.<br />
          ( 실수는 소금과 같습니다. 실수는 당신의 성공에 의미를 더합니다. )
        </li>
        <li>
          Failure is not always a mistake, the real mistake is to stop trying.<br />
          ( 실패가 항상 실수인 것은 아닙니다. 진정한 실수는 시도를 중단하는 것입니다. )
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
            Are you a determined employee?
          </li>
          <li>
            How often do you commit job-related mistakes?
          </li>
          <li>
            Do you have a positive outlook in life?
          </li>
          <li>
            What have you learned from mistakes on the job?
          </li>
          <li>
            How well do you respond to failures?
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
          speech:"One of the most essential things that I've learned from mistakes would be determination. It's never right to give up just because you failed for the first, second or third time. You have to try again until you get the job done right. Do not give up if you know that you still have something to give. I always try not to commit any mistakes but if I do, try to look at the bright side. Mistakes are like salt, they add meaning to your success."
        },
        {
          name:'B.',
          speech:" I have learned to respect my limits I should not take on a responsibility that I am not prepared for. I should always make smart decisions and at the same time, I need to be persistent and don't take failures negatively. And most importantly, learned that the only thing worse than falling is staying down. I should never give up too soon because a failure is not always a mistake, the real mistake is to stop trying."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'실수에서 배운 가장 중요한 것 중 하나는 결단력입니다. 1, 2, 3회 실패했다고 해서 포기하는 것은 결코 옳지 않습니다. 당신은 그 일을 제대로 할 때까지 다시 시도해야 합니다. 당신이 아직 줄 것이 있다는 것을 알고 있다면 포기하면 안됩니다. 저는 항상 실수를 하지 않으려고 노력하지만, 실수를 한다면, 밝은 면을 보도록 노력합니다. 실수는 소금과 같습니다. 실수는 당신의 성공에 의미를 더합니다.'
        },
        {
          name:'B.',
          speech:'저는 제 한계를 존중하는 법을 배웠습니다. 저는 제가 준비하지 못한 책임을 떠맡지 말아야 합니다. 저는 항상 동시에, 저는 강매하는 필요가 있고 부정적으로 실패하지 않는다면 현명한 결정을 내려야 합니다. 그리고 가장 중요한 것은 넘어지는 것보다 더 나쁜 것은 가만히 있는 것이라는 것을 배웠습니다. 실패는 항상 실수가 아니라, 진짜 실수는 시도를 그만두는 것이기 때문에 결코 너무 빨리 포기해서는 안 됩니다.'
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
