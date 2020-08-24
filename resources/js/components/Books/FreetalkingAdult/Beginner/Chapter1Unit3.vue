<template>

<div :style = "{fontSize: fontSize + 'px'}">

<br />
<br />
<h3 style="padding-top: 0px;
           margin-left: 0px;
           margin-right: -18px;
           padding-left: 10px;
           padding-bottom: 10px;
           padding-top: 10px;
           margin-top: 7px;
           background-color: #a7d7c5;">You’re on the limelight!!</h3>
     <div style="padding : 16px;">

<li style="list-style-type: none; line">
Introduce yourself this time!
</li>


<li style="list-style-type: none; padding-bottom: 7px;">
  Follow the guide questions below.


</li>


<ol style="margin: 12px;">
  <li>What is your name?
     </li>
  <li>Where do you live?</li>
  <li>How old are you?
</li>
<li>Are you an employee or a student?

   </li>
<li>What is your job?</li>
<li>What is your major?

</li>
<li>What are your hobbies?

   </li>
<li> What is your favorite food?</li>
<li>What is your favorite color?

</li>
<li>How many people are there in your family?

   </li>
<li>How many siblings do you have?
</li>

</ol>
</div>

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
