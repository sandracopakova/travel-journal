import React from "react";
import Navbar from "./Navbar";
import NoteItem from "./NoteItem";

export default function App() {
  return (
    <>
      <Navbar />
      <div class="notes">
        <NoteItem />
      </div>
    </>
  );
}
