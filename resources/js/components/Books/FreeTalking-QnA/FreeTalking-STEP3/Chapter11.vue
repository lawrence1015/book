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

 <h3 style="background-color: #95FF9A;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
        사형이란 무엇입니까?
        <ul>
        <li class="mt-2">그것에 대해 어떻게 생각하세요?</li>
        <li>당신은 정부가 사형을 집행할 권리를 가지고 있다고 생각합니까?</li>
        <li>만약 그렇다면, 어떤 범죄에 대해서요? 그렇지 않다면 왜 안 될까요?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        당신 나라에는 사형제도가 있나요?
        <ul>
        <li class="mt-2">만약 있다면 어떤 범죄 때문인가요?</li>
        <li>사형수들은 어떤 대우를 받나요?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        당신의 나라에서 사람들이 감옥에 가는 5가지 이유는 무엇입니까?
     </li>
     <br />
     <li class="mb-2">
         감옥에 있는 사람에 대해 알고 있거나 들은 적이 있나요?
        <ul>
        <li class="mt-2">그 사람이 그 범죄를 저질렀나요?</li>
        <li>그 사람은 감옥에 보내졌어야 했나요? 왜 그런가요, 아니라면 왜 아닌가요?</li>
        </ul>
     </li>
     <br />
     <li class="mb-2">
        많은 종류의 범죄가 있습니다: 살인, 절도, 정열의 범죄, 강간. 이 중 어느 것이 종신형을 받을 자격이 있다고 생각합니까?
        <ul>
        <li class="mt-2">이런 범죄를 저지르는 범죄자들 중 누가 최고 보안 교도소에 수감되어야 한다고 생각하세요?</li>
        <li>최소 보안 교도소는요? 왜 그렇게 생각하시나요?</li>
        </ul>
     </li>
   </ol>



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

<style scoped lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

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
