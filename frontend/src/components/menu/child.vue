<template>
  <div class="child">
    <!-- Simplest - call `$emit()` inline-->
    <button type="button" name="button" v-on:click="$emit('increment')">Click me to increment!</button>

    <!-- set a variable then trigger a method which calls `$emit()` -->
    <label for="child-input">Child input: </label>
    <input id="child-input" type="text" name="msg" v-model="childMessage" v-on:keyup="emitToParent">
  </div>
</template>
<script>
export default {
  data() {
    return {
      childMessage: ''
    }
  },
  name: 'Child',
  methods: {
    // Define the method that emits data to the parent as the first parameter to `$emit()`.
    // This is referenced in the <template> call in the parent. The second parameter is the payload.
    emitToParent (event) {
      this.$emit('childToParent', this.childMessage)
    }
  }
}
</script>