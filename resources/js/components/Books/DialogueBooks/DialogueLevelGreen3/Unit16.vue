<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/five-kids-big-family_1098-13974.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgb(59, 105, 120, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">How many siblings do you have?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">How many siblings do you have?</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs" :key="dialog">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Exercise</h3>
        <div style="padding : 16px;">

        <p>
          <u>Answer the questions</u><br />
          ( 질문에 답하시오 )
        </p>

        <ol style="margin: 12px;">
          <li>
            Are Chinese families usually big? <br />
            ( 중국가족은 보통 대가족입니까? )
          </li>
          <li>
            What about the families in Peru? <br />
            ( Peru의 가족은 어떻습니까? )
          </li>
          <li>
            Why does Mei-li like to be an only child? <br />
            ( Mei-li는 왜 독자인 것을 좋아합니까? )
          </li>
          <li>
            Why does Marcos like big families? <br />
            ( 왜 Marcos는 대가족을 좋아합니까? )
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />
          <br />
            Are you from a big or small family?<br />
            How many brothers and sisters do you have?<br />
            Are there many big families in Korea?<br />

        </p>



      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Translation</h3>
      <div style="padding : 16px;">

        <table style = "border-collapse: collapse;">

          <tr v-for="translation in translations" :key="translation">
            <td class = "uppertable" >{{translation.name}}</td>
            <td class = "lowertable" >{{translation.speech}}</td>
          </tr>
  
        </table>

</div>
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
        </div>
        <h3 class = "border white--text" style="padding-top: 7px;
                                                margin-left: -18px;
                                                margin-right: -18px;
                                                padding-left: 10px;
                                                padding-bottom: 10px;
                                                padding-top: 10px;
                                                margin-top: 0px;
                                                background-color: #204051;">Self Study</h3>
        <div style="padding : 16px;">

          <p>

            <v-container grid-list-md text-xs-left>
              <v-layout row wrap>


                <v-flex xs12>
                  <v-card light color="#cae8d5">
                    <v-card-text class="px-10">
                    <li>
                      Notes
                    </li>
                    <ol style="margin: 12px;">
                    <li>
                      more than: ~보다 더 <br />                  
                    </li>
                    <li>
                      Do you like being...? : <br />
                          like뒤에 being이 왔는데 여기서 being은 동사가 아니라 like의 목적어인 동명사입니다. <br />
                          한 문장에 동사가 두개가 올 수 없기 때문에 동명사가 와야 합니다.<br />
                          being은 존재하다 있다는 의미로 '혼자있는 것' 이라고 해석이 된 것입니다.<br />
                    </li>
                  </ol>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>

          </p>

      </div>


    </div>


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
          name:'A:',
          speech:'Mei-li, can I ask about your family?'
        },
        {
          name:'B:',
          speech:'Sure. What do you want to know?'
        },
        {
          name:'A:',
          speech:'How many brothers and sisters do you have?'
        },
        {
          name:'B:',
          speech:'Actually, I’m an only child.'
        },
        {
          name:'A:',
          speech:'Really?'
        },
        {
          name:'B:',
          speech:'Yeah, only a few families in China have more than one child nowadays.'
        },
        {
          name:'A:',
          speech:'I didn’t know that.'
        },
        {
          name:'B:',
          speech:'What about you, Marcos?'
        },
        {
          name:'A:',
          speech:'I come from a big family. I have three brothers and two sisters.'
        },
        {
          name:'B:',
          speech:'Wow! Is that typical in Peru?'
        },
        {
          name:'A:',
          speech:'Not really. Many families are small these days. But big families are great because you get lots of birthday presents!'
        },
        {
          name:' ',
          speech:'So, do you like being an only child?'
        },
        {
          name:'B:',
          speech:'Of course. I get all my parents’ attention.'
        },
        {
          name:'A:',
          speech:'Yeah, I have to share my parents’ attention with five other people.'
        },
        {
          name:'B:',
          speech:'But sometimes I want a brother or a sister.'
        },
        {
          name:'A:',
          speech:'Do you ever feel lonely?'
        },
        {
          name:'B:',
          speech:'Sure. But it’s OK. I have lots of friends.'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'Mei-li, 너 가족에 대해서 물어봐도 될까?'
        },
        {
          name:'B:',
          speech:'물론이야. 뭘 알고 싶은데?'
        },
        {
          name:'A:',
          speech:'너는 형제 자매가 몇 명이니?'
        },
        {
          name:'B:',
          speech:'사실 나는 독자야.'
        },
        {
          name:'A:',
          speech:'정말?'
        },
        {
          name:'B:',
          speech:'응, 요즘 중국은 한 자녀 이상을 둔 가정이 적어.'
        },
        {
          name:'A:',
          speech:'몰랐어.'
        },
        {
          name:'B:',
          speech:'넌 어때, Marcos?'
        },
        {
          name:'A:',
          speech:'우리 집은 대가족이야. 나는 세 명의 형제와 두 명의 자매가 있어.'
        },
        {
          name:'B:',
          speech:'와우! 그게 Peru에서는 전형적이니?'
        },
        {
          name:'A:',
          speech:'그렇진 않아. 요즘 소가족이 많아. 하지만 생일 선물을 많이 받을 수 있기 때문에 대가족이 좋아.'
        },
        {
          name:' ',
          speech:'그럼, 넌 독자인게 좋아?'
        },
        {
          name:'B:',
          speech:'물론이지. 부모님의 모든 관심을 받쟎아.'
        },
        {
          name:'A:',
          speech:'그래, 나는 부모님의 관심을 5명과 나눠야만 해.'
        },
        {
          name:'B:',
          speech:'하지만 언젠가 형제나 자매가 있으면 좋겠어.'
        },
        {
          name:'A:',
          speech:'외로움을 느낀 적 있어?'
        },
        {
          name:'B:',
          speech:'물론이야. 하지만 괜찮아. 나는 친구들이 많아.'
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

.border:before {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 40px 40px 0px 0px;
  transform: rotate(180deg);
  border-color: transparent #204051 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #204051;
  padding-left: 10px;

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
