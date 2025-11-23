import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';

function App() {
  return (
    <div>
      <div data-theme="forest">
        <button class="btn btn-primary">One</button>
        <button class="btn btn-secondary">Two</button>
        <button class="btn btn-accent btn-outline">Three</button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App