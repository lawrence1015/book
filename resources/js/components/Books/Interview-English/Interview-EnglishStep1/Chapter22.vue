<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/graphic-design-color-swatches-pens-desk-architectural-drawing-with-work-tools-accessories_1421-381.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">What is your philosophy towards work?
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
          When it comes to working, I always want to be the best that I can be; I never settle for less.<br />
          ( 일에 관해서라면, 저는 항상 제가 될 수 있는 최고가 되고 싶습니다. 저는 결코 적은 것에 안주하지 않습니다. )
        </li>
        <li>
          I may not be the boss or part of the upper management but if I do my best at work, I can surely make a change.<br />
          ( 제가 사장이나 고위 경영진의 일원이 아닐 수도 있지만, 일을 열심히 하면 반드시 변화를 줄 수 있습니다. )
        </li>
        <li>
          I’d be honest to tell you that I am not a perfect employee; however, I strive to complete my work efficiently and accurately all the time.<br />
          ( 솔직히 말씀드리자면, 저는 완벽한 직원이 아닙니다. 하지만 저는 항상 효율적이고 정확하게 제 일을 끝내기 위해 노력합니다. )
        </li>
        <li>
          I personally believe that regardless of whatever comes my way, I should always maintain a positive mental attitude.<br />
          ( 저는 개인적으로 어떤 일이 일어나든 항상 긍정적인 마음가짐을 유지해야 한다고 생각합니다. )
        </li>
        <li>
          I'd be courageous to make changes and I utilize my skills to be of great help to the company.<br />
          ( 저는 용기 있게 변화를 만들고, 제 능력을 활용하여 회사에 큰 도움이 될 것입니다. )
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
            What do you think you should do to become a part of Upper Management?
          </li>
          <li>
            Did you have any job-related mistake that you were able to face courageously?
          </li>
          <li>
            Can you give a situation at work where you will be able to utilize your skills?
          </li>
          <li>
            What is your philosophy towards work?
          </li>
          <li>
            Is it important to have a philosophy towards work? Why?
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
          speech:'My philosophy towards work would be, "Strive to be the best and nothing less.” I am the kind of person who, as much as possible, does everything with passion. When it comes to my work, I always want to be the best that I can be; I never settle for less. As they say, even the smallest things matter in life. I believe that this is equally applicable to our work. Good things happen if we offer the best of who we are. A single employee can make a difference to the company. I may not be the boss or part of the upper management but if I do my best at work, I can surely make a change.'
        },
        {
          name:'B.',
          speech:"I’d be honest to tell you that I am not a perfect employee; however, I strive to complete my work efficiently and accurately all the time. I personally believe that regardless of whatever comes my way should always maintain a positive mental attitude. At times when I would be able to commit mistakes, I would accept and surely learn from them. I would take full responsibility for the inevitable results of my actions."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'일에 대한 저의 철학은 "최선이 되기 위해 노력하라"일 것입니다. 저는 가능한 한 모든 것을 열정으로 하는 사람입니다. 제 일에 관해서라면, 저는 항상 최고가 되고 싶습니다; 저는 결코 더 적은 것에 안주하지 않습니다. 그들이 말하듯이, 인생에서 가장 작은 것들도 중요합니다. 저는 이것이 우리 일에 똑같이 적용된다고 생각합니다. 우리가 있는 그대로의 최고를 제공하면 좋은 일이 일어납니다. 직원 한 명이 회사에 변화를 줄 수 있습니다. 제가 사장이나 고위 경영진의 일원이 아닐 수도 있지만, 일을 열심히 하면 반드시 변화를 줄 수 있습니다.'
        },
        {
          name:'B.',
          speech:'저는 정직하게 말씀드리지만, 저는 항상 일을 효율적이고 정확하게 끝내기 위해 노력합니다. 저는 개인적으로 무엇이 오든 간에 항상 긍정적인 정신 태도를 유지해야 한다고 생각합니다. 제가 실수를 저지를 수 있을 때, 저는 그 실수를 받아들이고, 그 실수를 통해 확실히 배우곤 합니다. 제 행동의 필연적인 결과에 대해 전적으로 책임지겠습니다. 저는 변화를 만드는 데 용기 있고 제 능력을 회사에 큰 도움이 되도록 활용할 것입니다.'
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
