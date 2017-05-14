<template>
  <div>
    <form>
      <div class="form-group">
        <label for="user-name">お名前</label>
        <input type="text" name="user[name]" id="user-name"
          class="form-control" style="width: 300px"
          v-model="user.name">
      </div>
      <div class="form-group">
        <label for="user-language">もっとも得意なプログラミング言語</label>
        <div>
          <label>
            <input type="radio" name="user[language]"
              v-model="user.language" value="ruby"> Ruby
          </label>
          <label>
            <input type="radio" name="user[language]"
              v-model="user.language" value="php"> PHP
          </label>
          <label>
            <input type="radio" name="user[language]"
              v-model="user.language" value="other"> その他
          </label>
        </div>
      </div>
      <div class="form-group" v-show="user.language === 'other'" v-cloak>
        <label for="user-other-language">（具体的に）</label>
        <input type="text" name="user[other_language]" id="user-other-language"
          style="display: inline; width: auto"
          class="form-control" v-model="user.other_language">
      </div>
      <button type="submit" class="btn btn-primary">送信</button>
    </form>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      user: {
        name: "",
        language: undefined,
        other_language: ""
      }
    }
  }
}
</script>

<style lans="scss" scoped>
  form {
    input.form-control {
      border: solid 1px gray;
    }
  }
</style>
