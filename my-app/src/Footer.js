const Footer = ({ switchLanguage, lang }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Made by MindX 🔥</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Available on:</span>
        <button onClick={() => switchLanguage("en")} disabled={lang === "en"}>🇺🇸</button>
        <button onClick={() => switchLanguage("vi")} disabled={lang === "vi"}>🇻🇳</button>
      </div>
    </div>
  );
};

export default Footer;