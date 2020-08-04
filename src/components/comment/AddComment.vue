<template>
  <div class="section-row">
    <div class="post-reply post_comment_form_container">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <input
              class="input-custom"
              type="text"
              name="name"
              v-model="commentModel.name"
              placeholder="Your Name"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <input
              class="input-custom"
              type="email"
              name="email"
              v-model="commentModel.email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <textarea
              class="comment_text"
              name="message"
              v-model="commentModel.content"
              placeholder="Your Comment"
            ></textarea>
          </div>

          <button type="submit" class="comment_button" @click="addComment(post, parent)">Post Comment</button>
          <!-- <b-button class="btn" style="float: right;" @click="addComment(post, parent)">Submit</b-button> -->
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
        this.commentArr = res.data.comments;
        this.commentModel = {};
        debugger;
        this.$emit("on-add", this.commentArr);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.input-custom {
  display: inline-block;
  width: 100%;
  height: 42px;
  border: none;
  outline: none;
  border-bottom: solid 1px #cccccc;
  background: transparent;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
  font-size: 14px;
}
.post_comment_form_container {
  width: 100%;
  border: 1px solid #f7f7f7;
  border-radius: 6px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
  padding-bottom: 40px;
  margin-top: 44px;
}
.comment_text {
  font-size: 14px;
  width: 100%;
  height: 90px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: solid 1px #cccccc;
  padding-top: 11px;
  margin-top: 23px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.comment_button {
    width: 143px;
    height: 36px;
    background-color: rgba(45,223,128,1);
    color: #ffffff;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 18px;
    cursor: pointer;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
    margin-top: 24px;
    float: right;

    &:hover {
      background-color: #08D419;
      color: #ffffff;
    }
}
textarea {
    overflow: auto;
    resize: vertical;
}
</style>