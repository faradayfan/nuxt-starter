<template>
  <div>
    {{ serverStatus }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    serverStatus: state => state.serverStatus
  }),
  fetch({ store: { dispatch } }) {
    return dispatch('getStatus')
  }
}
</script>

<style></style>
