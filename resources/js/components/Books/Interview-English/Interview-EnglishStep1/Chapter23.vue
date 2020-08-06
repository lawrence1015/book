<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/stylish-successful-young-businessman-his-office-lean-table-holding-money-smiling-making-deal-with-business-partner_176420-15939.jpg" style="max-width: 100%; display:block; height: auto;">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgb(222, 227, 226, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;
        color: black;">What is more important to you : money or  work?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(17, 105, 121, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Example Answers</h3>
  <hr width="60%">
      <div style="padding : 15px;">


        <table style = "border-collapse: collapse;">
    
          <tr v-for="dialog in dialogs">
            <td class = "uppertable" >{{dialog.name}}</td>
            <td class = "lowertable" >{{dialog.speech}}</td>
          </tr>
    
        </table>


      <h3 class = "border white--text"
          style="border-radius: 0px 70px 70px 0px;
                 padding-top: 7px;
                 margin-left: -18px;
                 margin-right: -18px;
                 padding-left: 15px;
                 padding-bottom: 10px;
                 padding-top: 10px;
                 margin-top: 0px;">Key Expressions</h3>

      <div style="padding : 16px;">

      <ol style="margin: 12px;">
        <li>
          In my opinion, both are important because everyone needs money to live but job satisfaction is also equally significant.<br />
          ( 제 생각에는 모두가 살기 위해서는 돈이 필요하지만 직업 만족도도 마찬가지로 중요하기 때문에 둘 다 중요하다고 생각합니다. )
        </li>
        <li>
          The amount of money is tantamount to the confidence and performance you are able to carry out.<br />
          ( 돈의 액수는 여러분이 수행할 수 있는 자신감과 성과와 같습니다. )
        </li>
        <li>
          Money could be an effective prime mover but the way I see it, it should not be the goal.<br />
          ( 돈은 효과적인 원동력이 될 수 있지만, 제가 볼 때, 돈이 목표가 되어서는 안 됩니다. )
        </li>
        <li>
          However, I think that work should be superior.<br />
          ( 하지만, 저는 일이 더 우수해야 한다고 생각합니다. )
        </li>
        <li>
          Through hard work and by doing my job right, I'll be able to prove my worth, my abilities, my potential; myself.<br />
          ( 열심히 일하고 제 일을 바르게 함으로써, 저는 저의 가치, 능력, 잠재력을 증명할 수 있을 것입니다. )
        </li>
      </ol>


      </div>

      <h3 class = "border white--text"
          style="border-radius: 0px 70px 70px 0px;
                 padding-top: 7px;
                 margin-left: -18px;
                 margin-right: -18px;
                 padding-left: 15px;
                 padding-bottom: 10px;
                 padding-top: 10px;
                 margin-top: 0px;
                 width: 150px;">Activity</h3>

      <div style="padding : 16px;">

        <p>
          Answer the following questions
        </p>

        <ol style="margin: 12px;">
          <li>
            What do you consider as the prime mover for you to do well at work?
          </li>
          <li>
            Do you think that money and work are inseparable?
          </li>
          <li>
            What is the ultimate source of happiness?
          </li>
          <li>
            What is more important to you, money or work?
          </li>
          <li>
            Would you still do your best at work even though you’re underpaid?
          </li>
        </ol>


      </div>

      <h3 class = "border white--text"
          style="border-radius: 0px 70px 70px 0px;
                 padding-top: 7px;
                 margin-left: -18px;
                 margin-right: -18px;
                 padding-left: 15px;
                 padding-bottom: 10px;
                 padding-top: 10px;
                 margin-top: 10px;
                 width: 180px;">Translation</h3>

      <div style="padding : 16px;">

        <table style = "border-collapse: collapse;">

          <tr v-for="translation in translations">
            <td class = "uppertable" >{{translation.name}}</td>
            <td class = "lowertable" >{{translation.speech}}</td>
          </tr>
  
        </table>

      </div>


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
        dialogs:[
        {
          name:'A.',
          speech:"That is a very tricky question. In my opinion, both are important because everyone needs money to live but job satisfaction is also equally significant. My mother used to tell me that money follows hard work. Money is the reward of all you have worked for. The amount of money is tantamount to the confidence and performance you are able to carry out. Money could be an effective prime mover. But the way I see it, it should not be the goal. I hope I was able to answer your question."
        },
        {
          name:'B.',
          speech:"From where I stand, money and work are two-headed coins; they have a somewhat give and take relationship. They almost even seem inseparable. You have to work in order to earn money. However, I think that work should be superior. Through hard work and by doing my job right, I'll be able to prove my worth, my abilities, my potential; myself. I need money everyone does, but it should come second. After all money is not the heart or ultimate source of happiness, Happiness is achieved by doing the things that we love to do and I want to end by saying that I'd love to work for you."
        },
        ],

        translations:[
        {
          name:'A.',
          speech:'그것은 매우 까다로운 질문입니다. 제 생각에, 모든 사람은 살기 위해 돈이 필요하지만 직업 만족도 또한 마찬가지로 중요하기 때문에 둘 다 중요하다고 생각합니다. 어머니는 저에게 돈은 힘든 일을 따른다고 말씀하셨습니다. 돈은 당신이 일한 모든 것의 보상입니다. 돈의 액수는 여러분이 수행할 수 있는 자신감과 성과와 같습니다. 돈은 효과적인 원동력이 될 수 있습니다. 하지만 제가 보기에는 목표가 되어서는 안 됩니다. 제가 당신의 질문에 대답할 수 있었기를 바랍니다.'
        },
        {
          name:'B.',
          speech:'제가 보기에 돈과 일은 두 개의 동전의 앞면인데, 그들은 어느 정도 주고 받는 관계를 가지고 있습니다. 그들은 거의 뗄래야 뗄 수 없는 사이처럼 보이기까지 합니다. 돈을 벌기 위해서는 일을 해야 합니다. 하지만, 저는 일이 더 우수해야 한다고 생각합니다. 열심히 일하고 제 일을 바르게 함으로써, 저는 저의 가치, 능력, 잠재력을 증명할 수 있을 것입니다. 저는 모든 사람이 하는 돈이 필요하지만, 두 번째가 되어야 한다고 생각합니다. 모든 돈이 행복의 심장이나 궁극적인 원천이 아닌 후에 행복은 우리가 좋아하는 일을 함으로써 이루어집니다. 그리고 저는 당신을 위해 일하고 싶다고 말함으로써 끝내고 싶습니다.'
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


.border {
  position: relative;
  left: 0px;
  width: 230px;
  height: 40px;
  background: #116979;
  padding-left: 10px;
  line-height: 20px;

}
.profile {
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  padding-top : 330px;
  padding-left : 10px;
  padding-bottom: 10px;
}
.uppertable {
  border: 0px solid #dddddd;
  text-align: left; padding: 8px;
  vertical-align:top;
  width: 5%;
  white-space: nowrap;
}

.lowertable {
  border: 0px solid #dddddd;
  text-align: left;
  padding: 8px;
}

</style>
