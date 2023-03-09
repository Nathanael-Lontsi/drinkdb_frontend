import React from 'react';

export default function RegisterPage() {
  return (
    <form>
      <h1>Create your account here !</h1>
      <input type="text" placeholder="First Name" name="firstName" />
      <input type="text" placeholder="Last Name" name="lastName" />
      <input type="text" placeholder="Email Address" name="emailAddress" />
      <input type="number" placeholder="Phone Number" name="phoneNumber" />
      <input type="text" placeholder="Password" name="password" />
      <input type="text" placeholder="Confirm Password" name="password" />
      <button type="submit">Create Account</button>
    </form>
  );
}
