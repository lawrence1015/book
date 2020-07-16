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
           background-color: #a7d7c5;">Enhance!</h3>

<div style="padding : 16px;">


<p>
  Read and answer each number in just 30 seconds. Ready? Set! Go!
</p>

<ol style="margin: 12px;">

  <li>Who should be obeyed?
  </li>
  <p>a. parents  b. cupcake
  </p>



  <li>What needs to be implemented?
  </li>
  <p>a. criminal b. rules
  </p>



  <li>What is a cop?
  </li>
  <p>
    a. a police officer b. a thief
  </p>



  <li>What do you do in a salon?
  </li>
  <p>
    a. get a hair color b. drive a car
  </p>



  <li>What do you do when giving a lecture?
  </li>
  <p>
    a. eat sweet foods b. teach students
  </p>



  <li>What needs to be treated fairly?
  </li>
  <p>
    a. nails b. people
  </p>



  <li>Who governs your country?
  </li>
  <p>
    a. the thieves b. the president
  </p>



  <li>Who are the inhabitants of China?
  </li>
  <p>
    a. Chinese b. foreigners
  </p>



  <li>What do you do to a depressed person?
  </li>
  <p>
    a. Put to jail b. cheer up
  </p>



  <li>What happens to a bankrupt business?
  </li>
  <p>
    a. closes down b. becomes successful
  </p>



  <li>What does 'staff' means?
  </li>
  <p>
    a. lawyers  b. employees
  </p>



  <li>What do you do when you unwind?
  </li>
  <p>
    a. arrest people b. relax
  </p>



  <li>I have a muscle ache. What does this mean?
  </li>
  <p>
    a. pain in the body b. heart disease
  </p>



  <li>What happens when you are included in a group?
  </li>
  <p>
    a. they hate you b. you are part of them
  </p>



  <li>What is an example of a workplace?
  </li>
  <p>
    a. an office b. president's actions
  </p>



</ol>



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
          speech:"What are the weirdest laws you have ever heard about?"
        },
        {
          name:'M :',
          speech:"Are there such things? I thought laws are supposed to keep peace and order in a place. Weird laws sound ridiculous."
        },
        {
          name:'F :',
          speech:"That's true but there really are such things! In France, it is illegal to sell dolls that do not have human faces. In Massachusetts, USA, you can get arrested for not taking a bath before going to bed."
        },
        {
          name:'M :',
          speech:"Are you kidding? That is totally crazy!"
        },
        {
          name:'F :',
          speech:"No, I am serious!"
        },
      ],
      dialogs2:[
        {
          name:'M :',
          speech:"You should research the laws of a country before travelling there."
        },
        {
          name:'F :',
          speech:"Why is that? When travelling, I already have many things to think about like food, lodging, money, etc."
        },
        {
          name:'M :',
          speech:"But this is really important. You can get arrested if you break some unknown and weird rules."
        },
        {
          name:'F :',
          speech:"What do you mean?"
        },
        {
          name:'M :',
          speech:"Hmm ... For example, in Singapore, chewing gums are illegal. And in Portugal, cops will arrest you if you pee in the ocean!"
        },
        {
          name:'F :',
          speech:"Oh! Really? I am actually going to Singapore next week!"
        },
      ],
      translations:[
        {
          name:'F :',
          speech:"지금까지 들어본 것 중에 가장 이상한 법이 뭐야?"
        },
        {
          name:'M :',
          speech:"그런게 있어? 나는 법이 평화와 질서를 지키도록 되어 있다고 생각했어. 이상한 법률은 말도 안되는것 같아."
        },
        {
          name:'F :',
          speech:"그건 사실이지만 정말 그런 것들이 있어! 프랑스에서는 사람의 얼굴이 없는 인형을 파는 것은 불법이야. 미국 매사추세츠주에서는 잠들기 전에 목욕을 하지 않으면 체포될 수 있어."
        },
        {
          name:'M :',
          speech:"농담해? 그건 완전히 미친 짓이야!"
        },
        {
          name:'F :',
          speech:"아니, 난 진심이야!"
        },
      ],
      translations1:[
        {
          name:'M :',
          speech:"너는 여행하기 전에 그 나라의 법을 조사해야 해."
        },
        {
          name:'F :',
          speech:"왜 그럴까? 여행갈 때, 나는 이미 음식, 숙박, 돈 등 생각할 것이 많아."
        },
        {
          name:'M :',
          speech:"하지만 이건 정말 중요해. 알 수 없고 이상한 규칙을 어기면 체포될 수 있어."
        },
        {
          name:'F :',
          speech:"무슨 말이야?"
        },
        {
          name:'M :',
          speech:"음... 예를 들어, 싱가포르에서 껌을 씹는 것은 불법이야. 그리고 포르투갈에서는 바다에서 오줌을 누면 경찰이 체포할 거야!"
        },
        {
          name:'F :',
          speech:"오! 정말? 나 사실 다음 주에 싱가포르에 가!"
        },
      ],


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
