<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/Q_OcM/MAD2geQ_OcM/1/s2/canva-person-holding-credit-card-MAD2geQ_OcM.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">What are your work experiences?
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
          Since I was studying at the university I've been working as a private tutor.<br />
          ( 저는 대학교에서 공부한 이후로 과외 교사로 일하고 있습니다. )
        </li>
        <li>
          I have not had much experience working.<br />
          ( 저는 일한 경험이 별로 없습니다. )
        </li>
        <li>
          I know that my educational background can give me an edge to earn a living.<br />
          ( 저의 학력이 생계를 유지하는 데 도움이 될 수 있음을 알고 있습니다. )
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
          What are your work experiences? ( Make your own answer. )
        </p>

        <p>

          <v-container grid-list-md text-xs-left>
            <v-layout row wrap>


              <v-flex xs12>
                <v-card outlined light color="#E9E9E9" height="200%">
                  <v-card-text class="px-10">
                    <p>

                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </p>


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
          speech:"Since I was studying at the university I've been working as a private tutor with elementary students. I also had experienced working in a 24/7 grocery store as a cashier where I've stayed for almost a year. I was forced to stop with my work schedule which is a graveyard shift because I find it difficult to balance with my studies during that time."
        },
        {
          name:'B.',
          speech:"I have not had much experience working because when I graduated college I focused my time with my master's degree. I'm not bothered at all that I lack paid working experience because I know that my educational background can give me an edge to earn a living."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'저는 대학교에서 공부한 이후로 초등학생들에게 과외를 하고 있습니다. 저는 또한 거의 1년 동안 계산원으로서 24시간 식료품점에서 일한 경험이 있습니다. 저는 그 시간 동안 공부와 균형을 맞추기가 힘들어서 어쩔 수 없이 제 일과를 그만두었습니다.'
        },
        {
          name:'B.',
          speech:'저는 대학을 졸업할 때 석사 학위를 따는데 시간을 쏟았기 때문에 일을 해본 경험이 별로 없습니다. 저는 학력이 생계를 유지하는 데 도움을 줄 수 있다는 것을 알기 때문에 유급 근무 경력이 부족하다는 것에 전혀 개의치 않습니다.'
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
