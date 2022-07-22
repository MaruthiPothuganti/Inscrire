export const NoteModal = ({ handleClose, show }) => {
  const showHideClassName = show
    ? `fixed top-0 left-0 w-full h-full block`
    : `fixed top-0 left-0 w-full h-full hidden`;

  return (
    <div className={showHideClassName}>
      <section className="fixed bg-white w-4/5 h-auto grid place-items-center">
        <button>Banana</button>

        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
