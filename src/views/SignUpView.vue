<template>
  <button>
    <span>
      <svg></svg>
    </span>
  </button>
  <div>
    <label>Username</label>
    <input id="username" placeholder="username" />
    <span>{{ errorMessage }}</span>
  </div>
  <div>
    <label>Password</label>
    <input id="password" placeholder="password" />
    <span>{{ errorMessage }}</span>
  </div>
  <div>
    <label></label>
  </div>
  <button>Sign Up</button>
</template>
