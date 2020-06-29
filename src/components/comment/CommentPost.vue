<template>
  <div>
    <div class="section-row">
      <div class="section-title">
        <h2>3 Comments</h2>
      </div>

      <div class="post-comments">
        <!-- comment -->
        <div class="media" v-for="comment in data" :key="comment.id">
          <div class="media-left">
            <img class="media-object" src="@/assets/img/avatar.png" alt />
          </div>
          <div class="media-body">
            <div class="media-heading">
              <h4>{{comment.nguoitao}}</h4>
              <span class="time">{{comment.ngaytao}}</span>
              <a href="#" class="reply" @click="reply(comment.id, comment.idbaiviet)">Reply</a>
            </div>
            <p>{{comment.noidung}}</p>
            <div class="add-comment" v-if="displayReply">
              <add-comment></add-comment>
            </div>

            <!-- comment -->
            <div class="media" v-if="comment.sub-comment.length > 0">
              <div class="media-left">
                <img class="media-object" src="@/assets/img/avatar.png" alt />
              </div>
              <div class="media-body">
                <div class="media-heading">
                  <h4>John Doe</h4>
                  <span class="time">March 27, 2018 at 8:00 am</span>
                  <a href="#" class="reply">Reply</a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
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
  data: function (params) {
    return {
      displayReply: false
    }
  },
  props: ["data"],
  methods: {
    reply(id, idbaiviet) {
      this.displayReply = true
    }
  }
};
</script>