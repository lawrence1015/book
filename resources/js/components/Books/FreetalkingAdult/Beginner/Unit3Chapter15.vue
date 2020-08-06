<template>

<div :style = "{fontSize: fontSize + 'px'}">

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

<p>
<b>A.</b>
</p>

<table style = "border-collapse: collapse;">

    <tr v-for="dialog in dialogs" :key="dialog">
      <td class = "uppertable" ><b>{{dialog.name}}</b></td>
      <td class = "lowertable" >{{dialog.speech}}</td>
    </tr>

  </table>

</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">You're on the Limelight!</h3>
<div style="padding : 16px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>What is your favorite animal? Why?
  </li>

  <li>What is the most beautiful animal you have seen? Can you describe it?
  </li>

  <li>Are there endangered animals in your country?
  </li>

  <li>Do you have a pet?  If yes, why did you get one? If no, do you plan to get one?
  </li>

  <li>How can animals help humans?
  </li>

  <li>Do you know other endangered species?
  </li>

  <li>Why do you think some animals are in danger?
  </li>

  <li>What is the effect to the humans if a species ceased to exist?
  </li>

  <li>What can we do to save them?
  </li>

  <li>Is it okay to kill animals to make bags out of their skins? Why or why not?
  </li>

  <li>Should animals be kept in the zoos? Why or why not?
  </li>

</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #a7d7c5;">Translation
</h3>
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

  data(){

    return{

      dialogs:[
        {
          name:'F :',
          speech:'Do you know what "endangered species" are?'
        },
        {
          name:'M :',
          speech:"Yes. These are animals that are on the verge of near extinction, right?"
        },
        {
          name:'F :',
          speech:"Yes, you are absolutely right. It is quite a sad thing you know. When a kind of animal ceases to exist it is like we have failed to protect it"
        },
        {
          name:'M :',
          speech:"That is true. That also means imbalance in nature. Do you know the Siberian Tiger? I have heard that from a population of 100,000 they have now become only 4,200."
        },
        {
          name:'F :',
          speech:"Oh no' Why have they become so few? If we don't take care of them, they will all be gone. Children in the future will only see them in pictures!"
        },
        {
          name:'M :',
          speech:"They have become so few because they are hunted down. Even if they are animals, they serve a purpose in keeping the environment balanced!"
        },
      ],
       translations:[
        {
          name:'F :',
          speech:' "멸종위기종"이 뭔지 알아?'
        },
        {
          name:'M :',
          speech:"응. 멸종 위기에 처한 동물들이지?"
        },
        {
          name:'F :',
          speech:"그래, 네 말이 맞아. 꽤 슬픈 일이야. 어떤 종류의 동물이 더 이상 존재하지 않을 때 그것은 우리가 그것을 보호하는데 실패한 것과 같다."
        },
        {
          name:'M :',
          speech:"그건 사실이야. 그것은 또한 자연의 불균형을 의미해. 시베리아 호랑이를 아니? 나는 10만 명의 인구로부터 이제 겨우 4,200명 밖에 되지 않았다고 들었어."
        },
        {
          name:'F :',
          speech:"이런, 왜 이렇게 수가 적어졌지? 우리가 그들을 돌보지 않으면, 그들은 모두 사라질 거야. 미래의 아이들은 사진으로만 그들을 볼 거야!"
        },
        {
          name:'M :',
          speech:"그들은 사냥을 당했기 때문에 그렇게 수가 적어졌어. 비록 그들이 동물일지라도, 그들은 환경을 균형 있게 유지하는 목적을 제공하지!"
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
