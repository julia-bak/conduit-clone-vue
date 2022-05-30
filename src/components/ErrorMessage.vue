<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'AppErrorMessage',
  props: {
    message: {
      type: String,
      required: true,
      default: 'Something bad happend'
    }
  }
}
</script>

