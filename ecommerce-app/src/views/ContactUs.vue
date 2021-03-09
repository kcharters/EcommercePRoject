<template>
  <div class="contactus">
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Contact Us</div>
        <div class="card-body">
          <form>
               <div class="form-group row">
                   <div class="col-md-6" >
            <label for="firstname">First Name</label>
            <input style="margin:5px"
              type="text"
              id="fistname"
              name="firstname"
              placeholder="Your first name.."
            />
                   </div>
               </div>

                <div class="form-group row">

            <label for="lastname">Last Name</label>
            <input
            style="margin:5px"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Your last name.."
            />
            </div>
             <div class="form-group row">
            <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Your message"
              style="height:200px"
            ></textarea>
             </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
