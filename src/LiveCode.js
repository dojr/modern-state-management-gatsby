import React, { useState, useRef, useEffect } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export const LiveCode = () => {
    return (
        <LiveProvider code="() => <h3>So functional. Much wow!!</h3>">
            <LiveEditor />
            <LivePreview />
            <LiveError />
        </LiveProvider>
    )
}
