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


<p>Verbs change forms depending on the tenses or the time.
</p>

<p>
For the PAST TENSE, most verbs have to be added with -ed.
</p>

<li style="list-style-type: none;">Present: Stay
</li>

<li style="list-style-type: none;">Past: Stayed
</li>



<br />

<li style="list-style-type: none;">Present: Change
</li>
<li style="list-style-type: none;">Past: Changed
</li>


<br />

<li style="list-style-type: none;">Present: Cook
</li>
<li style="list-style-type: none;">Past: Cooked
</li>

<br />

<li style="list-style-type: none;">Present: Call
</li>
<li style="list-style-type: none;">Past: Called
</li>

<br />

<li style="list-style-type: none;">Present: Work
</li>
<li style="list-style-type: none;">Past: Worked
</li>

<br />

<li style="list-style-type: none;">Present: Open
</li>
<li style="list-style-type: none;">Past: Opened
</li>

<p>
  However, some verbs take irregular past forms. For example,
</p>

<li style="list-style-type: none;">Present: Eat
</li>
<li style="list-style-type: none;">Past: Ate
</li>

<br />

<li style="list-style-type: none;">Present: Read
</li>
<li style="list-style-type: none;">Past: Read
</li>
<li style="list-style-type: none;">(pronounced as "red")
</li>

<br />

<li style="list-style-type: none;">Present: Draw
</li>
<li style="list-style-type: none;">Past: Drew
</li>

<br />

<li style="list-style-type: none;">Present: Sleep
</li>
<li style="list-style-type: none;">Past: Slept
</li>

<br />

<li style="list-style-type: none;">Present: Hurt
</li>
<li style="list-style-type: none;">Past: Hurt
</li>

<br />

<li style="list-style-type: none;">Present: Cut
</li>
<li style="list-style-type: none;">Past: Cut
</li>

<br />

<li style="list-style-type: none;">Present: Freeze
</li>
<li style="list-style-type: none;">Past: Froze
</li>



</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Enhance!</h3>

<div style="padding : 16px;">

<p>
  Turn these sentences  into the past form.
</p>

<ol style="margin: 12px;">

  <li>I cook spaghetti and crepe.
  </li>

  <li>My foot hurts.
  </li>

  <li>We eat some kimbop.
  </li>

  <li>I sleep at midnight.
  </li>

  <li>Matty draws landscape and portraits.
  </li>

  <li>Jenna likes to wear colourful skirts.
  </li>

  <li>We feel as though he is in paradise!
  </li>

  <li>I know the answer.
  </li>

  <li>Tina catches the ball.
  </li>

  <li>We freeze in the snow.
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
          speech:"How was your freshmen year? You're in second year now, right?"
        },
        {
          name:'M :',
          speech:"Yes, that is true. Last year was both tough and awesome at the same time. It was quite hard adjusting to a new school and new people."
        },
        {
          name:'F :',
          speech:"How did you find your subjects?"
        },
        {
          name:'M :',
          speech:"Some were difficult but some were enjoyable. My favorite was literature and history."
        },
        {
          name:'F :',
          speech:"What were the difficult subjects?"
        },
        {
          name:'M :',
          speech:"Math and programming of course! Those are my weak points!"
        },
        {
          name:'F :',
          speech:"Wait, what? What's your major again?"
        },
        {
          name:'M :',
          speech:"I'm now taking up International Studies."
        },
        {
          name:'F :',
          speech:"I thought you're taking Engineering!"
        },
        {
          name:'M :',
          speech:"I did last year but I shifted!"
        },
      ],
      dialogs2:[
        {
          name:'F :',
          speech:"Have you heard about the pyramids in Egypt?"
        },
        {
          name:'M :',
          speech:"Yes, a little.  I have heard they were very big and amazing."
        },
        {
          name:'F :',
          speech:"That is true! l wonder how the ancient Egyptians  built them. At those times there were no machines. They just cut and carried those stones! They must have weighed a hundred tons each'"
        },
        {
          name:'M :',
          speech:"They cut them perfectly too.  These pyramids are real architectural wonders! They were built perfectly."
        },
        {
          name:'F :',
          speech:"Some people said aliens helped the ancient Egyptian civilization! It is quite ridiculous as far as I know, but it is possible!"
        },
        {
          name:'M :',
          speech:"Aliens! From other planets?"
        },
        {
          name:'F :',
          speech:"Yes! It took advance technology to build those pyramids!"
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
