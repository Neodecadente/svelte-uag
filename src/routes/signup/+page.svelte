<script lang="ts">

</script>

  <div class="columns is-gapless is-vcentered" style="height: 100vh;">
    <div class="column is-half" style="background: url('https://via.placeholder.com/800x600'); background-size: cover;"></div>
    <div class="column is-half">
      <h1 class="title has-text-centered">Sign Up</h1>
      <section class="section">
        <form method="POST">
            <div class="field">
              <label class="label" for="email">Email</label>
              <div class="control">
                <input name="email" class="input" type="email" placeholder="Enter your email"/>
              </div>
            </div>
            <div class="field">
              <label class="label" for="username">Username</label>
              <div class="control">
                <input name="username" class="input" type="text" placeholder="Enter your username"/>
              </div>
            </div>
            <div class="field">
              <label class="label" for="password">Password</label>
              <div class="control">
                <input name="password" class="input" type="password" placeholder="Enter your password"/>
              </div>
            </div>
            <div class="field">
              <button class="button is-link">Sign Up</button>
            </div>
          </form>
          <div class="mt-5">
            <p class="is-flex is-align-items-center">
              Already have an account? 
              <a class="button is-text" href="/signin">Try signing in instead</a>
            </p>
          </div>
      </section>
    </div>
  </div>