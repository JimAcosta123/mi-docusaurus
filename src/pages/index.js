import React from 'react';

export default function Home() {
  return (
    <main style={{
      padding: '3rem 1rem',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#f2e9e4'
    }}>
      <img
        src="/img/logo.svg"
        alt="Logo"
        style={{ width: 120, marginBottom: 24, borderRadius: 16, boxShadow: '0 2px 12px #1976d233' }}
      />
      <h1 style={{
        fontSize: 48,
        color: '#1976d2',
        fontWeight: 700,
        marginBottom: 12,
        textShadow: '0 2px 8px #1976d233'
      }}>
        ¡Bienvenido a Mi Sitio Personalizado!
      </h1>
      <p style={{
        fontSize: 22,
        color: '#22223b',
        marginBottom: 32,
        maxWidth: 600,
        lineHeight: 1.5
      }}>
        Aquí encontrarás la mejor documentación, recursos y guías para tu proyecto. Explora, aprende y lleva tus ideas al siguiente nivel.
      </p>
      <a
        href="/docs/intro"
        style={{
          display: 'inline-block',
          marginTop: 16,
          padding: '14px 38px',
          background: '#1976d2',
          color: '#fff',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 20,
          boxShadow: '0 2px 8px #1976d233',
          transition: 'background 0.2s'
        }}
        onMouseOver={e => e.currentTarget.style.background = '#115092'}
        onMouseOut={e => e.currentTarget.style.background = '#1976d2'}
      >
        Comenzar 🚀
      </a>
    </main>
  );
}
