<template>
    <div>
        <div class="login-01">
            <form>
                <ul>
                    <li class="first">
                        <a href="#" class=" icon user"></a><input type="text" class="text" value="Name" v-model="messages.name">
                        <div class="clear"></div>
                    </li>
                    <li class="first">
                        <a href="#" class=" icon email"></a><input type="text" class="text" value="Email" v-model="messages.email" >
                        <div class="clear"></div>
                    </li>
                    <li class="first">
                        <a href="#" class=" icon phone"></a><input type="text" class="text" value="Phone" v-model="messages.phone">
                        <div class="clear"></div>
                    </li>
                    <li class="second">
                        <a href="#" class=" icon msg"></a><textarea value="Message" v-model="messages.msg">Comments</textarea>
                        <div class="clear"></div>
                    </li>
                </ul>
                <input type="submit" @click.prevent="SubmitMessage()" value="Submit" >
                <div class="clear"></div>
            </form>
        </div>

        <div class="comment" v-for="msg in SetMessage" :key="msg.index">
            <div class="comment-wrap">
                <div class="photo">
                    <div class="avatar" style="background-image: url('../../static/coolgirl.jpg')"></div>
                </div>
                <div class="comment-block">
                    <p class="comment-text">{{msg.msg}}</p>
                    <div class="bottom-comment">
                        <div class="comment-date">
                            <p>name:{{msg.name}}</p>
                            <p>email:{{msg.email}}</p>
                            <p>phone:{{msg.phone}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "BoardMain",
    data(){
      return{
        messages:[],
        SetMessage:[]
      }
    },
    methods:{
      SubmitMessage(){
        this.SetMessage.push(this.messages);
        console.log(this.SetMessage);
      }
    }
  }
</script>

<style scoped>
    .comment{
        width:80%;
        margin:auto;
        padding-top:50px;
    }
    html,
    body {
        background-color: #f0f2fa;
        font-family: "PT Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
        color: #555f77;
        -webkit-font-smoothing: antialiased;
    }
    .comment-date{
        float:left;
    }
    .comment input,
    .comment textarea {
        outline: none;
        border: none;
        display: block;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        font-family: "PT Sans", "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
        font-size: 1rem;
        color: #555f77;
    }
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        color: #ced2db;
    }
    input::-moz-placeholder,
    textarea::-moz-placeholder {
        color: #ced2db;
    }
    input:-moz-placeholder,
    textarea:-moz-placeholder {
        color: #ced2db;
    }
    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
        color: #ced2db;
    }
    p {
        line-height: 1.3125rem;
    }
    .comments {
        margin: 2.5rem auto 0;
        max-width: 60.75rem;
        padding: 0 1.25rem;
    }
    .comment-wrap {
        margin-bottom: 1.25rem;
        display: table;
        width: 100%;
        min-height: 5.3125rem;
    }
    .photo {
        padding-top: 0.625rem;
        display: table-cell;
        width: 3.5rem;
    }
    .photo .avatar {
        height: 2.25rem;
        width: 2.25rem;
        border-radius: 50%;
        background-size: contain;
    }
    .comment-block {
        padding: 1rem;
        background-color: #fff;
        display: table-cell;
        vertical-align: top;
        border-radius: 0.1875rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    }
    .comment-block textarea {
        width: 100%;
        max-width: 100%;
    }
    .comment-text {
        margin-bottom: 1.25rem;
    }
    .bottom-comment {
        color: #acb4c2;
        font-size: 0.875rem;
    }
    .comment-actions li {
        display: inline;
    }
    .comment-actions li.complain {
        padding-right: 0.625rem;
        border-right: 1px solid #e1e5eb;
    }
    .comment-actions li.reply {
        padding-left: 0.625rem;
    }
</style>