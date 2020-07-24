<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv8BGwhs/7/screen_2x/canva-woman-wearing-blue-top-beside-table-MADGv8BGwhs.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">What interests you about this job?
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
          I've studied and mastered the skill that you are looking for. <br />
          ( 저는 당신이 원하는 기술을 배우고 익혔습니다. )
        </li>
        <li>
          I can be an asset to your company.<br />
          ( 저는 당신의 회사에서 자산이 될 수 있습니다. )
        </li>
        <li>
          I am into this job.<br />
          ( 저는 이 일에 푹 빠져 있어요. )
        </li>
        <li>
          It can give me the chance to develop my skill.<br />
          ( 그것은 저에게 저의 기술을 발전시킬 기회를 줄 수 있습니다. )
        </li>
        <li>
          This will challenge me to give out the best of my ability.<br />
          ( 이것은 제 능력을 최대한 발휘하는 것에 대한 도전이 될 것입니다. )
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
          What interests you about this job? ( Make your own answer. )
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
          speech:"I wanted to share what I have learned with my previous job that I can see is applicable in this job vacancy. With my five years of experience in the sales department I've studied and mastered the skill that you are looking for. I know that I can be very effective and an asset to your company."
        },
        {
          name:'B.',
          speech:"I am into this job because I know that it can give me the chance to develop my skill and to be a better person. I am a hardworking person and this will challenge me to give out the best of my ability."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'저는 저의 이전 직장에서 제가 배운 것을 이 일자리에 공유하고 싶었습니다. 저는 영업부 5년 경력으로 당신이 원하는 기술을 배우고 익혔습니다. 저는 제가 귀사에서 매우 효과적이고 자산이 될 수 있다는 것을 알고 있습니다.'
        },
        {
          name:'B.',
          speech:'제가 이 일에 푹 빠진 이유는 그것이 저에게 기술을 개발하고 더 나은 사람이 될 수 있는 기회를 줄 수 있다는 것을 알기 때문입니다. 저는 열심히 일하는 사람이고 이것은 제 능력을 최대한 발휘하는 것에 대한 도전이 될 것입니다.'
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
