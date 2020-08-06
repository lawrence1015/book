<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/businessman-drawing-keys-success_1134-645.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">How would you know you were successful on this job?
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
          I have fulfilled the goals set and have given more than what is expected of me.<br />
          ( 저는 정해진 목표를 달성했고 저에게 기대 이상의 것을 주었습니다. )
        </li>
        <li>
          Gaining the trust and confidence of my boss to give me a new project are also signs of achievement.<br />
          ( 새로운 프로젝트를 주겠다는 상사의 신뢰와 자신감을 얻는 것도 성과의 표시입니다. )
        </li>
        <li>
          Attitude is the key as well as the measure of genuine success.<br />
          ( 태도는 진정한 성공의 척도이자 핵심이다. )
        </li>
        <li>
          My career growth plays a big part for me to say that I have been successful on the job.<br />
          ( 제 경력 성장은 제가 그 일을 성공적으로 해냈다고 말하는 데 큰 역할을 합니다. )
        </li>
        <li>
          Promotion is an evidence that I have maximized all my skills.<br />
          ( 승진은 제가 제 모든 능력을 최대한 발휘했다는 증거입니다. )
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
            Have you ever felt that you were successful in your previous job?
          </li>
          <li>
            How has your career growth been for the past years?
          </li>
          <li>
            What is genuine success?
          </li>
          <li>
            How would you know you were successful on this job?
          </li>
          <li>
            What are you willing to do to be successful on the job?
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
          speech:"I can say that I am successful on this job when I have fulfilled the goals set and have given more than what is expected of me. Being molded to be a better employee and gaining the trust and confidence of my boss to give me a new project are also signs of achievement in addition, accomplishing challenging and tough projects yet maintaining a harmonious relationship with the people around me is also something that I can be proud of. In my opinion, attitude is the key as well as the measure of genuine success."
        },
        {
          name:'B.',
          speech:"My career growth plays a big part for me to say that I have been successful on the job. Promotion is evidence that I have maximized all my skills to deliver a good and competitive performance. I can also say that I am successful when I am as happy as a clam where I am currently working at."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'저는 제가 설정한 목표를 달성하고 저에게 기대 이상의 것을 줄 때 이 일을 성공적으로 해낼 수 있다고 말할 수 있습니다. 더 좋은 직원이 되기 위해 틀에 짜여지고, 새로운 프로젝트를 내게 주기 위해 상사의 신뢰와 자신감을 얻는 것 또한 성취의 징조이며, 도전적이고 힘든 프로젝트를 완수하면서도 주변 사람들과 조화로운 관계를 유지하는 것도 자랑스러운 일입니다. 제 생각에, 태도는 진정한 성공의 척도일 뿐만 아니라 핵심입니다.'
        },
        {
          name:'B.',
          speech:'제 경력 성장은 제가 그 일을 성공적으로 해냈다고 말하는 데 큰 역할을 합니다. 승진은 제 모든 능력을 극대화하여 좋은 성과를 내고 경쟁적인 성과를 낸 증거입니다. 또한 저는 제가 현재 일하고 있는 조개처럼 행복할 때 성공한다고 말할 수 있습니다.'
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
