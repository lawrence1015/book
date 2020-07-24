<template>

  <div :style = "{fontSize: fontSize + 'px'}">

    <v-container fluid ma-0 pa-0>

      <v-layout column>
        <v-img
        src="https://image.freepik.com/free-photo/dog-german-shepherd-lying-grass-park_8353-6406.jpg">

        <v-layout
        align-end
        fill-height
        pa-0
        white--text
        >
        <h1 style="background-color: rgb(59, 105, 120, 0.7);
        width: 100%;
        padding-top : 10px;
        padding-left : 10px;
        padding-bottom: 10px;">Whose dog is this?
      </h1>
    </v-layout>
  </v-img>

  <hr style="border: 3px solid rgba(32, 64, 81, 1);" width="100%">
  <h3 style="padding-top : 10px;  padding-left : 15px; padding-bottom: 10px;">Dialogue <br /> ( 선생님의 안내에 따라 문장을 읽어 주세요 )</h3>
  <hr width="60%">
  <div style = "padding : 16px;">

      <li style="list-style-type: none;">Whose dog is this?</li><br />

      <table style = "border-collapse: collapse;">
    
        <tr v-for="dialog in dialogs" :key="dialog">
          <td class = "uppertable" >{{dialog.name}}</td>
          <td class = "lowertable" >{{dialog.speech}}</td>
        </tr>
  
      </table>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Exercise</h3>
        <div style="padding : 16px;">

        <p>
          <u>Fill the blanks</u><br />
          ( 빈칸을 채워라)
        </p>

        <v-container grid-list-md text-xs-center>
          <v-layout wrap align-content-center>
          
          <v-flex xs12 md8 >
          <v-card hover>
          
          <v-img src="images/dialogue-unit20.png" />
          
          </v-card>
          </v-flex>
          
          </v-layout>
          </v-container>

      </div>

      <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
      </div>
      <h3 class = "border white--text" style="padding-top: 7px;
                                              margin-left: -18px;
                                              margin-right: -18px;
                                              padding-left: 10px;
                                              padding-bottom: 10px;
                                              padding-top: 10px;
                                              margin-top: 0px;
                                              background-color: #204051;">Translation</h3>
      <div style="padding : 16px;">

        <table style = "border-collapse: collapse;">

          <tr v-for="translation in translations" :key="translation">
            <td class = "uppertable" >{{translation.name}}</td>
            <td class = "lowertable" >{{translation.speech}}</td>
          </tr>
  
        </table>

</div>
        <div style="margin-left: -18px; margin-right: -18px; margin-top: 10px; border-color: #204051; border-style: solid; border-width: 2px;">
        </div>
        <h3 class = "border white--text" style="padding-top: 7px;
                                                margin-left: -18px;
                                                margin-right: -18px;
                                                padding-left: 10px;
                                                padding-bottom: 10px;
                                                padding-top: 10px;
                                                margin-top: 0px;
                                                background-color: #204051;">Self Study</h3>
        <div style="padding : 16px;">

          <p>

            <v-container grid-list-md text-xs-left>
              <v-layout row wrap>


                <v-flex xs12>
                  <v-card light color="#cae8d5">
                    <v-card-text class="px-10">
                    <li>
                      Notes
                    </li>
                    <ol style="margin: 12px;">
                    <li>
                      인칭대명사의 소유대명사: ~의 것 이라고 해석이 되며 소유를 나타내는 대명사입니다. 뒤에 명사가 오지 않습니다. <br />
                        I – mine / you – yours / he – his / she – hers / we – ours / they - theirs<br />
                        It is my house. (my-소유격, 그것은 나의 집입니다)<br />
                        The house is mine. (mine=소유대명사, 그 집은 나의 것입니다)<br />
                    </li>
                    </ol>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>

          </p>

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
          name:'A:',
          speech:'Hey, Jeff. Whose dog is this?'
        },
        {
          name:'B:',
          speech:'I don’t know. Why don’t you ask him?'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'Is this dog yours?'
        },
        {
          name:'C:',
          speech:'No, it isn’t mine. I think it’s theirs.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'Excuse me, is this dog yours?'
        },
        {
          name:'D:',
          speech:'I’m sorry. That dog isn’t ours. Maybe it’s hers.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'Is this dog yours, ma’am?'
        },
        {
          name:'E:',
          speech:'No, I don’t have a dog. But he likes dogs. It’s probably his.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'Excuse me, sir. Is this dog yours?'
        },
        {
          name:'F:',
          speech:'Yes, that’s my dog. Come here, Rex!'
        },
        ],

        translations:[
        {
          name:'A:',
          speech:'이봐, Jeff. 이것은 누구의 개니?'
        },
        {
          name:'B:',
          speech:'모르겠어. 그에게 물어보는게 어때?'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'이 개 당신의 것입니까?'
        },
        {
          name:'C:',
          speech:'아니오, 제 것이 아닙니다. 그들의 개인 것 같습니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'실례합니다. 이 개는 당신들의 것입니까?'
        },
        {
          name:'D:',
          speech:'죄송합니다. 그 개는 저희 것이 아닙니다. 아마 그것은 그녀의 것인 것 같습니다.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'이 개는 당신의 것입니까? ma’am?'
        },
        {
          name:'E:',
          speech:'아니오, 저는 개가 없어요. 하지만 그는 개를 좋아하니까 아마 그의 개 일거에요.'
        },
        {
          name:' ',
          speech:' '
        },
        {
          name:'A:',
          speech:'실례합니다. 이 개는 당신의 것입니까?'
        },
        {
          name:'F:',
          speech:'네, 제 개입니다. 이리와, Rex!'
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

.border:before {
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 40px 40px 0px 0px;
  transform: rotate(180deg);
  border-color: transparent #204051 transparent transparent;
  position: absolute;
  top: 0px;
  margin-left: 190px;
}
.border {
  position: relative;
  left: 0px;
  width: 200px;
  height: 40px;
  background: #204051;
  padding-left: 10px;

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
