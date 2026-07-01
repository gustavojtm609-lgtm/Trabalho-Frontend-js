export default function Loading({ text = 'Carregando...' }) {
  return (
    <div className="loading">
      <span className="spinner" />
      <p>{text}</p>
    </div>
  );
}
