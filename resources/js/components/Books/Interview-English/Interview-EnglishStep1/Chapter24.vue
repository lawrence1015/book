<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/front-view-business-people-with-hands-up_23-2148427083.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">What do your previous co-workers say about you?
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
          My previous co-workers told me that I am the kind of person who is fun to be with and handle everything professionally..<br />
          ( 이전 직장 동료들은 제가 모든 일을 전문적으로 처리하고, 함께 하는 것이 재미있다고 말했습니다. )
        </li>
        <li>
          I don't whine no matter how much work I have to do.<br />
          ( 저는 아무리 일을 많이 해도 징징거리지 않습니다. )
        </li>
        <li>
          My previous manager commended me for my work ethics.<br />
          ( 이전 매니저는 나의 직업윤리를 칭찬했습니다. )
        </li>
        <li>
          I always make sure that everything is done before I leave the office.<br />
          ( 저는 퇴근하기 전에 항상 모든 일을 확실히 합니다. )
        </li>
        <li>
          I never complain about overtime too.<br />
          ( 저는 잔소리를 자주 하지 않습니다. )
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
            Did you have a harmonious relationship with your previous colleagues?
          </li>
          <li>
            Was there a time that you whined about a certain job?
          </li>
          <li>
            How well can you perform with less supervision?
          </li>
          <li>
            What do your previous co-workers say about you?
          </li>
          <li>
            Why is it important to maintain a good relationship with your colleagues?
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
          speech:"I was given the chance to work with a team in my previous employment and I was lucky to mingle and gain understanding on how to deal with team mates with varying personalities and attitudes towards work. My previous co-workers told me that I am the kind of person who is fun to be with and handles everything professionally. I can still recall the time when one of my co-workers told me that I don't whine no matter how much work I have to do."
        },
        {
          name:'B.',
          speech:"My previous manager commended me for my work ethics. He said that I was a very organized member of his team. He liked how I got along with my colleagues. He added that I could work under pressure and with less supervision. I always make sure that everything is done before I leave the office. I never complain about overtime too. I am delighted because he was able to recognize my good points."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'저는 이전 직장에서 팀과 함께 일할 기회를 얻었고 운 좋게도 서로 어울리게 되었고 다양한 성격과 일에 대한 태도를 가진 팀 메이트를 다루는 방법에 대해 이해하게 되었습니다. 전 직장 동료들은 제가 모든 일을 전문적으로 처리하고 함께 있으면 재미있다고 했습니다. 직장 동료 중 한 명이 아무리 일을 많이 해도 징징거리지 않는다고 했던 때가 지금도 생각납니다.'
        },
        {
          name:'B.',
          speech:'이전 매니저가 제 직업윤리를 칭찬해줬습니다. 그는 내가 그의 팀에서 매우 조직적인 멤버였다고 말했습니다. 그는 내가 동료들과 잘 지내는 것을 좋아했습니다. 그는 제가 더 적은 감독으로 압박을 받고 일할 수 있다고 덧붙였습니다. 저는 퇴근하기 전에 항상 모든 일이 다 끝나는지 확인합니다. 저도 자주 잔소리를 하는 편은 아닙니다. 저는 그가 저의 좋은 점을 알아주어서 기쁩니다.'
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
