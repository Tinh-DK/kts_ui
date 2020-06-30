<template>
  <div class="section-row">
    <div class="post-reply">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <span>Name *</span>
            <input class="input" type="text" name="name" v-model="commentModel.name" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <span>Email *</span>
            <input class="input" type="email" name="email" v-model="commentModel.email" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <textarea class="input" name="message" v-model="commentModel.content"></textarea>
          </div>
          <b-button class="btn"  style="float: right;" @click="addComment(post, parent)">Submit</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { HTTP } from "@/api/https";
export default {
  name: "AddComment",
  props: ["post", "parent"],
  data: function(params) {
    return {
      commentModel: {}
    };
  },
  methods: {
    addComment(post, parent) {
      this.commentModel["post-id"] = post;
      this.commentModel["parent-id"] = parent;
      HTTP.post("post/add-comment", this.commentModel).then(res => {
        this.commentArr = res.data.comments
        this.commentModel = {}
        debugger
        this.$emit('on-add', this.commentArr)
      });
    }
  }
};
</script>