<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/H-Lmw/MADyQ_H-Lmw/1/s2/canva-photo-of-family-smiling-MADyQ_H-Lmw.jpg" style="max-width: 100%; display:block; height: auto;" >

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
        padding-bottom: 10px;">Family</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li class="mb-2">
       What family members do you live with at the present time?
       <ul>
       <li class="mt-2"> How are they related to you?</li>
       <li> What are their occupations?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Do you have siblings?
       <ul>
       <li class="mt-2"> How many brothers do you have?</li>
       <li> How many sisters?</li>
       <li> Where do they live?</li>
       <li> What are they doing now?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Are you married?
       <ul>
       <li class="mt-2"> If so, when did you get married?</li>
       <li> What were you doing when your spouse asked you. or you asked your spouse, to marry?</li>
       <li> If you are not married, do you want to get married?</li>
       <li> What are you doing to approach or avoid marriage?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       Do you have children?
      <ul>
       <li class="mt-2">If so, how many children do you have? Talk about them. </li>
       <li>If you don't have children, do you want to have children? Why or why not?</li>
      </ul >
     </li>
     <br />
     <li class="mb-2">
       What family member do you want to see that you haven't seen in a long time?<br />
       Why do you want to see that person?<br />
       Why haven't you seen that person in a long time?</li>
     </li>
     <br />
     <li class="mb-2">
       Describe a perfect family.
     </li>
   </ol>

</div>

<h3 style="background-color: #D9D9D6;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       당신은 현재 어떤 가족과 함께 살고 있나요?
       <ul>
       <li class="mt-2">그들은 당신과 어떤 관계입니까?</li>
       <li>그들의 직업은 무엇입니까?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       형제자매가 있습니까?
       <ul>
       <li class="mt-2">형제가 몇이나 되나요?</li>
       <li>자매는 몇 명입니까?</li>
       <li>그들은 어디에 사나요?</li>
       <li>그들은 지금 무엇을 하고 있나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       결혼하셨나요?
       <ul>
       <li class="mt-2">그렇다면 언제 결혼했나요?</li>
       <li>배우자가 결혼하자고 물었을 때 당신은 무엇을 하고 있었습니까? 아니면 당신이 배우자에게 물었을 때?</li>
       <li>만약 결혼하지 않았다면, 결혼하고 싶나요?</li>
       <li>당신은 결혼에 다가가거나 피하기 위해 무엇을 하고 있나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       아이가 있으세요?
      <ul>
       <li class="mt-2">만약 그렇다면, 여러분은 몇 명의 아이를 가지고 계신가요? 그들에 대해 이야기하세요.</li>
       <li>아이가 없다면 아이를 갖고 싶나요? 왜 그런가요, 아니면 왜 아닌가요?</li>
      </ul >
     </li>
     <br />
     <li class="mb-2">
       오랫동안 못 본 가족구성원들 중에 어떤 가족구성원을 보고 싶으신가요?</li>
       <ul>
       <li class="mt-2">왜 그 사람을 만나고 싶습니까?</li>
       <li>왜 오랫동안 그 사람을 못 봤나요?</li>
       </ul>
     </li>
     <br />
     <li class="mb-2">
       완벽한 가족을 묘사해보세요.
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
