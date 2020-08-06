<template>
  <div :style="{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>

        <div style="padding : 16px;">

          <h3 style="padding-top: 7px;
          margin-left: -18px;
          margin-right: -18px;
          padding-left: 10px;
          padding-bottom: 10px;
          padding-top: 15px;
          margin-top: 40px;
          background-color: #a7d7c5;">Conversation Samples <br><span class = "korean">(선생님과 역할을 나눠서 연습해보세요)</span></h3>
          <div style="padding : 16px;">

            <table style = "border-collapse: collapse;">

    <tr v-for="dialog in dialogs" :key="dialog">
      <td class = "uppertable" ><b>{{dialog.name}}</b></td>
      <td class = "lowertable" >{{dialog.speech}}</td>
    </tr>

  </table>

          </div>



          <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
          <div style="padding : 16px;">


            <p>Answer the following questions.
            </p>

            <ol style="margin: 12px;">
              <li>How many members are there in your family?
              </li>

              <li>How does your father look? Mother?
              </li>

              <li>What is your father's personality?
              </li>

              <li>What does he like?
              </li>

              <li>What is your mother’s personality?
              </li>

              <li>What does she like?
              </li>

              <li>How many siblings do you have?
              </li>

              <li>Can you describe them?
              </li>

              <li>To whom are you closest to?
              </li>

              <li>What can you say about your family?
              </li>
            </ol>

          </div>

          <h3 style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

          <div style="padding : 16px;">

            <table style = "border-collapse: collapse;">

        <tr v-for="translation in translations" :key="translation">
          <td class = "uppertable" ><b>{{translation.name}}</b></td>
          <td class = "lowertable" >{{translation.speech}}</td>
        </tr>

      </table>

           

          </div>



        </div>





      </v-layout>
    </v-container>
</div>
</template>

<script>
export default {

  props: ['fontSize'],

  data() {

    return {
      dialogs:[
        {
          name:'M :',
          speech:"Tell me about your family."
        },
        {
          name:'F :',
          speech:"My family has four members: my father, mother, brother and me."
        },
        {
          name:'M :',
          speech:"What is your father like?"
        },
        {
          name:'F :',
          speech:"He is a handsome man. People may think he is not friendly because he looks very serious but he is actually very kind! He likes to read English books."
        },
        {
          name:'M :',
          speech:"How about your mother?"
        },
        {
          name:'F :',
          speech:"Oh! She is a loud and funny woman! She is not very pretty but she is smart. Maybe, she’s smarter than my dad!"
        },
        {
          name:'M :',
          speech:"How about your brother?"
        },
        {
          name:'F :',
          speech:"He is still very young. He likes to draw on our walls with crayons. That drives my parents crazy!"
        },
        {
          name:'M :',
          speech:"You seem to have a happy family!"
        },
        {
          name:'F :',
          speech:"Oh yes! Sometimes we have misunderstandings but I surely love them!"
        },
      ],
      translations:[
       {
          name:'M :',
          speech:"네 가족에 대해 말해줘."
        },
        {
          name:'F :',
          speech:"우리 가족은 아빠, 엄마, 오빠, 나 이렇게 4명이야."
        },
        {
          name:'M :',
          speech:"네 아버지는 어떤 분이셔?"
        },
        {
          name:'F :',
          speech:"그는 잘생긴 남자야. 사람들은 그가 매우 진지해 보이기 때문에 친절하지 않다고 생각할지도 모르지만, 사실 그는 매우 친절해! 그는 영어책 읽는 것을 좋아해."
        },
        {
          name:'M :',
          speech:"너희 어머니는 어떠셔?"
        },
        {
          name:'F :',
          speech:"오! 그녀는 시끄럽고 재미있는 여자야! 그녀는 별로 예쁘지는 않지만 똑똑해. 어쩌면, 그녀는 우리 아빠보다 더 똑똑할지도 몰라!"
        },
        {
          name:'M :',
          speech:"네 형은 어때?"
        },
        {
          name:'F :',
          speech:"그는 아직 매우 어리다. 그는 크레용으로 우리 벽에 그림을 그리는 것을 좋아한다. 그게 우리 부모님을 미치게 해!"
        },
        {
          name:'M :',
          speech:"넌 행복한 가정을 꾸린 것 같아!"
        },
        {
          name:'F :',
          speech:"오, 그래! 가끔 우리는 언쟁을 하지만 나는 그들을 정말 사랑해!"
        },
      ]


    }

  },


  beforeMount() {


  },

  methods: {


  },

  watch: {

    fontSize(current, old) {

      console.log(current, 'current')
      console.log(old, 'previous')


    }
  }
}
</script>

<style lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}



body{

  font-size: 16px;
}

</style>
