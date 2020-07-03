<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADQ45NSGHo/1/screen_2x/canva-law-books-in-the-library-MADQ45NSGHo.jpg" style="max-width: 100%; display:block; height: auto;" >

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
      >
        <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Justice Systems</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
        What is capital punishment?
        <ul>
        <li class="mt-2"> What do you think about it?</li>
        <li> Do you think a government has a right to enforce capital punishment?</li>
        <li> If so, for what crimes? If not why not?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        Is there capital punishment in your country?
        <ul>
        <li class="mt-2"> If there is, for what crimes?</li>
        <li> How are death row inmates treated?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
          What are five reasons why people are put in prison in your country?
     </li>
     <br />
     <li class="mb-2">
         Did you ever know or hear about anyone who was in prison?
        <ul>
        <li class="mt-2"> Was that person guilty of the crime?</li>
        <li> Should that person have been sent to prison? Why or why not?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        There are many different kinds of crime: murder, theft, crimes of passion, rape. Which of these do you think deserves the punishment of life in prison?
        <ul>
        <li class="mt-2"> Which of the criminals who commit these crimes do you think should be put in maximum security prisons?</li>
        <li> Minimum security prison? Why?</li>
        </ul>
     </li>
   </ol>



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

ul {
  list-style-type: none;
}

ul > li:before {
  content: "–"; /* en dash */
  position: absolute;
  margin-left: -1.1em;
}

.format{
  margin-top: 0px;
}

</style>
