<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://marketplace.canva.com/-0sOk/MADyRK-0sOk/1/s2/canva-shibuya%2C-japan-MADyRK-0sOk.jpg">

        <v-layout
        align-end
        fill-height
        pa-2
        white--text
        >
        <h1 style="margin:0 -30px 10px;
        overflow: hidden;
        padding: 5px;
        padding-left: 35px;
        padding-right: 25px;
        background-color: rgba(209, 90, 124, 0.80);
        border:0px solid #afcde3;
        -webkit-border-radius: 30px;
        border-radius: 30px;">Everything, Nothing

      </h1>
    </v-layout>
  </v-img>


  <h2 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Preview</h2>

  <hr width="60%">
  <div style="padding : 15px;">


    <p>

      <v-container grid-list-md text-xs-left>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card light color="#f6eec7">
              <v-card-text class="px-10">
                <p>
                  <i>Indefinite Pronouns 2</i>
                </p>
                <hr />
                <p>
                  <u>someone/somebody</u> - refers to some unknown person
                </p>
                <p>
                  <u>something</u> - refers to some unnamed thing
                </p>
                <p>
                  <u>somewhere</u> - refers to some unnamed place
                </p>
                <p>
                  <u>anyone/anybody</u> - an unknown person
                </p>
                <p>
                  <u>anything</u> - refers to any unnamed thing
                </p>
                <p>
                  <u>anywhere</u> - refers to any unnamed place
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </p>



  </div>


  <h2 style="margin-left: -30px;
  overflow: hidden;
  padding: 5px;
  padding-left: 35px;
  padding-right: 0px;
  background-color: #ee8972;
  border:0px solid #afcde3;
  -webkit-border-radius: 30px;
  border-radius: 30px;">Getting Started</h2>

  <div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

    <h3>The Usage of Indefinite Pronouns</h3>

    <ol style="margin: 12px;">
      <li>
        When we have a <b>statement,</b> we use something or someone. We also use this preposition in <b>polite requests, offers,</b> and <b>suggestions.</b>
        We use <b><i>someone</i></b> and <b><i>somebody</i></b> when we talk about people, <b><i>when we talk about people,</i></b> for things, and
        <b><i>somewhere</i></b> for places.
        <p>
          Examples<br />
          <i>Liza bought something from the department store.</i><br />
          <i>Tony talked to someone over the phone.</i>
        </p>
      </li>
      <li>
        If we have a <b>negative sentence,</b> we use anything or anyone. We also follow the same pattern just like the first pronoun that we have; <b><i>anyone</i></b>
        or  <b><i>anybody</i></b> for people, <b><i>anything</i></b> for things, and <b><i>anywhere</i></b> for places.
        <p>
          Examples<br />
          <i>Liza didn’t buy anything from the department store.</i><br />
          <i>Tony didn’t talk to anyone over the phone.</i>
        </p>
      </li>
      <li>
        For <b>questions,</b> we can use either <b><i>something/someone</i></b> or <b><i>anything/anyone.</i></b>
        <p>
          Examples<br />
          <i>Did Liza buy something from the department store?</i><br />
          <i>Did Liza buy anything from the department store?</i>
        </p>
        <p>
          <i>Did Tony talk to someone over the phone?</i><br />
          <i>Did Tony talk to anyone over the phone?</i>
        </p>
      </li>
      <li>
        BUT there is an <b>exception</b> to the rule. We can use <b><i>anything</i></b> and <b><i>anyone</i></b> in <b>positive statements</b>
        to mean <b>no matter which, no matter who,</b> and <b>no matter what.</b>
        <p>
          Examples<br />
          <i>They can choose anything from the menu. (It doesn’t matter what they would order.)</i><br />
          <i>You may invite anyone to dinner. (It doesn’t matter who you are going to invite.)</i>
        </p>
      </li>
    </ol>
  </div>

  <h2  style="margin-left: -30px;
  overflow: hidden;
  padding: 5px;
  padding-left: 35px;
  padding-right: 0px;
  background-color: #ee8972;
  border:0px solid #afcde3;
  -webkit-border-radius: 30px;
  border-radius: 30px;">Activity
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

  <h3>A. Dialogue
  </h3>

  <table style = "border-collapse: collapse;">

    <tr v-for="dialog in dialogs">
      <td class = "uppertable" >{{dialog.name}}</td>
      <td class = "lowertable" >{{dialog.speech}}</td>
    </tr>

  </table>  

</div>

