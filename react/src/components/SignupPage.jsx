import React from "react";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center m-0 min-h-50">
      <h2 className="text-2xl font-bold">Signup</h2>
      <form>
        <div>
          <label htmlFor="username">Name:</label>
          <input type="text" placeholder="Enter name" className="w-full" />
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
