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
 <li>What is your favorite attire? Why?
 </li>

 <li>How do people dress in an ordinary day in your country?
 </li>

 <li>Do you have a fashion idol? Who?
 </li>

 <li>Do you consider yourself fashionable? Why or why not?
 </li>

 <li>What are you wearing today?
 </li>

 <li>How much do you spend in a month for clothes, shoes and accessories?
 </li>

 <li>Does one have to spend a lot to be fashionable?
 </li>

 <li>Why is it important to look good?
 </li>

 <li>Do you judge other people based on what they wear?
 </li>

 <li>What is your impression of nicely-dressed people? Poorly dressed?
 </li>

 <li>What color and attire would you wear on a first date?
 </li>

 <li>What would you wear in a business meeting?
 </li>

 <li>What would you wear when meeting the President of your country?
 </li>

 <li>What would you wear at home during the weekends?
 </li>

 <li>What do you consider as weird fashion?
 </li>

 <li>Kpop fashion is known for colorful layers and combinations. Are you also wearing these types of clothes?
 </li>
</ol>

</div>


<h3  style="padding-top: 7px;  margin-left: -18px; margin-right: -18px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #a7d7c5; ">Translation</h3>

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
          name:'M :',
          speech:"Which do you prioritize more, fashion or comfort?"
        },
        {
          name:'F :',
          speech:"What do you mean by that?"
        },
        {
          name:'M :',
          speech:'Many people will wear clothes that are popular and fashionable to feel that they are "in." They will do it even if they are uncomfortable.'
        },
        {
          name:'F :',
          speech:"Oh, you mean like tight dresses, high heels, and so on!"
        },
        {
          name:'M :',
          speech:"Yes, yes, exactly."
        },
        {
          name:'F :',
          speech:"We will be guilty of that sometimes. Women like to look beautiful, you know. It hurts us to see another woman look more beautiful than us. It's not that we dress to attract males; it's to compete with other females."
        },
        {
          name:'M :',
          speech:"You've got to be kidding me!"
        },
        {
          name:'F :',
          speech:"No. That's just the female mind."
        },
        {
          name:'M :',
          speech:"Then a woman who believes she's more than what she wears has learned to accept and love herself."
        },
        {
          name:'F :',
          speech:"That is true! But just because I like pretty clothes, it doesn't mean I don't love myself! I don't understand you men!"
        },
        ],
        translations:[
        {
          name:'M :',
          speech:"패션과 편안함 중 어느 것을 더 우선시하니?"
        },
        {
          name:'F :',
          speech:"그게 무슨 말이야?"
        },
        {
          name:'M :',
          speech:'많은 사람들이 "입고 있다"고 느끼기 위해 인기 있고 유행에 맞는 옷을 입을 거야. 그들은 불편하더라도 그럴거야.'
        },
        {
          name:'F :',
          speech:"아, 꽉 끼는 드레스, 하이힐 등등을 말하는구나!"
        },
        {
          name:'M :',
          speech:"그래, 그래, 바로 그거야."
        },
        {
          name:'F :',
          speech:"우리는 가끔 그것에 대해 죄책감을 느낄 거야. 여자들은 아름답게 보이길 좋아하잖아 우리보다 더 아름다운 다른 여자를 보면 마음이 아파. 우리가 남성들을 끌어들이기 위해 옷을 입는 것이 아니라, 다른 여성들과 경쟁하기 위해서야."
        },
        {
          name:'M :',
          speech:"농담하는 거지!"
        },
        {
          name:'F :',
          speech:"아니. 그건 그냥 여자의 마음이야."
        },
        {
          name:'M :',
          speech:"그러면 자신이 입는 것 이상의 존재라고 믿는 여자는 자신을 받아들이고 사랑하는 법을 배운 거야."
        },
        {
          name:'F :',
          speech:"그건 사실이야! 하지만 내가 예쁜 옷을 좋아한다고 해서 내 자신을 사랑하지 않는다는 뜻은 아니야! 난 너희들을 이해할 수 없어!"
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
