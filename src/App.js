import React, { useState, useEffect, useLayoutEffect } from 'react';
import { initialState } from './EditorData';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { TextArea, Preview } from './App.styles';

export default function App() {
    const [editor, setEditor] = useState(initialState);
    const [width, setWidth] = useState(`${window.innerWidth}px`);
    const [height, setHeight] = useState(`${window.innerHeight}px`);
    const resize = () => {
        if (width > 800) {
            const newWindowWidth = Math.floor(width / 2);
            const newWindowHeight = Math.floor(height * 0.95);
            setWidth(`${newWindowWidth}px`);
            setHeight(`${newWindowHeight}px`);
        }
    };
    useLayoutEffect(() => {
        window.addEventListener('resize', resize);
        resize();
        return () => window.removeEventListener('resize', resize);
    }, []);

    marked.setOptions({
        gfm: true,
        breaks: true,
        xhtml: true,
    });
    const preview = marked.parse(editor);
    const cleanPreview = DOMPurify.sanitize(preview);

    useEffect(() => {
        const previewDiv = document.getElementById('preview');
        previewDiv.innerHTML = cleanPreview;
    }, [editor]);
    return (
        <>
            <TextArea
                id="editor"
                value={editor}
                width={width}
                height={height}
                onChange={() => {
                    const textArea = document.querySelector('textarea');
                    setEditor(textArea.value);
                }}
            />
            <Preview id="preview" width={width} height={height}></Preview>
        </>
    );
}
