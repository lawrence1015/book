<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/aW8V0/MAD0iWaW8V0/1/s2/canva-conversation-between-job-applicant-and-representative-employer-MAD0iWaW8V0.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">Tell me about yourself
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(17, 105, 121, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Example Answers</h3>
  <hr width="60%">
      <div style="padding : 15px;">


      <p>
        A. I'm a sales representative with strong development training and a good sales record during the past three years with my previous job.
      </p>
      <p>
        I am one of the valued employees during my stay there;
      </p>
      <p>
        I'd like to discuss how it might be of help in your company if I'm given a chance to work with you.
      </p>
      <br />
      <p>
        B. I am a graduate of Seoul National University - Business School. I have majored in Business Management.
      </p>
      <p>
        Even though I'm a fresh graduate I have undergone my internship in Kookmin Bank handling new accounts,
      </p>
      <p>
        I was able to do my responsibilities with flying colors which can back me up with my application in your good company.
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
          I am one of the valued employees.<br />
          (나는 소중한 직원 중 한 명이다.)
        </li>
        <li>
          I am a graduate of Seoul National University - Business School.<br />
          (나는 서울대학교 경영대학원을 졸업했다.)
        </li>
        <li>
          I was able to do my responsibilities with flying colors.<br />
          (나는 나의 책임을 멋지게 수행할 수 있었다.)
        </li>
        <li>
          I'm a sales representative.<br />
          (나는 영업사원이다.)
        </li>
        <li>
          I have a degree in Business Management.<br />
          (나는 경영학 학위를 가지고 있다.)
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
          Tell me about yourself. ( Make your own answer. )
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
          A. 저는 전 직장에서 지난 3년 동안 강력한 개발 트레이닝과 좋은 판매 실적을 가진 영업사원입니다.
          저는 그곳에 머무는 동안 소중한 직원들 중 한 명이었습니다.  당신과 함께 일할 기회가 주어진다면 당신의 회사에 어떤 도움이 될지 이야기를 나누고 싶습니다.
        </p>

        <p>
          B. 저는 서울대학교 경영대학원을 졸업했습니다. 저는 경영학을 전공했습니다.
          저는 국민은행에서 새로운 계좌를 취급하며 인턴쉽을 거친 갓 졸업한 사람이지만,
          당신의 좋은 회사에서 나의 지원서를 받을 수 있는 훌륭한 책임을 수행할 수 있었습니다.
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
