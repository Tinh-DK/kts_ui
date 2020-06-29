<template>
  <div class="section-row">
    <div class="section-title">
      <h2>Bình Luận</h2>
    </div>
    <div class="post-reply">
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <span>Name *</span>
            <input class="input" type="text" name="name" v-model="commentModel.name" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <span>Email *</span>
            <input class="input" type="email" name="email" v-model="commentModel.email" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <span>Website</span>
            <input class="input" type="text" name="website" v-model="commentModel.website" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <textarea class="input" name="message" v-model="commentModel.content"></textarea>
          </div>
          <button class="primary-button" @click="addComment(content.id, null)">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "AddComment",
    data: function (params) {
        return {
            commentModel: {}
        }
    }
}
</script>