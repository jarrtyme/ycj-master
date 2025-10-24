import Vue from "vue";

Vue.mixin({
  // data,
  // methods,
  // ....
  methods: {
    createTip(res, url, state = 201, callback) {
      if (res.meta.state == state) {
        this.$notify({
          title: "操作成功",
          message: "",
          type: "success",
        });
        if (callback) {
          callback();
        } else {
          // this.jump("/users");
          this.jump(url);
        }
      } else {
        this.$notify({
          title: res.meta.msg,
          message: "",
          type: "error",
        });
      }
    },
    //跳转混入 方法 全局混入
    jumpFn(url) {
      if (url === this.$route.path) return;
      this.$router.push(url);
    },

    deleteFn(row, success, error) {
      // console.log("公共的删除methods，当前行数据：", row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // console.log("delete sure");

          if (success) success(row);
        })
        .catch(() => {
          // console.log("delete cancel");

          if (error) error();
        });
    },
    // 通知
    confirmFn(successFn, cancelFn) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // this.$message.error("等待异步请求");
          successFn();
        })
        .catch(() => {
          if (cancelFn) {
            cancelFn();
          } else {
            this.$message.info("已取消删除");
          }
        });
    },
  },
  // ...
});
