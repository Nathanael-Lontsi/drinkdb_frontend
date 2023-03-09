import React from 'react';

export default function LoginPage() {
  return (
    <form>
      <h1>Login to your account here please!</h1>
      <input type="text" placeholder="email" name="email" />
      <input type="text" placeholder="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
