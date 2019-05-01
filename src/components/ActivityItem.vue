<template>
  <article class="post">
    <h4>{{ activity.title }}</h4>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user2.png">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Patty Arquette</a> updated {{ activity.updatedAt }} minutes ago &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <span>Progress: </span>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      activity: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>