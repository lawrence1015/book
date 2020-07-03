
<template>
  <div>


  <div style="margin-top: 100px;">



  <tr v-for="dialog in dialogs">
    <td class = "uppertable" >{{dialog.name}}</td>
    <td class = "lowertable" >{{dialog.speech}}</td>
  </tr>

  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      dialogs:[
        {
        name:'Hanna:',
        speech:'Martin, are you free for five minutes? Can we talk about your trip to Mexico?'
      },
      {
      name:'Martin:',
      speech:'Yeah, sure.'
    }
    ]



    }

  }

}
</script>

<style lang="css" scoped>
</style>
