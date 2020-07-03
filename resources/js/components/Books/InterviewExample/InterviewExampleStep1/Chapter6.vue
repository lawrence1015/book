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
        color: black;">What can you do for this company?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(17, 105, 121, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Example Answers</h3>
  <hr width="60%">
      <div style="padding : 15px;">


      <p>
        A.    I am the type that is very dedicated to my work. I would be very much willing to stay after hours if you will need my time for the job.
        Being single makes me available at any time and flexible for the work to be done efficiently.
      </p>

      <p>
      B.    I can help facilitate the growth of this company.
      I am very much willing to offer my expertise given I have the experience and ability to work well in a group and meet challenges.
      </p>


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
          I am the type that is very dedicated to my work.<br />
          ( 저는 그룹 활동을 잘하고 도전을 해결할 수 있는 능력을 가지고 있습니다. )
        </li>
        <li>
          I would be willing to stay after hours.<br />
          ( 저는 근무시간 이후에도 기꺼이 남을 수 있습니다. )
        </li>
        <li>
          I am available at any time.<br />
          ( 저는 언제든지 가능합니다. )
        </li>
        <li>
          I am very much willing to offer my expertise.<br />
          ( 제 전문 지식을 기꺼이  제공하겠습니다. )
        </li>
        <li>
          I have the ability to work well in a group and meet challenges.<br />
          ( 저는 그룹 활동을 잘하고 도전도 잘 할 수 있는 능력을 가지고 있습니다. )
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
          What can you do for this company? ( Make your own answer. )
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

        <p>
          A. 저는 제 일에 매우 헌신적인 타입입니다. 만약 당신이 그 일에 제 시간이 필요하다면, 저는 근무시간 이후에도 흔쾌히 남을 수 있습니다.
          독신이기 때문에 언제든지 유연하게 작업을 수행할 수 있습니다.
        </p>

        <p>
          B. 저는 이 회사의 성장을 촉진할 수 있습니다.
          저는 그룹 활동을 잘하고 도전을 해결할 수 있는 경험과 능력을 가진 제 전문성을 기꺼이 제공하고자 합니다.
        </p>


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


</style>
