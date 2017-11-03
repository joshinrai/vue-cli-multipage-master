<template>
	<div class="test">
	    <h1>{{ msg }}</h1>
	</div>
</template>
<script>
export default {
  name: 'test',
  mounted () {
    console.log('this is test ...')
  },
  data () {
    return {
      msg: 'this is test'
    }
  }
}
</script>
<style scoped>

</style>