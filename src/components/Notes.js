import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { Rnd } from 'react-rnd';

const Notes = ({ isOpen, onClose }) => {
    const [note, setNote] = useState('');
    const [savedNotes, setSavedNotes] = useState([]);

    const handleSave = () => {
        if (note.trim()) {
            setSavedNotes([...savedNotes, note]);
            setNote('');
        }
    };

    if (!isOpen) return null;

    return (
        <Rnd
            default={{
                x: 0,
                y: 0,
                width: 400,
                height: 300,
            }}
            minWidth={200}
            minHeight={150}
            bounds="window"
            className="notes-modal-container"
        >
            <Box className="notes-modal">
                <Box className="notes-modal-content">
                    <Box className="handle">
                        <Typography variant="h6">Notes</Typography>
                        <Button className="close-button" onClick={onClose}>×</Button>
                    </Box>
                    <TextField
                        multiline
                        rows={4}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        variant="outlined"
                        placeholder="Type your note here..."
                        fullWidth
                    />
                    <Button className="save-button" onClick={handleSave}>Save Note</Button>
                    <Box className="saved-notes">
                        {savedNotes.map((savedNote, index) => (
                            <Box key={index} mb={1}>
                                <Typography variant="body2">{savedNote}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Rnd>
    );
};

export default Notes;
