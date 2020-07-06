<template>
  <div>
    <div class="section-row">
      <div class="add-comment" v-if="!displayReply">
        <div class="post_comment_title">Post Comment</div>
        <add-comment :post="postid" @on-add="handleAdd"></add-comment>
      </div>
      <div class="post-comments">
        <!-- comment -->
        <div
          :v-if="model.length > 0"
          class="media"
          v-for="(comment, index) in model"
          :key="comment.id"
        >
          <div class="media-left">
            <img class="media-object" src="@/assets/img/avatar.png" alt />
          </div>
          <div class="media-body">
            <div class="media-heading">
              <h4>{{comment.nguoitao}}</h4>
              <span class="time">{{comment.ngaytao}}</span>
              <!-- <a class="reply_button" >Reply</a> -->
              <button
                type="button"
                class="reply_button ml-auto"
                @click="reply(comment.id, comment.idbaiviet, index)"
              >Reply</button>
            </div>
            <p>{{comment.noidung}}</p>
            <!-- comment -->
            <div class="media" v-for="(sub, subindex) in comment['sub-comment']" :key="sub.id">
              <div class="media-left">
                <img class="media-object" src="@/assets/img/avatar.png" alt />
              </div>
              <div class="media-body">
                <div class="media-heading">
                  <h4>{{sub.nguoitao}}</h4>
                  <span class="time">{{sub.ngaytao}}</span>
                  <button
                    type="button"
                    class="reply_button ml-auto"
                    @click="subreply(index, sub.id, comment.id, comment.idbaiviet, subindex)"
                  >Reply</button>
                </div>
                <p>{{sub.noidung}}</p>
                <div class="add-comment" v-if="displayReply && subindex === isubIndex">
                  <add-comment :post="postid" :parent="comment.id" @on-add="handleAdd"></add-comment>
                </div>
              </div>
            </div>
            <div class="add-comment" v-if="displayReply && index === iIndex">
              <add-comment :post="postid" :parent="comment.id" @on-add="handleAdd"></add-comment>
            </div>
            <!-- /comment -->
          </div>
        </div>
        <!-- /comment -->
      </div>
    </div>
  </div>
</template>
<script>
import AddComment from "../comment/AddComment";
export default {
  name: "CommentPost",
  components: {
    AddComment
  },
  data: function(params) {
    return {
      displayReply: false,
      iIndex: "",
      isubIndex: "",
      dataComment: {}
    };
  },
  props: ["model", "postid"],
  methods: {
    reply(id, idbaiviet, index) {
      this.model.forEach((element, tem) => {
        if (tem === index) {
          this.iIndex = tem;
          this.displayReply = true;
          this.parentid = element.id;
        }
      });
    },

    subreply(index, subid, id, idbaiviet, subindex) {
      let subdata = this.model[index];
      subdata["sub-comment"].forEach((element1, tem1) => {
        if (tem1 === subindex) {
          this.isubIndex = tem1;
          this.displayReply = true;
          this.parentid = id;
        }
      });
    },

    handleAdd(commentList) {
      this.model = commentList;
      this.displayReply = false;
    }
  }
};
</script>
<style scoped>
a:hover {
  cursor: pointer;
  color: blue;
}
.reply_button {
  width: 76px;
  height: 28px;
  background: rgba(45, 223, 128, 0.1);
  color: rgba(45, 223, 128, 1);
  border: none;
  outline: none;
  border-radius: 18px;
  cursor: pointer;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
  font-size: 12px;
}
.post_comment_title {
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
}
</style>