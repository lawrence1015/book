<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/close-up-student-cheating-class_1098-4004.jpg">

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
        padding-bottom: 10px;">Cheating</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Q &amp; A</h3>
               <div style="padding : 16px;">

   <ol style="margin: 12px;">
     <li>
       Have you ever cheated in school? Why or why not? If you cheated, did you get away with it, or did you get caught?<br />
       <br />
     </li>
     <li>
       Have you ever reported anyone who cheated? Why or why not?<br />
       <br />
     </li>
     <li>
       If someone were caught cheating in school in your country, what would the teacher do? What do you think the teacher should do?<br />
       <br />
     </li>
     <li>
       What do you think would happen to society if no one were punished for cheating?<br />
       <br />
     </li>
     <li>
       What would you do if you found out your friend cheated on a medical exam, and now your friend is going to be a surgeon? Would you tell on them? Why or why not?<br />
     </li>
   </ol>

</div>

<h3 style="background-color: #FFFF9C;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Translation</h3>
<div style="padding : 16px;">

  <ol style="margin: 12px;">
     <li class="mb-2">
       학교에서 부정행위를 한 적이 있습니까? 왜 그랬나요, 아니면 왜 그러지 않았나요? 부정행위를 했다면 들키지 않았습니까? 아니면 들켰습니까?
     </li>
     <br />
     <li class="mb-2">
       당신은 커닝을 한 사람을 알린 경험이 있나요? 왜 그랬나요, 아니라면 왜 그렇지 않았나요?
     </li>
     <br />
     <li class="mb-2">
       만약 여러분의 나라에서 누군가 부정행위를 하다가 들키면, 선생님은 어떻게 하실 건가요? 선생님은 어떻게 해야 한다고 생각하세요?
     </li>
     <br />
     <li class="mb-2">
       만약 아무도 부정행위로 처벌받지 않는다면 사회에 어떤 일이 일어날 것이라고 생각하나요
     </li>
     <br>
     <li class="mb-2">
       만약 여러분이 친구가 의학 시험에서 부정행위를 했다는 것을 알게 되고, 이제 여러분의 친구가 외과의사가 된다는 것을 알게 된다면 어떻게 하시겠어요? 말할 건가요? 왜 그렇게 할건가요? 아니라면 왜 그렇게 하지 않을 건가요?
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
