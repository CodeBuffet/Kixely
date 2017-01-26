<template>
  <div class="topbar">
    <ul>
      <li @click="addService">Add Service</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    addService: () => {
      addService('whatsapp')
    }
  }
}
</script>

<style scoped lang="stylus">
.topbar
  ul
    li
      cursor: pointer
</style>
