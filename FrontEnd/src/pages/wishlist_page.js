import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import CardWishlist from "../components/cardwishlist";

function WishlistPage() {
  const [wishlists, setWishlists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ambil userId dari localStorage
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Silakan login terlebih dahulu!");
      return;
    }

    // Ambil data wishlist dari server
    const fetchWishlist = async () => {
      try {
        const response = await fetch(`http://localhost:3001/wishlist/${userId}`);
        const data = await response.json();

        if (!response.ok) {
          window.alert("Gagal mengambil data wishlist");
        }

        setWishlists(data); // Set data wishlist
      } catch (error) {
        alert("Error: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []); // Efek berjalan hanya sekali ketika komponen pertama kali dimuat

  return (
    <div className="bckground-wishlist">
      <NavBar />
      {loading ? (
        <div className="text-white text-center mt-4">
          <h3>Loading...</h3>
        </div>
      ) : (
        <CardWishlist wishlists={wishlists} />
      )}
    </div>
  );
}

export default WishlistPage;
