'use client';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <button style={
            { 
                cursor: 'pointer', 
                height: '20px', 
                width: '20px', 
                marginBottom: '5px',
                position: 'absolute',
                left: '-20px',
                // marginRight: '10px',
                borderRadius: '50%', 
                backgroundColor: theme === 'dark' ? 'white' : 'black' }} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>

        </button>
    )
}