<script>
	import { redirect } from "@sveltejs/kit";
</script>

<div class="section is-flex is-flex-direction-column is-align-items-center is-justify-content-center has-text-centered" style="height: 100vh;">
  <!-- Logo -->
  <figure class="image is-128x128">
      <!-- <img src="/path/to/logo.png" alt="Game Logo"> -->
  </figure>

  <!-- Title and Description -->
  <h1 class="title mt-4">Unnamed Arena Game (UAG)</h1>
  <p class="subtitle mt-2">
    A strategic turn-based auto-battler where you forge your hero's destiny with powerful weapons, spells, and gear. Outsmart your opponents, dominate the battlefield, and rise to glory!
  </p>

  <!-- Buttons -->
  <div class="buttons mt-5">
      <a class="button is-primary is-medium" href="/signin">Sign In</a>
      <a class="button is-link is-medium" href="/signup">Sign Up</a>
  </div>
</div>
