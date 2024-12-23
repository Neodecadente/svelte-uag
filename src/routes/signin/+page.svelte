<script lang="ts">
  let email = $state('');
  let password = $state('');

  function handleSubmit(e: Event) {
    e.preventDefault();
    // Handle signin logic here
  }
</script>

<div class="columns is-gapless is-vcentered" style="height: 100vh;">
    <div class="column is-half" style="background: url('https://via.placeholder.com/800x600'); background-size: cover;"></div>
    <div class="column is-half">
      <h1 class="title has-text-centered">Sign In</h1>
      <section class="section">
        <form>
          <div class="field">
            <label class="label" for="user_email">Email</label>
            <div class="control">
              <input id="user_email" class="input" type="email" placeholder="Enter your email" value={email} />
            </div>
          </div>
          <div class="field">
            <label class="label" for="user_password">Password</label>
            <div class="control">
              <input id="user_password" class="input" type="password" placeholder="Enter your password" value={password} />
            </div>
          </div>
          <div class="field">
            <button class="button is-text">Forgot your password?</button>
          </div>
          <div class="field">
            <button class="button is-link">Sign In</button>
          </div>
        </form>
        <div class="mt-5">
          <p class="is-flex is-align-items-center">
            You don't have an account? 
            <a class="button is-text" href="/signup">Try signing up instead</a>
          </p>
        </div>
      </section>
    </div>
  </div>