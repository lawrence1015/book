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
           background-color: #a7d7c5;">Tips</h3>
<div style="padding : 16px;">


<p>Using adverbs of time
</p>

<li style="list-style-type: none;">Adverbs of time are words that tell us when an action happened, for how long, and how often.
</li>






<v-container>
  <v-layout>
    <v-flex xs12 sm12 md4>
      <div>
<table>

  <tr>
    <td>When?</td>
    <td>today, yesterday, later, now, last year</td>
  </tr>
  <tr>
    <td>For how long?</td>
    <td>all day, not long, for a while, since last year</td>
  </tr>
  <tr>
    <td>How often?</td>
    <td>sometimes, frequently, never, often, yearly.</td>
  </tr>

</table>
</div>
</v-flex>
</v-layout>
</v-container>

<p>
  Examples
</p>

<ol style="margin: 12px;">
  <li>I went to school yesterday.
  </li>
  <li style="list-style-type: none;">Question: When did you go to school?
  </li>
  <br />

  <li>I slept all day.
  </li>
  <li style="list-style-type: none;">Question: For how long did you sleep?
  </li>
  <br />

  <li>We ride the bus sometimes.
  </li>
  <li style="list-style-type: none;">Question: How often do you ride the bus?
  </li>



</ol>



</div>




<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">


<p>
  A. Formulate questions based on the sentences.
</p>

<ol style="margin: 12px;">

  <li>We frequently watch baseball games
  </li>

  <li>They toured Canada last year.
  </li>

  <li>He will call you later.
  </li>

  <li>I have been waiting here for a while?
  </li>

  <li>Mr. Kim has grown rice since last summer.
  </li>

  <li>Cecille rides her bike sometimes.
  </li>

  <li>Matt has lived in the Philippines since 2001.
  </li>

  <li> I never travel alone.
  </li>

  <li>We go there yearly.
  </li>

  <li>I will talk to you now.
  </li>

  <li>The flute concert was yesterday.
  </li>

  <li>We studied all day.
  </li>

  <li>She often cooks kimbop.
  </li>

  <li>Dora travels always.
  </li>

  <li>We will watch a movie today.
  </li>
</ol>

<p>
  B. Complete the following sentences as true to your situation.
</p>

<ol style="margin: 12px;">

  <li>I always __________ when I am tired.
  </li>

  <li>I always __________ every Chuseok.
  </li>

  <li>I always __________ when I am watching TV.
  </li>

  <li>I frequently __________ with my family.
  </li>

  <li>I frequently _________ every morning.
  </li>

  <li>I frequently enjoy ____________.
  </li>

  <li>I sometimes _________ on the weekends.
  </li>

  <li>I sometimes believe in __________.
  </li>

  <li>I sometimes eat _____________.
  </li>

  <li>I occasionally go to _____________
  </li>

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
          speech:"What is your favorite hobby?"
        },
        {
          name:'M :',
          speech:"It is fishing. I really enjoy it."
        },
        {
          name:'F :',
          speech:"How often do you go fishing? Why do you enjoy it so much?"
        },
        {
          name:'M :',
          speech:"As often as possible! I think I do it every weekend because I have to work daily. It relaxes me."
        },
        {
          name:'F :',
          speech:"I thought fishing is boring"
        },
        {
          name:'M :',
          speech:"Well, it can be, but catching fish is thrilling!"
        },
      ],
      dialogs2:[
        {
          name:'M :',
          speech:"Do you like watching movies?"
        },
        {
          name:'F :',
          speech:"I certainly do' I watch movies almost every day!"
        },
        {
          name:'M :',
          speech:"Really? In the theater?"
        },
        {
          name:'F :',
          speech:"No, no. I mean I watch them at home. I go to the theater occasionally because I am quite busy. How about you?"
        },
        {
          name:'M :',
          speech:"I actually work inside the theater so I watch movies daily."
        },
        {
          name:'F :',
          speech:"Really? That's amazing!"
        },
      ],
      translations:[
        {
          name:'F :',
          speech:"가장 좋아하는 취미가 뭐야?"
        },
        {
          name:'M :',
          speech:"그건 낚시야. 나는 정말 그것을 즐겨."
        },
        {
          name:'F :',
          speech:"얼마나 자주 낚시하러 가니? 왜 그렇게 즐기거야?"
        },
        {
          name:'M :',
          speech:"가능한 한 자주! 나는 매일 일해야 하기 때문에 주말마다 하는 것 같아. 그건 날 편안하게 해."
        },
        {
          name:'F :',
          speech:"난 낚시가 지루하다고 생각했어."
        },
        {
          name:'M :',
          speech:"글쎄, 그럴 수도 있지만, 물고기를 잡는 것은 스릴 있어!"
        },
      ],
      translations1:[
        {
          name:'M :',
          speech:"영화 보는 거 좋아하니?"
        },
        {
          name:'F :',
          speech:"난 거의 매일 영화를 봐!"
        },
        {
          name:'M :',
          speech:"그래? 극장에서?"
        },
        {
          name:'F :',
          speech:"아니, 아니. 집에서 보는 거야. 나는 꽤 바쁘기 때문에 가끔 극장에 가. 너는 어때?"
        },
        {
          name:'M :',
          speech:"사실 나는 영화관에서 일해서 매일 영화를 봐."
        },
        {
          name:'F :',
          speech:"정말? 신기하다!"
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
