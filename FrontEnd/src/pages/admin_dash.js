import React, { useState, useEffect } from "react";
import AdminNav from "../components/admin_nav";
import AdminCard from "../components/admin_card";

const AdminDash = () => {
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

    // Fungsi untuk menghapus game
    const handleDeleteGame = (id, name) => {
        const confirmDelete = window.confirm(`Apakah Anda yakin ingin menghapus game "${name}"?`);
        if (!confirmDelete) return;  // Jika pengguna membatalkan, hentikan proses

        fetch(`http://localhost:3001/api/games/${id}`, {
            method: "DELETE",
        })
            .then(response => {
                if (response.ok) {
                    // Hapus game dari state setelah berhasil dihapus dari backend
                    setGames(prevGames => prevGames.filter(game => game.id !== id));
                    setSearchResults(prevGames => prevGames.filter(game => game.id !== id));

                    window.alert(`Game "${name}" berhasil dihapus.`);
                } else {
                    console.error("Error deleting game");
                    window.alert("Gagal menghapus game.");
                }
            })
            .catch(error => {
                console.error("Error deleting game:", error);
                window.alert("Terjadi kesalahan saat menghapus game.");
            });
    };

    return (
        <div className="bckground-admin">
            <AdminNav onSearch={handleSearch} /> {/* Kirim fungsi pencarian */}
            <AdminCard games={searchResults} onDelete={handleDeleteGame} /> {/* Kirim fungsi delete */}
        </div>
    );
};

export default AdminDash;
