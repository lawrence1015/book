<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/business-man-counting-dollar-banknote-online-business-concept_1150-6406.jpg">

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
        padding-bottom: 10px;">I need a loan
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">I need a loan</li><br />
      <p>
        Mr. Thompson likes to save money, so he usually walks to work.<br />
        Last Friday, however, he was late, so he called a cab. <br />
        A few minutes later, a taxi pulled up in front of his house. Mr. Thompson kissed his wife good-bye and got in the taxi.<br />
        The driver was Bob Field.<br />
      </p>
      <br />
      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs" :key="dialog">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>
      <br />
      <p>
        On the way to the bank, Mr. Thompson talked to Bob.<br />
        He liked Bob’s friendly personality and careful driving. <br />
        When the cab pulled up in front of the bank, Mr. Thompson got out and talked to the driver.<br />
      </p>
      <br />
      <table style = "border-collapse: collapse;">
    
        <tr v-for="seconddialog in seconddialogs" :key="seconddialog">
          <td class = "uppertable" >{{seconddialog.name}}</td>
          <td class = "lowertable" >{{seconddialog.speech}}</td>
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
            Why does Mr. Thompson usually walk to work? <br />
              ( Thompson씨는 왜 보통 직장에 걸어서 갑니까? )
          </li>
          <li>
            What does Mr. Thompson like about Bob? <br />
              ( Thompson씨는 Bob의 무엇을 좋아합니까? )
          </li>
          <li>
            Why does Bob want to borrow money from the bank? <br />
            ( 왜 Bob은 은행에서 돈을 빌리기를 원합니까? )
          </li>
        </ol>
        <br />
        <p>
          Free response:<br />

            Do people in Korea often borrow money from a bank?<br />
            What do they need the money for?<br />

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
        <p>
          Thompson씨는 돈을 저축하는 것을 좋아합니다. 그래서 그는 보통 직장에 걸어서 갑니다.<br />
          하지만 지난 금요일에 그는 늦어서 택시를 불렀습니다.  <br />
          몇분 후에 택시가 그의 집 앞에 섰습니다. Thompson씨는 그의 아내에게 good-bye라고 키스하고 택시에 탔습니다.<br />
          운전자는 Bob Field였습니다.<br />
        </p>
        <table style = "border-collapse: collapse;">

          <tr v-for="translation in translations" :key="translation">
            <td class = "uppertable" >{{translation.name}}</td>
            <td class = "lowertable" >{{translation.speech}}</td>
          </tr>
  
        </table>

        <p>
          은행으로 가는 도중에, Thompson씨는 Bob에게 말했습니다.<br />
          그는 Bob의 친절한 성격과 조심스럽게 운전하는 것이 좋았습니다. <br />
          택시가 은행 앞에 섰을 때 Thompson씨는 내렸고 운전자에게 말했습니다.<br />
        </p>
        <br />
        <table style = "border-collapse: collapse;">
      
          <tr v-for="secondtranslation in secondtranslations" :key="secondtranslation">
            <td class = "uppertable" >{{secondtranslation.name}}</td>
            <td class = "lowertable" >{{secondtranslation.speech}}</td>
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
                      What …. for? ? 이유나 목적을 물을 때 사용합니다.
                    </li>
                    <li>
                      On the way to 장소 : ~로 가는 도중에<br />
                    </li>
                    <li>
                      borrow (what) from (whom) = 누구한테 무엇을 빌리다의 의미입니<br />
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
          speech:'Hello. You must be a very important man.'
        },
        {
          name:'B:',
          speech:'Why do you think so?'
        },
        {
          name:'A:',
          speech:'I saw your picture in the newspaper. Oh, I remember – you’re the president of the City Bank!'
        },
        {
          name:'B:',
          speech:'That’s right. And what’s your name?'
        },
        {
          name:'A:',
          speech:'Bob Field. I’m very glad to meet you, sir. I went to your bank every day last week.'
        },
        {
          name:'B:',
          speech:'You did?'
        },
        {
          name:'A:',
          speech:'Yes, sir. I want to borrow some money.'
        },
        {
          name:'B:',
          speech:'Oh really? You want to borrow money from our bank? What do you want the money for?'
        },
        {
          name:'A:',
          speech:'I want to fix up my cab. It doesn’t run very well. The engine makes a lot of noise. It’s bad for business.'
        },
        {
          name:'B:',
          speech:'That’s true. I can see you have a problem.'
        },
        ],

        seconddialogs:[
        {
          name:'B:',
          speech:'Bob, I like you. I’m going to give you the money. How much do you need?'
        },
        {
          name:'A:',
          speech:'About five hundred dollars.'
        },
        {
          name:'B:',
          speech:'OK. Come and see me at the bank on Monday.'
        },
        {
          name:'A:',
          speech:'Thank you very much Mr. Thompson. There’s just one thing.'
        },
        {
          name:'B:',
          speech:'Yes, Bob, what is it?'
        },
        {
          name:'A:',
          speech:'You owe me $5.25 for taxi fare. You don’t want to loan your money to a bad businessman, right?'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'안녕하세요. 당신은 매우 중요한 사람임에 틀림없습니다.'
        },
        {
          name:'B:',
          speech:'왜 그렇게 생각하십니까?'
        },
        {
          name:'A:',
          speech:'저는 뉴스에서 당신 사진을 보았습니다. 오, 기억납니다 - 당신은 City Bank의 대표입니다!'
        },
        {
          name:'B:',
          speech:'맞습니다. 그런데 당신의 이름은 무엇입니까?'
        },
        {
          name:'A:',
          speech:'Bob Field입니다. 당신을 만나서 정말 기쁩니다. 저는 지난 주에 당신의 은행에 매일 갔습니다.'
        },
        {
          name:'B:',
          speech:'그래요?'
        },
        {
          name:'A:',
          speech:'네, 저는 돈을 조금 빌리고 싶습니다.'
        },
        {
          name:'B:',
          speech:'그러세요? 무엇 때문에 돈이 필요하세요?'
        },
        {
          name:'A:',
          speech:'저는 제 택시를 수리하고 싶습니다. 제 택시가 잘 달리지 못해서요. 엔진에 소음이 많습니다. 그것은 사업에 나쁩니다.'
        },
        {
          name:'B:',
          speech:'맞습니다. 당신에게 문제가 있는게 보입니다.'
        },
        ],

        secondtranslations:[
        {
          name:'B:',
          speech:'Bob, 난 당신이 좋아요. 돈을 주겠습니다. 얼마나 필요하십니까?'
        },
        {
          name:'A:',
          speech:'약 $500입니다.'
        },
        {
          name:'B:',
          speech:'좋아요. 월요일날 은행에 저를 만나러 오세요.'
        },
        {
          name:'A:',
          speech:'정말 고맙습니다 Thompson씨. 다만 한 가지가 있습니다.'
        },
        {
          name:'B:',
          speech:'네, Bob, 그게 뭡니까?'
        },
        {
          name:'A:',
          speech:'당신은 택시비로 $5.25를 지불해야 합니다. 당신은 나쁜 사업가에게 당신의 돈을 빌려주기를 원하지 않습니다. 그렇죠? '
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
