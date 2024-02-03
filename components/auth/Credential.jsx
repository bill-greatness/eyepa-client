import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../functions/fb";
import { PROXY, sendDoc } from "../../functions/call";
import axios from "axios";
import { useRouter } from "next/router";
import { useAuthContext } from "../../context/Authentication";

export default function Credential({ next }) {
  const { setAuth } = useAuthContext();

  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const withGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user.providerData;
        const { displayName, email, photoURL, uid } = user[0];

        // store user data somewhere in the user collection.
        // find if user exist with email and set login auth to true.
        try {
          const { data } = await axios.get(`${PROXY}/user/find-user/${uid}`);
          if (data) {
            // user already exists... just save the important info to localStorage and go to feeds.
            localStorage.setItem("userID", data?._id);
            setAuth((prev) => ({
              isAuthenticated: true,
              userInfo: { ...user[0] },
            }));
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("userInfo", JSON.stringify({ ...user[0], userID: data?._id }));
            localStorage.setItem("mailID", email);
            router.push("/feeds");
          } else {
            // save new user data...
            sendDoc({
              path: "/user/",
              data: {
                name: displayName,
                photo: photoURL,
                email,
                firebaseID: uid,
              },
              feedback: () => {},
            }).then(() => {
              localStorage.setItem("userID", data?.uid);
              localStorage.setItem("isAuthenticated", true);
              localStorage.setItem("mailID", email);
              localStorage.setItem("userInfo", JSON.stringify({ ...user[0] }));
              setAuth((prev) => ({
                isAuthenticated: true,
                userInfo: { ...user[0] },
              }));
              router.push("/feeds");
            });
          }
        } catch (err) {
          console.log("Hell occured");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex  flex-col px-5 pt-10 md:w-1/4 space-y-4 text-sm md:p-5">
      <h3 className="text-2xl text-gray-600 font-medium leading-relaxed">
        What's your email ?
      </h3>

      <div className="w-full bg-gray-100 p-4 flex rounded-lg">
        <input
          className="bg-transparent flex-1"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email"
        />
      </div>

      <button
        disabled={!email}
        onClick={next}
        className="bg-black text-white font-medium p-4 rounded-lg"
      >
        Continue
      </button>

      <div className="flex items-center space-x-3">
        <div className="border-b flex-1"></div>
        <p className="text-gray-400">or</p>
        <div className="border-b flex-1"></div>
      </div>
      <div className="flex flex-col space-y-3 text-sm">
        <button
          onClick={withGoogle}
          className="flex items-center space-x-2 justify-center bg-gray-100 p-3 rounded-md"
        >
          <img className="w-8 h-8" src="/assets/google.jpg" />
          <p className="text-gray-700 font-medium">Continue with Google</p>
        </button>

        <button className="flex items-center space-x-2 justify-center bg-gray-100 p-3 rounded-md">
          <img className="w-12 h-8 " src="/assets/apple.jpg" />
          <p className="text-gray-700 font-medium">Continue with Apple</p>
        </button>
      </div>

      <p className="text-gray-500 text-xs leading-relaxed text-center">
        By proceeding, you consent to get calls, SMS or Email messages,
        including by automated means, from Eyepa Delivery and its affiliates to
        the number provided.
      </p>
    </div>
  );
}
