<template>
  <article>
    <div class="user-description">
      <strong>
        <slot name="name"/>
      </strong>
      <p class="time">
        <slot name="time"/>
      </p>
      <p class="karma">
        <slot name="karma"/>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    userInfo: Object
  }
}
</script>

<style scoped>
.user-description {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
}
p {
  margin: 0;
}
</style>
