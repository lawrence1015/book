<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/MADGv2TwJlM/7/screen_2x/canva-two-woman-in-black-sits-on-chair-near-table-MADGv2TwJlM.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">What is your major?
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
          I'm really into film making.<br />
          ( 난 영화 제작에 푹 빠졌어. )
        </li>
        <li>
          I had the advantage when it came to my experience.<br />
          ( 제 경험에 있어서는 이점이 있었습니다. )
        </li>
        <li>
          My major is Economics.<br />
          ( 저의 전공은 경제학입니다. )
        </li>
        <li>
          I graduated with remarkable honors.<br />
          ( 저는 우수한 성적으로 졸업했습니다. )
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

        <ol style="margin: 12px;">
          <li>
            I am into  <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
          </li>
          <li>
            I got to have an internship <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
          </li>
          <li>
            I graduated  <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
          </li>
          <li>
            I had the advantage when it comes to  <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
          </li>
          <li>
            I got hired as <u>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;</u>.
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
          speech:"I'm really into film making and to learn more about the art form, technology, and cultural significance, majored in Film Studies at Columbia University in the City of New York. I believe I have chosen the best school for my major. I had the advantage when it comes to my experience because I got to have internship opportunities with film companies, working on our thesis where we enhance and master our capabilities in this field."
        },
        {
          name:'B.',
          speech:"My major is Economics from the best school in California, that's Stanford. I graduated with remarkable honors and got hired to work as an economic analyst with Kia Motors where I have stayed there for 3 years."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'저는 영화 제작에 푹 빠져있으며, 뉴욕시의 컬럼비아 대학에서 영화학을 전공한 미술 형식, 기술, 그리고 문화적 의의에 대해 더 많이 배우고 싶습니다. 저는 제 전공에 가장 적합한 학교를 선택했다고 생각합니다. 저는 이 분야에서 역량을 강화하고 숙달하는 논문을 쓰면서 영화사와의 인턴십 기회를 갖게 되었기 때문에 제 경험에 있어서는 이점이 있었습니다.'
        },
        {
          name:'B.',
          speech:'제 전공은 캘리포니아에서 가장 우수한 학교인 스탠포드 대학의 경제학입니다. 저는 우수한 성적으로 졸업했고 3년 동안 기아자동차에서 경제 분석가로 일하기 위해 고용되었습니다.'
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
