import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get("/notes");
        setNotes(response.data);
      } catch (err) {
        console.error("Error fetching notes:", err);
        setError("Failed to load notes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-6 ">
        {loading && (
          <div className="text-center text-primary py-10">
            Loading notes ...
          </div>
        )}

        {notes.length === 0 && <NotesNotFound />}

        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard note={note} key={note._id} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
