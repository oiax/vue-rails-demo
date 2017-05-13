<template>
  <div>
    <div class="box red" @click="color = 'red'"
      :class="{ selected: color === 'red' }">赤</div>
    <div class="box blue" @click="color = 'blue'"
      :class="{ selected: color === 'blue' }">青</div>
    <div class="box green" @click="color = 'green'"
      :class="{ selected: color === 'green' }">緑</div>
    <div>color = "{{color}}"</div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      color: ""
    }
  }
}
</script>

<style scoped>
  .box {
    display: inline-block;
    padding: 1rem;
    color: white;
    cursor: pointer;
    border: 3px solid white;
  }
  .red { background-color: #c00 }
  .blue { background-color: #00f }
  .green { background-color: #080 }
  .selected { border-color: black }
</style>
