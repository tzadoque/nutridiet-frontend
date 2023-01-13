export function AddButton({ onClickFunc }) {
  return (
    <button
      onClick={onClickFunc}
      style={{
        background: '#8217e6',
        border: 'none',
        borderRadius: 8,
        color: '#ffffff',
        padding: '12px 16px',
        userSelect: 'none',
      }}
    >
      Add user
    </button>
  );
}
