<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/millennial-employee-stretching-taking-break-from-computer-work-relaxation_1163-4104.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">What motivates you to do your best on the job?
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
          I am a self motivated person.<br />
          ( 저는 자기 동기 부여가 되는 사람입니다. )
        </li>
        <li>
          I take pride in the good work that I have done or currently working on.<br />
          ( 저는 제가 한 일이나 현재 하고 있는 일에 자부심을 느낍니다. )
        </li>
        <li>
          I also get motivated by the challenges that encounter and overcome.<br />
          ( 고위 경영진으로부터 적절한 감사를 받았습니다. )
        </li>
        <li>
          Proper appreciation from the upper management.<br />
          ( 이번에는 좀 더 다재다능해지고 팀워크에 도전하고 싶습니다. )
        </li>
        <li>
          I am motivated to do my best at work when everything around me seems to create a good and light atmosphere.<br />
          ( 제 주위의 모든 것이 좋고 밝은 분위기를 조성하는 것 같을 때 회사에서 최선을 다하겠다는 의욕이 생깁니다. )
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
            Are you a self-motivated person?
          </li>
          <li>
            What kind of work atmosphere are you looking for?
          </li>
          <li>
            What motivates you to do your best on the job?
          </li>
          <li>
            Why is it important to be motivated?
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
          speech:"I am a self-motivated person. I set goals for myself and do every possible thing that will allow me to achieve these goals. I am inspired to work when I am able to finish all the previous tasks on time and deliver a good performance that leads to efficient results. I take pride in the good work that I have done or currently working on. In addition, I also get motivated by the challenges that I encounter and overcome. Self-motivation is highly important to help you carry out the best of yourself at work."
        },
        {
          name:'B.',
          speech:" There are a lot of things that motivate me such as competitive and professional team members, an adept boss, good environment and proper appreciation from the upper management. I am motivated to do my best at work when everything around me seems to create a good and light atmosphere."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'저는 자기 동기부여가 되는 사람입니다. 저는 저 자신을 위해 목표를 설정하고 이러한 목표를 달성할 수 있는 모든 가능한 일을 합니다. 저는 이전의 모든 업무를 제시간에 마치고, 효율적인 결과로 이어지는 좋은 성과를 낼 수 있을 때 일에 영감을 받습니다. 저는 제가 해왔거나 현재 하고 있는 좋은 일에 자부심을 느낍니다. 또한, 저는 제가 직면하고 극복하는 도전들에 의해 동기부여를 받습니다. 자기 동기는 직장에서 최선을 다하도록 돕는 데 매우 중요합니다.'
        },
        {
          name:'B.',
          speech:'경쟁적이고 전문적인 팀원들, 숙련된 보스, 좋은 환경, 고위 경영진의 적절한 감사 등 저에게 동기부여가 되는 많은 것들이 있습니다. 제 주위의 모든 것이 좋고 밝은 분위기를 조성하는 것 같을 때 회사에서 최선을 다하겠다는 의욕이 생깁니다.'
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
