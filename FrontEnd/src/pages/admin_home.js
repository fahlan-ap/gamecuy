import React, { useState, useEffect } from "react";
import AdminNav from "../components/admin_nav";
import AdminCard from "../components/admin_card";

const AdminHome = () => {
    const [games, setGames] = useState([]);  // Semua game
    const [searchResults, setSearchResults] = useState([]);  // Hasil pencarian

    // Ambil data game dari backend
    useEffect(() => {
        fetch("http://localhost:3001/games")  // Sesuaikan dengan backend
            .then(response => response.json())
            .then(data => {
                setGames(data);
                setSearchResults(data);  // Default tampilkan semua game
            })
            .catch(error => console.error("Error fetching games:", error));
    }, []);

    // Fungsi untuk menangani pencarian game
    const handleSearch = (query) => {
        if (query === "") {
            setSearchResults(games); // Jika kosong, tampilkan semua
        } else {
            const filteredGames = games.filter(game =>
                game.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredGames);
        }
    };

    return (
        <div className="bckground-home">
            <AdminNav onSearch={handleSearch} /> {/* Kirim fungsi pencarian */}
            <AdminCard games={searchResults} /> {/* Kirim hasil pencarian */}
        </div>
    );
};

export default AdminHome;
