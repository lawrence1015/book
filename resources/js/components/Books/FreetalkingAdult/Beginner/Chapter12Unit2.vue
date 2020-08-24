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

  <li>Jenna likes to wear colorful skirts.
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
