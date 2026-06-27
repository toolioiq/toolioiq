"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(result);
    setCopied(false);
  };

  const copyPassword = async () => {
    if (!password) return;

    await navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <div className="border rounded-2xl p-6 space-y-4">
      <div>
        <label className="block font-medium mb-2">
          Password Length
        </label>

        <input
          type="number"
          min="4"
          max="64"
          value={length}
          onChange={(e) =>
            setLength(Number(e.target.value))
          }
          className="border rounded-lg p-3 w-full"
        />
      </div>

      <button
        onClick={generatePassword}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Generate Password
      </button>

      {password && (
        <div className="bg-gray-50 border rounded-xl p-6 space-y-2 text-gray-900">
          <h2 className="font-bold mb-2">
            Generated Password
          </h2>

          <div className="break-all font-mono">
            {password}
          </div>

          <button
            onClick={copyPassword}
            className="mt-4 border px-4 py-2 rounded"
          >
            {copied ? "Copied!" : "Copy Password"}
          </button>
        </div>
      )}
    </div>
  );
}