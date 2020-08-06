<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/headhunters-interviewing-female-job-candidate_1163-4674.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">If you were hiring a person for this job, what would you look for?
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
          I would choose the one who is the best candidate for this job.<br />
          ( 이 일에 가장 적합한 사람을 뽑을 것입니다. )
        </li>
        <li>
          He should be passionate and values the work instead of the salary.<br />
          ( 그는 봉급 대신 열정적이고 일을 중시해야 합니다. )
        </li>
        <li>
          The one that has the gift of the gab to communicate with clients.<br />
          ( 고객과 소통할 수 있는 말재주가 있는 사람입니다. )
        </li>
        <li>
          I would go for someone who is considered to be the cream of the crop.<br />
          ( 최고로 여겨지는 사람을 고를 것입니다. )
        </li>
        <li>
          I like to work with an individual who gets to learn the ropes easily and knows all the possible tricks of the trade.<br />
          ( 저는 쉽게 요령을 터득하고 거래의 가능한 모든 요령을 아는 사람과 함께 일하는 것을 좋아합니다. )
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
            Do you think you have the gift of the gab?
          </li>
          <li>
            What do you normally do to learn the ropes?
          </li>
          <li>
            Do you think you know the tricks of the trade?
          </li>
          <li>
            If you were hiring a person for this job, what would you look for?
          </li>
          <li>
            How would you know if someone is fit for the job?
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
          speech:"If I were to hire someone, I would choose an individual who is the best candidate for this job. An applicant who possesses most, if not all, qualities fitted for the work. He should be passionate and value the work instead of the salary, the one that has the gift of the gab to communicate with clients. He must prove himself worthy of the company's trust and continues to prove himself in every way."
        },
        {
          name:'B.',
          speech:"The one that I would like to hire should be dedicated to do the job. It would be someone who has an experience with the kind of job that is being offered I would go for someone who is considered to be the cream of the crop. Preferably, I like to work with an individual who gets to learn the ropes easily and knows all the possible tricks of the trade."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'만약 제가 누군가를 고용한다면, 저는 이 일에 가장 적합한 사람을 뽑을 것입니다. 전부는 아니더라도 대부분의 자질을 갖춘 지원자입니다. 그는 고객과 소통할 수 있는 말재주가 있는 월급 대신 열정적이고 일을 중시해야 합니다. 그는 회사의 신뢰에 걸맞은 자신을 증명해야 하며, 모든 면에서 자신을 증명해야 합니다.'
        },
        {
          name:'B.',
          speech:'제가 고용하고 싶은 사람은 그 일을 하는데 전념해야 합니다. 그런 일을 해 본 경험이 있는 사람이면 최고로 여겨지는 사람을 찾아갈 것입니다. 더 좋은 것은, 저는 쉽게 요령을 익히고 가능한 모든 요령을 알고 있는 사람과 일하는 것을 좋아합니다.'
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