<h2  style="margin-left: -30px;
overflow: hidden;
padding: 5px;
padding-left: 35px;
padding-right: 0px;
background-color: #ee8972;
border:0px solid #afcde3;
-webkit-border-radius: 30px;
border-radius: 30px;">Practice
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">
  <h3>A. Choose which one of the two choices is correct to use.
  </h3>

  <ol style="margin: 12px;">
    <li>
      <u>Someone/Anyone</u> is sleeping on my bed.
    </li>
    <li>
      Is there <u>anything/something</u> to eat?
    </li>
    <li>
      Have you lost <u>something/anything?</u>
    </li>
    <li>
      I don’t know <u>anything/something</u> about it.
    </li>
    <li>
      I’ve got <u>something/anything</u> in my eye.
    </li>
    <li>
      Has <u>someone/anyone</u> seen my bag?
    </li>
    <li>
      She left the room without saying <u>anything/something.</u>
    </li>
    <li>
      Does <u>somebody/anybody</u> want a game of tennis?
    </li>
    <li>
      He saw <u>something/anything</u> in the garden.
    </li>
    <li>
      There’s <u>someone/anyone</u> knocking on the window.
    </li>
  </ol>

  <h3>B. Pattern Exercise. Use something, anyone, or anything in the blank space in each sentence. </h3>

  <ol style="margin: 12px;">
    <li>
      Listen! There is <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> at the front door now.
    </li>
    <li>
      I didn’t say <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> at all to him about our plans.
    </li>
    <li>
      Did you see <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> in the hall outside the office?
    </li>
    <li>
      Please give this envelope to <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> in Dean Brown’s office.
    </li>
    <li>
      Alice and Liza didn’t buy <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> at the store today.
    </li>
    <li>
      Did the mailman bring <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> for me this morning?
    </li>
    <li>
      There isn’t <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> there.
    </li>
    <li>
      Do you know <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> in the advanced class?
    </li>
    <li>
      Mother put <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> in the dining table this morning.
    </li>
    <li>
      <u>&emsp; &emsp; &emsp; &emsp; &emsp;</u> told Mr. Duncan the news a few minutes ago.
    </li>
  </ol>


</div>

<h2  style="margin-left: -30px;
overflow: hidden;
padding: 5px;
padding-left: 35px;
padding-right: 0px;
background-color: #ee8972;
border:0px solid #afcde3;
-webkit-border-radius: 30px;
border-radius: 30px;">Translation
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">

  <h3>A. Dialogue
  </h3>

  <table style = "border-collapse: collapse;">

    <tr v-for="translation in translations">
      <td class = "uppertable" >{{translation.name}}</td>
      <td class = "lowertable" >{{translation.speech}}</td>
    </tr>

  </table>
  

</div>

<h2  style="margin-left: -30px;
overflow: hidden;
padding: 5px;
padding-left: 35px;
padding-right: 0px;
background-color: #ee8972;
border:0px solid #afcde3;
-webkit-border-radius: 30px;
border-radius: 30px;">Answer Key
</h2>

<div style="padding-top : 16px; padding-bottom : 16px; padding-left : 10px; padding-right : 10px;">
  <h3>A. Choose which one of the two choices is correct to use.
  </h3>

  <ol style="margin: 12px;">
    <li>
      <u>Someone</u> is sleeping on my bed.
    </li>
    <li>
      Is there <u>anything</u> to eat?
    </li>
    <li>
      Have you lost <u>something</u>
    </li>
    <li>
      I don’t know <u>anything</u> about it.
    </li>
    <li>
      I’ve got <u>something</u> in my eye.
    </li>
    <li>
      Has <u>anyone</u> seen my bag?
    </li>
    <li>
      She left the room without saying <u>anything</u>
    </li>
    <li>
      Does <u>anybody</u> want a game of tennis?
    </li>
    <li>
      He saw <u>something</u> in the garden.
    </li>
    <li>
      There’s <u>someone</u> knocking on the window.
    </li>
  </ol>

  <h3>B. Pattern Exercise. Use something, anyone, or anything in the blank space in each sentence. </h3>

  <ol style="margin: 12px;">
    <li>
      Listen! There is <u>someone</u> at the front door now.
    </li>
    <li>
      I didn’t say <u>anything</u> at all to him about our plans.
    </li>
    <li>
      Did you see <u>something</u> in the hall outside the office?
    </li>
    <li>
      Please give this envelope to <u>someone</u> in Dean Brown’s office.
    </li>
    <li>
      Alice and Liza didn’t buy <u>anything</u> at the store today.
    </li>
    <li>
      Did the mailman bring <u>something</u> for me this morning?
    </li>
    <li>
      There isn’t <u>anything</u> there.
    </li>
    <li>
      Do you know <u>anyone</u> in the advanced class?
    </li>
    <li>
      Mother put <u>something</u> in the dining table this morning.
    </li>
    <li>
      <u>Someone</u> told Mr. Duncan the news a few minutes ago.
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
      dialogs:[
        {
          name:'A:',
          speech:'Do you know anyone who comes from Japan?'
        },
        {
          name:'B:',
          speech: 'Yes, I think there is someone who is Japanese in my English class.'
        },
        {
          name:'A:',
          speech:'Wow! That’s great. Could you ask him some questions for me?'
        },
        {
          name:'B:',
          speech:'That’s okay. What would you like me to ask him?'
        },
        {
          name:'A:',
          speech:'I don’t have any particular question in mind. Maybe you could just ask him some questions about life in Japan, as well as his experiences while living here in Korea. Is that okay?'
        },
        {
          name:'B:',
          speech:'I would be happy to do that for you.'
        },
      ],

      translations:[
      {
          name:'A:',
          speech:'일본 사람 누구든 아는 사람 있어?'
        },
        {
          name:'B:',
          speech: '응, 내 영어 수업 시간에 일본인이 있는 것 같아.'
        },
        {
          name:'A:',
          speech:'와우! 잘됐네. 그에게 질문 좀 해줄 수 있니?'
        },
        {
          name:'B:',
          speech: '괜찮아. 내가 그에게 무엇을 물어봤으면 좋겠니?'
        },
        {
          name:'A:',
          speech:'특별히 염두에 두고 있는 질문은 없어. 아마 그냥 일본에서의 삶, 그리고 한국에 살면서 겪은 경험에 대해 몇 가지 물어보면 될 것 같아. 괜찮니?'
        },
        {
          name:'B:',
          speech: '기꺼이 그렇게 해줄게.'
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

li{


}

body{

  font-size: 16px;
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
