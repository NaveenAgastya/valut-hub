export function Header() {
  return (
    <header style={{
      background: 'white',
      borderBottom: '1px solid #e0e0e0',
      padding: '16px 24px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '20px', 
          color: '#2563eb',
          fontWeight: '700'
        }}>
          VaultHub Lite
        </h1>
        <nav>
          <a href="/" style={{ 
            color: '#666', 
            textDecoration: 'none',
            marginRight: '20px',
            fontSize: '14px'
          }}>
            Upload
          </a>
          <a href="/activity" style={{ 
            color: '#666', 
            textDecoration: 'none',
            fontSize: '14px'
          }}>
            Activity Log
          </a>
        </nav>
      </div>
    </header>
  );
}