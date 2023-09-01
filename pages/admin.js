import React, { useState, useEffect } from "react";
import Head from "next/head";

import { useRouter } from "next/router";

import { supabase } from "@/src/utils/supabaseClient";

import AdminReviewList from "@/src/components/AdminReviewList";
import Navbar from "@/src/components/navbar";

const AdminSection = () => {
  const router = useRouter();

  const [authorized, setAuthorized] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authorizedEmail, setAuthorizedEmail] = useState("");
  const [authorizedPassword, setAuthorizedPassword] = useState("");
  const [showCustomToast, setShowCustomToast] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (email === authorizedEmail && password === authorizedPassword) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
      setShowCustomToast(true);
      setTimeout(() => {
        setShowCustomToast(false);
      }, 4000);
    }
  };
  useEffect(() => {
    const fetchAuthorizedCredentials = async () => {
      try {
        const { data, error } = await supabase
          .from("authorization_values")
          .select("email, password")
          .limit(1);

        if (error) {
          console.error(
            "Error fetching authorized credentials:",
            error.message
          );
          return;
        }

        if (data.length === 1) {
          setAuthorizedEmail(data[0].email);
          setAuthorizedPassword(data[0].password);
        } else {
          console.error("No authorized credentials found.");
        }
      } catch (error) {
        console.error("Error fetching authorized credentials:", error.message);
      }
    };

    fetchAuthorizedCredentials();
  }, []);
  return (
    <div>
      <Head>
        <title>Admin Section</title>
        <meta name="robots" content="noindex"/>
      </Head>
      {authorized ? (
        <AdminReviewList />
      ) : (
        <>
          <Navbar />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10rem",
            }}
          >
            <h3
              className="p-color"
              style={{
                marginBottom: "5rem",
                fontWeight: "100",
                fontSize: "1.9rem",
                textAlign: "center",
              }}
            >
              Authorization Required
            </h3>
            <form onSubmit={handleFormSubmit}>
              <input
                style={{
                  width: "15rem",
                }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
              <input
                style={{
                  width: "15rem",
                }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <button className="primary-btn-red" type="submit">
                Authorize
              </button>
            </form>
            {showCustomToast && (
              <div
                style={{
                  position: "fixed",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "red",
                  color: "#ffffff",
                  padding: "1rem",
                  borderRadius: "5px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                  zIndex: 1000,
                }}
              >
                Authorization failed.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminSection;
