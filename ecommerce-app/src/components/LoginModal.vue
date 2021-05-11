<template>
  <div class="loginmodal">
    <div
      class="hidden modal fade"
      id="loginmodal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-body">
              <div class="col-md-12">
                <div class="card">
                  <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                      <div v-if="error" class="alert alert-danger">
                        {{ error }}
                      </div>
                      <form action="#" @submit.prevent="submit">
                        <div class="form-group row">
                          <label
                            for="email"
                            class="col-md-4 col-form-label text-md-right"
                            >Email</label
                          >

                          <div class="col-md-8">
                            <input
                              id="email"
                              type="email"
                              class="form-control"
                              name="email"
                              value
                              required
                              autofocus
                              v-model="form.email"
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            for="password"
                            class="col-md-4 col-form-label text-md-right"
                            >Password</label
                          >
                          <div class="col-md-8">
                            <input
                              id="password"
                              type="password"
                              class="form-control"
                              name="password"
                              v-model="form.password"
                            />
                          </div>
                        </div>

                        <div class="form-group row mb-0">
                          <div class="col-md-8 offset-md-4">
                            <button type="submit" class="btn btn-primary">
                              Login
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
     
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
           this.$router.replace({ name: "Shop" });
        })
        .catch((err) => {
          this.error = err.message;
        });
      $("body").removeClass("modal-open");
      $(".modal-backdrop").remove();
     
    },

    onScore({ score, strength }) {
      this.score = score;
    },
  },
};
</script>
<style>

</style>

