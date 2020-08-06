<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/two-businessmen-shaking-hands-congratulating-promotion_23-2147923371.jpg" style="max-width: 100%; display:block; height: auto;">

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
        color: black;">What qualities do you look for in a boss?
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
          In order for one to be a leader, he must be a follower himself.<br />
          ( 한 사람이 지도자가 되기 위해서는 그 자신이 추종자여야 합니다. )
        </li>
        <li>
          The one who does not only give rules but as well as abide to the regulations set by the company.<br />
          ( 규칙뿐만 아니라 회사에서 정한 규정도 준수하는 사람입니다. )
        </li>
        <li>
          Does not only think of himself alone but equally looks after his members' welfare.<br />
          ( 자기 혼자만 생각하는 것이 아니라 구성원들의 복지를 똑같이 돌봅니다. )
        </li>
        <li>
          A leader who is not only feared, but also loved by his members.<br />
          ( 두려울 뿐만 아니라 구성원들의 사랑도 받는 리더입니다. )
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
            How would you describe your previous boss?
          </li>
          <li>
            What makes an efficient boss?
          </li>
          <li>
            Did you have a good relationship with your previous boss?
          </li>
          <li>
            What qualities do you look for in a boss?
          </li>
          <li>
            How do you maintain a good relationship with your boss?
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
          speech:"First and foremost, in order for one to be a leader, he must be a follower himself. An ideal boss would be the one who does not only give rules but as well as act in accordance with the regulations set by the company. His efficiency as a leader is proven by the way he handles tough decision makings that benefit or affect his team. I prefer someone who does not only think of himself alone but equally looks after his members' welfare. "
        },
        {
          name:'B.',
          speech:"A reasonable and responsible boss would be highly appreciated; a leader who is not only feared, but also loved by his members. The performance of the whole team will be a replica of how the boss manages his members and how he deals with the demanding situations at work. They often say that every good tree bears good fruit, cliché as it may be, but agree with it."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'무엇보다도 리더가 되기 위해서는 추종자 자신이 되어야 합니다. 이상적인 상사는 회사가 정한 규정에 따라 행동할 뿐만 아니라 규칙도 부여하지 않는 사람입니다. 리더로서의 그의 효율성은 팀에 도움이 되거나 영향을 미치는 힘든 의사 결정을 처리하는 방식에 의해 증명됩니다. 저는 혼자만 생각하는 것이 아니라 구성원들의 복지를 똑같이 챙기는 사람을 선호합니다.'
        },
        {
          name:'B.',
          speech:'합리적이고 책임감 있는 사장님, 두려울 뿐만 아니라 구성원들의 사랑을 받는 지도자라면 대단히 감사할 것입니다. 팀 전체의 수행은 상사가 자신의 멤버를 어떻게 관리하는지, 그리고 직장에서의 힘든 상황에 어떻게 대처하는지를 보여주는 모사품이 될 것입니다. 그들은 종종 모든 좋은 나무들이 있는 그대로 진부한 열매를 맺지만, 그것에 동의한다고 말합니다.'
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
